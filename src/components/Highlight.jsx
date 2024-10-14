import React from 'react';
import { FaBuilding, FaPenFancy, FaShoppingBag } from 'react-icons/fa';
import { SiAuth0 } from 'react-icons/si';
import './Highlight.css';
import { useDispatch, useSelector } from 'react-redux';

const Highlight = () => {
    
    const darkMode = useSelector((state) => state.theme.darkMode);  
  
  const arr = [
    {
      name: "Local Business",
      icon: FaBuilding
    },
    {
      name: "Online Store",
      icon: FaShoppingBag
    },
    {
      name: "Blogging",
      icon: FaPenFancy
    },
    {
      name: "Portfolio",
      icon: SiAuth0
    }
  ];

  return (
    <div className={`highlight-container ${darkMode ? 'dark':''}`}>
      {arr.map((e, i) => (
        <div className="highlight-item" key={i}>
          <e.icon />
          <h2>{e.name}</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, consequuntur.</p>
        </div>
      ))}
    </div>
  );
};

export default Highlight;
