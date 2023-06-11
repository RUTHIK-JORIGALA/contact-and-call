import React from 'react'
import './home.css'
import Leftbar from '../leftbar/Leftbar'
import Rightbar from '../rightbar/Rightbar'

const Home = () => {

  return (
    <div className='home'>
      <Leftbar/>
      
      <Rightbar/>
    </div>
  )
}

export default Home
