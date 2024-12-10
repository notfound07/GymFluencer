import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Replace with the actual logo file path
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Font Awesome icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="GymFluencer Logo" className="footer-logo-img" />
        </div>
        <div className="footer-info">
          <div className="footer-about">
            <h3>About</h3>
            <p>GymFluencer helps you track workouts, calories, and fitness progress with ease. Stay on top of your goals with our comprehensive fitness app.</p>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Email: support@gymfluencer.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} color="#fff" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} color="#fff" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GymFluencer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
