import { configureStore } from '@reduxjs/toolkit';
import { reducerName } from './reducer';


const store = configureStore({
  reducer: {
    reducerName: reducerName, 
  },
});

export default store;
