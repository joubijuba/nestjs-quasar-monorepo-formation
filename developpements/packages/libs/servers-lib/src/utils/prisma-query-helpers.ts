import { ISearchDto } from '@formation/shared-lib'
import { forOwn as _forOwn, merge as _merge } from 'lodash'

const toStringDbTypeConverter = (data: string) => data

interface IPrismaMappingDesc {
  dbMode?: string,
  dbName: string
  dbOperation: string | Function,
  dbTypeConverter?: Function
}

const criteriaToPrismaMapping: { [key: string]: IPrismaMappingDesc } = {
  firstName: {
    dbName: 'firstName',
    dbOperation: 'startsWith',
    dbMode: 'insensitive'
  },
  lastName: {
    dbName: 'lastName',
    dbOperation: 'startsWith',
    dbMode: 'insensitive'
  },
  email: {
    dbName: 'email',
    dbOperation: 'equals',
    dbMode: 'insensitive'
  },
  minBalance: {
    dbName: 'account',
    dbOperation: (value) => JSON.parse(`{ "is": { "balances": { "some": { "balance": { "gte": ${value}}}}}}`)
  },
  maxBalance: {
    dbName: 'account',
    dbOperation: (value) => JSON.parse(`{ "is": { "balances": { "some": { "balance": { "lte": ${value}}}}}}`)
  },
  minAndMaxBalance: {
    dbName: 'account',
    dbOperation: ([min, max]) => JSON.parse(`{ "is": { "balances": { "some": { "balance": { "gte": ${min}, "lte": ${max}}}}}}`)
  },
  isBountyHunter: {
    dbName: 'isBountyHunter',
    dbOperation: 'equals'
  },
  isMarshal: {
    dbName: 'isMarshal',
    dbOperation: 'equals'
  }
}

export function prismaQueryFromSearchCriteria<T> (search: ISearchDto<T>, criteriaMapping?: { [key: string]: IPrismaMappingDesc }) {
  const _criteriaToPrismaMapping = _merge({}, criteriaToPrismaMapping, criteriaMapping ?? {})
  const pagination = typeof search.pagination === 'string' ? JSON.parse(search.pagination) : (search.pagination || {})

  const page = pagination?.page || 1
  const rowsPerPage = pagination?.rowsPerPage || 15

  const prismaQuery = {
    take: rowsPerPage,
    skip: (page - 1) * rowsPerPage,
    orderBy: undefined,
    where: undefined
  }

  // Sort defined ?
  let orderBy = []
  if (pagination?.sortBy) {
    const orderByItem = {}
    orderByItem[pagination.sortBy] = pagination.descending ? 'desc' : 'asc'
    orderBy.push(orderByItem)
  }
  prismaQuery.orderBy = orderBy

  // Computing Where clause
  const criterias = typeof search.criterias === 'string' ? JSON.parse(search.criterias) : (search.criterias || {})

  const where = {}
  _forOwn(criterias, (value, key) => {
    const mapping = _criteriaToPrismaMapping[key]
    if (!value || !mapping) {
      return null
    }
    if (typeof mapping.dbOperation === 'string') {
      const whereCondition = {}
      whereCondition[mapping.dbOperation] = mapping.dbTypeConverter ? mapping.dbTypeConverter(value) : value
      if (mapping.dbMode) {
        whereCondition['mode'] = mapping.dbMode
      }
      where[mapping.dbName] = whereCondition
    } else {
      where[mapping.dbName] = mapping.dbOperation(value)
    }
  })
  prismaQuery.where = where

  return prismaQuery
}
