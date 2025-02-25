import React from "react";
import Avatar from "./Avatar";
import { CloseIcon, CommentIcon, LikeIcon, ShareIcon, ThreeDotIcon } from "../icons";
import postPic from "../assets/post-pic.jpg";
import CommentContainer from "./CommentContainer";

export default function PostItem() {
  return (
    <div className="card bg-base-100 shadow-xl p-1 pb-2">
      <div className="card-body p-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar imgSrc={""} className="w-11 h11 rounded-full" />
            <div className="flex flex-col">
              <p className="font-bold">Someone Codecamp</p>
              <p className="text-xs font-bold opacity-50">1d ago</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="">
                <div className="avatar items-center cursor-pointer ">
                  <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                    <ThreeDotIcon className="w-6" />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a>Delete</a>
                </li>
              </ul>
            </div>
            <div className="avatar items-center cursor-pointer dropdown">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                <CloseIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>This is a message</p>
      <img
        src={postPic}
        alt="post-pic"
        className="p-4 max-h-[500px] object-contain"
      />
      <div className="flex justify-between items-center pe-4">
        <div className="avatar items-end cursor-pointer gap-1">
          <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
            <LikeIcon className="w-5" />
          </div>
          <p>99 likes</p>
        </div>
        <div className="flex gap-2">
          <p className="opacity-60"> {4} comments</p>
        </div>
      </div>
      <div className="divider h-0 my-0"></div>
      <div className="flex gap-3 justify-between">
					<div className={`flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2
							${false ? 'bg-blue-300 text-white' : ''}`}
					>
						<LikeIcon className='w-6 ' />
						Like
					</div>
					<div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
						<CommentIcon className='w-7' />
						Comment
					</div>
					<div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
						<ShareIcon height="24" width="24" />
						Share
					</div>
				</div>
      <div className="divider h-0 my-0"></div>
        <CommentContainer />

    </div>
  );
}
