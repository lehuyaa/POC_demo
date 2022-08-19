import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import Button from "components/atoms/button";
import Input from "components/Input";
import { formatEther, parseEther } from "ethers/lib/utils";
import { useState } from "react";

const TransferKUB = () => {
  const { account } = useEthers();
  const { sendTransaction } = useSendTransaction();
  const balance = useEtherBalance(account);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState<{ to: string; amount: string }>({
    to: "",
    amount: "0",
  });

  const handleSend = async () => {
    try {
      setLoading(true);
      await sendTransaction({
        to: formValue.to,
        value: parseEther(String(formValue.amount)),
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      window.alert(JSON.stringify(error));
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-right medium">
        Available: {balance ? formatEther(balance) : 0} KUB
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
        prefix="KUB"
      />

      <div className="mt-3 flex-1 flex flex-col">
        <Button loading={loading} onClick={handleSend}>
          Transfer
        </Button>
      </div>
    </div>
  );
};

export default TransferKUB;
