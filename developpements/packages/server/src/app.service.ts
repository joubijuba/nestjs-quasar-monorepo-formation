import { LoggerService } from '@formation/servers-lib/dist/services'
import { WorkDone } from '@formation/shared-lib'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {

  constructor (
    private readonly logger: LoggerService
  ) {
    this.logger.info('AppService initialized')
  }

  getHello (): WorkDone<string> {
    this.logger.debug('getHello service called')
    return WorkDone.buildOk('Hello World!')
  }
}
