import React, { useState } from 'react'
import logo from '../../assets/images/twitter logo.svg'
import auth from '../../firebase.init'
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
const Signup = () => {

    const [username,setUsername] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const [error,setError] = useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(
        auth);

      if(user || googleUser){
        navigate('/')
        console.log(user)
        console.log(googleUser)
      }
      if(error){
        console.log(error.message)
      }if(loading){
        console.log("loading....")
      }

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(email,password)
        createUserWithEmailAndPassword(email,password);

        const user = {
          username: username,
          name: name,
          email: email,
        }
      //  axios.post('http://localhost:5000/register',user)
       axios.post('https://twitter-app-ruby.vercel.app/register',user)
       
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle();
    }
  return (
    
         <div className='Login-container'>
       <div className="image-container">
        <img className='image' src={logo} alt="" />
       </div>
       <div className="form-container">
        <div className='form-box'>
        <i class="Twitter-img ri-twitter-fill"></i>
    <h1 className='heading'>Happening now</h1>
    <h3 className='heading1'>Join twitter today</h3>
   
    <form onSubmit={handleSubmit} >
    <input 
        
        type="text"
        className='display-name'
        placeholder='@username'
        onChange={(e)=>setUsername(e.target.value)}
         />
         <input 
        
        type="text"
        className='display-name'
        placeholder='Enter full name'
        onChange={(e)=>setName(e.target.value)}
         />
        <input 
        
        type="email"
        className='email'
        placeholder='email address'
        onChange={(e)=>setEmail(e.target.value)}
         />
        <input 
        type="password"
        className='password'
        placeholder='password'
        onChange={(e)=>setPassword(e.target.value)}
         />
        <div className='btn-login'>
            <button type='submit' className='btn'>Sign up</button>
        </div>
    </form>
    </div>
    <hr />
    <div className='google-button'>
        <GoogleButton
        className='g-btn'
        type='light'
        onClick={handleGoogleSignIn}
        />
    </div>
    <div style={{ marginTop:"2vmax"}}>
        Already have an account? <Link  to='/login'
        style={{
            textDecoration:"none",
            color:"skyblue",
            fontWeight:"600",
            margin:"5px"
        }}
         >Login</Link>
    </div>
       </div>
       </div>

   
  )
}

export default Signup