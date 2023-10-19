import React from "react";
import { PostsGrid } from "../molecules";
import { useParams } from "react-router-dom";

const UserDetails = ({ users, posts }) => {
  const { userId } = useParams();
  return <PostsGrid userId={userId} posts={posts} />;
};

export default UserDetails;
