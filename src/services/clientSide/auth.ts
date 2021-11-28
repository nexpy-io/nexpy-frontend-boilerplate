import { AxiosResponse } from 'axios'

import { nexpyClientSideClient } from 'providers'

import { SignIn, User } from 'types/auth'

export const signInService = (authData: SignIn) =>
  nexpyClientSideClient.post<SignIn, AxiosResponse<User>>('/auth/login/', authData)

export const revalidateUserService = (token: string) =>
  nexpyClientSideClient.post<{ token: string }, AxiosResponse<User>>('/auth/validate/', {
    token,
  })

export const refreshUserService = (refreshToken: string) =>
  nexpyClientSideClient.post<{ refresh: string }, AxiosResponse<User>>('/auth/refresh/', {
    refresh: refreshToken,
  })
