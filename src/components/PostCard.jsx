import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl px-3 pt-3 pb-2'>
            <div className='w-full justify-center mb-1'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h3
            className='text-l font-bold  rounded-xl pb-2'
            >{title}</h3>
        </div>
    </Link>
  )
}


export default PostCard