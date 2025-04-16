import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App() {//Nav Bar Shown on Top for home page
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="flex justify-between items-center p-6 bg-green-500 text-white"> {/* Changed background color */}
        <h1 className="text-10xl font-bold">South Volt Electric</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:bg-green-700 p-2 rounded">Home</Link> {/* Added hover background */}
          <Link to="/services" className="hover:bg-green-700 p-2 rounded">Services</Link> {/* Added hover background */}
          <Link to="/faq" className="hover:bg-green-700 p-2 rounded">FAQ</Link> {/* Added hover background */}
          <Link to="/about" className="hover:bg-green-700 p-2 rounded">About</Link> {/* Added hover background */}
          <Link to="/contact" className="hover:bg-green-700 p-2 rounded">Contact</Link> {/* Added hover background */}
        </div>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}