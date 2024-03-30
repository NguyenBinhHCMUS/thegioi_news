import { inject, injectable } from 'tsyringe'
import { DiContainer } from '../di-container.core'
import { TokenAuthStorage, type IAuthStorage } from './auth.storage'
import { TokenThemeStorage, type IThemeStorage } from './theme.storage'

export interface ILocalStorage {
  auth: IAuthStorage
  theme: IThemeStorage
}

export const TokenLocalStorage = DiContainer.defineToken<ILocalStorage>('local-storage')

@injectable()
@DiContainer.autoRegisterSingleton(TokenLocalStorage)
export class LocalStorageManager implements ILocalStorage {
  constructor(
    @inject(TokenAuthStorage)
    public auth: IAuthStorage,

    @inject(TokenThemeStorage)
    public theme: IThemeStorage
  ) {}
}
