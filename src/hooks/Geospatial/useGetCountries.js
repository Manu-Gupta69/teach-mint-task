import { useState, useEffect } from "react";
import { getCountries } from "../../network/lib/geoSpatialApiHandler";

const useGetCountries = (area) => {
  const [countries, setCountries] = useState([]);
  const [countryTimeDetails, setCountryTimeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCountryResources = async (area) => {
    try {
      setIsLoading(true);
      const { data } = await getCountries(area);
      if (area) setCountryTimeDetails(data);
      else setCountries(data);
      setIsLoading(false);
    } catch (err) {
      setError(err?.message || "Something went wrong");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchCountryResources();
    })();
  }, []);

  return {
    countries,
    countryTimeDetails,
    isLoading,
    error,
    fetchCountryResources,
  };
};

export default useGetCountries;
