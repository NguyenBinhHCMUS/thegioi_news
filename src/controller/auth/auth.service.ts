import type { AxiosInstance } from 'axios'
import { ErrorApi, TokenAxiosClient } from 'src/cores/api-client.core'
import { DiContainer } from 'src/cores/di-container.core'
import { type ILogger, type ILoggerFactory, TokenLoggerFactory } from 'src/cores/logger.core'
import { inject, injectable } from 'tsyringe'
import { IUserModel } from './types'

const URL_GET_PROFILE = 'home/profile'
const URL_LOGIN = 'home/login'

export const ERROR_MESSAGE_MAP: Record<number, string> = {
  101: 'Invalid email',
  102: 'Invalid password'
}

export interface IAuthService {
  getUserInfo(): Promise<IUserModel>
  requestLogin(user: { username: string; password: string }): Promise<IUserModel>
}

export const TokenAuthService = DiContainer.defineToken<IAuthService>('auth-service')

@injectable()
@DiContainer.autoRegisterSingleton(TokenAuthService)
export class AuthService implements IAuthService {
  constructor(
    @inject(TokenAxiosClient)
    private axiosClient: AxiosInstance
  ) {}

  async getUserInfo(): Promise<IUserModel> {
    try {
      const response = await this.axiosClient.get<IUserModel>(URL_GET_PROFILE)
      return response.data
    } catch (error: any) {
      const code = error.code as number
      throw new ErrorApi(code, ERROR_MESSAGE_MAP[code])
    }
  }

  async requestLogin(user: { username: string; password: string }): Promise<IUserModel> {
    const bodyData = {
      UserName: user.username,
      _Password: user.password
    }
    try {
      const response: any = await this.axiosClient.post<IUserModel>(URL_LOGIN, bodyData)
      const { data } = response
      const resLogin: IUserModel = {
        id: data.sid || 0,
        username: data?._loginName || '',
        token: data?.token || ''
      }
      return resLogin
    } catch (error: any) {
      const code = error.code as number
      throw new ErrorApi(code, ERROR_MESSAGE_MAP[code])
    }
  }
}

@injectable()
// @DiContainer.autoRegisterSingleton(TokenAuthService)
export class AuthServiceFake implements IAuthService {
  private logger: ILogger

  constructor(
    @inject(TokenLoggerFactory)
    loggerFactory: ILoggerFactory
  ) {
    this.logger = loggerFactory.createLogger('auth-service')
  }

  async getUserInfo(): Promise<IUserModel> {
    throw new Error()
  }

  async requestLogin(user: { username: string; password: string }): Promise<IUserModel> {
    this.logger.log('auth service fake')
    await this.sleep(1000)
    return { id: 1, username: 'ababa', token: 'jwt' }
  }

  private sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
}
