import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import "../authentication/login.css"
const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const sup = () => {
   
      toast("login succesful")
      navigate("/home")
   
      // toast("invalid username or password")
  }
  return (
    <div className='all'>
      <center>
        <div className="box">
          <h1>Sign in to your account</h1>
          <div id="check"></div>
          <input type="text" />
          <input type="text" className='ck' />
          <button className='btnn' onClick={sup}>login</button>
        </div>
      </center>
    </div>
  )
}

export default Login