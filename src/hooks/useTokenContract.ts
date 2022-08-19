import KAP20_ABI from "contracts/KAP20.json";
import type { KAP20 } from "contracts/types";
import { Contract } from "ethers";
import { ADDRESS } from "utils/constants";
import { useContract } from "./useContract";

export function useTokenContract(tokenAddress = ADDRESS.KUSDC) {
  return useContract<KAP20>(tokenAddress, KAP20_ABI);
}

export const getTokenContract = (signer: any, tokenAddress = ADDRESS.KUSDC) => {
  return new Contract(tokenAddress, KAP20_ABI, signer);
};
