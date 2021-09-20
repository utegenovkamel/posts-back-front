import React from 'react'
import Navbar from 'containers/Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)

export default Layout
