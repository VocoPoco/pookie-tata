import React from 'react';
import './AboutUs.css'; // Make sure to create this CSS file for styling
import NavBar from '../components/navbar';

// Sample data for team members, replace with real data
const teamMembers = [
  { id: 1, name: 'Jane Doe', role: 'CEO', description: 'Leading the company to success.' },
  { id: 2, name: 'John Smith', role: 'CTO', description: 'In charge of technology and innovation.' },
  { id: 3, name: 'Alice Johnson', role: 'CFO', description: 'Managing finances with precision.' },
  { id: 4, name: 'Bob Brown', role: 'COO', description: 'Ensuring operational excellence.' },
];

const AboutUs: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="about-us-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-card">
            <div className="team-member-header">{member.name}</div>
            <div className="team-member-body">
              <p><strong>Role:</strong> {member.role}</p>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
