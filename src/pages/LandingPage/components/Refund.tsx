import { useEthers } from "@usedapp/core";
import Button from "components/atoms/button";
import Input from "components/Input";
import { useEarningContract } from "hooks/useEarningContract";

import { useState } from "react";

const Refund = () => {
  const { account } = useEthers();
  const [address, setAddress] = useState<any>("");

  const contract = useEarningContract(address);
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    address: account,
  });

  const handleClaim = async () => {
    try {
      setLoading(true);
      // const rewardType = await contract.rewardType();
      let tx = null;

      const isPaused = await contract.paused();
      if (!isPaused) {
        const pauseTx = await contract.pause({ from: account });
        await pauseTx.wait();
        window.alert("**Paused the activity to withdraw unclaimed reward.");
      }

      tx = await contract.withdraw(formValue.address, { from: account });

      await tx.wait();
      window.alert("Successfully!");

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      window.alert(JSON.stringify(error));
    }
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-5 w-full">
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        label="Earnpool Contract Address"
        placeholder=""
      />

      <Input
        value={formValue.address}
        onChange={(e) =>
          setFormValue({ ...formValue, address: e.target.value })
        }
        label="Beneficiary address"
        placeholder=""
      />

      <div className="mt-3 flex-1 flex flex-col">
        <Button loading={loading} onClick={handleClaim}>
          Refund
        </Button>
      </div>
    </div>
  );
};

export default Refund;
