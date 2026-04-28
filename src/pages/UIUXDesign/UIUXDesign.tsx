import { useState } from 'react';
import { 
  Users, 
  GitFork, 
  Layout, 
  Palette, 
  Search, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Mail,
  Check
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Import images
import heroBg from '../../assets/images/uiux_hero_bg.png';
import uiCard from '../../assets/images/ui_design_card.png';
import uxCard from '../../assets/images/ux_design_card.png';
import collaboration from '../../assets/images/design_collaboration.png';

import './UIUXDesign.css';

const UIUXDesign = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We will contact you at ${email}`);
    setEmail('');
  };

  return (
    <div className="uiux-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(to bottom, rgba(6, 2, 18, 0.7), var(--bg-dark)), url(${heroBg})` }}>
        <div className="container hero-content">
          <h1 className="hero-title animate-fade-in">
            UI/UX Design for Better <span className="gradient-text">User Experience</span>
          </h1>
          <p className="hero-subtext animate-fade-in-delay">
            We design intuitive, user-friendly and visually clean interfaces that improve usability and engagement across web and mobile platforms.
          </p>
          <a href="#contact" className="btn btn-primary btn-gradient animate-fade-in-delay-2">
            Get Started <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section container">
        <div className="section-header text-center">
          <h2 className="section-title">Our UI/UX Design Services</h2>
          <p className="section-subtitle">
            We provide UI/UX design solutions focused on usability, clarity and consistent user experience across digital platforms.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card glass-card">
            <div className="card-image-wrapper">
              <img src={uiCard} alt="User Interface Design" className="card-image" />
            </div>
            <div className="card-content">
              <h3>User Interface (UI) Design</h3>
              <p>Design visually consistent, modern and responsive interfaces that align with your brand and provide clarity.</p>
            </div>
          </div>

          <div className="service-card glass-card">
            <div className="card-image-wrapper">
              <img src={uxCard} alt="User Experience Design" className="card-image" />
            </div>
            <div className="card-content">
              <h3>User Experience (UX) Design</h3>
              <p>Create smooth user journeys with clear navigation and logical user flows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Capabilities Section */}
      <section className="capabilities-section container">
        <div className="capabilities-grid">
          <div className="capabilities-text">
            <h2>Design Capabilities</h2>
            <p className="lead-text">
              We design intuitive and user-friendly interfaces that improve usability and create research-backed experiences.
            </p>
            <p className="sub-text">
              From UX research to user testing, we ensure that your product looks good and works across platforms.
            </p>
          </div>

          <div className="capabilities-list-wrapper glass-card">
            <ul className="capabilities-list">
              <li>
                <div className="check-icon"><Check size={18} /></div>
                <span>Wireframing and prototyping to define layout and visual structure.</span>
              </li>
              <li>
                <div className="check-icon"><Check size={18} /></div>
                <span>Responsive designs for mobile, tablet, and desktop screens.</span>
              </li>
              <li>
                <div className="check-icon"><Check size={18} /></div>
                <span>Usability and accessibility improvements for better interaction.</span>
              </li>
              <li>
                <div className="check-icon"><Check size={18} /></div>
                <span>Design enhancements and redesigns to improve quality and performance.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Diagram Section */}
      <section className="diagram-section container">
        <div className="diagram-container">
          <div className="diagram-text diagram-tl">
            <h4>Usability & Accessibility</h4>
          </div>
          <div className="diagram-text diagram-tr">
            <h4>Wireframing & Prototyping</h4>
          </div>

          <div className="diagram-center">
            <div className="center-image-wrapper">
              <img src={collaboration} alt="Collaboration" className="center-image" />
            </div>
          </div>

          <div className="diagram-text diagram-bl">
            <h4>Design Improvements & Redesign</h4>
          </div>
          <div className="diagram-text diagram-br">
            <h4>Responsive Design</h4>
          </div>

          {/* SVG Curved Lines */}
          <svg className="diagram-lines" viewBox="0 0 1000 500" preserveAspectRatio="none">
            {/* Top Left to Center */}
            <path d="M 250 100 Q 350 100 450 200" className="dashed-path" />
            {/* Top Right to Center */}
            <path d="M 750 100 Q 650 100 550 200" className="dashed-path" />
            {/* Bottom Left to Center */}
            <path d="M 250 400 Q 350 400 450 300" className="dashed-path" />
            {/* Bottom Right to Center */}
            <path d="M 750 400 Q 650 400 550 300" className="dashed-path" />
          </svg>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="process-section container">
        <div className="section-header text-center">
          <h2>Our Design Process</h2>
          <p className="section-subtitle">
            We follow a structured design process to ensure clarity, usability and consistency across all UI/UX projects.
          </p>
        </div>

        <div className="process-timeline">
          <div className="timeline-line"></div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <Users size={24} />
            </div>
            <div className="timeline-content">
              <h3>Requirement Understanding</h3>
              <p>We understand project goals, target users, and analyze competitors before starting.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <GitFork size={24} />
            </div>
            <div className="timeline-content">
              <h3>User Flow Planning</h3>
              <p>We plan structures, journey maps to ensure smooth navigation and interaction.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <Layout size={24} />
            </div>
            <div className="timeline-content">
              <h3>Wireframing</h3>
              <p>We create structural layouts to define content placement and user flow.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <Palette size={24} />
            </div>
            <div className="timeline-content">
              <h3>UI Design</h3>
              <p>We design visually clean and consistent interfaces aligned with the product.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <Search size={24} />
            </div>
            <div className="timeline-content">
              <h3>Review & Refinement</h3>
              <p>We refine designs based on feedback to improve usability and clarity.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <Rocket size={24} />
            </div>
            <div className="timeline-content">
              <h3>Final Design Handoff</h3>
              <p>We deliver finalized design files ready for development implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2>Why Choose CodeXConquer</h2>
        </div>

        <div className="why-grid">
          <div className="why-card glass-card">
            <h3>User-Focused Design</h3>
            <p>We design interfaces that are easy to understand and simple for users to navigate.</p>
          </div>

          <div className="why-card glass-card">
            <h3>Clean & Consistent Layout</h3>
            <p>Our designs follow a clear structure and consistent visual hierarchy at all levels.</p>
          </div>

          <div className="why-card glass-card">
            <h3>Responsive Across Devices</h3>
            <p>All layouts work perfectly on mobile, tablet, and desktop devices.</p>
          </div>

          <div className="why-card glass-card">
            <h3>Development-Ready Designs</h3>
            <p>Our UI/UX design can easily be built into a working implementation by developers.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section container">
        <div className="cta-card">
          <h2>Want Better User Experience?</h2>
          <p>Let's discuss how we can design a seamless user experience for your product.</p>
          
          <form onSubmit={handleSubmit} className="cta-form">
            <div className="input-group">
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary btn-gradient">
              Get Started <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UIUXDesign;
