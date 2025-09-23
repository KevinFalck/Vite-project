import "../assets/styles/dish.scss";
import React from "react";
import { Card } from "react-bootstrap";
import { Badge } from "react-bootstrap";

const Dish = ({ title, price, image, isNew }) => {
  return (
    <Card>
      {isNew && (
        <Badge className="position-absolute top-0 end-0 m-2">Nouveau</Badge>
      )}
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}€</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dish;
