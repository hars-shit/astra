import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoAngular } from "react-icons/io";
import './Header.css';  
import { useDispatch, useSelector } from 'react-redux';
import { toogleMode } from '../redux/toggleSlice';  
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.darkMode); 
  const navigate=useNavigate() 
  console.log(theme);

  const routes = [
    { to: "/", name: "Home" },
    { to: "/", name: "Services" },
    { to: "/", name: "About" },
    { to: "/", name: "Previews" },
    { to: "/", name: "Why Us" },
    { to: "/contact-us", name: "Contact" },
  ];

  const toggleTheme = () => {
    dispatch(toogleMode());  
  };

  return (
    <div className={`header-container ${theme ? 'dark-mode' : ''}`}>
      <div className="header-left">
        <IoLogoAngular className="logo" />
        <h1 className="brand-name">ASTRA</h1>
      </div>
      <div className="header-right">
        <ul className="nav-list">
          {routes.map((e, i) => (
            <li key={i} onClick={()=>navigate(e.to)}  className="nav-item">{e.name}</li>
          ))}
        </ul>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
};

export default Header;
