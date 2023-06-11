import React from 'react'
import './homeContact.css'

import PersonDetails from '../personDetails/PersonDetails';


const HomeContact = (props) => {
  console.log(props);
const {called , name , mobileno , missedcall , hungup , message , outbond , cancelled} = props;
  return (
    <div className='homeContact'>
       <div className='homeContactLeft'>
            
        <PersonDetails name ={name} mobileno={mobileno}  />
        <div className="callStatus">
            
            {
              missedcall && <p className='missed-call'>Missed call and voice mail</p>
            }
            {
              hungup && <p className='hung-up'>Caller hung up</p>
            }
            {
              message && <p>{message.slice(0,102)}...</p>
            }
            {
             outbond && <p>Outbond / {outbond}</p> 
            }
            {
              cancelled && <p>Cancelled call</p>
            }
        </div>
       </div>
        <div className="callTime">
            <p>{called}</p>
        </div>
    </div>
  )
}

export default HomeContact
