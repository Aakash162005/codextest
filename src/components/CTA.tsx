
const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="glass-card" style={{ 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, rgba(255, 61, 119, 0.1) 0%, rgba(255, 142, 60, 0.1) 100%)',
          padding: '80px 40px'
        }}>
          <h2 style={{ marginBottom: '24px' }}>Ready to build something <br /> <span className="gradient-text">impactful together?</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
            Let's turn your ideas into digital reality. Our team is ready to take on the challenge.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="#" className="btn btn-gradient">Get Started Now</a>
            <a href="#" className="btn btn-outline">Schedule a Call</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
