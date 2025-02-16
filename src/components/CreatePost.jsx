import React from 'react'
import { ActivityIcon, PhotoIcon, VideoIcon } from '../icons'
import Avatar from './Avatar'

export default function CreatePost() {
  return (
    <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <div className="flex gap-2">
        <Avatar 
          imgSrc='' 
          className='w-11 h11 rounded-full' 
        />
        <button className='btn flex-1 rounded-full justify-start'>
          What do you think?
        </button>
      </div>
      <div className="divider mt-1 mb-0"></div>
      <div className="flex gap-3 justify-between">
        <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
          <VideoIcon height="24" width="24" />
          Live /Stream
        </div>
        <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
          <PhotoIcon height="24" width="24" />
          Photo / Video
        </div>
        <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
          <ActivityIcon height="24" width="24" />
          Activity
        </div>
      </div>
    </div>
  </div>
  )
}
