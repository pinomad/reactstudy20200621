import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
const Context = createContext()

//컨텍스트란... 전역에서 사용할것들 만들어두는것

//최상단에서 감싸는것
export function BoxContextProvider({ children }) {
  const [boxInfo, setBoxInfo] = useState({
    width: '100',
    height: '100',
    color: 'hotpink',
  })
  return (
    <Context.Provider value={{ boxInfo, setBoxInfo }}>
      {children}
    </Context.Provider>
  )
}

export function useBoxContext() {
  /**
   * 사용하는 쪽에서 쓰는것
   */
  return useContext(Context)
}

BoxContextProvider.propTypes = {
  children: PropTypes.node,
}
