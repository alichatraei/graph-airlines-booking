import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface LoginResponse {
  token: string
  result: string
}

interface LoginRequestBody {
  username: string
  password: string
}

export interface UserResponse {
  username: string
}

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequestBody>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (
        response: LoginResponse,
      ): LoginResponse | Promise<LoginResponse> => {
        if (response.result !== 'wrong_pass') {
          localStorage.setItem('token', response.token)
          return response
        }
        return response
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'logout',
        method: 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }),
      transformResponse: () => {
        localStorage.removeItem('token')
      },
    }),
    getCurrentUser: builder.mutation<UserResponse, void>({
      query: () => ({
        url: 'username',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }),
      transformResponse: (response: { username: string }) => response,
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserMutation,
} = authApi
