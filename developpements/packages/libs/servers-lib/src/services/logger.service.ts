import { WorkDone } from '@formation/shared-lib'
import {
  Injectable,
  Logger,
  LoggerService as NestLoggerService
} from '@nestjs/common'
import { randomUUID } from 'crypto'

@Injectable()
export class LoggerService implements NestLoggerService {

  constructor (private readonly logger: Logger) {}

  private static _getMessageAsString (message: any): string {
    if (typeof message === 'string') {
      return message
    } else if (message instanceof Error) {
      return JSON.stringify(message, Object.getOwnPropertyNames(message))
    } else {
      return JSON.stringify(message)
    }
  }

  debug (message: any, ...optionalParams: any[]) {
    return this.logger.debug(LoggerService._getMessageAsString(message), optionalParams)
  }

  error (error: any, ...optionalParams: any[]) {
    return this.logger.error(LoggerService._getMessageAsString(error), optionalParams)
  }

  info (message: any, ...optionalParams: any[]) {
    return this.log(message, optionalParams)
  }

  log (message: any, ...optionalParams: any[]) {
    return this.logger.log(LoggerService._getMessageAsString(message), optionalParams)
  }

  /**
   * Logge l'erreur en lui associant un GUID permettant de la retrouver dans le journal de log
   * @param error
   * @param {string} wdErrMessage
   * @returns {WorkDone<T>}
   */
  logErrorAndReturnWorkDoneKO<T> (error: any, wdErrMessage?: string): WorkDone<T> {
    const logRef = randomUUID()
    if (typeof error === 'string') {
      this.error(`LogRef: ${logRef} - ${error}`)
      return WorkDone.buildError(wdErrMessage ?? error, logRef)
    } else if (error instanceof Error) {
      this.error(`LogRef: ${logRef} - ${JSON.stringify(error, Object.getOwnPropertyNames(error))}`)
      return WorkDone.buildError(wdErrMessage ?? error.message, logRef)
    } else {
      const errAsString = JSON.stringify(error)
      this.error(`LogRef: ${logRef} - ${wdErrMessage ? wdErrMessage + ':\n' : ''} ${errAsString}`)
      return WorkDone.buildError(wdErrMessage ?? errAsString, logRef)
    }
  }

  verbose (message: any, ...optionalParams: any[]) {
    return this.logger.verbose(LoggerService._getMessageAsString(message), optionalParams)
  }

  warn (message: any, ...optionalParams: any[]) {
    return this.logger.warn(LoggerService._getMessageAsString(message), optionalParams)
  }
}
