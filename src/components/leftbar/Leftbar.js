import React, { useContext, useState } from 'react'
import './leftbar.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineInbox ,AiOutlineDown , AiOutlineUp} from "react-icons/ai";
import { MdOutlineContacts } from "react-icons/md";
import {BsThreeDotsVertical } from 'react-icons/bs'

import PersonDetails from '../personDetails/PersonDetails';
import { DataContext } from '../Context';
const Leftbar = () => {
    const userData = useContext(DataContext);
    const {data} = userData;
    const [recentList, setRecentList] = useState(true); 
    const handleRecentToggle = () =>{
        setRecentList(!recentList);
        // console.log("Toggled");
    }
  return (
    <section className='leftbar'>
      <div className="leftbar-container">
        <div className='leftbar-sub-container'>
            <NavLink className='navlink align-center' to='/inbox'><AiOutlineInbox className='leftbar-icon'/><p>Inbox</p></NavLink>
        </div>
        <div className='leftbar-sub-container'>
            <NavLink className='navlink align-center' to='contact'><MdOutlineContacts className='leftbar-icon'/><p>Contacts</p></NavLink>
        </div>
        <div className='leftbar-sub-container '>
            <span className='leftbar-icon'>#</span><p>All Channels</p>
        </div>
        <div className="sub-heading">
            <div className='recents'>
                <AiOutlineDown className='leftbar-icon arrow-icon'/>
                <p>Departments</p>
            </div>
        </div>
        <div className='leftbar-sub-container '>
            <div className='leftbar-icon shadow-icon'></div>
            <p>shadow properties</p>
        </div>
        <div className="sub-heading">
            <div className='recents'>
                <div onClick={handleRecentToggle}>{

                recentList ?<AiOutlineUp className='leftbar-icon arrow-icon'  />: <AiOutlineDown className='leftbar-icon arrow-icon'  />
                }
                </div>
                
                <p>Recents</p>
            </div>
            <div>
                <BsThreeDotsVertical/>
            </div>
        </div>
        {
            recentList ? data.map((curEle)=>{
            return(

                <PersonDetails key={curEle.id} name={curEle.name} mobileno={curEle.mobileno}/>
            )
        }) : ""
        }
        
        
       
       
      </div>
    </section>
  )
}

export default Leftbar
