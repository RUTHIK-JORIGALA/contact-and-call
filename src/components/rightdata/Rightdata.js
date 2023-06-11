import React ,{useContext}from 'react'
import HomeContact from '../homeContact/HomeContact'
import { DataContext } from '../Context'

function Rightdata() {
    const userData = useContext(DataContext);
    const {data } = userData;

  return (
    <div>
      <div className="right-contacts">

        {
          data.map((currEle)=>{
            return(
              <HomeContact key={currEle.id} called = {currEle.timecalled} {...currEle}/>
              )
            })
        }
        </div>
    </div>
  )
}

export default Rightdata
