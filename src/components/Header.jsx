import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import "../assets/styles/header.scss";
import logo from "../assets/images/logo.webp";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cartCount } = useContext(CartContext);
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Mexicain jouant de la guitare" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Navbar.Text className="ms-3">
              <span className="text-primary">Panier ({cartCount})</span>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
