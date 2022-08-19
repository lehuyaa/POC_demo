import EarnPoolABI from "contracts/EarnPool.json";
import type { EarnPool } from "contracts/types";
import { useContract } from "./useContract";

export function useEarningContract(address: string) {
  return useContract<EarnPool>(address, EarnPoolABI);
}
