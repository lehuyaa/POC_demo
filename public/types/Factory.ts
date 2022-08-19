/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface FactoryInterface extends utils.Interface {
  functions: {
    "PROJECT()": FunctionFragment;
    "adminProjectRouter()": FunctionFragment;
    "allPairs(uint256)": FunctionFragment;
    "createPair(uint256,uint256,address)": FunctionFragment;
    "getAdminRounter()": FunctionFragment;
    "getAllPairs()": FunctionFragment;
    "getCommittee()": FunctionFragment;
    "getNextNFTTransferRouter()": FunctionFragment;
    "getNextTransferRouter()": FunctionFragment;
    "getProject()": FunctionFragment;
    "owner()": FunctionFragment;
    "project()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAdminProjectRouter(address)": FunctionFragment;
    "setCommittee(address)": FunctionFragment;
    "setProject(string)": FunctionFragment;
    "setProjectFactor(string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PROJECT"
      | "adminProjectRouter"
      | "allPairs"
      | "createPair"
      | "getAdminRounter"
      | "getAllPairs"
      | "getCommittee"
      | "getNextNFTTransferRouter"
      | "getNextTransferRouter"
      | "getProject"
      | "owner"
      | "project"
      | "renounceOwnership"
      | "setAdminProjectRouter"
      | "setCommittee"
      | "setProject"
      | "setProjectFactor"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "PROJECT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adminProjectRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allPairs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createPair",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAdminRounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPairs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCommittee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextNFTTransferRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextTransferRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProject",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "project", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdminProjectRouter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCommittee",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProject",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProjectFactor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "PROJECT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminProjectRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAdminRounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPairs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCommittee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextNFTTransferRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextTransferRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProject", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "project", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdminProjectRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCommittee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setProject", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProjectFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AdminProjectRouterSet(address,address,address)": EventFragment;
    "CreatePair(address,uint256,address,uint256,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminProjectRouterSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreatePair"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AdminProjectRouterSetEventObject {
  oldAdmin: string;
  newAdmin: string;
  caller: string;
}
export type AdminProjectRouterSetEvent = TypedEvent<
  [string, string, string],
  AdminProjectRouterSetEventObject
>;

export type AdminProjectRouterSetEventFilter =
  TypedEventFilter<AdminProjectRouterSetEvent>;

export interface CreatePairEventObject {
  newPair: string;
  index: BigNumber;
  newOwner: string;
  activityStart: BigNumber;
  activityEnd: BigNumber;
  earnRouter: string;
}
export type CreatePairEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, BigNumber, string],
  CreatePairEventObject
>;

export type CreatePairEventFilter = TypedEventFilter<CreatePairEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    PROJECT(overrides?: CallOverrides): Promise<[string]>;

    adminProjectRouter(overrides?: CallOverrides): Promise<[string]>;

    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createPair(
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _earnRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAdminRounter(overrides?: CallOverrides): Promise<[string]>;

    getAllPairs(overrides?: CallOverrides): Promise<[string[]]>;

    getCommittee(overrides?: CallOverrides): Promise<[string]>;

    getNextNFTTransferRouter(overrides?: CallOverrides): Promise<[string]>;

    getNextTransferRouter(overrides?: CallOverrides): Promise<[string]>;

    getProject(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    project(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAdminProjectRouter(
      _adminProjectRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCommittee(
      _committee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProject(
      _project: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProjectFactor(
      _project: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  PROJECT(overrides?: CallOverrides): Promise<string>;

  adminProjectRouter(overrides?: CallOverrides): Promise<string>;

  allPairs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  createPair(
    _startTime: PromiseOrValue<BigNumberish>,
    _endTime: PromiseOrValue<BigNumberish>,
    _earnRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAdminRounter(overrides?: CallOverrides): Promise<string>;

  getAllPairs(overrides?: CallOverrides): Promise<string[]>;

  getCommittee(overrides?: CallOverrides): Promise<string>;

  getNextNFTTransferRouter(overrides?: CallOverrides): Promise<string>;

  getNextTransferRouter(overrides?: CallOverrides): Promise<string>;

  getProject(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  project(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAdminProjectRouter(
    _adminProjectRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCommittee(
    _committee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProject(
    _project: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProjectFactor(
    _project: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PROJECT(overrides?: CallOverrides): Promise<string>;

    adminProjectRouter(overrides?: CallOverrides): Promise<string>;

    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    createPair(
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _earnRouter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getAdminRounter(overrides?: CallOverrides): Promise<string>;

    getAllPairs(overrides?: CallOverrides): Promise<string[]>;

    getCommittee(overrides?: CallOverrides): Promise<string>;

    getNextNFTTransferRouter(overrides?: CallOverrides): Promise<string>;

    getNextTransferRouter(overrides?: CallOverrides): Promise<string>;

    getProject(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    project(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAdminProjectRouter(
      _adminProjectRouter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCommittee(
      _committee: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProject(
      _project: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProjectFactor(
      _project: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminProjectRouterSet(address,address,address)"(
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null,
      caller?: PromiseOrValue<string> | null
    ): AdminProjectRouterSetEventFilter;
    AdminProjectRouterSet(
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null,
      caller?: PromiseOrValue<string> | null
    ): AdminProjectRouterSetEventFilter;

    "CreatePair(address,uint256,address,uint256,uint256,address)"(
      newPair?: null,
      index?: null,
      newOwner?: null,
      activityStart?: null,
      activityEnd?: null,
      earnRouter?: null
    ): CreatePairEventFilter;
    CreatePair(
      newPair?: null,
      index?: null,
      newOwner?: null,
      activityStart?: null,
      activityEnd?: null,
      earnRouter?: null
    ): CreatePairEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    PROJECT(overrides?: CallOverrides): Promise<BigNumber>;

    adminProjectRouter(overrides?: CallOverrides): Promise<BigNumber>;

    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createPair(
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _earnRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAdminRounter(overrides?: CallOverrides): Promise<BigNumber>;

    getAllPairs(overrides?: CallOverrides): Promise<BigNumber>;

    getCommittee(overrides?: CallOverrides): Promise<BigNumber>;

    getNextNFTTransferRouter(overrides?: CallOverrides): Promise<BigNumber>;

    getNextTransferRouter(overrides?: CallOverrides): Promise<BigNumber>;

    getProject(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    project(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAdminProjectRouter(
      _adminProjectRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCommittee(
      _committee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProject(
      _project: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProjectFactor(
      _project: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PROJECT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adminProjectRouter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createPair(
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _earnRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAdminRounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllPairs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCommittee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNextNFTTransferRouter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextTransferRouter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProject(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    project(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAdminProjectRouter(
      _adminProjectRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCommittee(
      _committee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProject(
      _project: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProjectFactor(
      _project: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
