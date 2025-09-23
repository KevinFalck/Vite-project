import "../assets/styles/dish.scss";
import React from "react";
import { Card } from "react-bootstrap";

const Dish = ({ title, price, image }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}€</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dish;
