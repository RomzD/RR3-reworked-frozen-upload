import { configureStore } from '@reduxjs/toolkit';
import { bikesReducer } from '../features/bikes/bikesSlice';

export const store = configureStore({
  reducer: {
    bikes: bikesReducer
  }
});
