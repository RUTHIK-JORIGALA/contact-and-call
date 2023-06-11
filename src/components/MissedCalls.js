import React ,{useContext}from 'react'
import { DataContext } from './Context'

import HomeContact from './homeContact/HomeContact'
const MissedCalls = () => {
  const userData = useContext(DataContext);
    const {data} = userData;
  const missedcal = data.filter((curEle)=>{
    return curEle.missedcall
  })
  
  return (
    <div>
      {
        missedcal.map((currEle)=>{
          return(
            <HomeContact key={currEle.id} called = {currEle.timecalled} {...currEle}/>
          )
        })
      }
      
    </div>
  )
}

export default MissedCalls
