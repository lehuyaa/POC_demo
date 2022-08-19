import axios from "axios";

import { request } from "../nftAxios";
import { INFT, INftListingByWalletParams, INftToken } from "./types";

export const getNftTokens = async (): Promise<INftToken[]> => {
  const { data } = await request({
    url: "/nft-tokens",
    method: "GET",
  });
  return data;
};

export const getNFTListingByWallet = async (
  params: INftListingByWalletParams
) => {
  const { data } = await request({
    url: `/nft-token-helper/listing-by-wallet-address`,
    method: "GET",
    params: {
      page: params.page,
      limit: params.limit,
      wallet_address: params.wallet_address,
      source: "WALLET",
      nft_contract_address: params.nft_contract_address,
    },
  });
  return data;
};

export const getNFTDetailByIpfs = async (url: string): Promise<INFT> => {
  const { data } = await axios({ url });

  return data;
};
