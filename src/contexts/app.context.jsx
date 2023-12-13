import { createContext, useState } from 'react'
// import { getAccessTokenFromLS, getInfoFromLS } from '../utils/auth'

const initialAppContext = {
  valueAddress: 'Vị trí',
  setValueAddress: () => null,
  valueQuery: {},
  setValueQuery: () => null
}

export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }) => {
  const [valueAddress, setValueAddress] = useState(initialAppContext.valueAddress)
  const [valueQuery, setValueQuery] = useState(initialAppContext.valueQuery)

  return (
    <AppContext.Provider
      value={{
        valueAddress,
        setValueAddress,
        valueQuery,
        setValueQuery
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
