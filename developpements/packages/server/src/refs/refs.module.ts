import { Module } from '@nestjs/common'
import { RefsController } from './refs.controller'
import { RefsService } from './refs.service'

@Module({
  providers: [RefsService],
  controllers: [RefsController]
})
export class RefsModule {
}
