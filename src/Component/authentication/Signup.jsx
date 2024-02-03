import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa'; // Import icons
import { AiOutlineCheck } from 'react-icons/ai';
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [message, setMessage] = useState('');

  const signup = (e) => {
    e.preventDefault();

    if (!email || !username || !password || !confirmPassword || !acceptTerms) {
      setMessage('Please fill in all fields and accept terms & conditions');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
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
    <div className='min-h-screen bg-[#faf0e2] flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='text-center text-3xl font-extrabold text-gray-900'>Sign up for an account</h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md mx-10'>
        <div className='bg-[#FFF7ED] py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={signup}>
          {message && (
              <div className={`text-center mt-4 text-lg ${message === 'Signup successful' ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </div>
            )}
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <div className='mt-1'>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    <FaEnvelope />
                  </span>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                Username
              </label>
              <div className='mt-1'>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    <FaUser />
                  </span>
                  <input
                    id='username'
                    name='username'
                    type='text'
                    autoComplete='username'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    <FaLock />
                  </span>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='new-password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
                Confirm password
              </label>
              <div className='mt-1'>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    <FaLock />
                  </span>
                  <input
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    autoComplete='new-password'
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <input
                id='acceptTerms'
                name='acceptTerms'
                type='checkbox'
                required
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              <label htmlFor='acceptTerms' className='ml-2 block text-sm text-gray-900'>
                I accept the <Link to="/terms" className="text-orange-600">Terms and Conditions</Link>
              </label>
            </div>

            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign Up
              </button>
            </div>

            

          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
