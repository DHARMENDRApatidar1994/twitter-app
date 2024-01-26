import React from 'react'
import Sidebar from './sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
// import Feed from './feed/Feed'
import Widgets from './widgets/Widgets'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import auth from '../firebase.init'


const Home = () => {
  const user = useAuthState(auth)
  // console.log(user[0]?.email);
 

  const handleLogout = ()=>{
    signOut(auth)
  }
  return (
    <div className='app'>
       <Sidebar handleLogout={handleLogout} user={user}/>
       <Outlet/>
       <Widgets/>
    </div>
  )
}

export default Home