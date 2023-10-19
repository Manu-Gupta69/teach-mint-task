import { userResourceClient } from "../apiClient";

// FETCHING USERS
const getUsers = () => {
  return userResourceClient.get("/users");
};

const getUser = (id = 1) => {
  return userResourceClient.get(`/users/${id}`);
};

// FETCHING POSTS
const getPosts = () => {
  return userResourceClient.get("/postss");
};

const getPost = (id) => {
  return userResourceClient.get(`/posts/${id}`);
};

export { getUser, getUsers, getPosts, getPost };
