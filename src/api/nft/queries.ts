import { UseQueryOptions, useQuery } from "react-query";

import {
  getNFTDetailByIpfs,
  getNFTListingByWallet,
  getNftTokens,
} from "./request";
import {
  INFT,
  INFTEntity,
  INFTListing,
  INftByWalletParams,
  INftListingByWalletParams,
  INftToken,
  IOwnershipEntity,
} from "./types";

export const useNftTokens = (option?: UseQueryOptions<INftToken[], Error>) => {
  return useQuery<INftToken[], Error>("/nft-tokens", getNftTokens, option);
};

export const useNftByIpfs = (
  url: string,
  option?: UseQueryOptions<INFT, Error>
) => {
  return useQuery<INFT, Error>(
    ["ipfs/nft-detail", url],
    () => getNFTDetailByIpfs(url),
    option
  );
};

export const useNFTListingByWallet = (
  params: INftListingByWalletParams,
  option?: UseQueryOptions<INFTListing[], Error>
) => {
  return useQuery<INFTListing[], Error>(
    ["nft-token-helper/listing-by-wallet-address", params],
    () => getNFTListingByWallet(params),
    option
  );
};
