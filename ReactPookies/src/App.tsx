import { useState } from "react";
import ValorantLogo from "../public/valorant-logo-play-2.svg";
import lolLogo from "/icons8-league-of-legends.svg";
import CSLogo from "../public/CSLogo.svg";
import "./App.css";
// import Navbar from "../components/navbar.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Navbar /> */}
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            src={ValorantLogo}
            className="logo valorant "
            alt="Valorant logo"
          />
        </a>
        <a
          href="https://www.leagueoflegends.com/en-gb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={lolLogo}
            className="logo LOL"
            alt="Mental Health Facilities logo"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={CSLogo} className="logo CS " alt="CS logo" />
        </a>
      </div>
      {/* Explore your limits */}
      {/* <h1>MHF + LOL</h1>
      Mental Health Facilities
      <div className="card"> */}
      {/*    <button onClick={() => setCount(count + 1)}>*/}
      {/*        count is {count}*/}
      {/*    </button>*/}
      {/*</div>*/}
    </>
  );
}

export default App;
