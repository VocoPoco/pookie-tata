import "./App.css";
import lolLogo from "/icons8-league-of-legends.svg";
import NavBar from "../components/navbar";

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <MainContent />
      <RightPanel />
    </div>
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

const RightPanel = () => {
  return (
    <div className="right-panel">
      {/* Right panel content goes here */}
      Additional content or panels here.
    </div>
  );
};

export default App;
