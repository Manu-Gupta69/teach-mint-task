import axios from "axios";

const response = (response) => {
  return response;
};

const error = (error) => {
  let res = error.response;
  //FILTER FOR PARTICULAR STATUS CODE
  if (res.status === 401) {
    return Promise.reject(error);
  }
  console.error(`Looks like there was a problem. Status Code: ` + res.status);
  return Promise.reject(error);
};

const userResourceClient = axios.create({
  baseURL: import.meta.env.VITE_RESOURCES_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const geospatialClient = axios.create({
  baseURL: import.meta.env.VITE_GEO_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

userResourceClient.interceptors.response.use(response, error);
geospatialClient.interceptors.response.use(response, error);

export { userResourceClient, geospatialClient };
