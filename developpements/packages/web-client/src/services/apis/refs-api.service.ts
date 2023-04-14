import {
  CodeLabelResultDto,
  WorkDone
} from '@formation/shared-lib'
import { AxiosInstance } from 'axios'
import { AbstractApiService } from './abstract-api.service'

export class RefsApiService extends AbstractApiService {

  constructor (axiosInstance: AxiosInstance, serviceApiBaseUrl: string) {
    super(axiosInstance, serviceApiBaseUrl)
  }

  // Get "cdFichPart"'s customers list according to search criterias
  public async getAllFichierPartenaires (): Promise<WorkDone<CodeLabelResultDto[]>> {
    return this.doGet('/fichparts')
  }
}
