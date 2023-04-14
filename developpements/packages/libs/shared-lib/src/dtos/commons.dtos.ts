export interface IPagination {
  descending?: boolean;
  page: number;
  rowsNumber: number;
  rowsPerPage: number;
  sortBy?: string;
}

export interface ISearchDto<T> {
  criterias?: T;
  pagination: IPagination;
}

/**
 * Interface used to return list results
 * rowCount is filled only when first page of data is requested.
 */
export interface IPaginatedListDto<T> {
  list: T[];
  rowsNumber: number;
}
