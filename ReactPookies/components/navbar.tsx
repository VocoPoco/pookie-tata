import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

type NavBarProps = {
  isLoggedIn: boolean;
  userProfilePic?: string;
};

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn, userProfilePic }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home Page</Link>
        <Route path="/about" element={<About />} />
        <Link to="/settings">Settings</Link>
      </div>
      <div className="login-section">
        {isLoggedIn ? (
          <img src={userProfilePic} alt="Profile" className="profile-pic" />
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
