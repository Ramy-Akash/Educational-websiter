import React, { useState } from 'react';
import './NavBar.css';

const NavBar = ({ logo, items, btn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <img src={logo} alt="Logo" className="logo" />
      
      
      <button className="hamburger-btn" onClick={toggleMenu}>
        ☰
      </button>

      
      <ul className={isMenuOpen ? 'nav-links show' : 'nav-links'}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      
      <button className="main-btn">{btn}</button>
    </div>
  );
};

export default NavBar;
