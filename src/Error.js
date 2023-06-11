import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Error = () => {
  return (
    <div >
      <h1>Error Occured</h1>

      <Link to='/'><button >Go to Home Page</button></Link>
    </div>
  )
}

export default Error
