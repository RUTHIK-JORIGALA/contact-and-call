import React from 'react'
import './homeNavigation.css'
import { NavLink } from 'react-router-dom'

const HomeNavigation = () => {
  

  return (
    <div className='homeNavigation'>
        <NavLink to='/unread' className='navlink homeNavLink'>Unread</NavLink>
        <NavLink to='/' className='navlink homeNavLink'>All</NavLink>
        <NavLink to='/calls' className='navlink homeNavLink'>Calls</NavLink>
        <NavLink to='/missed' className='navlink homeNavLink' >Missed</NavLink>
        <NavLink to='/meetings' className='navlink homeNavLink'>Meetings</NavLink>
        <NavLink to='/voicemails' className='navlink homeNavLink'>Voicemails</NavLink>
        <NavLink to='/recordings' className='navlink homeNavLink'>Recordings</NavLink>
        <NavLink to='/messages' className='navlink homeNavLink'>Messages</NavLink>
        <NavLink to='/starred' className='navlink homeNavLink'>Starred</NavLink>
        <NavLink to='/spam' className='navlink homeNavLink'>Spam</NavLink>
      
    </div>
  )
}

export default HomeNavigation
