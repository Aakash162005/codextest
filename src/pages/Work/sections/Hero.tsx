import "./hero.css";
import { Link } from "react-router-dom";

import heroImg from "../../../assets/top.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <div className="container hero-content">

          <h1>
            Work that drives real results, not just looks good
          </h1>

          <p>
            Explore how we design websites and apps that help brands grow,
            <br />
            convert and stand out
          </p>

          <div className="hero-buttons">

            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Started →
            </Link>

            <Link
              to="/contact"
              className="btn-outline"
            >
              View Projects
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;