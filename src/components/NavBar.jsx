import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";
export const NavBar =() => {
    return(
    <>
   <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TUCASACA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#/category/zapatillas"as={NavLink}>ZAPATILLAS</Nav.Link>
            <Nav.Link to="#/category/zapatos"as={NavLink}>ZAPATOS</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    
    </>
    );
};