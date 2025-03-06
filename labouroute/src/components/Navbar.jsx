import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"; // Updated path
import { FaHome } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const [fontSize, setFontSize] = useState(16); // Default font size

  // Function to adjust font size
  const adjustFontSize = (sizeChange) => {
    const newSize = fontSize + sizeChange;
    setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}px`;};
      const resetFontSize = () => {
        setFontSize(16); // Reset to default size
        document.documentElement.style.fontSize = `16px`;
      };
  return (
    <>
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <p>
          
          <Link to="/">Home</Link> 
        </p>
          {/* Font Resize Buttons */}
          <button onClick={() => adjustFontSize(-2)} className="font-btn">A-</button>
          <button className="font-btn" onClick={resetFontSize}>A </button>
        <button onClick={() => adjustFontSize(2)} className="font-btn">A+</button>
      </div>

      

      {/* Website Header with Logo and Name */}
      <div className="header">
      <img src={logo} alt="Labouroute Logo" className="logo" />
        <div  className="header-text"><nav></nav>
          <h1>Labouroute</h1>
          <p>Guidance Website for Claims and Labour Rights</p>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`main-navbar ${mobileNavOpen ? "active" : ""}`}>
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FaHome size={24} className="home-icon" />
          </Link>

         
        </li>
          {/* About Us with Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >


            <Link to="#" className={location.pathname.includes("about") ? "active" : ""}>
              About Us ▼
            </Link>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/about-labouroute">About Labouroute</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/objectives">Objectives</Link></li>
                <li><Link to="/user-guide">User's Guide</Link></li>
              </ul>
            )}
          </li>
        
          <li><Link to="/faqs" className={location.pathname === "/faqs" ? "active" : ""}>FAQs</Link></li>
         
          <li><Link to="/support" className={location.pathname === "/support" ? "active" : ""}>Support</Link></li>
          <li><Link to="/claims" className={location.pathname === "/claims" ? "active" : ""}>Claims Filing</Link></li>

          {/* SignUp/Login Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setLoginDropdownOpen(true)}
            onMouseLeave={() => setLoginDropdownOpen(false)}
            onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
          >
            <Link to="#" className={location.pathname.includes("signup") || location.pathname.includes("login") ? "active" : ""}>
              Register/Login(For Users) ▼
            </Link>
            {loginDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/signup">Register(For New User Sign Up)</Link></li>
                <li><Link to="/login">Login(For Regiatered Users)</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
