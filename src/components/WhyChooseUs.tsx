import whyImg from '../assets/images/why_choose_us.png';

const WhyChooseUs = () => {
  const features = [
    { title: 'User Centered Design', desc: 'Focusing on the needs and behaviors of your users.' },
    { title: 'Expert Team', desc: 'Our team consists of industry veterans with years of experience.' },
    { title: '24/7 Support', desc: 'We are always here to help you with any issues.' },
    { title: 'Data Driven Results', desc: 'We use analytics to drive our design decisions.' },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2>Why Choose Us</h2>
          <p>The right partner to build and scale your digital products.</p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: 'right', flex: 1 }}>
            {features.slice(0, 2).map((f, i) => (
              <div key={i}>
                <h4 style={{ color: 'var(--accent-pink)' }}>{f.title}</h4>
                <p style={{ margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={{ flex: 1.5, textAlign: 'center' }}>
            <img 
              src={whyImg} 
              alt="Why Choose Us" 
              style={{ 
                width: '100%', 
                borderRadius: '50% 50% 0 0', 
                border: '1px solid var(--glass-border)',
                padding: '20px'
              }} 
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', flex: 1 }}>
            {features.slice(2, 4).map((f, i) => (
              <div key={i}>
                <h4 style={{ color: 'var(--accent-orange)' }}>{f.title}</h4>
                <p style={{ margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
