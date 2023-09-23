import { createSlice } from '@reduxjs/toolkit';
import { Asset, AssetType } from '../../types/Asset';

export interface PotfolioState {
  accountBalance: number;
  value: number;
  variation: number;
  assets: Asset[];
}

const initialState = {
  accountBalance: 1457.23,
  value: 1245.23,
  variation: 31.82,
  assets: [
    {
      name: 'Wind Fund',
      type: AssetType.InvestmentFund,
      value: 1032.23,
      variation: 3.51,
    },
    {
      name: 'Solar Fund',
      type: AssetType.InvestmentFund,
      value: 986.61,
      variation: -0.13,
    },
    {
      name: 'Natural Fund',
      type: AssetType.InvestmentFund,
      value: 1122.52,
      variation: 5.21,
    },
  ],
} as PotfolioState;

const portfolioSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;
