import { inject, injectable } from 'tsyringe'
import { DiContainer } from '../di-container.core'
import { TokenLocalStorageCore, type ILocalStorageCore } from './local-storage.core'

export interface IAuthStorage {
  getToken(): string | null
  setToken(token: string): void
}

export const TokenAuthStorage = DiContainer.defineToken<IAuthStorage>('auth-storage')

@injectable()
@DiContainer.autoRegisterSingleton(TokenAuthStorage)
export class AuthStorage implements IAuthStorage {
  private readonly KEY_TOKEN = 'auth_token'

  constructor(
    @inject(TokenLocalStorageCore)
    private localStorageCore: ILocalStorageCore
  ) {}

  getToken() {
    return this.localStorageCore.getItem(this.KEY_TOKEN)
  }

  setToken(token: string): void {
    this.localStorageCore.setItem(this.KEY_TOKEN, token)
  }
}
