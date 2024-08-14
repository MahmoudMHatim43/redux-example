import React from "react";

export const Post = ({ post }) => {
  return (
    <div className="m-5 p-2 rounded-xl bg-[#282828]">
      <h1 className="text-xl font-bold">{post.title}</h1>
      <hr className="m-2 w-1/2 mx-auto" />
      <p className="text-base">{post.body}</p>
    </div>
  );
};
