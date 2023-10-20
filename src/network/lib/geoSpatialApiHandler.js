import { geospatialClient } from "../apiClient";

// FETCHING USERS
const getCountries = (area = "") => {
  return geospatialClient.get(`/${area}`);
};

export { getCountries };
