import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Portfolio from '../../components/Portfolio';
import About from '../../components/About';
import WhyChooseUs from '../../components/WhyChooseUs';
import Pricing from '../../components/Pricing';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';

const Landing = () => {
  return (
    <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
      <Navbar />

      <main>
        <Hero />

        <section
          style={{
            padding: '60px 0',
            borderTop: '1px solid var(--glass-border)',
            borderBottom: '1px solid var(--glass-border)',
            background: 'rgba(255,255,255,0.02)',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: 0.6,
                flexWrap: 'wrap',
                gap: '40px',
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="Uber"
                style={{ height: '24px', filter: 'invert(1)' }}
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Microsoft_logo.svg"
                alt="Microsoft"
                style={{ height: '24px', filter: 'invert(1)' }}
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                style={{ height: '24px', filter: 'invert(1)' }}
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                style={{ height: '20px', filter: 'invert(1)' }}
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
                alt="Adidas"
                style={{ height: '30px', filter: 'invert(1)' }}
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
                style={{ height: '20px', filter: 'invert(1)' }}
              />
            </div>
          </div>
        </section>

        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Landing;