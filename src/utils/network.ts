import { Chain } from "@usedapp/core";

export const DEFAULT_RPC = {
  bitkub: "https://rpc.bitkubchain.io",
  bitkubTestnet: "https://rpc-testnet.bitkubchain.io",
};

export const Bitkub: Chain = {
  chainId: 96,
  chainName: "Bitkub Chain Mainnet",
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: "0xcc515Aa7eE9Be4491c98DE68ee2147F0A063759D",
  getExplorerAddressLink: (address: string) =>
    `https://bkcscan.com/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://bkcscan.com/tx/${transactionHash}`,
};

export const BitkubTestnet: Chain = {
  chainId: 25925,
  chainName: "Bitkub Chain - Testnet",
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0x7F28D94D8dc94809a3f13e6a6e9d56ad0B6708fe",
  getExplorerAddressLink: (address: string) =>
    `https://testnet.bkcscan.com/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://testnet.bkcscan.com/tx/${transactionHash}`,
};

export default { Bitkub, BitkubTestnet };
