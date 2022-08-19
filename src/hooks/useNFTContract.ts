import BitkubNextNftABI from "contracts/BitkubNextNft.json";
import type { BitkubNextNft } from "contracts/types";
import { Contract } from "ethers";
import { ADDRESS } from "utils/constants";
import { useContract } from "./useContract";

export function useNFTContract(address = ADDRESS.BitkubNextNft) {
  return useContract<BitkubNextNft>(address, BitkubNextNftABI);
}

export const getNFTContract = (
  signer: any,
  tokenAddress = ADDRESS.BitkubNextNft
) => {
  return new Contract(tokenAddress, BitkubNextNftABI, signer) as BitkubNextNft;
};
