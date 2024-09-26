import axios from 'axios'

import type { SignUpRequest } from '@/types'

import { api } from '.'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const signInConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
}

export const signIn = async (request: SignUpRequest) => {
  const res = await axios.post(`/user/login`, request, signInConfig)

  const accessToken: string = res.headers['authorization']

  return { ...res.data, accessToken }
}

export const checkDuplicateId = async (request: { id: string }) => {
  return await axios.post(`${BASE_URL}/user/validate-id`, request)
}

export const signUp = async (request: SignUpRequest) => {
  return await axios.post(`${BASE_URL}/user/signup`, request)
}

export const signOut = async () => {
  return await api.post('/user/logout')
}
