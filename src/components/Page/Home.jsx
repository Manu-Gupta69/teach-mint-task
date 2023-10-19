import React from "react";
import { UsersGrid } from "../molecules";

const Home = ({ users, posts }) => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Directory</h3>
      <UsersGrid users={users} posts={posts} />
    </>
  );
};

export default Home;
