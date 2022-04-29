import { configureStore } from '@reduxjs/toolkit';
import { newBikesReducer } from '../features/bikes/newBikeSlice';

export const store = configureStore({
  reducer: {
    newBikes: newBikesReducer
  }
});
