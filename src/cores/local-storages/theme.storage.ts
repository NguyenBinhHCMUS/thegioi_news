import { inject, injectable } from 'tsyringe'
import { DiContainer } from '../di-container.core'
import { TokenLocalStorageCore, type ILocalStorageCore } from './local-storage.core'

export interface IThemeStorage {
  getTheme(): string | null
  setTheme(token: string): void
}

export const TokenThemeStorage = DiContainer.defineToken<IThemeStorage>('theme-storage')

@injectable()
@DiContainer.autoRegisterSingleton(TokenThemeStorage)
export class ThemeStorage implements IThemeStorage {
  private readonly KEY_THEME = 'theme'

  constructor(
    @inject(TokenLocalStorageCore)
    private localStorageCore: ILocalStorageCore
  ) {}

  getTheme(): string | null {
    return this.localStorageCore.getItem(this.KEY_THEME)
  }

  setTheme(token: string): void {
    this.localStorageCore.setItem(this.KEY_THEME, token)
  }
}
