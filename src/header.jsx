import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import anicon from './assets/anicon.png'; // Make sure this path is correct

const Header = () => {
  return (
    <header className="text-white py-1">
      <Container className="d-flex align-items-center justify-content-between">
        <img
          src={anicon}
          alt="Logo"
          style={{ height: '50px', marginRight: '10px' }}
        />
        <Navbar className="p-0" expand="lg">
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/pet-nearby" className="text-white">Pet Nearby</Nav.Link> {/* Add Pet Nearby link */}
              <Nav.Link as={Link} to="/about-us" className="text-white">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact-page" className="text-white">Contacts</Nav.Link> {/* Updated to use 'to' */}
              <Nav.Link as={Link} to="/donate" className="text-white">Donate</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
