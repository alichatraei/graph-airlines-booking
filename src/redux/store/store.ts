/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../api/api'
import { authSlice } from '../slices/authSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authReducer: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppThunk = (...arg: any[]) => void
