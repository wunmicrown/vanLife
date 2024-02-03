import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const signup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Please fill in all fields');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    const isExistingEmail = false;
    if (isExistingEmail) {
      setMessage('Email already in use');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    setMessage('Signup successful');
    setTimeout(() => {
      setMessage('');
      navigate("/home");
    }, 3000);
  };

  return (
    <div className='all'>
      <center>
        <div className="box">
          <h1>Sign in to your account</h1>
          <div id="check"></div>
          <form onSubmit={signup}>
            <input
              type="text"
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className='ck'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className='btnn bg-orange-600'>Signup</button>
            <div className='loginDirectUser'>
              <p className=' font-semibold'>Don’t have an account?
                <span className='text-[#FF8C38]'><Link to="/signup">Create one now</Link></span>
              </p>
            </div>
          </form>
          {message && (
            <div className={`message ${message === 'Signup successful' ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
        </div>
      </center>
    </div>
  );
}

export default Signup;
