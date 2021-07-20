import { EmployeesActionEnum } from './actionTypes'

interface FetchEmployeesAction {
  type: typeof EmployeesActionEnum.FETCH_EMPLOYEES
  payload: any
}
interface ChangePageAction {
  type: typeof EmployeesActionEnum.CHANGE_PAGE
  payload: number
}
interface StartFetchingAction {
  type: typeof EmployeesActionEnum.START_FETCHING
}
interface SetErrorAction {
  type: typeof EmployeesActionEnum.SET_ERROR
}

export type EmployeesActionTypes =
  | FetchEmployeesAction
  | ChangePageAction
  | SetErrorAction
  | StartFetchingAction

export interface EmployeesState {
  employees: {
    list: Array<{}>
    currentPage: number
    isError: boolean
    isLoading: boolean
  }
}
