import { userResourceClient } from "../apiClient";

// FETCHING USERS RESOURCES
const getUsers = () => {
  return userResourceClient.get("/users");
};

const getUser = (id = 1) => {
  return userResourceClient.get(`/users/${id}`);
};

export { getUser, getUsers };
