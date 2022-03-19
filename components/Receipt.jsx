import Image from "next/image";
import React, { useState } from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import StarRating from "../components/StarRating";

const Receipt = ({ title, desc, stars, background, item }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <Col md={3}>
      <Card
        className={`${background} ${hovered ? "hovered" : ""}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <Card.Img
          variant="top"
          className="receiptImg"
          src={`/${item}.png`}
          alt={item}
        />
        <Card.Body>
          <Card.Title>
            <b>{title}</b>
          </Card.Title>
          <Card.Text className="text primary">{desc}</Card.Text>
          <div className="starContainer">
            <StarRating stars={stars} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Receipt;
