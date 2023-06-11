import React from 'react'
import './rightbar.css'
import HomeNavigation from '../navigation/HomeNavigation'


import { Outlet } from 'react-router-dom'
const Rightbar = () => {
  
  return (
    <section className='rightbar'>
      <HomeNavigation/>
      <div className='right-contacts'>

      <Outlet />
      </div>
    </section>
  )
}

export default Rightbar
