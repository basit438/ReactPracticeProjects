// src/redux/store.js
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; 
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
