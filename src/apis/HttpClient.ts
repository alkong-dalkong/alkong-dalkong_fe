import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios'

export class HttpClient {
  private readonly client: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create(config)

    this.client.interceptors.request.use(this.onRequest, this.onError)
    this.client.interceptors.response.use(this.onResponse, this.onError)
  }

  get<T>(...args: Parameters<typeof this.client.get>) {
    return this.client.get<T>(...args)
  }

  post<T>(...args: Parameters<typeof this.client.post>) {
    return this.client.post<T>(...args)
  }

  put<T>(...args: Parameters<typeof this.client.put>) {
    return this.client.put<T>(...args)
  }

  patch<T>(...args: Parameters<typeof this.client.patch>) {
    return this.client.patch<T>(...args)
  }

  delete<T>(...args: Parameters<typeof this.client.delete>) {
    return this.client.delete<T>(...args)
  }

  private onRequest(config: InternalAxiosRequestConfig) {
    // 토큰 처리 방식에 따라 헤더 추가 설정
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

    return Promise.reject(error)
  }
}
