import { ADDRESS } from "utils/constants";
import Button from "components/atoms/button";
import Input from "components/Input";
import { parseEther } from "ethers/lib/utils";
import { useEarningContract } from "hooks/useEarningContract";
import { useEthers } from "@usedapp/core";
import { useState } from "react";

const Claim = () => {
  const { account } = useEthers();
  const [address, setAddress] = useState<any>("");

  const contract = useEarningContract(address);
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    tokenAddress: ADDRESS.KUSDC,
    depositToken: "10",
    amountClaim: "10",
    nftAddressToClaim: ADDRESS.BitkubNextNft,
    nftTokenIdToClaim: "",
    depositNftAddresses: "",
    depositNftTokenIds: "",
    address: account,
  });

  const handleClaim = async () => {
    try {
      setLoading(true);
      // const rewardType = await contract.rewardType();
      let tx = null;

      tx = await contract.claim(
        formValue.address,
        parseEther(formValue.amountClaim),
        formValue.nftAddressToClaim
          ? formValue.nftAddressToClaim.split(",")
          : [],
        formValue.nftTokenIdToClaim
          ? formValue.nftTokenIdToClaim.split(",")
          : [],
        { from: account }
      );

      await tx.wait();
      window.alert("Successfully!");
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      window.alert(JSON.stringify(error));
    }
  };

  console.log("contract", contract);
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

      {/* <Input
        value={formValue.tokenAddress}
        onChange={(e) =>
          setFormValue({ ...formValue, tokenAddress: e.target.value })
        }
        label="Token address"
        placeholder=""
      /> */}

      <Input
        value={formValue.amountClaim}
        onChange={(e) =>
          setFormValue({ ...formValue, amountClaim: e.target.value })
        }
        type="number"
        label="Claim amount"
      />

      <Input
        value={formValue.nftAddressToClaim}
        onChange={(e) =>
          setFormValue({ ...formValue, nftAddressToClaim: e.target.value })
        }
        label="Claim NFT Addresses"
        placeholder="split NFT Addresses with comma. For example: 0x0bB31e84F420e7f33CEa3b4bA8e643163A3b4d18,0xbac49f22bf16b7894b73f566bbcc2322b7d97f10"
      />

      <Input
        value={formValue.nftTokenIdToClaim}
        onChange={(e) =>
          setFormValue({ ...formValue, nftTokenIdToClaim: e.target.value })
        }
        label="Claim NFT IDs"
        placeholder="split token id with comma. For example: 1,2,3,4"
      />

      <div className="mt-3 flex-1 flex flex-col">
        <Button loading={loading} onClick={handleClaim}>
          Claim
        </Button>
      </div>
    </div>
  );
};

export default Claim;
