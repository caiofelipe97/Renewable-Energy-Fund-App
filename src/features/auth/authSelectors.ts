import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectAuth = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuth,
  auth => auth.isAuthenticated,
);

export const selectLoading = createSelector(selectAuth, auth => auth.loading);
