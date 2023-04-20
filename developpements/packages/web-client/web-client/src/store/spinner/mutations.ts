import { MutationTree } from 'vuex'
import { ISpinnerState } from './state'

const mutation: MutationTree<ISpinnerState> = {
  incrementPendingRequests (state: ISpinnerState) {
    state.pendingRequests++
  },
  decrementPendingRequests (state: ISpinnerState) {
    state.pendingRequests--
  }
}

export default mutation
