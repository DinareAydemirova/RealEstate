import React from 'react'
import Header from './Header/Index'
import Footer from './Footer/Index'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from './ScrollToTopButton/İndex'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
        <ScrollToTopButton/>
    </div>
  )
}

export default Layout