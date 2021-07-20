import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionTypes, selectors } from '../../features/counter'

const Counter: React.FC = () => {
  const count = useSelector(selectors.getCountValue)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Counter component</span>
              <h4>
                Counter: <strong>{count}</strong>
              </h4>
            </div>
            <div className="card-action">
              <div className="group">
                <button
                  className="waves-effect waves-teal btn-flat red"
                  type="button"
                  data-qa="reset-counter"
                  onClick={() =>
                    dispatch({
                      type: actionTypes.CounterActionsEnum.RESET_COUNTER,
                    })
                  }
                >
                  Reset
                </button>
                <button
                  className="waves-effect waves-teal btn-flat blue"
                  type="button"
                  data-qa="increment-counter"
                  onClick={() =>
                    dispatch({
                      type: actionTypes.CounterActionsEnum.INCREMENT_COUNTER,
                    })
                  }
                >
                  increment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Counter
