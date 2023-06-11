import React, { useState } from 'react'
import './contact.css'
import {AiFillCaretDown , AiOutlineCloseCircle} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const [dailNumber , setDailNumber] = useState('');
  const appendNumber = (digit) =>{
    setDailNumber(prevNumber => prevNumber + digit)
  }
  return (
    <section className='contactContainer' >
      <div className="innerContainer">
        <div className="call-from">
            <p style={{fontSize:"10px"}}>NEW CALL FROM</p>
            <div className="shadow-properties">
                <div className='profile-icon'>SP</div>
                <h5>Shadow Properties</h5>
                <AiFillCaretDown/>
            </div>
            <div className='caller-id-display'>
                <p>Your caller id displays as <span><b>(202) 944-6641</b></span>.</p>
                <p className='change' >Change</p>
            </div>
        </div>
        <div className="contact-input-search">
            <BiSearch className='dialpad-search-icon'/>
            <input className='dialpad-search' type='text'
             placeholder='type a name or number' value={dailNumber}/>
        </div>
        <div className="recent-calls-icon">
            <div className='caller-icon'>P</div>
            <div className='profile-icon'>#</div>
            <div className='profile-icon'>U</div>
            <div className='profile-icon'>#</div>
            <div className='profile-icon'>P</div>
            <div className='profile-icon'>RR</div>
        </div>
        <div className="dial-pad">
            <div className="keypad">
                <button className='key' onClick={()=>appendNumber('1')}>1</button>
                <button className='key' onClick={()=>appendNumber('2')}>2<span>ABC</span></button>
                <button className='key' onClick={()=>appendNumber('3')}>3<span>DEF</span></button>
                <button className='key' onClick={()=>appendNumber('4')}>4<span>GHI</span></button>
                <button className='key' onClick={()=>appendNumber('5')}>5<span>JKL</span></button>
                <button className='key' onClick={()=>appendNumber('6')}>6<span>MNO</span></button>
                <button className='key' onClick={()=>appendNumber('7')}>7<span>PQRS</span></button>
                <button className='key' onClick={()=>appendNumber('8')}>8<span>TUV</span></button>
                <button className='key' onClick={()=>appendNumber('9')}>9<span>WXYZ</span></button>
                <button className='key' onClick={()=>appendNumber('*')}>*</button>
                <button className='key' onClick={()=>appendNumber('0')}>0<span>+</span></button>
                <button className='key' onClick={()=>appendNumber('#')}>#</button>
            </div>
        </div>
      </div>
      <NavLink to='/'>
      <div className="close-icon" >
        <AiOutlineCloseCircle/>
      </div>
      </NavLink>
    </section>
  )
}

export default Contact
