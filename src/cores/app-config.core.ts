import { singleton } from 'tsyringe'
import { DiContainer } from './di-container.core'
import config from 'src/constants/config'

export interface IAppConfig {
  BASE_URL_API: string
}

@singleton()
class AppConfigProduction implements IAppConfig {
  BASE_URL_API = ''
}

@singleton()
class AppConfigDevelopment implements IAppConfig {
  BASE_URL_API = config.BASE_URL_API || ''
}

export const TokenAppConfig = DiContainer.defineToken<IAppConfig>('app-config')

if (config.NODE_ENV === 'production') {
  DiContainer.container.register(TokenAppConfig, AppConfigProduction)
} else if (config.NODE_ENV === 'development') {
  DiContainer.container.register(TokenAppConfig, AppConfigDevelopment)
}
