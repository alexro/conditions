import { configureStore } from '@reduxjs/toolkit';
import conditionsListReducer from '../features/conditionsList/conditionsListSlice';

export default configureStore({
  reducer: {
    conditionsList: conditionsListReducer,
  },
});
