import AdminKAP20RouterABI from "contracts/AdminKAP20Router.json";
import type { AdminKAP20Router } from "contracts/types";
import { ADDRESS } from "utils/constants";
import { useContract } from "./useContract";

export function useAdminKAP20Router(address = ADDRESS.AdminKAP20Router) {
  return useContract<AdminKAP20Router>(address, AdminKAP20RouterABI as any);
}
