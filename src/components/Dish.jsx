import "../assets/styles/dish.scss";
import React from "react";
import { Card } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Dish = ({ title, price, image, isNew }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <Card>
      {isNew && (
        <Badge className="position-absolute top-0 end-0 m-2">Nouveau</Badge>
      )}
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}€</Card.Text>
        <Button type="button" variant="primary" onClick={addToCart}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Dish;
