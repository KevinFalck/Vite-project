import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const dishes = [
    {
      id: 1,
      title: "Tacos à l'unité",
      price: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true,
      stock: 10,
    },
    {
      id: 2,
      title: "Enchiladas",
      price: 12,
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false,
      stock: 0,
    },
    {
      id: 3,
      title: "Mole poblano",
      price: 15,
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false,
      stock: 5,
    },
  ];

  const [showNewOnly, setShowNewOnly] = useState(false);

  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  function handleShowNewOnly() {
    setShowNewOnly((prev) => !prev);
  }

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Container>
          <Button className="mb-4" onClick={handleShowNewOnly}>
            {showNewOnly ? "Tous les plats" : "Nouveautés Uniquement"}
          </Button>
          <Row className="g-4">
            {filteredDishes.map((dish) => (
              <Col xs={12} md={6} lg={4} key={dish.id}>
                <Dish
                  title={dish.title}
                  price={dish.price}
                  image={dish.image}
                  isNew={dish.isNew}
                  addToCart={addToCart}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
