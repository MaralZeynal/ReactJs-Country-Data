import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./index.scss";

const InputComponent = ({ setUser }) => {
  const [inputData, setInputData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setInputData(data));
  }, []);

  //input search countries
  const inputSearch = (e) => {
    let filterData = inputData.filter((elem) =>
      elem.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setUser(filterData);
  };

  //filter dropdown
  const filterRegion = (e) => {
    let filterByRegion = inputData.filter((element) =>
      element.region.includes(e.target.value)
    );
    setUser(filterByRegion);
  };

  return (
    <div id="inputComponent">
      <div id="inputSearch">
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => inputSearch(e)}
        />
      </div>
      <DropdownButton
        id="dropdown-button"
        title="Filter by Region"
        onClick={(e) => filterRegion(e)}
      >
        <Dropdown.Item value="Africa">Africa</Dropdown.Item>
        <Dropdown.Item value="America">America</Dropdown.Item>
        <Dropdown.Item value="Asia">Asia</Dropdown.Item>
        <Dropdown.Item value="Europe">Europe</Dropdown.Item>
        <Dropdown.Item value="Oceania">Oceania</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default InputComponent;
