import React from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={() => setIsMenuOpen(false)}>
        ×
      </button>
      <div className="menu-content">
        <div className="call-now">Get your Quote Today</div>
        <nav>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </div>
  );
}