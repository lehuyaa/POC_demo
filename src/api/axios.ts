import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { API_URL, CLIENT_ID, LOCAL_STORAGE_KEY } from "config";
import { exchangeRefreshToken } from "utils/oauth2";

export const request = axios.create({
  baseURL: API_URL,
});

const handleError = async (error: any) => {
  const data = error?.response?.data;
  const originalRequest = error.config;
  const refreshToken = localStorage.getItem(LOCAL_STORAGE_KEY.refreshToken);

  const isExpired =
    error.response.status === 400 && data.error.message === "TokenExpire";
  const isExpiredWhenApproval =
    error.response.status === 401 && data.error.message === "auth.token_expire";

  if (
    (isExpired || isExpiredWhenApproval) &&
    refreshToken &&
    !originalRequest._retry
  ) {
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
  return res;
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
          "x-next-client-id": CLIENT_ID,
        },
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);
