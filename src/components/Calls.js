import React, { useContext } from 'react'
import { DataContext } from './Context'
import HomeContact from './homeContact/HomeContact';

function Calls() {
    const userData = useContext(DataContext);
    const {data} = userData;
    const outbondData = data.filter((currEle)=>{
        return currEle.outbond
    })
  return (
    <div>
        {
            outbondData.map((currEle)=>{
                return(
                    <HomeContact key={currEle.id} called = {currEle.timecalled} {...currEle}/>
                )
            })
        }
      
    </div>
  )
}

export default Calls
