import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Dropdown } from "../../atoms";
import useGetCountries from "../../../hooks/Geospatial/useGetCountries";
import "./UserDetailsNavBar.scss";
import { extractTime } from "../../../utils/index";
import { Color } from "../../../Constant/Colors";
import { Button } from "../../atoms";

const UserDetailsNavBar = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    countries,
    countryTimeDetails,
    fetchCountryResources,
  } = useGetCountries();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(countries[0]);
  }, [countries]);

  useEffect(() => {
    if (!selectedOption) return;
    (async () => {
      await fetchCountryResources(selectedOption);
    })();
  }, [selectedOption]);

  const optionSelectHandler = (event) => {
    setSelectedOption(event.target.value);
  };

  const btnClickHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {!error ? (
        !isLoading && countryTimeDetails && selectedOption ? (
          <div className="user-nav-parent">
            <Button
              title={"back"}
              style={{ backgroundColor: Color.grey }}
              onBtnClick={btnClickHandler}
            />
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
        <div>{error}</div>
      )}
    </>
  );
};

export default UserDetailsNavBar;
