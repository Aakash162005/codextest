import "./projects.css";
import { Link } from "react-router-dom";

import visa from "../../../assets/visa.png";
import food from "../../../assets/food.png";
import repair from "../../../assets/repair.png";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">

        <h2 className="section-title">Our Clients Websites</h2>

        {/* ROW 1 */}
        <div className="project-row">
          <div className="project-image">
            <img src={visa} alt="visa" />
          </div>

          <div className="project-text">
            <h3>Visa Direct</h3>

            <p>
              Visa Direct is a trusted education and immigration consultancy 
              that provides comprehensive study abroad guidance, expert visa 
              assistance and personalized global career support, ensuring students 
              smoothly transition from choosing the right course to settling into 
              their international future.
            </p>

            <Link
              to="/projects/visa-direct"
              className="btn-primary"
            >
              View Project →
            </Link>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="project-row">

          <div className="project-text">
            <h3>El Broasteria</h3>

            <p>
              El Broasteria restaurant serves crispy, golden roasted chicken and freshly 
              prepared fast food made with high-quality ingredients. Enjoy a delicious 
              range of burgers, wraps, sandwiches and flavorful sides, all crafted for 
              great taste, quick service and a satisfying dining experience in every bite.
            </p>

            <Link
              to="/projects/el-broasteria"
              className="btn-primary"
            >
              View Project →
            </Link>
          </div>

          <div className="project-image burger-image">
            <img src={food} alt="food" />
          </div>

        </div>

        {/* ROW 3 */}
        <div className="project-row">
          <div className="project-image">
            <img src={repair} alt="repair" />
          </div>

          <div className="project-text">
            <h3>Services Cellplus</h3>

            <p>
              Services CellPlus offers fast, professional, and affordable mobile
              and tablet repair services in Montreal, specializing in iPhone, 
              Android and iPad screen and battery replacements, water damage 
              repair and a wide range of high-quality new and refurbished 
              laptops and accessories. Trusted by customers for consistent service.
            </p>

            <Link
              to="/projects/services-cellplus"
              className="btn-primary"
            >
              View Project →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;