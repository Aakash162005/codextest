import "./footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import ie from "../../assets/ie.png";
import js from "../../assets/js.png";
import react from "../../assets/r.png";
import html from "../../assets/s.png";

import fb from "../../assets/fb.png";
import x from "../../assets/x.png";
import linkedin from "../../assets/in.png";
import instagram from "../../assets/ig.png";
import yt from "../../assets/yt.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <Link to="/">
          <img src={logo} alt="logo" className="footer-logo" />
        </Link>

        <p>
          Helping businesses grow with smart digital solutions.
        </p>
      </div>

      <div className="footer-grid">

        {/* SERVICES */}
        <div>
          <h3>Services</h3>

          <ul>
            <li><Link to="/services">Digital Marketing</Link></li>
            <li><Link to="/services">App Development</Link></li>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">UI/UX Design</Link></li>
            <li><Link to="/services">Online Courses</Link></li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/faq">FAQ’s</Link></li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div className="subscribe-box">

          <h3>Subscribe</h3>

          <div className="subscribe-input">
            <input type="text" placeholder="Enter your email" />

            <Link to="/subscribe">
              <button>Subscribe</button>
            </Link>
          </div>

          <h3 className="trending-title">
            Trending Services
          </h3>

          <div className="tech-icons">

            <Link to="/services" className="tech-box">
              <img src={ie} alt="ie" />
            </Link>

            <Link to="/services" className="tech-box">
              <img src={html} alt="html" />
            </Link>

            <Link to="/services" className="tech-box">
              <img src={js} alt="js" />
            </Link>

            <Link to="/services" className="tech-box">
              <img src={react} alt="react" />
            </Link>

          </div>

        </div>

      </div>

      <div className="socials">

        <a href="https://facebook.com" target="_blank">
          <img src={fb} alt="facebook" />
        </a>

        <a href="https://x.com" target="_blank">
          <img src={x} alt="x" />
        </a>

        <a href="https://linkedin.com" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>

        <a href="https://instagram.com" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>

        <a href="https://youtube.com" target="_blank">
          <img src={yt} alt="youtube" />
        </a>

      </div>

      <div className="copyright">
        © 2023-2025 CodexConquer. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;