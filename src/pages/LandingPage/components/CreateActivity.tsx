import { createTransactionQueueRequest, useTxQueueContract } from "api/wallet";
import Button from "components/atoms/button";
import dayjs from "dayjs";
import Input from "components/Input";

import { useState } from "react";
import { useMutation } from "react-query";
import { ADDRESS } from "utils/constants";
import { parseEther } from "ethers/lib/utils";
import ReactJson from "react-json-view";
import { useEthers } from "@usedapp/core";

const CreateActivity = () => {
  const { library, account } = useEthers();

  const [newAddress, setNewAddress] = useState("");
  const [txQueueId, setTxQueueId] = useState<string>("");
  const [formValue, setFormValue] = useState({
    ownerAddress: account ?? "0x0bB31e84F420e7f33CEa3b4bA8e643163A3b4d18",
    tokenAddress: ADDRESS.KUSDC,
    depositToken: "10",
    depositNftAddresses: ADDRESS.BitkubNextNft,
    depositNftTokenIds: "",
  });

  const {
    data: txInfo,
    refetch: refetchTxInfo,
    isFetching,
  } = useTxQueueContract(txQueueId, {
    enabled: !!txQueueId,
    onSuccess: async (data: any) => {
      if (library) {
        const txReceipt = await library.getTransactionReceipt(data.tx);
        setNewAddress(txReceipt.logs[0].address);
      }
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

  const handleCreate = async () => {
    try {
      const createPoolParams = [
        formValue.ownerAddress,
        String(Math.floor(Date.now() / 1000)), //_startTime ( Now)
        String(Math.floor((Date.now() + 180 * 60000) / 1000)), // _endTime (Now + 30 minutes)
        formValue.tokenAddress,
        parseEther(formValue.depositToken).toString(),
        formValue.depositNftAddresses
          ? formValue.depositNftAddresses.split(",")
          : [],
        formValue.depositNftTokenIds
          ? formValue.depositNftTokenIds.split(",")
          : [],
      ];

      createTxDirectly({
        network: "BKC_TESTNET",
        contract_address: ADDRESS.Factory_KUB,
        contract_method_name: "createPair",
        contract_method_params: createPoolParams,
      });
    } catch (error: any) {
      console.log(error);
      window.alert(JSON.stringify(error));
    }
  };

  if (newAddress) {
    return (
      <div className="max-w-xl mx-auto flex flex-col gap-5 w-full">
        <div className="">New Activity address has been created</div>
        <div className="text-green-500">
          <b>Pool address</b>:&nbsp;{newAddress}
        </div>

        {txQueueId && (
          <Button onClick={() => refetchTxInfo()} loading={isFetching}>
            Get tx info
          </Button>
        )}

        {txInfo && <ReactJson src={txInfo || {}} theme="apathy" />}
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

      <div className="mt-3 flex-1 flex flex-col gap-3">
        <Button loading={isLoading} onClick={handleCreate}>
          Create
        </Button>

        {txQueueId && (
          <Button onClick={() => refetchTxInfo()} loading={isFetching}>
            Get tx info and pool address
          </Button>
        )}

        {txInfo && <ReactJson src={txInfo || {}} theme="apathy" />}
      </div>
    </div>
  );
};

export default CreateActivity;
