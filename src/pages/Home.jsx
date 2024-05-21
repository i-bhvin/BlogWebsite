import React from 'react'
import appwriteService from "../appwrite/config"
import { useState } from 'react'
import { useEffect } from 'react'
import Container from '../components/container/Container'
import PostCard from "../components/PostCard"
import { useSelector } from 'react-redux'

function Home() {

  const [posts, setPosts] = useState([])
  const authStatus = useSelector(state => state.auth.status);

  useEffect(() => {
    if(authStatus){
      appwriteService.getPosts([]).then((posts) => {
        if (posts) {  
          setPosts(posts.documents)
        }
      })
    }
  }, [authStatus])
  if (!authStatus) {
    return (
      <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          <h1 className='text-2xl font-semibold'>Login to read posts</h1>
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {posts.length ? posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          )) : "No Posts"}
        </div>
      </Container>
    </div>
  )
}

export default Home