import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from 'routes'
import GlobalStyle from 'globalStyles'
import { StateContext } from 'context/currentUser'
import FullPageLoading from 'containers/FullPageLoading'

const App = () => {
  const [updateContent, setUpdateContent] = useState(false)
  const [loading, setLoading] = useState(false)
  const stateContextValue = {
    updateContent,
    setUpdateContent,
    loading,
    setLoading,
  }

  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <StateContext.Provider value={stateContextValue}>
          <Routes />
        </StateContext.Provider>
      </BrowserRouter>
      <ToastContainer />
      <FullPageLoading loading={loading} />
    </React.StrictMode>
  )
}

export default App
