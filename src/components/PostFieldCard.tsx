import React from "react";

function PostFieldCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <form className="flex flex-col gap-2">
        <label>Title: </label>
        <input
          className="bg-slate-200 h-10 rounded-full focus:outline-none hover:bg-gray-300 px-4"
          type="text"
        ></input>
        <label>Message: </label>
        <input
          className="bg-slate-200 h-10 rounded-full focus:outline-none hover:bg-gray-300 px-4"
          type="text"
        ></input>
        <div className="flex justify-end">
          <button className="h-10 w-24 bg-primary rounded-md text-white mt-3">
            Post it
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostFieldCard;
