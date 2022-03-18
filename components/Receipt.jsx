import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import StarRating from "../components/StarRating";
import pizzapaperoni from "../assets/images/pizzapaperoni.png";
import pizzameat from "../assets/images/pizzameat.png";
import donerkebab from "../assets/images/donerkebab.png";
import salmonroll from "../assets/images/salmonroll.png";
import cupcakechocho from "../assets/images/cupcakechocho.png";
import doughnutmilk from "../assets/images/doughnutmilk.png";
import doughnutpink from "../assets/images/doughnutpink.png";
import kathikebab from "../assets/images/kathikebab.png";

const Receipt = ({ title, desc, stars, background, item }) => {
  return (
    <Col md={3}>
      <Card className={background}>
        <Card.Img
          variant="top"
          src={`../assets/images/${item}.png`}
          //   src={item}
          alt={item}
        />
        <Card.Body>
          <Card.Title>
            <b>{title}</b>
          </Card.Title>
          <Card.Text>{desc}</Card.Text>
          <div className="starContainer">
            <StarRating stars={stars} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Receipt;
