import React from 'react'
import { useSelector } from 'react-redux'

const Feed = () => {
    const user = useSelector((store)=> store.user)
    
  return (
    <>
    {user && <div>
      <h1>Loading feed....</h1>
    </div>}
    </>
  )
}

export default Feed
