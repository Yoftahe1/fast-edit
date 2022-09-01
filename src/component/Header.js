import React, { useContext } from 'react'
import storeContext from '../store/Store'

const Header = () => {
    const storeCtx=useContext(storeContext) 
  return (
    <>
        <div className="header">
          <h2>FAST EDIT</h2>
          <button className="export-button" onClick={storeCtx.isExportingHandler}>
            EXPORT
          </button>
        </div>
    </>
  )
}

export default Header