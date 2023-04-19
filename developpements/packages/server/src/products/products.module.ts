import { Module } from '@nestjs/common'
import { productsController } from './products.controller'
import { productsService } from './products.service'

@Module({
  providers: [productsService],
  controllers: [productsController]
})
export class productsModule {
}
