import React, { useMemo } from "react";
import { PostsGrid } from "../molecules";
import { useParams } from "react-router-dom";
import { Clock, UserDetailsCard } from "../atoms";

const UserDetails = ({ users, posts }) => {
  const { userId } = useParams();

  const userDetails = useMemo(() => {
    return users.find((user) => user.id == userId);
  }, [users]);

  return (
    <>
      <Clock timeData={{ hour: 13, min: 3, sec: 54 }} />
      <UserDetailsCard userDetails={userDetails} />
      <PostsGrid userId={userId} posts={posts} />;
    </>
  );
};

export default UserDetails;
