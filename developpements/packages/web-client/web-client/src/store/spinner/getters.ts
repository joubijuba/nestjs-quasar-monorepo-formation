import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ISpinnerState } from './state'

const getters: GetterTree<ISpinnerState, StateInterface> = {
  pendingRequests (state: ISpinnerState): number {
    return state.pendingRequests
  },
  isLoading (state: ISpinnerState): boolean {
    return state.pendingRequests > 0
  }
}

export default getters
