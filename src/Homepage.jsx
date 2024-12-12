import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import aso from './assets/aso.png';
import pusa from './assets/pusa.png';
import Header from './header';  // Import Header
import Footer from './footer'; // Import Footer
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './App.css';

const HomePage = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const goToPetNearby = () => {
    navigate('/pet-nearby');  // Navigate to PetNearby page
  };

  return (
    <div>
      <Header />  {/* Include Header */}

      <section className="midtext text-center my-4">
        <h2>FIND A NEW BEST FRIEND</h2>
        <p>Your perfect pet is waiting for you!</p>
      </section>

      <Container className="d-flex justify-content-center flex-wrap">
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <Card className="m-2" style={{ width: '250px' }}>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '150px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <img src={aso} className="card-img-top" alt="Dog" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Dog</Card.Title>
                <Card.Text>Meet our friendly dog ready for adoption!</Card.Text>
                <Button variant="primary" className="mt-auto" onClick={goToPetNearby}>Adopt Now</Button> {/* Navigate on button click */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <Card className="m-2" style={{ width: '250px' }}>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '150px', backgroundColor: 'rgba(255, 255, 255, 0.212)' }}>
                <img src={pusa} className="card-img-top" alt="Cat" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Cat</Card.Title>
                <Card.Text>Say hello to our adorable cat looking for a home!</Card.Text>
                <Button variant="primary" className="mt-auto" onClick={goToPetNearby}>Adopt Now</Button> {/* Navigate on button click */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default HomePage;
