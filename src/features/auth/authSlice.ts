import { createSlice } from '@reduxjs/toolkit';
import { login } from './authActions';

export interface AuthState {
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false, error: null } as AuthState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, state => {
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
