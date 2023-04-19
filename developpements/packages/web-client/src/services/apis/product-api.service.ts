import {
  CustomerSearchResultDto,
  IPaginatedListDto,
  ISearchDto,
  SearchCustomerByChronoClientDto,
  SearchCustomerDto,
  WorkDone,
  ProductDto
} from '@formation/shared-lib';
import { AxiosInstance } from 'axios';
import { AbstractApiService } from './abstract-api.service';

export class CustomersApiService extends AbstractApiService {
  constructor(axiosInstance: AxiosInstance, serviceApiBaseUrl: string) {
    super(axiosInstance, serviceApiBaseUrl);
  }

  // Get a list of products
  public async getSomeProducts(
    researchParams?: {},
  ): Promise<WorkDone<ProductDto[]>> {
    return this.doGet('/products');
  }
}
