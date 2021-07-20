import { CounterActionsEnum } from './actionTypes'
import { CounterActionTypes } from './types'

const initialState = {
  value: 0,
}

export default (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case CounterActionsEnum.INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 }
    case CounterActionsEnum.RESET_COUNTER:
      return { ...state, value: 0 }
    default:
      return state
  }
}
