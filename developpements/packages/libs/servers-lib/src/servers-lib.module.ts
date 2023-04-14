import {
  Global,
  Logger,
  Module
} from '@nestjs/common'
import { LoggerService } from './services'
import { PrismaService } from './services/prisma.service'

@Global()
@Module({
  providers: [
    Logger,
    LoggerService,
    PrismaService
  ],
  exports: [
    LoggerService,
    PrismaService
  ]
})
export class ServersLibModule {
}
