import { FC } from "react";
import { TABS } from "./Main";
import styles from "./styles.module.css";

interface Props {
  tab: TABS;
  onChange: (tab: TABS) => void;
}

const Tabs: FC<Props> = ({ tab, onChange }) => {
  return (
    <div className="mb-11 mt-3 mx-auto flex">
      <div className="flex flex-wrap gap-3 ">
        {/* <a
          onClick={() => onChange("transferKUB")}
          className={tab === "transferKUB" ? styles.tabActive : styles.tabs}
        >
          Transfer KUB
        </a>
        <a
          onClick={() => onChange("transferKUSD")}
          className={tab === "transferKUSD" ? styles.tabActive : styles.tabs}
        >
          Transfer KUSDC
        </a> */}
        <a
          onClick={() => onChange("whitelist")}
          className={tab === "whitelist" ? styles.tabActive : styles.tabs}
        >
          Whitelist
        </a>
        <a
          onClick={() => onChange("Add whitelist")}
          className={tab === "Add whitelist" ? styles.tabActive : styles.tabs}
        >
          Add Whitelist
        </a>
        {/* <a
          onClick={() => onChange("mint")}
          className={tab === "mint" ? styles.tabActive : styles.tabs}
        >
          MINT NFT
        </a>
        <a
          onClick={() => onChange("transferNFT")}
          className={tab === "transferNFT" ? styles.tabActive : styles.tabs}
        >
          Transfer NFT
        </a> */}
        <a
          onClick={() => onChange("createActivity")}
          className={tab === "createActivity" ? styles.tabActive : styles.tabs}
        >
          Create Activity bitkub
        </a>
        {/* <a
          onClick={() => onChange("createActivity2")}
          className={tab === "createActivity2" ? styles.tabActive : styles.tabs}
        >
          Create Activity
        </a>
        <a
          onClick={() => onChange("deposit-KUB")}
          className={tab === "deposit-KUB" ? styles.tabActive : styles.tabs}
        >
          Deposit BitkubNEXT
        </a> */}
        {/* <a
          onClick={() => onChange("deposit-metamask")}
          className={
            tab === "deposit-metamask" ? styles.tabActive : styles.tabs
          }
        >
          Deposit Metamask
        </a> */}
        <a
          onClick={() => onChange("claim")}
          className={tab === "claim" ? styles.tabActive : styles.tabs}
        >
          claim
        </a>{" "}
        <a
          onClick={() => onChange("refund")}
          className={tab === "refund" ? styles.tabActive : styles.tabs}
        >
          Refund
        </a>
        <a
          onClick={() => onChange("addPackage")}
          className={tab === "addPackage" ? styles.tabActive : styles.tabs}
        >
          Add Package
        </a>
        <a
          onClick={() => onChange("subcription")}
          className={tab === "subcription" ? styles.tabActive : styles.tabs}
        >
          Subcription
        </a>
        <a
          onClick={() => onChange("renew")}
          className={tab === "renew" ? styles.tabActive : styles.tabs}
        >
          Renew
        </a>
      </div>
    </div>
  );
};

export default Tabs;
