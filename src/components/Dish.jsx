import "../assets/styles/dish.scss";
import React from "react";
import { Card } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Dish = ({ title, price, image, isNew }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <Card>
      {isNew && (
        <Badge className="position-absolute top-0 end-0 m-2">Nouveau</Badge>
      )}
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}€</Card.Text>
        <div className="d-grid gap-2">
          <Button
            type="button"
            variant="primary"
            onClick={() => dispatch({ type: "ADD_TO_CART" })}
          >
            Ajouter au panier
          </Button>
          <Button
            type="button"
            variant="danger"
            onClick={() => dispatch({ type: "REMOVE_FROM_CART" })}
          >
            Retirer du panier
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Dish;
