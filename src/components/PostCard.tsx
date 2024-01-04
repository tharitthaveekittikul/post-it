import { Skeleton } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  post: Post;
};

function PostCard({ post: { title, body, id } }: Props) {
  const navigate = useNavigate();
  return (
    // <Link to={`/post/${id}`}>
    //   <div className="bg-white shadow-md rounded-2xl p-6">
    //     <h2 className="text-2xl font-bold">{title}</h2>
    //     <p className="mt-3">{body}</p>
    //   </div>
    // </Link>
    <div
      onClick={() => {
        navigate(`/post/${id}`);
      }}
      className="bg-white shadow-md rounded-2xl p-6"
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3">{body}</p>
    </div>
  );
}

export const PostCardLoading = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <Skeleton variant="text" height={30} />
      <Skeleton variant="rounded" className="mt-3" height={60} />
    </div>
  );
};

export default PostCard;
