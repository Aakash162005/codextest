import proj1 from '../assets/images/project_app_1.png';
import proj2 from '../assets/images/project_web_1.png';

const Portfolio = () => {
  const projects = [
    { title: 'Services Cellplus', category: 'Mobile App', img: proj1 },
    { title: 'Al-Bakateria', category: 'Branding', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80' },
    { title: 'Visa Direct', category: 'Web App', img: proj2 },
  ];

  return (
    <section className="section-padding" id="portfolio">
      <div className="container">
        <h2 style={{ marginBottom: '40px' }}>Our Work</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '400px' }}>
              <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(6, 2, 18, 0.9), transparent)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '32px'
              }}>
                <h3 style={{ margin: 0 }}>{proj.title}</h3>
                <p style={{ margin: '8px 0 0 0', color: 'rgba(255,255,255,0.7)' }}>{proj.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
