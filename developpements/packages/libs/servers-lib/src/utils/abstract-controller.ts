import { ISearchDto } from '@formation/shared-lib'

export class AbstractController {

  static parseSearchDtoFromQuery<T> (queryParams: any): ISearchDto<T> {
    const ret: ISearchDto<T> = {
      criterias: {} as T,
      pagination: { page: 1, rowsPerPage: 25, rowsNumber: 0 }
    }
    if (queryParams.criterias) {
      if (typeof queryParams.criterias === 'object') {
        ret.criterias = queryParams.criterias
      } else {
        ret.criterias = JSON.parse(queryParams.criterias.toString())
      }
    }
    if (queryParams.pagination) {
      if (typeof queryParams.criterias === 'object') {
        ret.pagination = queryParams.pagination
      } else {
        ret.pagination = JSON.parse(queryParams.pagination.toString())
      }
    }
    return ret
  }
}
