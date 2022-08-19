import { useEthers } from "@usedapp/core";
import Button from "components/atoms/button";
import Input from "components/Input";
import { formatEther, parseEther } from "ethers/lib/utils";
import { useEarningContract } from "hooks/useEarningContract";
import { getNFTContract } from "hooks/useNFTContract";
import { getTokenContract } from "hooks/useTokenContract";
import { useState } from "react";

const Deposit = () => {
  const { account, library } = useEthers();
  const [address, setAddress] = useState<any>("");

  const contract = useEarningContract(address);
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    tokenAddress: "",
    depositToken: "10",
    amountClaim: "10",
    nftAddressToClaim: "",
    nftTokenIdToClaim: "",
    depositNftAddresses: "",
    depositNftTokenIds: "",
    address: account,
  });

  const checkPause = async () => {
    try {
      setLoading(true);
      const isPaused = await contract.paused();
      if (isPaused) {
        const tx = await contract.unpause({
          from: account,
        });
        await tx.wait();
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      window.alert(JSON.stringify(error));
    }
  };

  const getEarnRouter = async () => {
    const earnRouter = await contract.earnRouter();
    console.log(earnRouter);
  };

  const handleDeposit = async () => {
    try {
      await checkPause();
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

      const tx = await contract.deposit(
        formValue.tokenAddress,
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
        label="Contract Address"
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
        </Button>{" "}
        <Button loading={loading} onClick={getEarnRouter}>
          getEarnRouter
        </Button>
      </div>
    </div>
  );
};

export default Deposit;
