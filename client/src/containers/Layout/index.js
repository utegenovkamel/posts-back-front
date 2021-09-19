import Navbar from 'containers/Navbar'
import React from 'react'

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)

export default Layout
