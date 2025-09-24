import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import "../assets/styles/header.scss";
import logo from "../assets/images/logo.webp";
import useCart from "../hooks/useCart";

export default function Header() {
  const { cartCount } = useCart();
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Mexicain jouant de la guitare" />
        </Navbar.Brand>
        <Navbar.Text className="ms-3">
          <span className="text-primary">Panier ({cartCount})</span>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
