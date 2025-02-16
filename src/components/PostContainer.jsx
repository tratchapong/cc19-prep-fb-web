import React from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'

export default function PostContainer() {
  return (
    <>
      <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-red-100">
        <CreatePost />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </>
  )
}
