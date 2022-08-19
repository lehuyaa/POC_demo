import { useEthers } from "@usedapp/core";
import Button from "components/atoms/button";
import Input from "components/Input";
import dayjs from "dayjs";
import { parseEther } from "ethers/lib/utils";
import { useFactoryContract } from "hooks/useFactoryContract";
import { useState } from "react";
import { ADDRESS } from "utils/constants";

const CreateActivity = () => {
  const { account } = useEthers();
  const contract = useFactoryContract();
  const [loading, setLoading] = useState(false);

  const [newAddress, setNewAddress] = useState("");
  const [formValue, setFormValue] = useState({
    ownerAddress: account ?? "0x0bB31e84F420e7f33CEa3b4bA8e643163A3b4d18",
    tokenAddress: ADDRESS.KUSDC,
    depositToken: "10",
    depositNftAddresses: ADDRESS.BitkubNextNft,
    depositNftTokenIds: "",
  });

  const handleCreate = async () => {
    try {
      setLoading(true);
      const tx = await contract.createPair(
        formValue.ownerAddress,
        Math.floor(Date.now() / 1000), //_startTime ( Now)
        Math.floor((Date.now() + 180 * 60000) / 1000), // _endTime (Now + 30 minutes)
        formValue.tokenAddress,
        parseEther(formValue.depositToken).toString(),
        formValue.depositNftAddresses
          ? formValue.depositNftAddresses.split(",")
          : [],
        formValue.depositNftTokenIds
          ? formValue.depositNftTokenIds.split(",")
          : [],
        "0xe36d240682d8b1380F0B1d6f9D1478e794570D27",
        { from: account }
      );

      const txReceipt = await tx.wait();
      console.log(txReceipt);
      const log = contract.interface.parseLog(txReceipt.logs[1]);
      const contractAddress = log.args[0];
      setNewAddress(contractAddress);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      window.alert(JSON.stringify(error));
    }
  };

  if (newAddress) {
    return (
      <div className="max-w-xl mx-auto flex flex-col gap-5 w-full">
        <div className="">New Activity address has been created</div>
        <div className="text-green-500">{newAddress}</div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-5 w-full">
      <div>
        Start time:&nbsp;
        {dayjs.unix(Math.floor(Date.now() / 1000)).format("DD/MM/YYYY - HH:mm")}
      </div>
      <div>
        End time:&nbsp;
        {dayjs
          .unix(Math.floor((Date.now() + 180 * 60000) / 1000))
          .format("DD/MM/YYYY - HH:mm")}
      </div>

      <Input
        value={formValue.ownerAddress}
        onChange={(e) =>
          setFormValue({ ...formValue, ownerAddress: e.target.value })
        }
        label="Owner Address"
        placeholder=""
      />
      <Input
        value={formValue.tokenAddress}
        onChange={(e) =>
          setFormValue({ ...formValue, tokenAddress: e.target.value })
        }
        label="Token Address"
        placeholder=""
      />

      <Input
        value={formValue.depositToken}
        onChange={(e) =>
          setFormValue({ ...formValue, depositToken: e.target.value })
        }
        type="number"
        label="Deposit Amount"
      />

      <Input
        value={formValue.depositNftAddresses}
        onChange={(e) =>
          setFormValue({ ...formValue, depositNftAddresses: e.target.value })
        }
        label="Deposit NFT Addresses"
        placeholder="split NFT Addresses with comma. For example: 0x0bB31e84F420e7f33CEa3b4bA8e643163A3b4d18,0xbac49f22bf16b7894b73f566bbcc2322b7d97f10"
      />

      <Input
        value={formValue.depositNftTokenIds}
        onChange={(e) =>
          setFormValue({ ...formValue, depositNftTokenIds: e.target.value })
        }
        label="Deposit NFT IDs"
        placeholder="split token id with comma. For example: 1,2,3,4"
      />

      <div className="mt-3 flex-1 flex flex-col">
        <Button loading={loading} onClick={handleCreate}>
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateActivity;
