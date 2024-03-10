import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import authReducer from '../features/auth/authSlice'
import usersInteractionsReducer from '../features/users/usersInteractionSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    usersInteractions: usersInteractionsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})
