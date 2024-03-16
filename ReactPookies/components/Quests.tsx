import React from 'react';
import './Quests.css'; // Make sure this path is correct
// import earlyBirdImage from './images/early_bird.png'; // Import images for challenges
// import flawlessVictoryImage from './images/flawless_victory.png';

const RightPanel: React.FC = () => {
  return (
    <div className="right-panel">
      <div className="section bounties">
        <h2>Bounties</h2>
        <ul className="bounty-list">
          <li>
            <strong>Master of the Rift:</strong> Achieve a pentakill in any Summoner's Rift game mode. Reward: 5000 Blue Essence and an exclusive "Pentakill Master" summoner icon.
          </li>
        </ul>
      </div>
      <div className="section daily-quests">
        <h2>Daily Quests</h2>
        <ul className="daily-list">
          <li>
            {/* <img src={earlyBirdImage} alt="Early Bird Special" className="quest-image" /> */}
            <strong>Early Bird Special:</strong> Win one game before 10:00 AM in your local time zone. Reward: 1000 Blue Essence and a "Morning Champion" summoner icon.
          </li>
          <br/>
          <li>
            {/* <img src={flawlessVictoryImage} alt="Flawless Victory" className="quest-image" /> */}
            <strong>Flawless Victory:</strong> Achieve a perfect KDA (no deaths) in any game mode. Reward: 2000 Blue Essence and an "Untouchable" emote.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;
