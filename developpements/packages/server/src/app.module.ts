import { ServersLibModule } from '@formation/servers-lib'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TerminusModule } from '@nestjs/terminus'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import common from './common/config/common'
import { CustomersModule } from './customers/customers.module'
import { HealthController } from './health/health.controller'
import { RefsModule } from './refs/refs.module'

@Module({
  imports: [
    ServersLibModule,
    TerminusModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.developpement.env`,
      load: [common]
    }),
    CustomersModule,
    RefsModule
  ],
  controllers: [AppController, HealthController],
  providers: [
    AppService
  ],
  exports: []
})
export class AppModule {
}
