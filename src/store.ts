import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import portfolioReducer from './features/potfolio/portfolioSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    potfolio: portfolioReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
