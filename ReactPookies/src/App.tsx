import "./App.css";
import lolLogo from "/icons8-league-of-legends.svg";
import NavBar from "../components/navbar";
import LoginPage from "./user/login/login";

const App = () => {
  return (//<div className="app-container">
    <>  
      <NavBar />
      <MainContent />
      <RightPanel />
      </>// </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Main content goes here */}
      <a href="../pages/About.tsx" target="_blank" rel="noopener noreferrer">
        <img
          src={lolLogo}
          className="logo LOL logo-spin"
          alt="Mental Health Facilities logo"
        />
      </a>
    </div>
  );
};

const RightPanel: React.FC = () => {
  return (
    <div className="right-panel">
      <div className="bounties">
        Bounties
        {/* Bounties content or panels go here */}
      </div>
      <div className="daily-quests">
        Daily Quests
        {/* Daily quests content or panels go here */}
      </div>
    </div>
  );
};

const CompetetiveCgallengeList = () => {
  let list = []
  return (
    <div className="mid-list">

    </div>
  );
};


export default App;
