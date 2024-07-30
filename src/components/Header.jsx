
import React from 'react';
import weblogo from '../image/nextwebi.png'
const Header = () => {
  return (
    <header className="header">
     <img src={weblogo} alt="" width={200}/>
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#Blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
