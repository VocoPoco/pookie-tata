import React from "react";
import { Link } from "react-router-dom";
import "./Contacts.css";
import "./navbar.css";
// import logoImage from "../Images/Logo.png"; // Ensure this path is correct

const NavBar = () => {
  // Function to handle the popup - placeholder for your own implementation
  const myFunction = () => {
    // Logic to show/hide the popup
  };

  return (
    <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image_Logo">
          {/* <img src={logoImage} alt="logo_img" /> */}
        </span>
        <span className="logo_name">MEOWIFY</span>
      </div>

      <div className="menu_container">
        <div className="menu_items">
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Menu</span>
            </div>
            <li className="item">
              <Link to="/" className="link flex">
                <i className="bx bx-home-alt"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className="item">
              <Link to="/products" className="link flex">
                <i className="bx bx-grid-alt"></i>
                <span>Products</span>
              </Link>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Information</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <Link to="/about-us" className="link flex">
                <i className="bx bx-id-card"></i>
                <span>About us</span>
              </Link>
            </li>
            <li className="item link flex" onClick={myFunction}>
              <i className="bx bx-info-circle"></i>
              <div className="popup">
              Contacts
                <span className="popuptext" id="myPopup">
                  Email: nrgoranov@gmail.com
                  <br />
                  Phone: ********
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
