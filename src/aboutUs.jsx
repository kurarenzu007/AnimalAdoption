import React from 'react'
import './aboutUs.css'

import Header from './header';  
import Footer from './footer';  
import happyPet from './assets/dog-happy.jfif';
import ourMission from './assets/our_mission.jpg';
import ourVision from './assets/our_vision.jpg';
const aboutUs = () => {
  return (
    <div>
      <Header/>
      <div className="container-main">
      <h2 className="text-center mb-5">About Us</h2>

      {/* Our Story Section */}
      <div className="about-section row align-items-center">
        <div className="col-md-6">
          <h3 className="section-title">Our Story</h3>
          <p>
            Our journey began with a simple yet powerful vision: to help every pet find a loving home. In 2024, we started rescuing abandoned animals from shelters, providing them with medical care, and fostering them until they were ready for adoption. Over the years, our team of passionate volunteers has grown, and together, we've helped thousands of animals find their forever families.
          </p>
        </div>
        <div className="col-md-6">
          <img src={happyPet} alt="Our Story Image" />
        </div>
      </div>

      <br />
      <br />

      {/* Our Mission Section */}
      <div className="about-section row align-items-center">
        <div className="col-md-6 order-md-2">
          <h3 className="section-title">Our Mission</h3>
          <p>
            Our mission is simple: to save lives and provide a brighter future for animals in need. We focus on rescue, rehabilitation, and adoption, ensuring that every animal in our care receives the love and attention they deserve. With the help of generous donors and a network of foster homes, we’re able to make a difference, one pet at a time.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img src={ourMission} alt="Our Mission Image" />
        </div>
      </div>

      <br />
      <br />

      {/* Our Vision Section */}
      <div className="about-section row align-items-center">
        <div className="col-md-6">
          <h3 className="section-title">Our Vision</h3>
          <p>
            We envision a world where every pet is loved, cared for, and given a second chance. Our goal is to create a community where pet adoption becomes the norm, and every animal has access to the resources they need to thrive. We aim to reduce the number of homeless pets through education, outreach, and strong community partnerships.
          </p>
        </div>
        <div className="col-md-6">
          <img src={ourVision} alt="Our Vision Image" />
        </div>
      </div>

      <br />
      <br />

      <hr />
      </div>
      <Footer/>
    </div>
  )
}

export default aboutUs
