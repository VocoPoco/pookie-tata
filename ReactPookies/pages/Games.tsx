import React from 'react';
import { useNavigate } from 'react-router-dom';
import ValorantLogo from '../public/valorant-logo-play-2.svg';
import lolLogo from '../public/icons8-league-of-legends.svg';
import CSLogo from '../public/CSLogo.svg';
import './Games.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // Example logged-in state, replace with your actual authentication logic
  const isLoggedIn = false;

  const handleIconClick = (internalPath: string, externalUrl?: string) => {
    if (!isLoggedIn) {
      navigate('/login'); // Navigate to login if not logged in
    } else {
      if (externalUrl) {
        window.open(externalUrl, '_blank'); // Open external link in new tab
      } else {
        navigate(internalPath); // Navigate internally within the app
      }
    }
  };

  return (
    <div>
      <img
        src={ValorantLogo}
        className="logo valorant"
        alt="Valorant logo"
        onClick={() => handleIconClick('/valorant')}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={lolLogo}
        className="logo LOL"
        alt="League of Legends logo"
        onClick={() => handleIconClick('/')}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={CSLogo}
        className="logo CS"
        alt="CS logo"
        onClick={() => handleIconClick('/cs')}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default Home;
