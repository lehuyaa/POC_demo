import { request } from "../axios";
import { IUser } from "./types";

export const getUser = async (): Promise<IUser> => {
  const { data } = await request({
    url: "/accounts/auth/info",
    method: "GET",
  });
  return data.data;
};
