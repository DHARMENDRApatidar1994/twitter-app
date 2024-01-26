
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';
import Feed from './pages/feed/Feed';
import Explore from './pages/Explore/Explore';
import Notification from './pages/Notification/Notification';
import Message from './pages/Messages/Message';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import List from './pages/List/List';
import Profile from './pages/Profile/Profile';
import More from './pages/More/More';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}>
      <Route index element={<Feed/>}/>
      </Route>
    <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}>
      <Route path='feed' element={<Feed/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='notifications' element={<Notification/>}/>
      <Route path='message' element={<Message/>}/>
      <Route path='bookmarks' element={<Bookmarks/>}/>
      <Route path='list' element={<List/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='more' element={<More/>}/>
      </Route>


    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/page-loading' element={<PageLoading/>}/>

   </Routes>
   </BrowserRouter>
    
    </div>
  );
}

export default App;
