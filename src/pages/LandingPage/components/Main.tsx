import AddPackage from "./AddPackage";
import AddWhitelist from "./AddWhitelist";
import Claim from "./Claim";
import CreateActivity from "./CreateActivity";
import CreateActivityMetamask from "./CreateActivity_metamask";
import DepositKUB from "./Deposit_kub";
import DepositMetaMask from "./Deposit_metamask";
import MintNFT from "./MintNFT";
import Refund from "./Refund";
import Renew from "./Renew";
import Subcription from "./Subcription";
import Tabs from "./Tabs";
import TransferKUB from "./TransferKUB";
import TransferKUSDC from "./TransferKUSDC";
import TransferNFT from "./TransferNFT";
import Whitelist from "./Whitelist";
import { useState } from "react";

export type TABS =
  | "transferNFT"
  | "whitelist"
  | "Add whitelist"
  | "mint"
  | "transferKUB"
  | "transferKUSD"
  | "createActivity"
  | "createActivity2"
  | "deposit-KUB"
  | "deposit-metamask"
  | "claim"
  | "refund"
  | "addPackage"
  | "subcription"
  | "renew";

const Main = () => {
  const [tab, setTab] = useState<TABS>("whitelist");

  return (
    <>
      <div className=" w-full mt-3 min-h-[650px] rounded-md bg-slate-800 p-3">
        <div className="flex justify-center">
          <div>
            <Tabs tab={tab} onChange={setTab} />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {tab === "transferKUB" && <TransferKUB />}
          {tab === "transferKUSD" && <TransferKUSDC />}
          {tab === "mint" && <MintNFT />}
          {tab === "transferNFT" && <TransferNFT />}
          {tab === "createActivity" && <CreateActivity />}
          {tab === "createActivity2" && <CreateActivityMetamask />}
          {tab === "deposit-KUB" && <DepositKUB />}
          {tab === "deposit-metamask" && <DepositMetaMask />}
          {tab === "claim" && <Claim />}
          {tab === "refund" && <Refund />}
          {tab === "Add whitelist" && <AddWhitelist />}
          {tab === "whitelist" && <Whitelist />}
          {tab === "addPackage" && <AddPackage />}
          {tab === "subcription" && <Subcription />}
          {tab === "renew" && <Renew />}
        </div>
      </div>
    </>
  );
};

export default Main;
