import { LoggerService } from '@formation/servers-lib/dist/services'
import {
  Controller,
  Get
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import {
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator
} from '@nestjs/terminus'

interface IHealthChecks {
  httpEndPoint: string;
  maxMemoryHeapInMo: number;
  maxMemoryRSSInMo: number;
}

@Controller('monitoring')
export class HealthController {

  private readonly healthChecks: IHealthChecks

  constructor (
    configService: ConfigService,
    private readonly logger: LoggerService,
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator
  ) {
    this.healthChecks = configService.get<IHealthChecks>('healthChecks')
  }

  @Get('/db-pool-stats')
  dbPoolStats () {
    // this.logger.info('Reading DB pool stats...')
    // const { connectString, externalAuth, user, ...dbPoolStats } = this.oracleDbService.getDbPoolStats() as any
    // return dbPoolStats;
  }

  @Get('/health')
  @HealthCheck()
  healthCheck () {
    this.logger.info('Running Health checks...')
    return this.health.check([
      async () => this.memory.checkHeap('memory_heap', this.healthChecks.maxMemoryHeapInMo * 1024 * 1024),
      async () => this.memory.checkRSS('memory_rss', this.healthChecks.maxMemoryRSSInMo * 1024 * 1024)
      // async () => this._doDbCheck()
    ])
  }

  // private async _doDbCheck (): Promise<HealthIndicatorResult> {
  //   const wd = await this.oracleDbService.executeQuery<string>(`SELECT 'up'
  //                                                               FROM DUAL`, {})
  //   if (wd.isOk && wd.data) {
  //     return { database: { status: 'up' } }
  //   } else {
  //     return { database: { status: 'down', errorMsg: JSON.stringify(wd.error) } }
  //   }
  // }

}
