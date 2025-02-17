import React from 'react'
import { PhotoIcon } from '../icons'
import Avatar from './Avatar'
import useUserStore from '../stores/userStore'

export default function PostForm() {
  const user = useUserStore(state => state.user)
  return (
    <div className="flex flex-col gap-2">
      
    <h3 className="text-xl text-center">Create post</h3>
    <div className="divider mt-1 mb-0"></div>
    <div className="flex gap-2">
      <Avatar
        className='w-11 h-11 rounded-full'
        imgSrc={user.profileImage}
      />
      <div className="flex flex-col">
        <div className="text-sm">{user.firstName} {user.lastName}</div>
        <select className="select bg-slate-200 select-xs w-full max-w-xs"
          defaultValue={'who can see?'}
        >
          <option disabled>who can see?</option>
          <option>public</option>
          <option>friends</option>
        </select>
      </div>
    </div>
    <textarea className="textarea textarea-ghost"
      placeholder={`what do you think? ${user.firstName}`}
      rows={2}
    ></textarea>

    <div className="flex border rounded-lg p-2 justify-between items-center">
      <p>add with your post</p>
      <div className="flex gap-2">
        <div
          className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 
          flex justify-center items-center active:scale-110">
          <PhotoIcon className="w-7 h-7" />
        </div>
      </div>
    </div>
    <button className={`btn btn-sm ${ true ? 'btn-primary' : 'btn-disabled'}`} >Create Post</button>
  </div>
  )
}
