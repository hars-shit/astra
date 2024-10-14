import React from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { toogleMode } from '../redux/toggleSlice';
import Highlight from '../components/Highlight';
import Service from '../components/Service';

const Home = () => {

  const darkMode = useSelector((state) => state.theme.darkMode);  



  return (
    <>
    <div className={`home-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="home-content">
        <h1>Your Idea Matters!</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum veniam nihil quam sunt soluta cum deserunt mollitia voluptatum deleniti!</h5>
        <button >
         Make a Website
        </button>
      </div>
      <div className="home-image">
        <img src="https://imgs.search.brave.com/Wb21eZN4_scm25M7ZnO-XeJVjjSRLEcWOiUJE6x5dxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZXN0/d3JpdGluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDEvZnJlZS1waG90/b3MtZm9yLWJsb2dz/LmpwZw" alt="Website Design" />
      </div>
    </div>
    <Highlight />
    <Service />
    </>
  );
};

export default Home;
