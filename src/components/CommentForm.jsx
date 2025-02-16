import React from "react";
import Avatar from "./Avatar";
import { SendMessageIcon } from "../icons";

export default function CommentForm() {
  return (
    <div className="relative">
      <div className="flex gap-3 items-start">
        <Avatar className="w-11 h-11 rounded-full" imgSrc="" />
        <textarea
          className="textarea w-full p-1 leading-5 outline outline-1 outline-slate-200"
          row={1}
          placeholder={`comment by Someone Codecamp `}
        ></textarea>
      </div>
      <button className="btn btn-circle btn-sm absolute bottom-2 right-2 ">
        <SendMessageIcon className="w-8 ms-1" />
      </button>
    </div>
  );
}
