import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '../.prisma/client'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from './logger.service'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  constructor (configService: ConfigService, private readonly logger: LoggerService) {
    super({
      datasources: { db: { url: process.env.DATABASE_URL } },
      log: PrismaService._buildLog(configService.get('LOG_LEVEL'))
    })

    // @ts-ignore
    this.$on('error', (e) => {
      this.logger.error(JSON.stringify(e))
    })
    // @ts-ignore
    this.$on('warn', (e) => {
      this.logger.warn(JSON.stringify(e))
    })
    // @ts-ignore
    this.$on('info', (e) => {
      this.logger.log(JSON.stringify(e))
    })
    // @ts-ignore
    this.$on('query', (e) => {
      this.logger.debug(JSON.stringify(e))
    })

    this.logger.debug(`Using Prisma to map entities in server: ${process.env.DATABASE_URL}`)
  }

  private static _buildLog (logLevel: string): any[] {
    const log = [
      {
        emit: 'event',
        level: 'error'
      }
    ]
    const logLevelIndx = (logLevel === 'debug') ? 0
      : (logLevel === 'info') ? 1
        : (logLevel === 'warn') ? 2 : 3

    if (logLevelIndx >= 0) {
      log.push({
        emit: 'event',
        level: 'query'
      })
    }
    if (logLevelIndx >= 1) {
      log.push({
        emit: 'event',
        level: 'info'
      })
    }
    if (logLevelIndx >= 2) {
      log.push({
        emit: 'event',
        level: 'warn'
      })
    }
    return log
  }

  async enableShutdownHooks (app: INestApplication) {
    this.$on('beforeExit', async () => {
      this.logger.debug('PrismaClient on BeforeExit...')
      await app.close()
    })
  }

  async onModuleInit () {
    this.logger.debug('PrismaClient connecting to database...')
    await this.$connect()
  }
}
