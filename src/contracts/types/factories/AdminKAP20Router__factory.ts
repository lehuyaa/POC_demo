/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  AdminKAP20Router,
  AdminKAP20RouterInterface,
} from "../AdminKAP20Router";

const _abi = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        name: "_adminRouter",
        internalType: "address",
      },
      {
        type: "address",
        name: "_committee",
        internalType: "address",
      },
      {
        type: "address",
        name: "_KKUB",
        internalType: "address",
      },
      {
        type: "address",
        name: "_KYC",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_bitkubNextLevel",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "event",
    name: "AdminProjectRouterSet",
    inputs: [
      {
        type: "address",
        name: "oldAdmin",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "newAdmin",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "caller",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ExternalTokenTransfer",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "_from",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
        indexed: true,
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "FeeTransfer",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "_from",
        internalType: "address",
        indexed: false,
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
        indexed: true,
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "InternalTokenTransfer",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "_from",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
        indexed: true,
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "contract IKKUB",
      },
    ],
    name: "KKUB",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "contract IKYCBitkubChain",
      },
    ],
    name: "KYC",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    name: "PROJECT",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "addAddress",
    inputs: [
      {
        type: "address",
        name: "_addr",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "contract IAdminProjectRouter",
      },
    ],
    name: "adminProjectRouter",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "allowedAddrByIndex",
    inputs: [
      {
        type: "uint256",
        name: "_index",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address[]",
        name: "",
        internalType: "address[]",
      },
    ],
    name: "allowedAddrByPage",
    inputs: [
      {
        type: "uint256",
        name: "_page",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_limit",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "allowedAddrLength",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "bitkubNextLevel",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "burnKToken",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
      },
      {
        type: "address",
        name: "_account",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "committee",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "externalTransfer",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
      },
      {
        type: "address",
        name: "_feeToken",
        internalType: "address",
      },
      {
        type: "address",
        name: "_from",
        internalType: "address",
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_value",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_feeValue",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "externalTransferKKUB",
    inputs: [
      {
        type: "address",
        name: "_feeToken",
        internalType: "address",
      },
      {
        type: "address",
        name: "_from",
        internalType: "address",
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_value",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_feeValue",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "externalTransferKKUBToKUB",
    inputs: [
      {
        type: "address",
        name: "_feeToken",
        internalType: "address",
      },
      {
        type: "address",
        name: "_from",
        internalType: "address",
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_value",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_feeValue",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "feeTo",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "internalTransfer",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
      },
      {
        type: "address",
        name: "_feeToken",
        internalType: "address",
      },
      {
        type: "address",
        name: "_from",
        internalType: "address",
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_value",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_feeValue",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "internalTransferKKUB",
    inputs: [
      {
        type: "address",
        name: "_feeToken",
        internalType: "address",
      },
      {
        type: "address",
        name: "_from",
        internalType: "address",
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_value",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_feeValue",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "isAllowedAddr",
    inputs: [
      {
        type: "address",
        name: "_addr",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "mintKToken",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
      },
      {
        type: "address",
        name: "_account",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "revokeAddress",
    inputs: [
      {
        type: "address",
        name: "_addr",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setAdminProjectRouter",
    inputs: [
      {
        type: "address",
        name: "_adminProjectRouter",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setBitkubNextLevel",
    inputs: [
      {
        type: "uint256",
        name: "_bitkubNextLevel",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setCommittee",
    inputs: [
      {
        type: "address",
        name: "_committee",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setFeeTo",
    inputs: [
      {
        type: "address",
        name: "_feeTo",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setKKUB",
    inputs: [
      {
        type: "address",
        name: "_KKUB",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setKYC",
    inputs: [
      {
        type: "address",
        name: "_KYC",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setKYCKKUB",
    inputs: [
      {
        type: "address",
        name: "_kyc",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setKYCsLevelKKUB",
    inputs: [
      {
        type: "uint256",
        name: "_kycsLevel",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "withdrawKUB",
    inputs: [
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "withdrawToken",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
];

export class AdminKAP20Router__factory {
  static readonly abi = _abi;
  static createInterface(): AdminKAP20RouterInterface {
    return new utils.Interface(_abi) as AdminKAP20RouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdminKAP20Router {
    return new Contract(address, _abi, signerOrProvider) as AdminKAP20Router;
  }
}
