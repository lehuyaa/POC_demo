import React, { useState } from "react";

import Button from "components/atoms/button";
import Input from "components/Input";
import { useEarningContract } from "hooks/useEarningContract";
import { useEthers } from "@usedapp/core";

function Renew() {
  const { account } = useEthers();
  const addressTest = "0xe36d240682d8b1380F0B1d6f9D1478e794570D27";
  const [loading, setLoading] = useState(false);
  const contract = useEarningContract(addressTest);
  const [formValue, setFormValue] = useState<any>({
    packageId: 0,
    address: "",
  });
  const handleClaim = async () => {
    try {
      setLoading(true);

      let tx = null;
      tx = await contract.renew(formValue.packageId, formValue.address, {
        from: account,
      });
      await tx.wait();
      window.alert("Successfully!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      window.alert(JSON.stringify(error));
    }
  };

  return (
    <div>
      <div>
        <Input
          value={formValue.packageId}
          onChange={(e) =>
            setFormValue({ ...formValue, packageId: e.target.value })
          }
          label="Package Id"
          placeholder=""
        />
        <Input
          value={formValue.address}
          onChange={(e) =>
            setFormValue({ ...formValue, address: e.target.value })
          }
          label="Address"
          placeholder=""
        />
      </div>
      <div className="mt-3 flex-1 flex flex-col">
        <Button loading={loading} onClick={handleClaim}>
          Renew
        </Button>
      </div>
    </div>
  );
}

export default Renew;
