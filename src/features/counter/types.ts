import { CounterActionsEnum } from './actionTypes'

interface IncrementCounterAction {
  type: typeof CounterActionsEnum.INCREMENT_COUNTER
}
interface ResetCounterAction {
  type: typeof CounterActionsEnum.RESET_COUNTER
}
export type CounterActionTypes = IncrementCounterAction | ResetCounterAction

export interface SystemState {
  count: {
    value: number
  }
}
