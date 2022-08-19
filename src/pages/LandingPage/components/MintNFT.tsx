import { useEthers } from "@usedapp/core";
import Button from "components/atoms/button";
import Input from "components/Input";
import { useNFTContract } from "hooks/useNFTContract";
import { useEffect } from "react";
import { useState } from "react";

const MintNFT = () => {
  const { account } = useEthers();
  const contract = useNFTContract();
  const [NFTOwned, setNFTOwned] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState<{ to: string; tokenId: string }>({
    to: "",
    tokenId: "",
  });

  const fetchUserNFT = async () => {
    const userTokens = await contract.tokenOfOwnerAll(account);
    setNFTOwned(userTokens.map((item) => item.toNumber()));
  };

  useEffect(() => {
    if (!contract || !account) return;
    fetchUserNFT();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, account]);

  const handleMint = async () => {
    try {
      setLoading(true);
      const tx = await contract.mint(formValue.to, formValue.tokenId, {
        from: account,
      });
      await tx.wait();
      fetchUserNFT();
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      window.alert(JSON.stringify(error));
    }
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-5 w-full">
      <div className="text-right medium">
        Owner TOKEN ID: {JSON.stringify(NFTOwned)}
      </div>
      <Input
        value={formValue.to}
        onChange={(e) => setFormValue({ ...formValue, to: e.target.value })}
        label="To"
        placeholder=""
      />
      <Input
        value={formValue.tokenId}
        onChange={(e) =>
          setFormValue({ ...formValue, tokenId: e.target.value })
        }
        type="number"
        label="Token ID"
      />

      <div className="mt-3 flex-1 flex flex-col">
        <Button loading={loading} onClick={handleMint}>
          MINT
        </Button>
      </div>
    </div>
  );
};

export default MintNFT;
