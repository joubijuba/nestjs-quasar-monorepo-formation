import { ServersLibModule } from '@formation/servers-lib'
import { Module } from '@nestjs/common'
import { CustomersController } from './customers.controller'
import { CustomersService } from './customers.service'

@Module({
  imports: [ServersLibModule],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {
}
