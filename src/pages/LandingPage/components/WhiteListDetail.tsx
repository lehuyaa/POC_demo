import { Stack, TextField } from "@mui/material";

import { useWhitelistContract } from "api/wallet";
import { FC } from "react";
import ReactJson from "react-json-view";
interface Props {
  contract_address: string;
}

const WhitelistDetail: FC<Props> = ({ contract_address }) => {
  const { data: detail } = useWhitelistContract(
    { contract: String(contract_address), network: "BKC_TESTNET" },
    { enabled: !!contract_address }
  );

  return (
    <>
      <Stack>
        <ReactJson src={detail || {}} theme="monokai" />
      </Stack>
    </>
  );
};

export default WhitelistDetail;
