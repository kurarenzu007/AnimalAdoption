import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import anicon from './assets/anicon.png'; 

const Header = () => {
  return (
    <header className="text-white py-1">
      <Container className="d-flex align-items-center justify-content-between">
        <img
          src={anicon}
          alt="Logo"
          className="logo"
        />
        
        
        <Navbar className="p-0" expand="lg">
          <Navbar.Toggle aria-controls="navbar-nav" /> 
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link>
              <Nav.Link as={Link} to="/pet-nearby" className="text-dark">Pet Nearby</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="text-dark">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact-page" className="text-dark">Contacts</Nav.Link>
              <Nav.Link as={Link} to="/donate" className="text-dark">Donate</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
