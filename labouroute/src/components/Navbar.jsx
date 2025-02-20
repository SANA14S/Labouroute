import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Updated path

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Labouroute</div>
      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/wages">Wages</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/claims">Claims</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;