import { useEthers } from "@usedapp/core";
import Button from "components/atoms/button";
import Input from "components/Input";
import { parseEther } from "ethers/lib/utils";
import { useAdminKAP20Router } from "hooks/useAdminKAP20Router";
import { useEarnRouter } from "hooks/useEarnRouter";
import { useState } from "react";
import { ADDRESS } from "utils/constants";

const Deposit = () => {
  const { account, library } = useEthers();
  const [address, setAddress] = useState<any>("");

  const contract = useEarnRouter();
  const adminRouter = useAdminKAP20Router();

  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    tokenAddress: ADDRESS.KUSDC,
    depositToken: "10",
    amountClaim: "10",
    nftAddressToClaim: "",
    nftTokenIdToClaim: "",
    depositNftAddresses: "",
    depositNftTokenIds: "",
    address: account,
  });

  const handleTransfer = async () => {
    const tx = await adminRouter.externalTransfer(
      ADDRESS.KUSDC,
      "0x0000000000000000000000000000000000000000",
      "0xe36d240682d8b1380F0B1d6f9D1478e794570D27",
      "0xc427ca8d062d335dbc624507f4d03fd10eee933f",
      parseEther("2").toString(),
      "0",
      { from: account }
    );

    await tx.wait();
  };

  const handleDeposit = async () => {
    try {
      setLoading(true);
      // if (formValue.tokenAddress) {
      //   const tokenContract = getTokenContract(
      //     library.getSigner(account),
      //     formValue.tokenAddress
      //   );

      //   const allowance = await tokenContract.allowance(account, address);

      //   if (Number(formatEther(allowance)) < Number(formValue.depositToken)) {
      //     const approveTokenTX = await tokenContract.approve(
      //       address,
      //       parseEther(formValue.depositToken),
      //       { from: account }
      //     );
      //     await approveTokenTX.wait();
      //     window.alert("Approved token");
      //   }
      // }

      // const nftAddress = formValue.depositNftAddresses
      //   ? formValue.depositNftAddresses.split(",")
      //   : [];

      // for (const adr of nftAddress) {
      //   const nftContract = getNFTContract(library.getSigner(account), adr);

      //   const isApprove = await nftContract.isApprovedForAll(account, address);
      //   if (!isApprove) {
      //     const approveTokenTX = await nftContract.setApprovalForAll(
      //       address,
      //       true,
      //       { from: account }
      //     );
      //     await approveTokenTX.wait();
      //   }
      // }

      const depositParams: any = [
        address,
        ADDRESS.KUSDC,
        parseEther(formValue.depositToken),
        formValue.depositNftAddresses
          ? formValue.depositNftAddresses.split(",")
          : [],
        formValue.depositNftTokenIds
          ? formValue.depositNftTokenIds.split(",")
          : [],
        "0xe36d240682d8b1380F0B1d6f9D1478e794570D27",
      ];

      console.log(depositParams);

      const tx = await contract.deposit(
        address,
        ADDRESS.KUSDC,
        parseEther(formValue.depositToken),
        formValue.depositNftAddresses
          ? formValue.depositNftAddresses.split(",")
          : [],
        formValue.depositNftTokenIds
          ? formValue.depositNftTokenIds.split(",")
          : [],
        "0xe36d240682d8b1380F0B1d6f9D1478e794570D27",
        { from: account }
      );
      await tx.wait();
      window.alert("All data is deposited");
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
        label="Earn pool contract address"
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
        <Button loading={loading} onClick={handleDeposit}>
          Deposit
        </Button>

        {/* <Button loading={loading} onClick={handleTransfer}>
          External transfer
        </Button> */}
      </div>
    </div>
  );
};

export default Deposit;
