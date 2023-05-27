import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../card'
import collectionReducer from '../collection'
export const store = configureStore({
  reducer: {
    card : cardReducer,
    Collection: collectionReducer
  },
});
