import React, { useState } from "react";

import Button from "components/atoms/button";
import Input from "components/Input";
import { useEarningContract } from "hooks/useEarningContract";
import { useEthers } from "@usedapp/core";

function AddPackage() {
  const { account } = useEthers();
  const addressTest = "0xe36d240682d8b1380F0B1d6f9D1478e794570D27";
  const [loading, setLoading] = useState(false);
  const contract = useEarningContract(addressTest);
  const [formValue, setFormValue] = useState<any>({
    name: "",
    price: 0,
    subscriptionPeriod: 0,
    quotaLeft: 0,
    renewalCount: 0,
    readerCount: 0,
    dataFeedType: 0,
  });
  const handleClaim = async () => {
    try {
      setLoading(true);
      const params = {
        name: formValue.name,
        price: formValue.price,
        subscriptionPeriod: formValue.subscriptionPeriod,
        quotaLeft: formValue.quotaLeft,
        renewalCount: formValue.renewalCount,
        readerCount: formValue.readerCount,
        dataFeedType: formValue.dataFeedType,
        disabled: false,
      };
      let tx = null;
      tx = await contract.addPackage(params, { from: account });
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
    <div className="pb-10">
      <div className="max-w-xl mx-auto flex flex-col gap-5 w-full">
        <Input
          value={formValue.name}
          onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
          label="Name"
          placeholder=""
        />
        <Input
          value={formValue.price}
          onChange={(e) =>
            setFormValue({ ...formValue, price: e.target.value })
          }
          label="Price"
          placeholder=""
        />
        <Input
          value={formValue.subscriptionPeriod}
          onChange={(e) =>
            setFormValue({ ...formValue, subscriptionPeriod: e.target.value })
          }
          label="Subscription Period"
          placeholder=""
        />
        <Input
          value={formValue.quotaLeft}
          onChange={(e) =>
            setFormValue({ ...formValue, quotaLeft: e.target.value })
          }
          label="Quota Left"
          placeholder=""
        />
        <Input
          value={formValue.renewalCount}
          onChange={(e) =>
            setFormValue({ ...formValue, renewalCount: e.target.value })
          }
          label="Renewal Count"
          placeholder=""
        />
        <Input
          value={formValue.dataFeedType}
          onChange={(e) =>
            setFormValue({ ...formValue, dataFeedType: e.target.value })
          }
          label="Data Feed Type"
          placeholder=""
        />
        <div className="mt-3 flex-1 flex flex-col">
          <Button loading={loading} onClick={handleClaim}>
            Add Package
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddPackage;
