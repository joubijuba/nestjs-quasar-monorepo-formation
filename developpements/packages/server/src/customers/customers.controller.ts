import { LoggerService } from '@formation/servers-lib/dist/services'
import { AbstractController } from '@formation/servers-lib/dist/utils'
import {
  CustomerSearchResultDto,
  IPaginatedListDto,
  ISearchDto,
  SearchCustomerDto,
  WorkDone
} from '@formation/shared-lib'
import {
  Controller,
  Get,
  Query
} from '@nestjs/common'
import { CustomersService } from './customers.service'

@Controller('customers')
export class CustomersController extends AbstractController {

  constructor (
    private readonly logger: LoggerService,
    private readonly customersService: CustomersService
  ) {
    super()
    this.logger.info('CustomersController created')
  }

  @Get('/search/one')
  async findOne (@Query('codeFichierPartenaire') codeFichierPartenaire: string, @Query('chronoClient') chronoClient: string): Promise<WorkDone<CustomerSearchResultDto>> {
    return this.customersService.findOne(codeFichierPartenaire, chronoClient)
  }

  @Get('/search/multi-criterias')
  async searchCustomer (@Query() queryParams: ISearchDto<SearchCustomerDto>): Promise<WorkDone<IPaginatedListDto<CustomerSearchResultDto>>> {
    const criterias = CustomersController.parseSearchDtoFromQuery<SearchCustomerDto>(queryParams)
    this.logger.debug(JSON.stringify(criterias))
    return this.customersService.searchCustomer(criterias)
  }
}
