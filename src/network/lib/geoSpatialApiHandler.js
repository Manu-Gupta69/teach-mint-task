import { geospatialClient } from "../apiClient";

const getCountries = (area = "") => {
  return geospatialClient.get(`/${area}`);
};

export { getCountries };
