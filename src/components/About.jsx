import React, { useState } from 'react';
import '../styles/About.css';
import Modal from '../components/Modal.jsx';

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  

  const teamMembers = [
    {
      name: 'Arun Kumar Panda',
      role: 'Asp Dot net Developer',
      image: 'https://ca.slack-edge.com/T9LJCJG0Z-U9M2DT63V-5970337baa87-512',
    },
    {
      name: 'Ajay Kumar',
      role: 'Founder at NextWebi',
      image: 'https://media.licdn.com/dms/image/D5603AQEJR03dxqMY6Q/profile-displayphoto-shrink_800_800/0/1688017062271?e=1727913600&v=beta&t=GZ9YtrHBRc8hBXeDI0yF8pMJQy7w0kTNYOplCkfoUCM',
    },
    {
      name: 'Nikita',
      role: 'Organization development',
      image: 'https://media.licdn.com/dms/image/C4D03AQFRnKfnB9osRQ/profile-displayphoto-shrink_800_800/0/1654603716119?e=1727913600&v=beta&t=fye2d8UTIVcgiNJnajvEtN_nG3iFL0gE1NKQYTKBgoU',
    },
  ];

  const handleImageClick = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
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
        <div className="team" >
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index} onClick={() => handleImageClick(member)}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <Modal show={showModal} onClose={handleCloseModal} member={selectedMember} />
    </div>
  );
};

export default About;
