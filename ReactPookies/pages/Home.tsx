// src/pages/Home.tsx
import React from "react";
// import ValorantLogo from "../public/valorant-logo-play-2.svg";
// import lolLogo from "../public/icons8-league-of-legends.svg";
// import CSLogo from "../public/CSLogo.svg";
import "../src/";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">
          {/* <img
            src={ValorantLogo}
            className="logo valorant"
            alt="Valorant logo"
          /> */}
        </a>
        <a
          href="https://www.leagueoflegends.com/en-gb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img
            src={lolLogo}
            className="logo LOL"
            alt="League of Legends logo"
          /> */}
        </a>
        {/* <a href="" target="_blank" rel="noopener noreferrer">
          <img src={CSLogo} className="logo CS" alt="CS logo" />
        </a> */}
      </div>
    </>
  );
};

export default Home;
