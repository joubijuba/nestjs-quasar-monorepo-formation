import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { boot } from 'quasar/wrappers'
import * as rax from 'retry-axios'
import { Router } from 'vue-router'
import { Store } from 'vuex'
import { CustomersApiService } from '../services/apis/customers-api.service'
import { RefsApiService } from '../services/apis/refs-api.service'
import { SpinnerActionsEnum } from '../store/spinner/actions'

let customersApiService: CustomersApiService
let refsApiService: RefsApiService
let axiosInstance: AxiosInstance

const initAxiosInstance = (store: Store<any>, router: Router) => {

  axiosInstance = axios.create({ baseURL: process.env.API_ORIGIN })

  // Ajout support du retry
  // @see https://github.com/JustinBeckwith/retry-axios
  axiosInstance.defaults.raxConfig = {
    instance: axiosInstance
  }
  rax.attach(axiosInstance)

  // Intercepteur permettant de gérer au mieux le spinner d'activité réseau
  axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    store.commit(SpinnerActionsEnum.INCREMENT_PENDING_REQUESTS)
    return config
  })

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      store.commit(SpinnerActionsEnum.DECREMENT_PENDING_REQUESTS)
      return response
    },
    ((error: AxiosError) => {
      store.commit(SpinnerActionsEnum.DECREMENT_PENDING_REQUESTS)
      // if (error && error.response && error.response.status === 401) {
      //   authApiService.logout();
      //   void router.push('/auth/login');
      // }
      return Promise.reject(error)
    })
  )

  // Request Interceptor
  // axiosInstance.interceptors.request.use(function (config: AxiosRequestConfig) {
  //   const boUser = sessionStorageService.getBsAuthUserData();
  //   if (boUser && boUser.accessToken) {
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //     config.headers.Authorization = `Bearer ${boUser.accessToken}`;
  //   }
  //   return config;
  // });
}

export default boot(({ store, router }) => {
  // Initialize the axios instance that will be used by all the API services
  initAxiosInstance(store, router)

  // Inject the services
  customersApiService = new CustomersApiService(axiosInstance, '/api/customers')
  refsApiService = new RefsApiService(axiosInstance, '/api/refs')
})

export {
  customersApiService,
  refsApiService
}
