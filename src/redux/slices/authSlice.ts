import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authApi } from '../api/api'

interface AuthState {
  isAuthenticated: boolean
  username?: string
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('token'),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchPending, (state) => {
      state.isAuthenticated = false
    })
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state) => {
      state.isAuthenticated = true
    })
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
      state.isAuthenticated = false
      state.username = undefined
    })
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, action) => {
        state.username = action.payload.username
      },
    )
  },
})

export const { setUsername } = authSlice.actions
