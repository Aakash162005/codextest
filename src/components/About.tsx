import aboutImg from '../assets/images/about_team.png';

const About = () => {
  const stats = [
    { icon: '👥', title: 'Dedicated Team', label: 'Experts at work' },
    { icon: '🚀', title: 'Great Result', label: '100% Satisfaction' },
    { icon: '🎧', title: '24/7 Support', label: 'Always online' },
    { icon: '🏆', title: 'Winning Award', label: 'Best in class' },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ marginBottom: '24px' }}>About company</h2>
            <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
              We are a team of passionate designers and developers dedicated to creating impactful digital experiences. 
              Our mission is to help businesses grow by providing innovative solutions that resonate with their audience.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '24px', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{stat.icon}</div>
                  <h4 style={{ margin: '0 0 4px 0' }}>{stat.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <img 
              src={aboutImg} 
              alt="Our Team" 
              style={{ 
                width: '100%', 
                borderRadius: '32px', 
                border: '1px solid var(--glass-border)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
              }} 
            />
            <div style={{ 
              position: 'absolute', 
              bottom: '-20px', 
              right: '-20px', 
              background: 'var(--accent-gradient)',
              padding: '24px 40px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(255, 61, 119, 0.3)'
            }}>
              <h3 style={{ margin: 0, color: 'white' }}>12+</h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
