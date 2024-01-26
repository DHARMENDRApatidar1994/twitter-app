import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox/TweetBox'
import Post from './Post/Post'

const Feed = () => {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    // const {data} =axios.get('http://localhost:5000/post')
    // console.log(data)
    fetch('http://localhost:5000/post')
    .then(res => res.json())
    .then(data => {
    setPosts(data)
  })
  },[posts])
  return (
    <div className='feed'>
    <div className="feed__headers">
                {/* <h2>Home</h2> */}
            </div>
    <TweetBox/>
    {
      posts.map(p=><Post key={p._id} p={p}/>)
    }
</div>
  )
}

export default Feed