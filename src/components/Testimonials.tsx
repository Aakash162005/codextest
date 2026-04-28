import avatar from '../assets/images/avatar.png';

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it.</p>
        </div>
        
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: '4rem', color: 'rgba(255, 61, 119, 0.2)', position: 'absolute', top: '20px', left: '40px' }}>“</div>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
            The team at CodeX transformed our vision into a stunning digital reality. 
            Their attention to detail and commitment to quality is unmatched. 
            We've seen a 40% increase in user engagement since the launch.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <img src={avatar} alt="Aman Mehra" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: 0 }}>Aman Mehra</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Founder, @AmazonIndia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
