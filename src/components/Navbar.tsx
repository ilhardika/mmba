import React from "react";
import logoImg from "../assets/images/logo.png";
import "./Navbar.css";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  return (
    <nav className={`navbar ${className}`}>
      <div className="nav-container">
        <div className="logo">
          <img src={logoImg} alt="Marriage MBA Logo" loading="eager" />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link active">
            Home
          </a>
          <a href="#" className="nav-link">
            Books
          </a>
          <a href="#" className="nav-link">
            Semesters
          </a>
          <a href="#" className="nav-link">
            About Us
          </a>
        </div>
        <div className="nav-auth">
          <button className="btn-login">LOG IN</button>
          <button className="btn-signup">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
