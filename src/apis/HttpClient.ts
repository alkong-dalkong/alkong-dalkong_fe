import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios'

import { issueToken, signOut } from './auth'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

export class HttpClient {
  private readonly client: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create(config)

    this.client.interceptors.request.use(this.onRequest, this.onError)
    this.client.interceptors.response.use(this.onResponse, this.onError)
  }

  get<T>(...args: Parameters<typeof this.client.get>) {
    return this.client.get<T, T>(...args)
  }

  post<T>(...args: Parameters<typeof this.client.post>) {
    return this.client.post<T, T>(...args)
  }

  put<T>(...args: Parameters<typeof this.client.put>) {
    return this.client.put<T, T>(...args)
  }

  patch<T>(...args: Parameters<typeof this.client.patch>) {
    return this.client.patch<T, T>(...args)
  }

  delete<T>(...args: Parameters<typeof this.client.delete>) {
    return this.client.delete<T, T>(...args)
  }

  private onRequest(config: InternalAxiosRequestConfig) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)

    if (accessToken) {
      config.headers.Authorization = accessToken
    }

    return config
  }

  private onResponse(response: AxiosResponse) {
    return response.data
  }

  private onError(error: AxiosError) {
    const response = error.response as AxiosResponse

    if (isAxiosError(error)) {
      console.error(response.data)
    }

    if (error.config && response?.status === 401) {
      error.config.headers.Authorization = null
      error.config.withCredentials = true

      return issueToken()
        .then(async (res) => {
          const accessToken = res.accessToken

          if (res?.status === 200 && accessToken) {
            localStorage.setItem(ACCESS_TOKEN, accessToken)
            res.config.headers.Authorization = accessToken

            return this.client(res.config)
          }
        })
        .catch((reissueError) => {
          console.error('액세스 토큰 재발급 실패', reissueError)

          signOut()
          window.location.href = '/sign-in'

          return Promise.reject(reissueError)
        })
    }

    return Promise.reject(error)
  }
}
