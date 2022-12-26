import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import InputComponent from "../../components/inputcomponent";
import { Link } from "react-router-dom";
import { darkMode } from "react";

const HomePage = () => {
  const [users, setUser] = useState([]);
  // useEffect =
  //   (() => {
  //     axios("https://restcountries.com/v2/all").then((data) => {
  //       console.log(data.data);
  //     });
  //   },
  //   []);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  // function darkMode({ darkMode }) {
  //   let element = document.body;
  //   element.classList.toggle("dark-mode");
  // }

  return (
    <div id="container">
      <InputComponent setUser={setUser} />
      <div id="cardBox">
        {users.map((user) => {
          return (
            <Link to={"/detail-page"}>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  style={{ height: "150px" }}
                  variant="top"
                  src={user.flags?.png}
                />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>Population: {user.population}</Card.Text>
                  <Card.Text>Region: {user.region}</Card.Text>
                  <Card.Text>Capital: {user.capital}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
