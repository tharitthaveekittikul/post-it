import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const params = useParams() as { id: string };
  const [post, setPost] = useState<Post>();
  const [user, setUser] = useState<User>();
  const [comments, setComments] = useState<PostComment[]>();

  const getData = useCallback(async () => {
    const postData = await axios.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const userData = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${postData.data.userId}`
    );
    setPost(postData.data);
    setUser(userData.data);
  }, [params.id]);

  const getComments = useCallback(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)
      .then((res) => {
        setComments(res.data);
      });
  }, [params.id]);

  useEffect(() => {
    getData();
    getComments();
  }, [getData, getComments]);
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold">{post?.title} </h2>
      <p className="mt-3">{post?.body} </p>
      <span className="flex justify-end text-gray-400 mt-4">
        Author: {user?.name}{" "}
      </span>
      <div className="h-[1px] bg-slate-300 my-3"></div>
      <h2 className="text-lg">Comments</h2>
      {comments?.map((comment) => (
        <div key={comment.id} className="px-2 py-3">
          <h3 className="font-bold">{comment.email}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostDetail;
