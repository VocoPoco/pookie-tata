import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'; // Make sure this CSS file includes all the styles you need

const NavBar = () => {
  const [coinsAmount, setCoinsAmount] = useState(0); // Initialize coins amount with useState
  const navigate = useNavigate();

  // Function to increment coins amount by 100
  const incrementCoins = () => {
    setCoinsAmount(coinsAmount + 100);
  };

  const handleIconClick = (internalPath: string, externalUrl?: string) => {
    if (externalUrl) {
      window.open(externalUrl, '_blank'); // Open external link in new tab
    } else {
      navigate(internalPath); // Navigate internally within the app
    }
  };

  return (
    <nav className="sidebar">
      <div className="logo_items">
        <span className="logo_name">QUESTBET</span>
      </div>
      <div className="menu_container">
        <ul className="menu_items">
          <li className="item btn1" onClick={() => navigate('/Games')}>
            <span className="link-button flex shadow"><i className="bx bx-home-alt"></i><span>Home</span></span>
          </li>
          <li className="item btn2" onClick={() => navigate('/')}>
            <span className="link-button flex shadow"><i className="bx bx-grid-alt"></i><span>Games</span></span>
          </li>
          <li className="item btn3" onClick={() => navigate('/aboutus')}>
            <span className="link-button flex shadow"><i className="bx bx-id-card"></i><span>About Us</span></span>
          </li>
          <li className="item btn4" onClick={incrementCoins}>
            <span className="link-button flex"><i className='bx bxl-bitcoin'></i><span>{coinsAmount}</span></span>
          </li>
          {/* Additional links as needed */}
        </ul>
      </div>
      {/* Popup or other components as needed */}
    </nav>
  );
};

export default NavBar;
