import React, { useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { configuredApi } from '../configs/axiosConfig.js';
import { useAuth } from '../context/AuthContext.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login() {
  const {login}=useAuth();

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function loginService(e) {
    e.preventDefault();
    try {
      setLoading(true);
  
      // Send login data to the Firebase Cloud Function
      const response = await axios.post(
        "https://us-central1-hyperform-6137a.cloudfunctions.net/api/login",
        // Replace YOUR_FIREBASE_CLOUD_FUNCTION_URL with the actual URL generated after deploying your Cloud Functions
        {
          email,
          password,
        }
      );
  
      const loggedUser = response.data;
      setLoading(false);
      toast.success('Welcome back, ' + loggedUser.fName + '!',{autoClose: 1200,});
      login(loggedUser);
      navigate('/products');
    } catch (err) {
      const res = err.response;
      // console.log('The server returned the following error: ' + res.data);
      toast.error(res.data);
      setLoading(false);
    }
  }
  

  return (
    <div className={`duration-200 h-[100svh] flex justify-center items-center ${isFocused ? 'backdrop-blur-md' : ''}`}>
      <motion.div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="bg-gray-900 p-6 rounded-md border-2 border-yellow-400 focus-within:border-4 transform  w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 transition-all -mt-36"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <form ref={form} onSubmit={loginService} className="text-white ">
          <label className="block mb-2 font-bold text-lg">Email</label>
          <input type="email" name="user_email" className="bg-gray-800 p-2 rounded w-full mb-4 text-center" autoFocus={true} onChange={(e) => setEmail(e.target.value)} />

          <label className="block mb-2 font-bold text-lg">Password</label>
          <input type="password" name="user_password" className="bg-gray-800 p-2 rounded w-full mb-4 text-center" onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="bg-red-700 py-2 px-4 rounded text-white hover:bg-red-600 transition duration-300 ease-in-out">
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <h2
          className='text-white pt-3 font-montserrat hover:text-yellow-300 hover:font-semibold cursor-pointer transition-colors duration-500'
          onClick={() => navigate('/register')}
          >
          Not a member yet? Sign up here!
        </h2>
      </motion.div>
    </div>
  );
}

export default Login;
