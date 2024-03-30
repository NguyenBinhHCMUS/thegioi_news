import { DiContainer } from './di-container.core'

export interface ILoggerFactory {
  createLogger(prefix: string): ILogger
}

export interface ILogger {
  info(...args: any[]): void
  debug(...args: any[]): void
  warn(...args: any[]): void
  error(...args: any[]): void
  log(...args: any[]): void
}

export const TokenLoggerFactory = DiContainer.defineToken<ILoggerFactory>('logger-factory')

@DiContainer.autoRegisterSingleton(TokenLoggerFactory)
export class LoggerFactory implements ILoggerFactory {
  createLogger(prefix: string): ILogger {
    return new Logger(prefix)
  }
}

class Logger implements ILogger {
  constructor(private prefix: string) {}

  get tag() {
    return `[${this.prefix}]`
  }

  info(...args: any[]): void {
    console.info(this.tag, ...args)
  }

  debug(...args: any[]): void {
    console.debug(this.tag, ...args)
  }

  warn(...args: any[]): void {
    console.warn(this.tag, ...args)
  }

  error(...args: any[]): void {
    console.error(this.tag, ...args)
  }

  log(...args: any[]): void {
    console.log(this.tag, ...args)
  }
}
