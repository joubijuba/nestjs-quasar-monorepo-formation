import { WorkDone } from '@formation/shared-lib'
import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { merge as _merge } from 'lodash'
import {
  displayNotification,
  NotificationStatusEnum
} from '../common/notification.service'

export abstract class AbstractApiService {

  private readonly _axiosInstance: AxiosInstance
  private readonly _serviceApiBaseUrl

  protected constructor (axiosInstance: AxiosInstance, serviceApiBaseUrl: string) {
    this._axiosInstance = axiosInstance
    this._serviceApiBaseUrl = serviceApiBaseUrl
  }

  private static _catchHandler<R> (error: AxiosError): WorkDone<R> | Promise<WorkDone<R>> {
    let message = error && error.message ? error.message : 'Unknown Error (2)'
    if (error.response && error.response.data) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      message = error.response.data.message as string
    }
    displayNotification(NotificationStatusEnum.FAILURE, message)
    return WorkDone.buildError<R>(message)
  }

  private static _thenHandler<R> (response: AxiosResponse<WorkDone<R>>): WorkDone<R> | Promise<WorkDone<R>> {
    // Check if the response isOK
    if (response && response.data && response.data.isOk === true) {
      if (response.data.successMessage) {
        displayNotification(NotificationStatusEnum.SUCCESS, response.data.successMessage)
      }
      if (response.data.warningMessage) {
        displayNotification(NotificationStatusEnum.WARNING, response.data.warningMessage)
      }
      return response.data

    } else if (response.data && response.data.error) {
      // In case of functional error, display an error message
      const message: string = response.data.error.message || 'Unknown Error'
      displayNotification(NotificationStatusEnum.FAILURE, message)
      return WorkDone.buildError<R>(message)
    } else {
      return WorkDone.buildError<R>('Unknown Error (1)')
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected async doGet<R> (serviceUri: string, params?: any, config?: AxiosRequestConfig): Promise<WorkDone<R>> {
    if (!serviceUri.startsWith('/')) {
      serviceUri = '/' + serviceUri
    }
    const runConfig = _merge({
      raxConfig: {
        retry: 5,
        noResponseRetries: 3
      }
    }, config, { params })
    try {
      const resp = await this._axiosInstance.get<WorkDone<R>>(`${this._serviceApiBaseUrl}${serviceUri}`, runConfig)
      return AbstractApiService._thenHandler(resp)
    }
    catch (err) {
      return AbstractApiService._catchHandler(err as AxiosError)
    }
  }

  protected async doPost<R> (serviceUri: string, params?: any, config?: AxiosRequestConfig): Promise<WorkDone<R>> {
    if (!serviceUri.startsWith('/')) {
      serviceUri = '/' + serviceUri
    }
    const runConfig = _merge({
      raxConfig: {
        retry: 5,
        noResponseRetries: 3
      }
    }, config)
    try {
      const resp = await this._axiosInstance.post<WorkDone<R>>(`${this._serviceApiBaseUrl}${serviceUri}`, params, runConfig)
      return AbstractApiService._thenHandler(resp)
    }
    catch (err) {
      return AbstractApiService._catchHandler(err as AxiosError)
    }
  }

  protected async doPut<R> (serviceUri: string, params?: any, config?: AxiosRequestConfig): Promise<WorkDone<R>> {
    if (!serviceUri.startsWith('/')) {
      serviceUri = '/' + serviceUri
    }
    const runConfig = _merge({
      raxConfig: {
        retry: 5,
        noResponseRetries: 3
      }
    }, config)
    try {
      const resp = await this._axiosInstance.put<WorkDone<R>>(`${this._serviceApiBaseUrl}${serviceUri}`, params, runConfig)
      return AbstractApiService._thenHandler(resp)
    }
    catch (err) {
      return AbstractApiService._catchHandler(err as AxiosError)
    }
  }
}
