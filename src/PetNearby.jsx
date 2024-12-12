import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './header'; // Header component included as is
import './PetCard.css'; // Custom CSS for card styling
import Footer from './footer';
import buddyDog from './assets/buddy.jfif';
import GalaxyDestroyer from './assets/galaxyDestroyer.png';
import Beagle1 from './assets/Beagle1.jpg';
import Labrador1 from './assets/Labrador.png';
import pug1 from './assets/Pug1.jfif';
import persianCat from './assets/PersianCat.png';
import BengalCat from './assets/bengalCat.jfif';
import Corgi1 from './assets/Corgi1.jpg';
import MaineCoon from './assets/MaineCoon.jpg';

const PetNearby = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false); // To show image in full size
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image
  const [selectedImageName, setSelectedImageName] = useState(null); // Store the selected pet name for the image modal
  const navigate = useNavigate(); // Hook for navigation

  // Mock pet data
  const pets = [
      {
        id: 1,
        name: 'Buddy',
        image: buddyDog,
        breed: 'Golden Retriever',
        status: 'Available',
        description: 'Friendly and energetic dog.',
        gender: 'Male',
        age: 3,
        dateArrived: '2024-06-01',
        spayedNeutered: false, // Not yet spayed/neutered
      },
      {
        id: 2,
        name: 'Galaxy Destroyer',
        image: GalaxyDestroyer,
        breed: 'Tabby Cat',
        status: 'Available',
        description: 'Calm and loving cat.',
        gender: 'Male',
        age: 2,
        dateArrived: '2024-07-15',
        spayedNeutered: false, // Not yet spayed/neutered
      },
      {
        id: 3,
        name: 'Charlie',
        image: Beagle1,
        breed: 'Beagle',
        status: 'Available',
        description: 'Playful and curious dog.',
        gender: 'Male',
        age: 4,
        dateArrived: '2024-05-20',
        spayedNeutered: true, // Already neutered
      },
      {
        id: 4,
        name: 'Mike',
        image: Labrador1,
        breed: 'Labrador',
        status: 'Available',
        description: 'Energetic and loveable dog.',
        gender: 'Male',
        age: 4,
        dateArrived: '2024-04-12',
        spayedNeutered: true, // Already neutered
      },
      {
        id: 5,
        name: 'Max',
        image: pug1, 
        breed: 'Pug',
        status: 'Available',
        description: 'Small, charming, and clever dog.',
        gender: 'Male',
        age: 5,
        dateArrived: '2024-03-25',
        spayedNeutered: true, // Already neutered
      },
      {
        id: 6,
        name: 'Luna',
        image: persianCat, 
        breed: 'Persian Cat',
        status: 'Available',
        description: 'Elegant and affectionate cat.',
        gender: 'Female',
        age: 3,
        dateArrived: '2024-08-10',
        spayedNeutered: true, // Already spayed
      },
      {
        id: 7,
        name: 'Simba',
        image: BengalCat, 
        breed: 'Bengal Cat',
        status: 'Available',
        description: 'Active and playful cat with a beautiful coat.',
        gender: 'Male',
        age: 2,
        dateArrived: '2024-07-01',
        spayedNeutered: false, // Not yet spayed/neutered
      },
      {
        id: 8,
        name: 'Daisy',
        image: Corgi1, 
        breed: 'Corgi',
        status: 'Available',
        description: 'Cheerful and affectionate dog.',
        gender: 'Female',
        age: 4,
        dateArrived: '2024-06-18',
        spayedNeutered: true, // Already spayed
      },
      {
        id: 9,
        name: 'Oliver',
        image: MaineCoon, 
        breed: 'Maine Coon',
        status: 'Available',
        description: 'Gentle giant with a friendly personality.',
        gender: 'Male',
        age: 5,
        dateArrived: '2024-02-10',
        spayedNeutered: true, // Already neutered
      }
  ];

  // Handle opening the modal with selected pet
  const handleShowDetails = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPet(null);
  };

  // Handle image click and show the full image modal
  const handleImageClick = (image, name) => {
    setSelectedImage(image);
    setSelectedImageName(name); // Set the pet name for the full-size image modal
    setShowImageModal(true);
  };

  // Handle closing the image modal
  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
    setSelectedImageName(null);
  };

  // Handle adopt now action
  const handleAdoptNow = (pet) => {
    navigate('/adoption-form', { state: { pet } }); // Navigate to AdoptionForm with selected pet data
  };

  return (
    <div>
      <Header />
      <div className="container mt-4 pet-nearby-section">
        <h1 className="font-weight-bold">Nearby Pets</h1>
        
        <hr></hr>
      <br></br>
        <Row>
          {pets.length > 0 ? (
            pets.map((pet) => (
              <Col key={pet.id} md={4} className="mb-4">
                <Card className="h-100" style={{ maxWidth: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src={pet.image}
                    alt="Pet Image"
                    className="card-img-top"
                    onClick={() => handleImageClick(pet.image, pet.name)} // Pass pet name to the image modal
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Text><strong>Breed:</strong> {pet.breed}</Card.Text>
                    <Card.Text><strong>Status:</strong> {pet.status}</Card.Text>

                    {/* Full Details Button */}
                    <Button
                      variant="primary"
                      onClick={() => handleShowDetails(pet)}
                      className="mt-auto"
                    >
                      Full Details
                    </Button>

                    {/* Adopt Now Button */}
                    {pet.status !== 'Adopted' && (
                      <Button
                        variant="success"
                        onClick={() => handleAdoptNow(pet)} // Trigger navigation
                        className="mt-2"
                      >
                        Adopt Now
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No pets available for adoption.</p>
          )}
        </Row>

        {/* Modal for displaying pet details */}
        {selectedPet && (
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedPet.name} Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><strong>Name:</strong> {selectedPet.name}</p>
              <p><strong>Description:</strong> {selectedPet.description}</p>
              <p><strong>Gender:</strong> {selectedPet.gender}</p>
              <p><strong>Status:</strong> {selectedPet.status}</p>
              <p><strong>Breed:</strong> {selectedPet.breed}</p>
              <p><strong>Age:</strong> {selectedPet.age} years old</p>
              <p><strong>Spayed/Neutered:</strong> {selectedPet.spayedNeutered ? 'Yes' : 'No'}</p>
              <p><strong>Date Arrived at Shelter:</strong> {new Date(selectedPet.dateArrived).toLocaleDateString()}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}

       {/* Full Image Modal */}
{selectedImage && (
  <Modal className="ImgModal" show={showImageModal} onHide={handleCloseImageModal} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>{selectedImageName} Image</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img src={selectedImage} alt={selectedImageName} className="img-fluid" />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseImageModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
)}

      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default PetNearby;

