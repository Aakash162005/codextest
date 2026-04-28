import heroImg from '../assets/images/hero_collaboration.png';

const Hero = () => {
  return (
    <section className="section-padding" style={{ paddingTop: '180px', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ marginBottom: '24px' }}>
          We Design Digital Experiences <br /> 
          <span className="gradient-text">That Drive Growth</span>
        </h1>
        <p style={{ maxWidth: '700px', margin: '0 auto 40px', fontSize: '1.1rem' }}>
          We help businesses build and scale digital products through 
          thoughtful design, robust development and results-driven solutions.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '80px' }}>
          <a href="#" className="btn btn-gradient">Get Started</a>
          <a href="#" className="btn btn-outline">View All Work</a>
        </div>
        
        <div className="hero-img-grid">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" alt="Team" className="img-side" />
          <img src={heroImg} alt="Collaboration" className="img-main" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} />
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Strategy" className="img-side" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


