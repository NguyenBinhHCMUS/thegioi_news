import axios, { InternalAxiosRequestConfig, type AxiosInstance, type AxiosResponse } from 'axios'
import queryString from 'query-string'
import { IAppConfig, TokenAppConfig } from 'src/cores/app-config.core'
import { DiContainer } from 'src/cores/di-container.core'
import { TokenLocalStorage } from './local-storages'

/**
 * Request middleware
 */
export function handleInjectJwt(config: InternalAxiosRequestConfig) {
  // TODO: handle inject jwt to request

  // TODO: do something with token
  const authStorage = DiContainer.container.resolve(TokenLocalStorage).auth
  const token = authStorage.getToken()

  return config
}

export function handleEncodeRequest(config: InternalAxiosRequestConfig) {
  // TODO: handle encode data before send to server
  return config
}

/**
 * Response middleware
 */
export function handleResponse(response: AxiosResponse<ResponseApi>) {
  // TODO: handle response from server
  if (response.status === 200 || response.status === 201) {
    return response.data
  }

  throw new ErrorApi(400)
}

export function handleResponseFailed(error: any) {
  // TODO: handle response failed
  throw error
}

const appConfig = DiContainer.container.resolve<IAppConfig>(TokenAppConfig)

const axiosClient = axios.create({
  baseURL: appConfig.BASE_URL_API,
  headers: { 'content-type': 'application/json; charset=utf-8' },
  paramsSerializer: { serialize: (params) => queryString.stringify(params) }
})

// Handle request
axiosClient.interceptors.request.use(handleEncodeRequest)
axiosClient.interceptors.request.use(handleInjectJwt)

// Handle response
axiosClient.interceptors.response.use(handleResponse, handleResponseFailed)

export const TokenAxiosClient = DiContainer.defineToken<AxiosInstance>('axios-client')
DiContainer.container.registerInstance(TokenAxiosClient, axiosClient)

export class ErrorApi extends Error {
  constructor(
    public code: number,
    public message: string = 'unknown'
  ) {
    super(message)
  }
}

interface ResponseApi<T = any> {
  // status: 'success' | 'failed'
  // status: number
  data: T
  errorCode?: number
}
