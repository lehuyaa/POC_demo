import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { LOCAL_STORAGE_KEY, NFT_API_URL } from "config";
import { exchangeRefreshToken } from "utils/oauth2";

export const request = axios.create({
  baseURL: NFT_API_URL,
});

const handleError = async (error: any) => {
  const data = error?.response?.data;
  const originalRequest = error.config;
  const refreshToken = localStorage.getItem(LOCAL_STORAGE_KEY.refreshToken);

  const isExpired =
    error.response.status === 400 && data.error.message === "TokenExpire";

  if (isExpired && refreshToken && !originalRequest._retry) {
    originalRequest._retry = true;
    const { access_token, refresh_token } = await exchangeRefreshToken(
      refreshToken
    );
    localStorage.setItem(LOCAL_STORAGE_KEY.token, access_token);
    localStorage.setItem(LOCAL_STORAGE_KEY.refreshToken, refresh_token);
    request.defaults.headers["Authorization"] = "Bearer " + access_token;
    return request(originalRequest);
  }
  return Promise.reject(data);
};

const handleSuccess = (res: AxiosResponse) => {
  return res.data;
};

request.interceptors.response.use(handleSuccess, handleError);

request.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY.token);

    if (token) {
      config = {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);
