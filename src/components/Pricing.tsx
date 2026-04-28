
const Pricing = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2>Pricing Plan</h2>
          <p>The right plan for your business needs.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          <div className="glass-card" style={{ borderTop: '4px solid var(--accent-pink)' }}>
            <h3>Standard Pack</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '24px 0' }}>$4,999<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span></div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              <li style={{ marginBottom: '12px' }}>✓ UI/UX Design</li>
              <li style={{ marginBottom: '12px' }}>✓ Web Development</li>
              <li style={{ marginBottom: '12px' }}>✓ 2 Revision Cycles</li>
              <li style={{ marginBottom: '12px' }}>✓ Support & Maintenance</li>
            </ul>
            <a href="#" className="btn btn-outline" style={{ width: '100%' }}>Subscribe Now</a>
          </div>
          
          <div className="glass-card" style={{ borderTop: '4px solid var(--accent-orange)', background: 'rgba(255, 255, 255, 0.05)' }}>
            <h3>Premium Pack</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '24px 0' }}>Custom<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span></div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              <li style={{ marginBottom: '12px' }}>✓ Everything in Standard</li>
              <li style={{ marginBottom: '12px' }}>✓ Mobile App Development</li>
              <li style={{ marginBottom: '12px' }}>✓ Unlimited Revisions</li>
              <li style={{ marginBottom: '12px' }}>✓ Priority Support</li>
            </ul>
            <a href="#" className="btn btn-gradient" style={{ width: '100%' }}>Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
