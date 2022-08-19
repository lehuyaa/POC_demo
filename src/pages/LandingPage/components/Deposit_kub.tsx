import Button from "components/atoms/button";
import Input from "components/Input";
import { useState } from "react";
import { useUser } from "api/auth";
import { getOAuth2AuthorizeURL } from "utils/oauth2";
import { useMutation } from "react-query";
import {
  contractApprovalRequest,
  createTransactionQueueRequest,
  createTransactionQueueWithApprovalRequest,
  useTxQueueContract,
} from "api/wallet";
import { openNewWindow } from "utils/common";
import { parseEther } from "ethers/lib/utils";
import ReactJson from "react-json-view";
import { ADDRESS } from "utils/constants";
import { debounce } from "lodash";

export const APPROVE_AMOUNT =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"; //(2^256 - 1 )

const Deposit = () => {
  const { user } = useUser();
  const [address, setAddress] = useState<any>("");
  const [txQueueId, setTxQueueId] = useState<string>("");
  const [formValue, setFormValue] = useState({
    tokenAddress: ADDRESS.KUSDC,
    depositToken: "10",
    amountClaim: "10",
    nftAddressToClaim: "",
    nftTokenIdToClaim: "",
    depositNftAddresses: ADDRESS.BitkubNextNft,
    depositNftTokenIds: "",
  });

  const {
    data: txInfo,
    refetch: refetchTxInfo,
    isFetching,
  } = useTxQueueContract(txQueueId, {
    enabled: !!txQueueId,
  });

  const { mutate: createTx } = useMutation(
    createTransactionQueueWithApprovalRequest,
    {
      retry: false,
    }
  );

  const debounceCreate = debounce(
    (approval_token: string) => createTx({ approve_token: approval_token }),
    1000
  );

  const { mutate: approveDeposit } = useMutation(contractApprovalRequest, {
    onSuccess: (data) => {
      openNewWindow(data.approve_url, "Approve deposit", (e) => {
        const { approval_token, expires_in } = e.data;
        if (approval_token && expires_in) {
          debounceCreate(approval_token);
          window.removeEventListener("message", undefined);
        }
      });
    },
  });

  const { mutate: createTxDirectly, isLoading } = useMutation(
    createTransactionQueueRequest,
    {
      onSuccess: (data) => {
        setTxQueueId(data.queue_id);
        window.alert("Successfully! txQueueId: " + data.queue_id);
      },
    }
  );

  // const handleApproveToken = async () => {
  //   approveDeposit({
  //     chain: "BKC_TESTNET",
  //     type: "CONTRACT_CALL",
  //     description: "DEPOSIT EARN POOL",
  //     callback_url: "http://localhost:3000/approve-callback",
  //     contract_address: "0x1de8A5c87d421f53eE4ae398cc766e62E88e9518",
  //     contract_method_name: "approve",
  //     contract_method_params: [
  //       "0xBe4a6e553A0503d881fF45420e8ed7cc7E1Fce9D",
  //       APPROVE_AMOUNT,
  //     ],
  //   });
  // };

  const handleDeposit = async () => {
    try {
      if (formValue.tokenAddress) {
        // check allowance
        // const allowance = await tokenContract.allowance(account, address);
        // approve deposit token
        // Approve deposit NFT
        // const approveTokenTX = await tokenContract.approve(
        //   address,
        //   parseEther(formValue.depositToken),
        //   { from: account }
        // );
      }

      // Approve deposit NFT
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

      const depositParams = [
        address, // earn pool address
        formValue.tokenAddress,
        parseEther(formValue.depositToken).toString(),
        formValue.depositNftAddresses
          ? formValue.depositNftAddresses.split(",")
          : [],
        formValue.depositNftTokenIds
          ? formValue.depositNftTokenIds.split(",")
          : [],
        // "0xe36d240682d8b1380F0B1d6f9D1478e794570D27",
      ];

      // createTxDirectly({
      //   network: "BKC_TESTNET",
      //   contract_address: "0x81eC8c19309D9054980238F4377e951E44B0e2D6",
      //   contract_method_name: "setParamAddress",
      //   contract_method_params: ["123"],
      // });

      createTxDirectly({
        network: "BKC_TESTNET",
        contract_address: ADDRESS.earnRouter,
        contract_method_name: "deposit",
        contract_method_params: depositParams,
      });

      // approveDeposit({
      //   chain: "BKC_TESTNET",
      //   type: "CONTRACT_CALL",
      //   description: "DEPOSIT EARN POOL",
      //   callback_url: "http://localhost:3000/approve-callback",
      //   contract_address: ADDRESS.earnRouter,
      //   contract_method_name: "deposit",
      //   contract_method_params: depositParams,
      // });

      // console.log(depositParams);
    } catch (error: any) {
      console.log(error);
      window.alert(JSON.stringify(error));
    }
  };

  const handleLogin = () => {
    const oauth2URL = getOAuth2AuthorizeURL();
    window.location.href = oauth2URL;
  };

  if (!user) {
    return (
      <div className="flex justify-center  items-center min-h-[400px]">
        <Button onClick={handleLogin}>Login</Button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-5 w-full">
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        label="Earn Pool Address"
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

      <div className="mt-3 flex-1 flex flex-col gap-3">
        {/* <Button onClick={handleApproveToken} loading={isFetching}>
          Approve token
        </Button> */}

        <Button loading={isLoading} onClick={handleDeposit}>
          Deposit
        </Button>

        {txQueueId && (
          <Button onClick={() => refetchTxInfo()} loading={isFetching}>
            Get tx info
          </Button>
        )}

        {txInfo && <ReactJson src={txInfo || {}} theme="apathy" />}
      </div>
    </div>
  );
};

export default Deposit;
