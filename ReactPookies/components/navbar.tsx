import { Link } from "react-router-dom";
import "./navbar.css"; // Ensure this CSS file includes all the styles you shared

const NavBar = () => {
  let CoinsAmount = 9999;
  return (
    <nav className="sidebar">
      <div className="logo_items">
        <span className="logo_name">QUESTBET</span>
      </div>
      <div className="menu_container">
        <ul className="menu_items">
          <li className="item btn1">
            <Link to="/" className="link-button flex shadow"><i className="bx bx-home-alt"></i>
<span>Home</span></Link>
          </li>
          <li className="item btn2">
            <Link to="/products" className="link-button flex shadow"><i className="bx bx-grid-alt"></i>
<span>Games</span></Link>
          </li>
          <li className="item btn3">
            <Link to="/about-us" className="link-button flex shadow"><i className="bx bx-id-card"></i>
<span>About Us</span></Link>
          </li>
          <li className="item btn4">
            <Link to="/about-us" className="link-button flex"><i className='bx bxl-bitcoin' ></i><span>{CoinsAmount}</span></Link>
          </li>
          {/* Additional links as needed */}
        </ul>
      </div>
      {/* Popup or other components as needed */}
    </nav>
  );
};

export default NavBar;
