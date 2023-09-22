import { createAsyncThunk } from '@reduxjs/toolkit';

// Simulates authentication
async function authenticateUser(email: string, password: string) {
  return new Promise<boolean>(resolve => {
    setTimeout(() => {
      resolve(!!email && !!password);
    }, 2000);
  });
}

export const login = createAsyncThunk<
  boolean,
  { email: string; password: string }
>('auth/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const isAuthenticated = await authenticateUser(email, password);
    if (isAuthenticated) {
      return isAuthenticated;
    } else {
      return rejectWithValue('Invalid credentials');
    }
  } catch (error) {
    return rejectWithValue('An error occurred');
  }
});
