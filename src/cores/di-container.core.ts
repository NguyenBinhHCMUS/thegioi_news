import { useMemo } from 'react'
import { container, InjectionToken } from 'tsyringe'

export interface IConstructor {
  new (...args: any[]): any
}

/**
 * Dependency injection container
 */
class DiContainerClass {
  get container() {
    return container
  }

  autoRegister<T = any>(token: InjectionToken<T>) {
    return function (constructor: IConstructor) {
      container.register(token, constructor)
    }
  }

  autoRegisterSingleton<T = any>(token: InjectionToken<T>) {
    return function (constructor: IConstructor) {
      const isRegistered = container.isRegistered(token)
      if (isRegistered) {
        throw new Error(`Duplicate token register. Token: ${token.toString()} is registered`)
      }

      container.register(token, constructor)
      container.registerSingleton(constructor)
    }
  }

  defineToken<T = any>(token: string): InjectionToken<T> {
    return token
  }
}

export const DiContainer = new DiContainerClass()

export function useResolver<T = any>(token: InjectionToken<T>): T {
  return useMemo(() => {
    return DiContainer.container.resolve(token)
  }, [token])
}
