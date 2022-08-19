import axios from "axios";

import { BITKUB_ACCOUNT_URL, CLIENT_ID, REDIRECT_URL } from "config";

export const getOAuth2AuthorizeURL = (state?: string) => {
  const _redirectURI = encodeURIComponent(REDIRECT_URL);
  let oauth2URL =
    BITKUB_ACCOUNT_URL +
    `/oauth2/authorize?` +
    `response_type=${"code"}` +
    "&" +
    `client_id=${CLIENT_ID}` +
    "&" +
    `redirect_uri=${_redirectURI}`;

  if (state) {
    oauth2URL += `&state=${state}`;
  }

  return oauth2URL;
};

type TokenResponse = Promise<{ access_token: string; refresh_token: string }>;

export const exchangeAuthorizationCode = async (
  code: string
): TokenResponse => {
  const url = BITKUB_ACCOUNT_URL + "/oauth2/access_token";

  const { data } = await axios({
    url,
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    data: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URL,
      code: code,
    }),
  });

  return data;
};

export const exchangeRefreshToken = async (
  refreshToken: string
): TokenResponse => {
  const url = BITKUB_ACCOUNT_URL + "/oauth2/access_token";
  const { data } = await axios({
    url,
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    data: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: CLIENT_ID,
      refresh_token: refreshToken,
    }),
  });

  return data;
};
