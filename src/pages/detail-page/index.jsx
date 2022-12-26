import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate, useParams } from "react-router";

const DetailPage = () => {
  const [card, setCard] = useState([]);

  // const { id } = useParams();
  // const navigate = useNavigate();
  // const getData = async () => {
  //   setCard(await getCardById(id));
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/name/${name}")
  //     .then((response) => response.json())
  //     .then((data) => setCard(data));
  // }, []);

  return (
    <div>
      {card.map((elem) => {
        <Card style={{ width: "18rem" }}>
          <button onClick={() => navigate(-1)}>Back</button>
          <Card.Img variant="top" src={elem.flags.png} />
          <Card.Body>
            <Card.Title>{elem.name}</Card.Title>
            <Card.Text>Native name: {elem.nativeName}</Card.Text>
            <Card.Text>Population: {elem.population}</Card.Text>
            <Card.Text>Region: {elem.region}</Card.Text>
            <Card.Text>Sub Region: {elem.nativeName}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>;
      })}
      {/* <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div id="detail-card">
        <div>
          <img src="" alt="" />
        </div>
        <div id="leftside">
          <h2></h2>
        </div>
      </div> */}
    </div>
  );
};

export default DetailPage;
