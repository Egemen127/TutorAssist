import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="App">
      <div className="navbar">
      <img className="logo" src="%PUBLIC_URL%/logo192.png" alt="TutorAssist.io Logo" />
        <h2 className="app-name">Tutor Assist</h2>
        <div className="navbar-links">
          <a href="#become-tutor" className="nav-link">Become a Tutor</a>
          <a href="#login" className="nav-link">Login</a>
          <a href="#new-user" className="nav-link">New User</a>
          <a href="#about-us" className="nav-link">About Us</a>
        </div>
      </div>
      <img className="large-image" src="large-image.jpg" alt="Large Image" />
      <div className="footer">
        TUTORS FROM PRESTIGIOUS UNIVERSITIES SUCH AS CORNELL, STANFORD, YALE, NYU, MIT AND MORE!
      </div>
    </div>
  );
}

export default Home;


