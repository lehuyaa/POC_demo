import { request } from "../axios";
import {
  IApproval,
  IApprovalParams,
  INetwork,
  ITxQueueParams,
  IWhitelistContractDetailParams,
  IWhitelistContractParams,
} from "./types";

export const getTxQuota = async () => {
  const { data } = await request({
    url: "/wallets/transactions/quota",
    method: "GET",
  });
  return data;
};

export const whitelistContractRequest = async (
  params: IWhitelistContractParams
) => {
  const { data } = await request({
    url: "/wallets/project-contract",
    method: "POST",
    data: params,
  });
  return data;
};

export const getListWhitelistContract = async (params: INetwork) => {
  const { data } = await request({
    url: "/wallets/project-contract/list?network=" + params,
    method: "GET",
  });

  return data.contract;
};

export const getWhitelistContractDetail = async (
  params: IWhitelistContractDetailParams
) => {
  const { data } = await request({
    url: "/wallets/project-contract",
    method: "GET",
    params: params,
  });
  return data;
};

export const contractApprovalRequest = async (
  params: IApprovalParams
): Promise<IApproval> => {
  const { data } = await request({
    url: "/accounts/approvals",
    method: "POST",
    data: params,
  });
  return data.data;
};

export const createTransactionQueueRequest = async (params: ITxQueueParams) => {
  const { data } = await request({
    url: "wallets/transactions/queue",
    method: "POST",
    data: params,
  });
  return data;
};

export const createTransactionQueueWithApprovalRequest = async (params: {
  approve_token: string;
}) => {
  const { data } = await request({
    url: "wallets//transactions/queue/approval",
    method: "POST",
    data: params,
  });
  return data;
};

export const getTxQueueByID = async (txId?: string) => {
  const { data } = await request({
    url: `wallets/transactions/queue/${txId}`,
    method: "GET",
  });
  return data;
};
