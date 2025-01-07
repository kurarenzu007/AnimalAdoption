import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';  // Import Header
import Footer from './footer';  // Import Footer
import './Donate.css';
import petNeeds from './assets/dog_cat_needs.jpg'
import spayNeuter from './assets/spay_neuter.jpg'
import medicalNeeds from './assets/medical_needs.jpg'
const DonatePage = () => {
  return (
    <div>
      <Header /> {/* Include Header */}

      <div className="container-main">
        <h1 className="header-text">Support Pets in Need</h1>
        <p className="donation-description">
          Your generous contribution can help us provide shelter, food, medical care, and a loving home for pets in need. Every donation, no matter how small, makes a significant difference in the lives of these animals. Together, we can give them a better future.
        </p>
        <br />
        <Link to="/donate">
        <button className="btn-donate" >Donate Now</button>
        </Link>
        <br /><br />
        <hr className="hr-style" />
        <br /><br />

        <div className="section-header">
          <h1>Where your donation goes:</h1>
        </div>

        <div className="donation-section">
          <img src={petNeeds} alt="Basic Needs and Necessities" />
          <div className="content">
            <h2 className="newHead">Basic Needs and Necessities</h2>
            <p>
              Providing basic needs such as food, shelter, and grooming is essential for the health and well-being of shelter animals. Every pet needs nutritious meals, a safe space to sleep, and regular grooming to ensure their comfort and hygiene while they wait for their forever homes.
            </p>
          </div>
        </div>

        <div className="donation-section">
          <img src={spayNeuter} alt="Spay and Neuter" />
          <div className="content">
            <h2 className="newHead">Spay and Neuter</h2>
            <p>
              Spaying and neutering is a key part of reducing pet overpopulation. By supporting these programs, your donations help prevent unwanted litters and ensure pets are healthy and ready for adoption. Spaying and neutering also have health benefits for the animals, such as reducing the risk of certain cancers and behavioral issues.
            </p>
          </div>
        </div>

        <div className="donation-section">
          <img src={medicalNeeds} alt="Medical Expenses" />
          <div className="content">
            <h2 className="newHead">Medical Expenses</h2>
            <p>
              Many animals in shelters require medical attention, whether for vaccinations, treatment of injuries, or care for illnesses. Donations help cover these medical expenses, ensuring that all pets receive the care they need to thrive. With your help, we can provide regular check-ups, surgeries, and treatments for those in need.
            </p>
          </div>
        </div>
      </div>

      <Footer /> {/* Include Footer */}
    </div>
);

}
export default DonatePage;
