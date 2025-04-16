import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import FAQ from './pages/FAQ.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

import './index.css'; // Tailwind CSS
import './App.css';   // Additional custom styles
// This is the main entry point of the React application
// It uses React Router for navigation between different pages
// It renders the main App component and sets up the routing for the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)