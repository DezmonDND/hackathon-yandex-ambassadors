import { configureStore } from '@reduxjs/toolkit';
import ambassadorDataSlice from './ambassadorDataSlice';

export const store = configureStore({
  reducer: {
    ambassadorData: ambassadorDataSlice,
  },
});
