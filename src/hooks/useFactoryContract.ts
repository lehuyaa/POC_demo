import FactoryABI from "contracts/Factory.json";
import type { Factory } from "contracts/types";
import { ADDRESS } from "utils/constants";
import { useContract } from "./useContract";

export function useFactoryContract(address = ADDRESS.Factory_KUB) {
  return useContract<Factory>(address, FactoryABI);
}
