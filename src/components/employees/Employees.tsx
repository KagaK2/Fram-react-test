import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEmployees } from '../../api'
import { actionTypes, selectors } from '../../features/employees'
import { EmployeesActionEnum } from '../../features/employees/actionTypes'

const Employees: React.FC = () => {
  const employees = useSelector(selectors.getEmployeesList)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchEmployees = async () => {
      dispatch({
        type: actionTypes.EmployeesActionEnum.START_FETCHING,
      })
      const response = await getEmployees()
      if (response.type === 'SUCCESS') {
        dispatch({
          type: actionTypes.EmployeesActionEnum.FETCH_EMPLOYEES,
          payload: response.response?.data,
        })
      } else {
        dispatch({
          type: actionTypes.EmployeesActionEnum.SET_ERROR,
        })
      }
    }
    fetchEmployees()
  }, [])

  const renderTableByPage = (page: number) => {
    return employees.list.slice(page * 5, page * 5 + 5).map((employee: any) => (
      <tr key={employee.id}>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.position}</td>
      </tr>
    ))
  }

  return (
    <>
      {employees.isError && <div>An error has occured</div>}
      {employees.isLoading ? (
        <div className="row">
          <div className="col s2 offset-s5">
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <h2>Employees</h2>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>
              {renderTableByPage(employees.currentPage)}
              <tr>
                <td>+ New</td>
              </tr>
            </tbody>
          </table>
          <div className="col s3 offset-s9">
            <button
              type="button"
              className="btn col s4"
              disabled={employees.currentPage < 1}
              onClick={() => {
                dispatch({
                  type: EmployeesActionEnum.CHANGE_PAGE,
                  payload: employees.currentPage - 1,
                })
              }}
            >
              Prev
            </button>
            <div className="col s4 valign-wrapper">
              <h6 className="col s12 center-align">{employees.currentPage}</h6>
            </div>
            <button
              type="button"
              className="btn col s4"
              disabled={
                employees.currentPage ===
                Math.floor(employees.list.length / 5) - 1
              }
              onClick={() => {
                dispatch({
                  type: EmployeesActionEnum.CHANGE_PAGE,
                  payload: employees.currentPage + 1,
                })
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default Employees
