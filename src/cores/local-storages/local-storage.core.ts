import { injectable } from 'tsyringe'
import { DiContainer } from '../di-container.core'

export interface ILocalStorageCore extends Storage {}

export const TokenLocalStorageCore = DiContainer.defineToken<ILocalStorageCore>('local-storage-core')

@injectable()
@DiContainer.autoRegisterSingleton(TokenLocalStorageCore)
export class LocalStorageCore implements ILocalStorageCore {
  get length() {
    return localStorage.length
  }

  clear(): void {
    localStorage.clear()
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key)
  }

  key(index: number): string | null {
    return localStorage.key(index)
  }

  removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  setItem(key: string, value: string): void {
    return localStorage.setItem(key, value)
  }
}
