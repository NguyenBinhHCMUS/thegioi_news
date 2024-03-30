import { DiContainer } from 'src/cores/di-container.core'
import { TokenLocalStorage, type ILocalStorage } from 'src/cores/local-storages'
import { inject, injectable } from 'tsyringe'
import { TokenAuthService, type IAuthService } from './auth.service'
import { IUserModel } from './types'

export interface IAppController {
  getUserInfo(): Promise<IUserModel | undefined>
  login(user: { username: string; password: string }): Promise<IUserModel | undefined>
}

export const TokenAuthController = DiContainer.defineToken<IAppController>('auth-controller')

@injectable()
@DiContainer.autoRegisterSingleton(TokenAuthController)
export class AuthController implements IAppController {
  constructor(
    @inject(TokenAuthService)
    private authService: IAuthService,

    @inject(TokenLocalStorage)
    private localStorage: ILocalStorage
  ) {}

  async getUserInfo(): Promise<IUserModel | undefined> {
    return await this.authService.getUserInfo()
  }

  async login(user: { username: string; password: string }) {
    try {
      const userInfo = await this.authService.requestLogin(user)
      console.log(userInfo)

      // TODO: set token
      const token = userInfo.token
      this.localStorage.auth.setToken(token)

      return userInfo
    } catch (error) {
      throw error
    }
  }
}
