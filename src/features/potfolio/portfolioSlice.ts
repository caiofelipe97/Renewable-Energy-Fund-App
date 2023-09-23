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
      abbreviation: 'WFND',
      type: AssetType.InvestmentFund,
      value: 1032.23,
      variation: {
        percentage: 3.51,
        value: 1.21,
      },
    },
    {
      name: 'Solar Fund',
      abbreviation: 'SFND',
      type: AssetType.InvestmentFund,
      variation: {
        percentage: -0.13,
        value: 0.08,
      },
      value: 986.61,
    },
    {
      name: 'Natural Fund',
      abbreviation: 'NFND',
      type: AssetType.InvestmentFund,
      value: 1122.52,
      variation: {
        percentage: 5.21,
        value: 1.98,
      },
    },
  ],
} as PotfolioState;

const portfolioSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;
