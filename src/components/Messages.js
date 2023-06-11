import React from 'react'
import data from '../data.json'
import HomeContact from './homeContact/HomeContact'

const Messages = () => {
  const messagesdata = data.filter((currEle)=> {return currEle.message})
  
  return (
    <div>
      {
        messagesdata.map((currEle)=>{
          return(
            <HomeContact key={currEle.id} called = {currEle.timecalled} {...currEle}/>
          )
        })
      }
    </div>
  )
}

export default Messages
