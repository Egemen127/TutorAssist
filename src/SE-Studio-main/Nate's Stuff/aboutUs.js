import React from 'react';

function AboutUs() {
  return (
    <div>
      <div className="navbar">
        <img className="logo" src="https://picsum.photos/50" alt="TutorAssist.io Logo" />
        <h2 className="app-name">Tutor Assist</h2>
        <div className="navbar-links">
          <a href="#become-tutor" className="nav-link">Become a Tutor</a>
          <a href="#login" className="nav-link">Login</a>
          <a href="#new-user" className="nav-link">New User</a>
          <a href="#about-us" className="nav-link">About Us</a>
        </div>
      </div>
      <div className="about-us-text">
        <h1>About Us</h1>
        <p>
          Unlike many existing tutoring applications that require costly subscriptions and lack the assurance
          of tutor accreditation, our platform caters to students of all socioeconomic levels, offering them
          high-quality, personalized tutoring in a range of subjects. Our application enables students to
          search for tutors based on subject expertise, availability, and ratings, facilitating an engaging and
          seamless learning experience. From K-12 to higher education, our core objective is to enhance
          the knowledge and skills of students, not only improving their academic performance but also empowering
          them for future career success.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
