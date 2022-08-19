import { UseQueryOptions, useQuery } from "react-query";

import {
  getListWhitelistContract,
  getTxQueueByID,
  getTxQuota,
  getWhitelistContractDetail,
} from "./request";
import {
  INetwork,
  ITxQueue,
  ITxQuota,
  IWhitelistContract,
  IWhitelistContractDetail,
  IWhitelistContractDetailParams,
} from "./types";

export const useTxQuota = (option?: UseQueryOptions<ITxQuota, Error>) => {
  return useQuery<ITxQuota, Error>(
    "/wallets/transactions/quota",
    getTxQuota,
    option
  );
};

export const useListWhitelistContract = (
  params = "BKC_TESTNET" as INetwork,
  option?: UseQueryOptions<IWhitelistContract[], Error>
) => {
  return useQuery<IWhitelistContract[], Error>(
    ["/wallets/project-contract/list", params],
    () => getListWhitelistContract(params),
    option
  );
};

export const useWhitelistContract = (
  params: IWhitelistContractDetailParams,
  option?: UseQueryOptions<IWhitelistContractDetail, Error>
) => {
  return useQuery<IWhitelistContractDetail, Error>(
    ["/wallets/project-contract", params],
    () => getWhitelistContractDetail(params),
    option
  );
};

export const useTxQueueContract = (
  txId: string,
  option?: UseQueryOptions<ITxQueue, Error>
) => {
  return useQuery<ITxQueue, Error>(
    ["/transactions/queue", txId],
    () => getTxQueueByID(txId),
    option
  );
};
