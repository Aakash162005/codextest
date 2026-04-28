import "./stats.css";
import img from "../../../assets/team-composite.png";
import partner from "../../../assets/partner.png";
import reliability from "../../../assets/reliability.png";
import platform from "../../../assets/platform.png";

const Stats = () => {
  return (
    <section className="growth">
      <div className="container growth-grid">

        {/* LEFT */}
        <div className="growth-left">
          <h2>
            Driving Growth Through
            <br />
            Digital Solutions
          </h2>

          <p>
            We help businesses transform ideas into impactful digital
            experiences. Our focus is on clean design, strong
            functionality and measurable results that support long
            term growth.
          </p>

          <div className="features">

            <div className="feature-item">
<div className="feature-icon">
  <img src={partner} alt="partner" />
</div>
              <div>
                <h3>Trusted Partner</h3>

                <span>
                  Building lasting relationships through
                  consistent results and trust.
                </span>
              </div>
            </div>

            <div className="feature-item">
<div className="feature-icon">
  <img src={platform} alt="platform" />
</div>
              <div>
                <h3>Fast paced Platform</h3>

                <span>
                  Optimized for fast loading, smooth
                  experience, and future growth.
                </span>
              </div>
            </div>

            <div className="feature-item">
<div className="feature-icon">
  <img src={reliability} alt="reliability" />
</div>
              <div>
                <h3>Tested Reliability</h3>

                <span>
                  Built with precision and validated
                  through real-world use cases.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="team-image">
          <img src={img} alt="team" />
        </div>

      </div>

      {/* STATS */}
      <div className="container stats-row">

        <div className="stat-card">
          <h3>98%</h3>

          <h4>Client Satisfaction</h4>

          <p>
            Positive feedback across delivered projects
          </p>
        </div>

        <div className="stat-card">
          <h3>90%</h3>

          <h4>Performance Optimization</h4>

          <p>
            Faster and smoother digital experiences
          </p>
        </div>

        <div className="stat-card">
          <h3>95%</h3>

          <h4>Design Accuracy</h4>

          <p>
            Pixel-perfect and detail-oriented execution
          </p>
        </div>

        <div className="stat-card">
          <h3>92%</h3>

          <h4>Project Success Rate</h4>

          <p>
            Delivered on time and aligned with goals
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;