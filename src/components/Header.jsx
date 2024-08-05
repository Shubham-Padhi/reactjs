import React from 'react';
import weblogo from '../image/nextwebi.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={weblogo} alt="Company Logo" width={200} />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
