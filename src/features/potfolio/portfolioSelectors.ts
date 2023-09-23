import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { AssetType } from '../../types/Asset';

export const selectPotfolio = (state: RootState) => state.potfolio;

export const selectFunds = createSelector(selectPotfolio, portfolio =>
  portfolio.assets.filter(asset => asset.type === AssetType.InvestmentFund),
);

export const selectAccountBalance = createSelector(
  selectPotfolio,
  portfolio => portfolio.accountBalance,
);
