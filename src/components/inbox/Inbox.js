import React from 'react'
import HomeNavigation from '../navigation/HomeNavigation'
import HomeContact from '../homeContact/HomeContact'
import './inbox.css'
const Inbox = () => {
  return (
    <div className='inbox'>
      <HomeNavigation/>
      <HomeContact/>
      <HomeContact/>
      <HomeContact/>
    </div>
  )
}

export default Inbox
