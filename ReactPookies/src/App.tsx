import React from 'react';
import './App.css';
import NavBar from '../components/navbar'; // Adjust the import path as necessary
import Quests from '../components/Quests';
import VideoBackground from '../components/VideoBackground';
import "../components/VideoBackground.css"
// Optionally import MainContent if you decide to use it
// import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    < div className="main">
      <NavBar />
      <VideoBackground />
      <Quests />
    </div>
  );
};

export default App;
