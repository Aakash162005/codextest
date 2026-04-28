import "./navbar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container nav-inner">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        {/* MENU */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Our Work</Link>
        </div>

        {/* BUTTON */}
        <Link to="/contact" className="nav-btn">
          Get Started <span>→</span>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;