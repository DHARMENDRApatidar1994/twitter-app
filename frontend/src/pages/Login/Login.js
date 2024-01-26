import React, { useState } from 'react'
import logo from '../../assets/images/twitter logo.svg'
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error,setError] = useState('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(
        auth);

    if (user || googleUser) {
        navigate('/')
        console.log(user)
        console.log(googleUser)
    }
    if (error) {
        console.log(error.message)
    } if (loading) {
        console.log("loading....")
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div className='Login-container'>
            <div className="image-container">
                <img className='image' src={logo} alt="" />
            </div>
            <div className="form-container">
                <div className='form-box'>
                <i className="Twitter-img ri-twitter-fill"></i>
                    <h1 className='heading'>Happening now</h1>
                    <h3 className='heading1'>What happening today</h3>
                    <form onSubmit={handleSubmit} >
                        <input

                            type="email"
                            className='email'
                            placeholder='email address'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className='password'
                            placeholder='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='btn-login'>
                            <button type='submit' className='btn'>Login</button>
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
                    Don't have an account? <Link to='/signup'
                        style={{
                            textDecoration: "none",
                            color: "skyblue",
                            fontWeight: "600",
                            margin: "5px",
                           
                        }}
                    >Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login