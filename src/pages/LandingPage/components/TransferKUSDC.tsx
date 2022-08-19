import { useEthers, useTokenBalance } from "@usedapp/core";
import Button from "components/atoms/button";
import Input from "components/Input";
import { formatEther, parseEther } from "ethers/lib/utils";
import { useTokenContract } from "hooks/useTokenContract";
import { useState } from "react";
import { ADDRESS } from "utils/constants";

const TransferKUSDC = () => {
  const { account } = useEthers();
  const contract = useTokenContract();
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState<{ to: string; amount: string }>({
    to: "",
    amount: "0",
  });
  const balance = useTokenBalance(ADDRESS.KUSDC, account);

  const handleTransfer = async () => {
    try {
      setLoading(true);
      const tx = await contract.transfer(
        formValue.to,
        parseEther(formValue.amount),
        {
          from: account,
        }
      );
      await tx.wait();
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      window.alert(JSON.stringify(error));
    }
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-5 w-full">
      <div className="text-right medium">
        Available: {balance ? formatEther(balance) : 0} KUSD
      </div>
      <Input label="From" defaultValue={account} disabled />
      <Input
        value={formValue.to}
        onChange={(e) => setFormValue({ ...formValue, to: e.target.value })}
        label="To"
        placeholder=""
      />
      <Input
        value={formValue.amount}
        onChange={(e) => setFormValue({ ...formValue, amount: e.target.value })}
        type="number"
        label="Amount"
        prefix="KUSD"
        className="pl-16"
      />

      <div className="mt-3 flex-1 flex flex-col">
        <Button loading={loading} onClick={handleTransfer}>
          Transfer
        </Button>
      </div>
    </div>
  );
};

export default TransferKUSDC;
