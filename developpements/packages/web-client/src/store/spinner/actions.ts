import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ISpinnerState } from './state'

export enum SpinnerActionsEnum {
  INCREMENT_PENDING_REQUESTS = 'spinner/incrementPendingRequests',
  DECREMENT_PENDING_REQUESTS = 'spinner/decrementPendingRequests'
}

const actions: ActionTree<ISpinnerState, StateInterface> = {
  incrementPendingRequests ({ commit }) {
    commit('incrementPendingRequests')
  },
  decrementPendingRequests ({ commit }) {
    commit('decrementPendingRequests')
  }
}

export default actions
