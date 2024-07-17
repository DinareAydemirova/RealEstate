import React from 'react'
import Header from './Header/Index'
import Footer from './Footer/Index'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout