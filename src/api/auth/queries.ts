import { UseQueryOptions, useQuery } from "react-query";

import { LOCAL_STORAGE_KEY } from "config";
import { parseJson } from "utils/common";

import { getUser } from "./request";
import { IUser } from "./types";

export const useUser = (option?: UseQueryOptions<IUser, Error>) => {
  const { data, ...rest } = useQuery<IUser, Error>("me", getUser, {
    enabled: false,
    initialData: parseJson(localStorage.getItem(LOCAL_STORAGE_KEY.user)) as any,
    onSuccess: (data) =>
      localStorage.setItem(LOCAL_STORAGE_KEY.user, JSON.stringify(data)),
    onError: () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY.user);
    },
    ...option,
  });
  return { user: data, ...rest };
};
