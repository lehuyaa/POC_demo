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

export interface EarnPoolInterface extends utils.Interface {
  functions: {
    "PROJECT()": FunctionFragment;
    "activityEndTime()": FunctionFragment;
    "activityStartTime()": FunctionFragment;
    "adminProjectRouter()": FunctionFragment;
    "admins(address)": FunctionFragment;
    "claim(address,uint256,address[],uint256[])": FunctionFragment;
    "deposit(address,uint256,address[],uint256[],address)": FunctionFragment;
    "earnRouter()": FunctionFragment;
    "factory()": FunctionFragment;
    "initialize(address,uint256,uint256,address)": FunctionFragment;
    "isDeposited()": FunctionFragment;
    "kap20RewardAmount()": FunctionFragment;
    "nextNFTTransferRouter()": FunctionFragment;
    "nextTransferRouter()": FunctionFragment;
    "onKAP721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setActivityTime(uint256,uint256)": FunctionFragment;
    "setAdmin(address,bool)": FunctionFragment;
    "setAdminProjectRouter(address)": FunctionFragment;
    "setEarnRouter(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PROJECT"
      | "activityEndTime"
      | "activityStartTime"
      | "adminProjectRouter"
      | "admins"
      | "claim"
      | "deposit"
      | "earnRouter"
      | "factory"
      | "initialize"
      | "isDeposited"
      | "kap20RewardAmount"
      | "nextNFTTransferRouter"
      | "nextTransferRouter"
      | "onKAP721Received"
      | "owner"
      | "pause"
      | "paused"
      | "renounceOwnership"
      | "setActivityTime"
      | "setAdmin"
      | "setAdminProjectRouter"
      | "setEarnRouter"
      | "transferOwnership"
      | "unpause"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "PROJECT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "activityEndTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activityStartTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "adminProjectRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "admins",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "earnRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isDeposited",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "kap20RewardAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextNFTTransferRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextTransferRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onKAP721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setActivityTime",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdminProjectRouter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setEarnRouter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "PROJECT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "activityEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activityStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminProjectRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earnRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "kap20RewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextNFTTransferRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextTransferRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onKAP721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setActivityTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAdminProjectRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEarnRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AdminProjectRouterSet(address,address,address)": EventFragment;
    "Claimed(address,address,uint256,address[],uint256[])": EventFragment;
    "Deposited(address,uint256,address[],uint256[])": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "SetActivityTime(uint256,uint256)": EventFragment;
    "SetAdmin(address,bool)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdraw(address,address,uint256,address[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminProjectRouterSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetActivityTime"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
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

export interface ClaimedEventObject {
  receiver: string;
  token: string;
  amountClaim: BigNumber;
  nftAddress: string[];
  tokenIds: BigNumber[];
}
export type ClaimedEvent = TypedEvent<
  [string, string, BigNumber, string[], BigNumber[]],
  ClaimedEventObject
>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface DepositedEventObject {
  token: string;
  amount: BigNumber;
  nftAddress: string[];
  tokenIds: BigNumber[];
}
export type DepositedEvent = TypedEvent<
  [string, BigNumber, string[], BigNumber[]],
  DepositedEventObject
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

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

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface SetActivityTimeEventObject {
  startTime: BigNumber;
  endTime: BigNumber;
}
export type SetActivityTimeEvent = TypedEvent<
  [BigNumber, BigNumber],
  SetActivityTimeEventObject
>;

export type SetActivityTimeEventFilter = TypedEventFilter<SetActivityTimeEvent>;

export interface SetAdminEventObject {
  user: string;
  allow: boolean;
}
export type SetAdminEvent = TypedEvent<[string, boolean], SetAdminEventObject>;

export type SetAdminEventFilter = TypedEventFilter<SetAdminEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WithdrawEventObject {
  receiver: string;
  token: string;
  amount: BigNumber;
  nftAddress: string[];
}
export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber, string[]],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface EarnPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EarnPoolInterface;

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

    activityEndTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    activityStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    adminProjectRouter(overrides?: CallOverrides): Promise<[string]>;

    admins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claim(
      _receiver: PromiseOrValue<string>,
      _amountClaim: PromiseOrValue<BigNumberish>,
      _nftAddress: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _token: PromiseOrValue<string>,
      _rewardAmount: PromiseOrValue<BigNumberish>,
      _nftAddress: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _bitkubNexUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    earnRouter(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      owner_: PromiseOrValue<string>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _earnRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isDeposited(overrides?: CallOverrides): Promise<[boolean]>;

    kap20RewardAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextNFTTransferRouter(overrides?: CallOverrides): Promise<[string]>;

    nextTransferRouter(overrides?: CallOverrides): Promise<[string]>;

    onKAP721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setActivityTime(
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAdmin(
      user: PromiseOrValue<string>,
      allow: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAdminProjectRouter(
      _adminProjectRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setEarnRouter(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  PROJECT(overrides?: CallOverrides): Promise<string>;

  activityEndTime(overrides?: CallOverrides): Promise<BigNumber>;

  activityStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  adminProjectRouter(overrides?: CallOverrides): Promise<string>;

  admins(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claim(
    _receiver: PromiseOrValue<string>,
    _amountClaim: PromiseOrValue<BigNumberish>,
    _nftAddress: PromiseOrValue<string>[],
    _tokenIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _token: PromiseOrValue<string>,
    _rewardAmount: PromiseOrValue<BigNumberish>,
    _nftAddress: PromiseOrValue<string>[],
    _tokenIds: PromiseOrValue<BigNumberish>[],
    _bitkubNexUser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  earnRouter(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  initialize(
    owner_: PromiseOrValue<string>,
    _startTime: PromiseOrValue<BigNumberish>,
    _endTime: PromiseOrValue<BigNumberish>,
    _earnRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isDeposited(overrides?: CallOverrides): Promise<boolean>;

  kap20RewardAmount(overrides?: CallOverrides): Promise<BigNumber>;

  nextNFTTransferRouter(overrides?: CallOverrides): Promise<string>;

  nextTransferRouter(overrides?: CallOverrides): Promise<string>;

  onKAP721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setActivityTime(
    _startTime: PromiseOrValue<BigNumberish>,
    _endTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAdmin(
    user: PromiseOrValue<string>,
    allow: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAdminProjectRouter(
    _adminProjectRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setEarnRouter(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PROJECT(overrides?: CallOverrides): Promise<string>;

    activityEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    activityStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    adminProjectRouter(overrides?: CallOverrides): Promise<string>;

    admins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claim(
      _receiver: PromiseOrValue<string>,
      _amountClaim: PromiseOrValue<BigNumberish>,
      _nftAddress: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _token: PromiseOrValue<string>,
      _rewardAmount: PromiseOrValue<BigNumberish>,
      _nftAddress: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _bitkubNexUser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    earnRouter(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    initialize(
      owner_: PromiseOrValue<string>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _earnRouter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isDeposited(overrides?: CallOverrides): Promise<boolean>;

    kap20RewardAmount(overrides?: CallOverrides): Promise<BigNumber>;

    nextNFTTransferRouter(overrides?: CallOverrides): Promise<string>;

    nextTransferRouter(overrides?: CallOverrides): Promise<string>;

    onKAP721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setActivityTime(
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAdmin(
      user: PromiseOrValue<string>,
      allow: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAdminProjectRouter(
      _adminProjectRouter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setEarnRouter(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    withdraw(
      _receiver: PromiseOrValue<string>,
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

    "Claimed(address,address,uint256,address[],uint256[])"(
      receiver?: null,
      token?: PromiseOrValue<string> | null,
      amountClaim?: null,
      nftAddress?: PromiseOrValue<string>[] | null,
      tokenIds?: PromiseOrValue<BigNumberish>[] | null
    ): ClaimedEventFilter;
    Claimed(
      receiver?: null,
      token?: PromiseOrValue<string> | null,
      amountClaim?: null,
      nftAddress?: PromiseOrValue<string>[] | null,
      tokenIds?: PromiseOrValue<BigNumberish>[] | null
    ): ClaimedEventFilter;

    "Deposited(address,uint256,address[],uint256[])"(
      token?: PromiseOrValue<string> | null,
      amount?: null,
      nftAddress?: PromiseOrValue<string>[] | null,
      tokenIds?: PromiseOrValue<BigNumberish>[] | null
    ): DepositedEventFilter;
    Deposited(
      token?: PromiseOrValue<string> | null,
      amount?: null,
      nftAddress?: PromiseOrValue<string>[] | null,
      tokenIds?: PromiseOrValue<BigNumberish>[] | null
    ): DepositedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "SetActivityTime(uint256,uint256)"(
      startTime?: PromiseOrValue<BigNumberish> | null,
      endTime?: PromiseOrValue<BigNumberish> | null
    ): SetActivityTimeEventFilter;
    SetActivityTime(
      startTime?: PromiseOrValue<BigNumberish> | null,
      endTime?: PromiseOrValue<BigNumberish> | null
    ): SetActivityTimeEventFilter;

    "SetAdmin(address,bool)"(
      user?: PromiseOrValue<string> | null,
      allow?: PromiseOrValue<boolean> | null
    ): SetAdminEventFilter;
    SetAdmin(
      user?: PromiseOrValue<string> | null,
      allow?: PromiseOrValue<boolean> | null
    ): SetAdminEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Withdraw(address,address,uint256,address[])"(
      receiver?: null,
      token?: PromiseOrValue<string> | null,
      amount?: null,
      nftAddress?: PromiseOrValue<string>[] | null
    ): WithdrawEventFilter;
    Withdraw(
      receiver?: null,
      token?: PromiseOrValue<string> | null,
      amount?: null,
      nftAddress?: PromiseOrValue<string>[] | null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    PROJECT(overrides?: CallOverrides): Promise<BigNumber>;

    activityEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    activityStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    adminProjectRouter(overrides?: CallOverrides): Promise<BigNumber>;

    admins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      _receiver: PromiseOrValue<string>,
      _amountClaim: PromiseOrValue<BigNumberish>,
      _nftAddress: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      _token: PromiseOrValue<string>,
      _rewardAmount: PromiseOrValue<BigNumberish>,
      _nftAddress: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _bitkubNexUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    earnRouter(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      owner_: PromiseOrValue<string>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _earnRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isDeposited(overrides?: CallOverrides): Promise<BigNumber>;

    kap20RewardAmount(overrides?: CallOverrides): Promise<BigNumber>;

    nextNFTTransferRouter(overrides?: CallOverrides): Promise<BigNumber>;

    nextTransferRouter(overrides?: CallOverrides): Promise<BigNumber>;

    onKAP721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setActivityTime(
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAdmin(
      user: PromiseOrValue<string>,
      allow: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAdminProjectRouter(
      _adminProjectRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setEarnRouter(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PROJECT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activityEndTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activityStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adminProjectRouter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      _receiver: PromiseOrValue<string>,
      _amountClaim: PromiseOrValue<BigNumberish>,
      _nftAddress: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _token: PromiseOrValue<string>,
      _rewardAmount: PromiseOrValue<BigNumberish>,
      _nftAddress: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _bitkubNexUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    earnRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      owner_: PromiseOrValue<string>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _earnRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isDeposited(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kap20RewardAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextNFTTransferRouter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextTransferRouter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onKAP721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setActivityTime(
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAdmin(
      user: PromiseOrValue<string>,
      allow: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAdminProjectRouter(
      _adminProjectRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setEarnRouter(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
