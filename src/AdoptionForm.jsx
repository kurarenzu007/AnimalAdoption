import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdoptionForm.css';

const AdoptionForm = ({ petId }) => {
  const [adopterName, setAdopterName] = useState('');
  const [adopterEmail, setAdopterEmail] = useState('');
  const [adopterPhone, setAdopterPhone] = useState('');
  const [adopterAddress, setAdopterAddress] = useState('');
  const [adopterComments, setAdopterComments] = useState('');
  const [salary, setSalary] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [currentPets, setCurrentPets] = useState('');
  const [adoptionStatus, setAdoptionStatus] = useState('Pending');
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert with the completion message
    alert('Application form completed! Please wait for the confirmation.');

    // Prepare form data
    const formData = {
      pet_id: petId,
      adopter_name: adopterName,
      adopter_email: adopterEmail,
      adopter_phone: adopterPhone,
      adoption_date: new Date().toISOString().split('T')[0],
      adoption_status: adoptionStatus,
      adopter_address: adopterAddress,
      adopter_comments: adopterComments,
      salary: salary,
      medical_condition: medicalCondition,
      current_pets: currentPets,
    };

    // Simulate form submission
    console.log('Form submitted:', formData);
    setMessage('Adoption form submitted successfully!');

    // Redirect to homepage after form submission
    navigate('/'); 
  };

  return (
    <div className="container mt-5 adoption-form-container">
      {/* Back Button */}
      <Button 
  variant="light"  // Use light background color
  className="back-button" 
  onClick={() => navigate(-1)} 
>
  &lt; Back
</Button>


      <h3>Application form for adopting a pet</h3>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            value={adopterName}
            onChange={(e) => setAdopterName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            value={adopterEmail}
            onChange={(e) => setAdopterEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={adopterPhone}
            onChange={(e) => setAdopterPhone(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Address</Form.Label>
          <Form.Control
            as="textarea"
            value={adopterAddress}
            onChange={(e) => setAdopterAddress(e.target.value)}
            rows={3}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Additional Comments</Form.Label>
          <Form.Control
            as="textarea"
            value={adopterComments}
            onChange={(e) => setAdopterComments(e.target.value)}
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Salary (in PHP)</Form.Label>
          <Form.Control
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            min="0"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Do you have any medical conditions?</Form.Label>
          <Form.Control
            as="textarea"
            value={medicalCondition}
            onChange={(e) => setMedicalCondition(e.target.value)}
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Do you currently have pets?</Form.Label>
          <Form.Control
            as="textarea"
            value={currentPets}
            onChange={(e) => setCurrentPets(e.target.value)}
            rows={3}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit Adoption Form
        </Button>
      </Form>
    </div>
  );
};

export default AdoptionForm;
