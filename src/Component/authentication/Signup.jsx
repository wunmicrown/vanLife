import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
const Signup = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const signup = () => {
   
      // toast("login succesful")
      navigate("/")
   
      // toast("invalid username or password")
  }
  return (
    <div className='all'>
      <center>
        <div className="box">
          <h1>Sign in to your account</h1>
          <div id="check"></div>
          <input type="text" placeholder='Email address'/>
          <input type="text" className='ck' placeholder='Password'/>
          <button className='btnn' onClick={signup}>Signup</button>
          <div className='loginDirectUser'>
          <p className=' font-semibold'>Don’t have an account? 
            <span className='text-[#FF8C38]'><Link>Create one now</Link></span>
          </p>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Signup