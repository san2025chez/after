import React from "react";
import "./Nav.css";
import { CartWidget } from "./CartWidget";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return(
  <Navbar bg="dark" variant="dark">
    <Container>
      <Link to="/">Navbar</Link>
      <Nav className="me-auto container mx-2">
        <Link to="/category/desafio" className="container mx-1">Desafio</Link>
        <Link to="/category/entrega" className="container mx-1">Entrega</Link>
        <Link to="/category/after"className="container mx-1"> After</Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>)

  {
    /* <div className="cabecera">
        <h1>El Titulo</h1>
      
        <nav>
            <ul>
                <li>Desafios</li>
                <li>Entregas</li>
                <li>AfterClass</li>
            </ul>
        </nav>
     
    </div>; */
  }
};

export default NavBar;
