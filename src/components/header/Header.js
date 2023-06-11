import React from 'react'
import './header.css'

import { IoIosCall  } from "react-icons/io";
import {BsChatLeft , BsCameraVideo , BsCalendar4Event , BsThreeDotsVertical} from 'react-icons/bs';
import {BiLeftArrowAlt , BiRightArrowAlt , BiSearch} from 'react-icons/bi'
import { GrRefresh } from "react-icons/gr";
import {FiSettings} from 'react-icons/fi';
import {HiChatBubbleLeftRight} from 'react-icons/hi2'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className='header'>
      <div className="header-left">
        <HiChatBubbleLeftRight className='header-icon logo'/>
        <NavLink className='navlink' to='/dialpad'><div className='header-icon call-icon'> <IoIosCall/></div></NavLink>
        <div className='header-icon'><BsChatLeft/></div>
        <div className='header-icon'><BsCameraVideo/></div>
        
       
      </div>
      <div className="header-middle">
        <BiLeftArrowAlt className='header-icon'/>
        <BiRightArrowAlt className='header-icon'/>
        <GrRefresh className='header-icon'/>
          <div className="search-bar">
            <BiSearch className='header-icon input-search-icon'/>
          <input className='search-bar-input' type='text' placeholder='Search Dialpad'/>
        </div>
      </div>
      <div className="header-right">
        <FiSettings className='header-icon'/>
        <BsCalendar4Event className='header-icon'/>
        <div className="profile-icon">
          <p className='profile-icon-text'>R</p>
        </div>
        <BsThreeDotsVertical className='header-icon'/>
      </div>

    </section>
  )
}



export default Header
