import React from "react";
import { PostCard } from "../../atoms";
import "./PostsGrid.scss";

const PostsGrid = ({ userId, posts }) => {
  const userPost = posts[userId];
  console.log(userId, userPost);
  return (
    <div className="post-grid-parent">
      {userPost.map((post) => {
        return (
          <PostCard key={post.id} title={post.title} content={post.body} />
        );
      })}
    </div>
  );
};

export default PostsGrid;
