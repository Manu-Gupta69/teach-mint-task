import React, { useMemo } from "react";
import { PostsGrid, UserDetailsNavBar } from "../molecules";
import { useParams } from "react-router-dom";
import { UserDetailsCard } from "../atoms";

const UserDetails = ({ users, posts }) => {
  const { userId } = useParams();

  const userDetails = useMemo(() => {
    return users.find((user) => user.id == userId);
  }, [users]);

  return (
    <>
      <UserDetailsNavBar />
      <UserDetailsCard userDetails={userDetails} />
      <PostsGrid userId={userId} posts={posts} />;
    </>
  );
};

export default UserDetails;
