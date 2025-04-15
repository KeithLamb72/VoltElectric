import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App() {//Nav Bar Shown on Top for home page
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">BrightPath Electric</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}
