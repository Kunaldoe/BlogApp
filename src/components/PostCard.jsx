import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config.js'
function PostCard({
    $id,title,featuredImage
}) {
  return (
    <Link to={`/post/${$id}`} >
        <div className='w-full justify-center mb-4'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </Link>
  )
}

export default PostCard
