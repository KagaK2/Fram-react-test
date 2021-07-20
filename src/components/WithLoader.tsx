import React from 'react'

const WithLoader = (
  Component: React.FC<any>,
  isLoading: boolean,
  isError: boolean
) => {
  if (isError) {
    return <div>An error has occured</div>
  }
  if (isLoading) {
    return (
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
    )
  }
  return <Component />
}

export default WithLoader
