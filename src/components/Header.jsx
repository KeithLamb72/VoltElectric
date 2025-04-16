import React from 'react';
import useScrollDirection from '../hooks/useScrollDirection';
import logo from '../assets/image.png';

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const scrollDirection = useScrollDirection();

  return (
    <header className={`header ${scrollDirection === 'down' ? 'hide' : ''}`}>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      <img src={logo} alt="South Volt Electric" className="logo" />
    </header>
  );
}