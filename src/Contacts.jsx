import React from 'react'
import Header from './header'
import projectmap from './assets/project_map.jfif';
function Contacts() {
  return (
   <div>
    <Header/>
    <div className="container-main">
  <h1 className="header-text">Animal Shelter </h1>
  <h3>CvSU Carmona, Carmona, Cavite, Philippines</h3>
  <br />
  {/* Map Image */}
  <img
          src={projectmap}
          alt="Logo"
          style={{ height: '300px', marginRight: '10px' }}
        />
  <br />
  {/* Contacts */}
  <h4>Contacts</h4>
  <p>+63 XXXXXXXXXX</p>
  <p>+63 XXXXXXXXXX</p>
  <br />
  {/* Available Hours */}
  <h4>Available Hours</h4>
  <p>Weekdays: 9:00 AM - 4:00 PM</p>
  <p>Weekends: 11:00 AM - 2:30 PM</p>
</div>

    </div>
  )
}

export default Contacts
