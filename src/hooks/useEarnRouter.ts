import EarnRouterABI from "contracts/EarnRouter.json";
import type { EarnRouter } from "contracts/types";
import { ADDRESS } from "utils/constants";
import { useContract } from "./useContract";

export function useEarnRouter(address = ADDRESS.earnRouter) {
  return useContract<EarnRouter>(address, EarnRouterABI);
}
