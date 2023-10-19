import { Home, UserDetails } from "./components/Page";
import useGetPosts from "./hooks/Post/useGetPosts";
import useGetUsers from "./hooks/User/useGetUsers";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { getPostCollection } from "./utils/Post";
import { useMemo } from "react";

function App() {
  const { users, isLoading: fetchingUsers, error: userError } = useGetUsers();
  const { posts, isLoading: fetchingPosts, error: postError } = useGetPosts();

  const postCollection = useMemo(() => {
    if (postError || fetchingPosts) return [];
    return getPostCollection(posts);
  }, [posts]);

  return (
    <>
      {userError || postError ? (
        <div>{userError ? userError : postError}</div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              fetchingPosts || fetchingUsers ? (
                <div> LOADING.... </div>
              ) : (
                <Home users={users} posts={postCollection} />
              )
            }
          />
          <Route
            path="user/:userId"
            element={
              fetchingPosts || fetchingUsers ? (
                <div> LOADING....</div>
              ) : (
                <UserDetails users={users} posts={postCollection} />
              )
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
