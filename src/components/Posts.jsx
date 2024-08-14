import React, { useEffect } from "react";
import { Post } from "./Post";
import { Form } from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
export const Posts = () => {
  // Hooks:
  const loading = useSelector((state) => state.posts.loading);
  const errMsg = useSelector((state) => state.posts.errMsg);
  const items = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  // JSX:
  return (
    <>
      <Form />
      <hr />
      <section className="p-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : errMsg ? (
          <h1>Error Fetching Data</h1>
        ) : (
          <>
            <h1 className="p-2 text-5xl font-bold">Posts</h1>
            {items.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </>
        )}
      </section>
    </>
  );
};
