export enum InvestmentFund {
  WindFund = 'Wind Fund',
  SolarFund = 'Solar Fund',
  NaturalFund = 'Natural Fund',
}

export enum AssetType {
  InvestmentFund = 'Investment Fund',
}

export type Asset = {
  name: InvestmentFund;
  type: AssetType;
  value: number;
  variation: number;
};
