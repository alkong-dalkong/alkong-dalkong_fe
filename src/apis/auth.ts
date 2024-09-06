import axios from 'axios'

import type { SignInRequest, SignInResponse, SignUpRequest } from '@/types'

import { api } from '.'

const signInConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}

export const signIn = async (request: SignInRequest) => {
  const res = await axios.post<SignInResponse>(`/user/login`, request, signInConfig)

  const refreshToken = document.cookie
  const accessToken: string = res.headers['authorization']

  return { ...res.data, accessToken, refreshToken }
}

export const checkDuplicateId = async (request: { id: string }) => {
  return await api.post('/user/validate-id', request)
}

export const signUp = async (request: SignUpRequest) => {
  return await api.post('/user/signup', request)
}

export const signOut = async () => {
  return await api.post('/user/logout')
}
