import React from "react";
import "../assets/styles/header.scss";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
            alt="Mexicain jouant de la guitare"
            className="app-logo"
          />
        </Navbar.Brand>
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
