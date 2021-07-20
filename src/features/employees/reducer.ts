import { EmployeesActionEnum } from './actionTypes'
import { EmployeesActionTypes } from './types'

const initialState = {
  list: [],
  currentPage: 0,
  isError: false,
  isLoading: false,
}

export default (state = initialState, action: EmployeesActionTypes) => {
  switch (action.type) {
    case EmployeesActionEnum.FETCH_EMPLOYEES:
      return { ...state, list: action.payload, isLoading: false }
    case EmployeesActionEnum.CHANGE_PAGE:
      return { ...state, currentPage: action.payload }
    case EmployeesActionEnum.START_FETCHING:
      return { ...state, isLoading: true }
    case EmployeesActionEnum.SET_ERROR:
      return { ...state, isError: true, isLoading: false }
    default:
      return state
  }
}
