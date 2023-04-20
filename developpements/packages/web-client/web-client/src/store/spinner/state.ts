export interface ISpinnerState {
  pendingRequests: number;
}

function state (): ISpinnerState {
  return {
    pendingRequests: 0
  }
}

export default state
