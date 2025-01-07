import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DonatePage from './DonatePage';
import PetNearby from './PetNearby';
import AboutUs from './aboutUs';
import Contacts from './Contacts';
import AdoptionForm from './AdoptionForm';
import DonationForm from './DonationForm';

const App = () => {
  return (
    <Router basename="/AnimalAdoption"> 
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Home Page Route */}
        <Route path="/donate" element={<DonatePage />} />  {/* Donate Page Route */}
        <Route path="/pet-nearby" element={<PetNearby />} /> {/* Link to PetNearby */}
        <Route path="/about-us" element={<AboutUs />} /> {/* Link to AboutUs */}
        <Route path="/contact-page" element={<Contacts />} /> {/* Link to Contacts */}
        <Route path="/adoption-form" element={<AdoptionForm />} />{/* Link to Adoption Form */}
        <Route path="/donate-form" element={<DonationForm />} />{/* Link to Donation Form */}
      </Routes>
    </Router>
  );
};

export default App;
