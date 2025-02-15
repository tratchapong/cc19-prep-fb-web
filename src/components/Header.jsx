import React from "react";
import {
  FakebookLogo,
  FriendsIcon,
  HomeIcon,
  MarketIcon,
  MenuIcon,
  MessengerIcon,
  NotificationIcon,
  PlayIcon,
  SearchIcon,
} from "../icons";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="h-14 w-full fixed top-0 z-10 px-3 flex justify-between shadow-lg bg-white">
      <div className="flex gap-2 items-center flex-1">
        <FakebookLogo className="w-12" />
        <label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <SearchIcon className="w-4 opacity-60" />
        </label>
      </div>
      {/* center icon menu */}
      <div className="flex gap-2 flex-1 justify-center">
        <div className="flex justify-center w-20  hover:border-b-2 hover:border-blue-900">
          <HomeIcon className="w-1/2" />
        </div>
        <div className="flex justify-center w-20  hover:border-b-2 hover:border-blue-900">
          <PlayIcon className="w-2/5" />
        </div>
        <div className="flex justify-center w-20  hover:border-b-2 hover:border-blue-900">
          <MarketIcon className="w-2/5" />
        </div>
        <div className="flex justify-center w-20  hover:border-b-2 hover:border-blue-900">
          <FriendsIcon className="w-[60%]" />
        </div>
      </div>
      {/* right user dropdown menu */}
      <div className="flex gap-3 flex-1 justify-end ">
        <div className="avatar justify-center items-center">
          <div
            className="w-10 h-10 rounded-full !flex justify-center items-center
						bg-gray-300 hover:bg-gray-400"
          >
            <MenuIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div
            className="w-10 h-10 rounded-full !flex justify-center items-center
						bg-gray-300 hover:bg-gray-400"
          >
            <MessengerIcon className="w-7" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div
            className="w-10 h-10 rounded-full !flex justify-center items-center
						bg-gray-300 hover:bg-gray-400"
          >
            <NotificationIcon className="w-7" />
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
          <Avatar
							className="w-11 h-11 rounded-full bg-slate-400"
							menu={true}
						/>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <div className="divider my-0"></div>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
