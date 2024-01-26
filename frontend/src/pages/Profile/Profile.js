import React from 'react'
import '../Page.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import MainProfile from './MainProfile/MainProfile'
import auth from '../../firebase.init'


const Profile = () => {
  const [ user ] = useAuthState(auth);
  return (
    <div className='profilePage'>
    <MainProfile user={user} />
</div>
  )
}

export default Profile