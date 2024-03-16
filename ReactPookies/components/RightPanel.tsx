import React from 'react';
import './RightPanel.css'; // Make sure this path is correct

const RightPanel: React.FC = () => {
  return (
    <div className="right-panel">
      <div className="section bounties">
        <h2>Bounties</h2>
        {/* Add content for bounties */}
        <ul>
          <li>Bounty 1</li>
          <li>Bounty 2</li>
          <li>Bounty 3</li>
        </ul>
      </div>
      <div className="section daily-quests">
        <h2>Daily Quests</h2>
        {/* Add content for daily quests */}
        <ul>
          <li>Quest 1</li>
          <li>Quest 2</li>
          <li>Quest 3</li>
        </ul>
      </div>
      <div className="section weekly-quests">
        <h2>Weekly Quests</h2>
        {/* Add content for daily quests */}
        <ul>
          <li>Quest 1</li>
          <li>Quest 2</li>
          <li>Quest 3</li>
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;
