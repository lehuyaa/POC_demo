export interface INftToken {
  name: string;
  address: string;
  image: string;
  type: string;
  order: number;
  disable_transfer: boolean;
  available_set_profile: boolean;
  nfts?: ISubNftToken[];
}

export interface ISubNftToken {
  name: string;
  address: string;
  image: string;
  type: string;
  order: number;
  disable_transfer: boolean;
  available_set_profile: boolean;
}
export interface INftListingByWalletParams {
  page: number;
  limit: number;
  wallet_address: string;
  nft_contract_address: string[];
}

export interface INftByWalletParams {
  page: number;
  limit: number;
  wallet_address: string;
}

export interface INFT {
  __typename: string;
  assetUri?: string;
  image?: string;
  attributes: {
    __typename: string;
    traitType: string;
    value: string;
  }[];
  contract: string;
  createdTime: string;
  creator: string;
  description: string;
  id: string;
  imageThumbnailUrl: string;
  imageUrl: string;
  isStamp?: any;
  kapUri?: any;
  media: any[];
  hashtags: string[];
  name: string;
  ownerships: {
    __typename: string;
    amount: string;
    id: string;
    owner: string;
  }[];
  price?: any;
  rarity?: any;
  serialId: string;
  serialNumber: string;
  tokenId: string;
  tokenUri: string;
  totalSupply: string;
  trade?: any;
  type: string;
  typeId: string;
  updatedTime: string;
}

export interface IOwnershipEntity {
  __typename: string;
  amount: string;
  id: string;
  nft: INFT;
  owner: string;
}

export interface INFTEntity {
  eventEntities: any[];
  nftEntity: INFT;
  ownershipEntities: IOwnershipEntity[];
}

export interface INFTListing {
  nft_contract_name: string;
  nft_contract_address: string;
  total: 1;
  balance: {
    token_id: string;
    meta_data_url: string;
  }[];
}
