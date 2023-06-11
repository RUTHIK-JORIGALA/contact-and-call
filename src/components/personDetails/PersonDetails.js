import React from 'react'
import './personDetails.css'
import {RxPerson}from 'react-icons/rx';


function PersonDetails({name , mobileno}) {
    // console.log(mobileno);
    // const personName = "Ariane Wolgamot";
    let personName;
    let Icon ='';
    let matches;
    if(name ===""){
      personName = mobileno;

    }
    else{
     personName=name;
     
      }

      try{

        // Getting icon from the name
        
        const contactIcon = personName.split(' ') || personName;
        
        contactIcon.map((ele)=>Icon+=ele.slice(0,1));
        // Regular expression to check name format
        const regex = /[a-zA-Z]+/;
       
         matches = personName.search(regex);  
       }catch(e){
         console.log(e);
       }
      


    
    
    
  return (
    <div className='personal-details'>
      <div className="contact-icon">
        {
            matches !== -1 ? <p className='contact-icon-letter'>{Icon}</p> : <RxPerson/>
        }
       
        
      </div>
      <div className="contact-details">
        <p >{personName}</p>
      </div>
    </div>
  )
}

export default PersonDetails;
