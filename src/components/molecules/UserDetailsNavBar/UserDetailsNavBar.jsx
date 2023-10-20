import React, { useEffect, useState } from "react";
import { Clock, Dropdown } from "../../atoms";
import useGetCountries from "../../../hooks/Geospatial/useGetCountries";
import "./UserDetailsNavBar.scss";
import { extractTime } from "../../../utils/index";

const UserDetailsNavBar = () => {
  const {
    isLoading,
    error,
    countries,
    countryTimeDetails,
    fetchCountryResources,
  } = useGetCountries();
  const [selectedOption, setSelectedOption] = useState(null);

  const optionSelectHandler = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    setSelectedOption(countries[0]);
  }, [countries]);

  useEffect(() => {
    if (!selectedOption) return;
    (async () => {
      await fetchCountryResources(selectedOption);
    })();
  }, [selectedOption]);

  return (
    <>
      {!error ? (
        !isLoading && countryTimeDetails && selectedOption ? (
          <div className="user-nav-parent">
            <Dropdown
              selectedOption={selectedOption}
              optionSelectHandler={optionSelectHandler}
              options={countries}
            />
            <Clock timeData={extractTime(countryTimeDetails.datetime)} />
          </div>
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div>{Error}</div>
      )}
    </>
  );
};

export default UserDetailsNavBar;
