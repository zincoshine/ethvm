/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TokenExchangeRateDetail
// ====================================================

export interface TokenExchangeRateDetail_contract_metadata_support {
  __typename: "ContractSupport";
  email: string | null;
  url: string | null;
}

export interface TokenExchangeRateDetail_contract_metadata_social {
  __typename: "ContractSocial";
  blog: string | null;
  chat: string | null;
  facebook: string | null;
  forum: string | null;
  github: string | null;
  gitter: string | null;
  instagram: string | null;
  linkedin: string | null;
  reddit: string | null;
  slack: string | null;
  telegram: string | null;
  twitter: string | null;
  youtube: string | null;
}

export interface TokenExchangeRateDetail_contract_metadata {
  __typename: "ContractMetadata";
  type: string | null;
  decimals: number | null;
  website: string | null;
  support: TokenExchangeRateDetail_contract_metadata_support | null;
  social: TokenExchangeRateDetail_contract_metadata_social | null;
}

export interface TokenExchangeRateDetail_contract {
  __typename: "Contract";
  creator: string | null;
  metadata: TokenExchangeRateDetail_contract_metadata | null;
}

export interface TokenExchangeRateDetail {
  __typename: "TokenExchangeRate";
  address: string | null;
  circulatingSupply: any | null;
  currentPrice: any | null;
  image: string | null;
  marketCap: any | null;
  name: string | null;
  priceChangePercentage24h: any | null;
  symbol: string | null;
  totalSupply: any | null;
  totalVolume: any | null;
  holdersCount: number | null;
  contract: TokenExchangeRateDetail_contract | null;
}
