import { Stack } from "@mui/material";

import { useListWhitelistContract } from "api/wallet";
import CustomThemeProvider from "../../../theme/Provider";
import WhitelistDetail from "./WhiteListDetail";

const Whitelist = () => {
  const { data } = useListWhitelistContract("BKC_TESTNET");

  return (
    <CustomThemeProvider>
      <Stack sx={{ maxWidth: 720, mx: "auto" }} spacing={2}>
        {data?.map((item, index) => (
          <WhitelistDetail
            key={index}
            contract_address={item.contract_address}
          />
        ))}
      </Stack>
    </CustomThemeProvider>
  );
};

export default Whitelist;
