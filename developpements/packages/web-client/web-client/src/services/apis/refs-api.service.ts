import {
  CodeLabelResultDto,
  IPaginatedListDto,
  ISearchDto,
  ProductDto,
  SearchProductDto,
  WorkDone
} from '@formation/shared-lib'
import { AxiosInstance } from 'axios'
import { AbstractApiService } from './abstract-api.service'

export class RefsApiService extends AbstractApiService {

  constructor(axiosInstance: AxiosInstance, serviceApiBaseUrl: string) {
    super(axiosInstance, serviceApiBaseUrl)
  }

  // Get "cdFichPart"'s customers list according to search criterias
  public async getAllFichierPartenaires(): Promise<WorkDone<CodeLabelResultDto[]>> {
    return this.doGet<CodeLabelResultDto[]>('/fichparts')
  }

  public async getProductListByCriterias (searchCriterias?: ISearchDto<SearchProductDto>): Promise<WorkDone<IPaginatedListDto<ProductDto>>> {
    return this.doGet('/products', searchCriterias)
  }
}
