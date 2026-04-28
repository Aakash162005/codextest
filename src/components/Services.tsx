
const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      desc: 'Creating intuitive and engaging user experiences that delight your customers.',
      img: 'https://images.unsplash.com/photo-1586717791821-3f44a563de4c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Web Development',
      desc: 'Building robust, scalable, and high-performance web applications.',
      img: 'https://images.unsplash.com/photo-1547658719-da2b8116c171?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mobile Apps',
      desc: 'Developing seamless mobile experiences for iOS and Android platforms.',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="section-padding" id="services">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '16px' }}>Services</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            We provide a wide range of digital services to help your business grow.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {services.map((service, idx) => (
            <div key={idx} className="glass-card" style={{ padding: 0, overflow: 'hidden', transition: 'transform 0.3s' }}>
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to bottom, transparent, rgba(6, 2, 18, 0.9))' 
                }} />
                <h3 style={{ position: 'absolute', bottom: '20px', left: '20px', margin: 0 }}>{service.title}</h3>
              </div>
              <div style={{ padding: '32px' }}>
                <p style={{ marginBottom: '24px' }}>{service.desc}</p>
                <a href="#" className="gradient-text" style={{ fontWeight: '600', textDecoration: 'none' }}>Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
