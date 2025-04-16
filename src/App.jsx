import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './assets/image.png';
import './App.css'; // <- make sure you import your CSS

export default function App() {
  return (
    <div>
      <nav>
        <div className="call-now">Get your Quote Today</div>
        <img src={logo} alt="South Volt Electric" className="logo" />
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
