import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';
import { useSelector } from 'react-redux';
import { IoLogoAngular } from 'react-icons/io';

const Footer = ({ isDarkMode }) => {
    const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <footer className={`footer-container ${darkMode ? 'dark' : ''}`}>
  
      <div className="footer-row footer-links">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

    
      <div className="footer-row footer-bottom">
        <div className="footer-logo">
        <div className="header-left">
        <IoLogoAngular className="logo" />
        <h1 className="brand-name">ASTRA</h1>
      </div>
        </div>
        <div className="footer-social">
          <FaFacebookF />
          <FaInstagram />
          <FaEnvelope />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
