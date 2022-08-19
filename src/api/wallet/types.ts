export interface ITxQuota {
  remaining: string;
  limit: string;
}
export interface IWhitelistContract {
  contract_address: string;
  network: string;
}

export interface IWhitelistContractParams {
  contract_address: string;
  contract_abi: {
    readable_abi: string;
    required_approval: boolean;
  }[];
  network: INetwork;
  required_approval: boolean;
}

export interface IWhitelistContractDetail {
  contract_address: string;
  contract_abi: {
    readable_abi: string;
    required_approval: boolean;
  }[];
  network: INetwork;
  required_approval: boolean;
}

export type INetwork = "BKC_TESTNET" | "BKC_MAINNET";

export interface IWhitelistContractDetailParams {
  network: INetwork;
  contract: string;
}

export interface IApprovalParams {
  chain: INetwork;
  type: "CONTRACT_CALL" | "CONTRACT_SEND";
  description: string;
  callback_url: string;
  contract_address: string;
  contract_method_name: string;
  contract_method_params: any;
}
export interface ITxQueueParams {
  network: INetwork;
  contract_address: string;
  contract_method_name: string;
  contract_method_params: any;
}
export interface ITxQueue {
  queue_id: string;
  tx?: string;
  confirmations: number;
  contract_address: string;
  abi: string;
  input: any;
  network: INetwork;
  status: "PENDING" | "FAILED" | "SUCCESS";
  created_time: string;
}

export interface IApproval {
  id: string;
  approve_url: string;
  expires_in: number;
}
