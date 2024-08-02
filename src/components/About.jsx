// src/About.js
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to our website! We are dedicated to providing the best service possible.
          Our mission is to create the most user-friendly experience for our customers.
        </p>
        <h2>Our Team</h2>
        <p>
          Our team consists of experienced professionals committed to excellence and innovation.
        </p>
        <div className="team">
          <div className="team-member">
            <img src="https://cdn.pixabay.com/photo/2019/08/11/11/28/man-4398724_1280.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://cdn.pixabay.com/photo/2015/04/13/12/07/business-720429_1280.jpg" alt="Team Member" />
            <h3>Emily White</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
