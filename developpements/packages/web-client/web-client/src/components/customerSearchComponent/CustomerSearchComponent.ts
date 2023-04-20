import {
  CodeLabelResultDto,
  CustomerSearchResultDto,
  IPaginatedListDto,
  IPagination,
  ISearchDto,
  ITEMS_PER_PAGE,
  mandatoryValidator,
  SearchCustomerDto,
  textValidatorToFixed2,
  textValidatorToFixed3,
  WorkDone
} from '@formation/shared-lib'
import { date } from 'quasar'
import {
  defineComponent,
  onBeforeMount,
  reactive,
  ref
} from 'vue'
import {
  customersApiService,
  refsApiService
} from '../../boot/api'
import {
  displayNotification,
  NotificationStatusEnum
} from '../../services/common/notification.service'
import formatDate = date.formatDate

/**
 * Composant permettant la détection des changement dans les form afin de gérer l'accès à certaine partie (ex: bouton rechercher)
 * @returns {{doOnFormChanged: (newValue: any) => void, resetFormChangedStatus: () => void, isFormChanged: () => boolean}}
 */
function defineFormChangedManager (): { doOnFormChanged: (newValue: any) => void; resetFormChangedStatus: () => void; isFormChanged: () => boolean } {
  const formChanged = ref(false)

  function doOnFormChanged (newValue: any) {
    formChanged.value = true
  }

  function isFormChanged () {
    return formChanged.value
  }

  function resetFormChangedStatus () {
    formChanged.value = false
  }

  return {
    doOnFormChanged,
    isFormChanged,
    resetFormChangedStatus
  }
}

export default defineComponent({
  name: 'CustomerSearchComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const formChangedManager = { ...defineFormChangedManager() }

    let allFichierPartenaires: CodeLabelResultDto[] = []

    onBeforeMount(async () => {
      const wd = await refsApiService.getAllFichierPartenaires()
      if (wd.isOk && !!wd.data) {
        allFichierPartenaires = wd.data
      } else {
        allFichierPartenaires = []
      }
    })

    const searchAllResponse = ref<IPaginatedListDto<CustomerSearchResultDto>>({ list: [], rowsNumber: 0 })

    // Define the initial state of the form
    const initialFormState: SearchCustomerDto = {
      codeFichierPartenaire: '',
      chronoClient: '',
      nom: '',
      prenom: '',
      codePostal: '',
      ville: '',
      dateDerniereCommandeFrom: undefined,
      dateDerniereCommandeTo: undefined
    }

    const initialPagination: IPagination = {
      sortBy: 'nom',
      descending: false,
      page: 1,
      rowsPerPage: ITEMS_PER_PAGE,
      rowsNumber: 0
    }

    // Initialize reactive form with its initial state
    const form = reactive({
      ...initialFormState
    })

    // Initialize reactive pagination with its initial state
    const pagination = ref({
      ...initialPagination
    })

    const rows = ref([])
    const loading = ref(false)

    let currentSearchParams: SearchCustomerDto = {
      codeFichierPartenaire: '',
      chronoClient: '',
      nom: '',
      prenom: '',
      codePostal: '',
      ville: '',
      dateDerniereCommandeFrom: undefined,
      dateDerniereCommandeTo: undefined
    }

    const columns = [
      {
        name: 'chronoClient',
        required: true,
        label: 'Chrono #',
        align: 'left',
        field: (row: CustomerSearchResultDto) => row.chronoClient,
        format: (val: string) => `${val}`,
        sortable: true
      },
      {
        name: 'prenom',
        required: true,
        label: 'Prénom',
        align: 'left',
        field: (row: CustomerSearchResultDto) => row.prenom,
        format: (val: string) => `${val}`,
        sortable: true
      },
      {
        name: 'nom',
        required: true,
        label: 'Nom',
        align: 'left',
        field: (row: CustomerSearchResultDto) => row.nom,
        format: (val: string) => `${val}`,
        sortable: true
      },
      {
        name: 'codePostal',
        required: true,
        label: 'CP',
        align: 'center',
        field: (row: CustomerSearchResultDto) => row.codePostal,
        format: (val: string) => `${val}`,
        sortable: true
      },
      {
        name: 'ville',
        required: true,
        label: 'Ville',
        align: 'left',
        field: (row: CustomerSearchResultDto) => row.ville,
        format: (val: string) => `${val}`,
        sortable: true
      },
      {
        name: 'dateDerniereCommande',
        required: false,
        label: 'Date de dernière commande',
        align: 'center',
        field: (row: CustomerSearchResultDto) => row.dateDerniereCommande,
        format: (val: string) => `${!!val ? formatDate(val, 'DD/MM/YYYY') : '---'}`,
        sortable: true
      }
    ]

    async function doPagination (props: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      pagination.value = props.pagination

      // get all rows if "All" (0) is selected
      pagination.value.rowsPerPage = pagination.value.rowsPerPage === 0 ? pagination.value.rowsNumber : pagination.value.rowsPerPage

      const searchAllParams = {
        criterias: currentSearchParams,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        pagination: pagination.value
      }

      await _doSearchAll(searchAllParams)
    }

    async function doSearchAll () {
      const searchAllParams: ISearchDto<SearchCustomerDto> = {
        criterias: {
          codeFichierPartenaire: form.codeFichierPartenaire,
          chronoClient: form.chronoClient,
          nom: form.nom,
          prenom: form.prenom,
          codePostal: form.codePostal,
          ville: form.ville,
          dateDerniereCommandeFrom: form.dateDerniereCommandeFrom,
          dateDerniereCommandeTo: form.dateDerniereCommandeTo
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        pagination: initialPagination
      }

      currentSearchParams = searchAllParams.criterias as SearchCustomerDto

      if (!doCheckForSearch(searchAllParams)) {
        displayNotification(NotificationStatusEnum.WARNING, `Entrez au moins un critère de recherche`)
        return
      }

      const wd = await _doSearchAll(searchAllParams)
      if (wd.isOk) {
        formChangedManager.resetFormChangedStatus()
      }
    }

    function doCheckForSearch (searchAllParams: ISearchDto<SearchCustomerDto>) {
      if (!!searchAllParams.criterias?.chronoClient || !!searchAllParams.criterias?.nom || !!searchAllParams.criterias?.prenom || !!searchAllParams.criterias?.codePostal || !!searchAllParams.criterias?.ville || !!searchAllParams.criterias?.dateDerniereCommandeTo || !!searchAllParams.criterias?.dateDerniereCommandeFrom) {
        return true
      }
      return false
    }

    async function _doSearchAll (searchAllParams: ISearchDto<SearchCustomerDto>): Promise<WorkDone<boolean>> {

      loading.value = true
      const wd = await customersApiService.getCustomerListByCriterias(searchAllParams)
      if (wd.isOk && !!wd.data) {
        searchAllResponse.value = wd.data

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        pagination.value.rowsNumber = wd.data.rowsNumber ?? searchAllParams.pagination.rowsNumber
      }
      loading.value = false
      // return WorkDone.toOkNotOk(wd)
      return WorkDone.buildOk(true)
    }

    // Reset the form to it's initial state
    function resetForm () {
      Object.assign(form, initialFormState)
    }

    const fichPartOptions = ref(allFichierPartenaires)

    function filterFichPart (val: string, update: any) {
      if (val === '') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        update(() => {
          fichPartOptions.value = allFichierPartenaires
        })
        return
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      update(() => {
        const needle = val.toLowerCase()
        fichPartOptions.value = allFichierPartenaires.filter(v => v.label.toLowerCase()
                                                                   .indexOf(needle) > -1)
      })
    }

    return {
      doSearchAll,
      resetForm,
      mandatoryValidator,
      textValidatorToFixed2,
      textValidatorToFixed3,
      doPagination,
      searchAllResponse,
      form,
      columns,
      rows,
      loading,
      pagination,
      fichPartOptions,
      filterFichPart,
      ...formChangedManager
    }
  }
})
