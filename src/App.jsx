import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const dishes = [
    {
      id: 1,
      title: "Tacos à l'unité",
      price: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Enchiladas",
      price: 12,
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false,
    },
    {
      id: 3,
      title: "Mole poblano",
      price: 15,
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false,
    },
  ];
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row className="g-4">
            {dishes.map((dish) => (
              <Col xs={12} md={6} lg={4} key={dish.id}>
                <Dish
                  title={dish.title}
                  price={dish.price}
                  image={dish.image}
                  isNew={dish.isNew}
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
