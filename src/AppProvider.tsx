import React from 'react'
import { Provider } from 'react-redux'
import globalStore from './states'
import { BrowserRouter } from 'react-router-dom'

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={globalStore}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}

export default AppProvider
