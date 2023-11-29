import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
// import adminReducer from './slices/adminSlice';
import { apiSlice } from './slices/apiSlice';
// import { apiASlice } from './slices/apiASlice';

const store = configureStore({

  reducer: {
    auth: authReducer,
    // admin: adminReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    // [apiASlice.reducerPath]: apiASlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// ,apiASlice.middleware
export default store;