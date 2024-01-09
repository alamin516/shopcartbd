import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>

      <div>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
      
    </>
  )
}

export default MainLayout