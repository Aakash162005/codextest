import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#060212]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-pink-500/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Clicks to Home */}
        <div className="flex items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={logoImg} 
              alt="CodeX Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Our Work', path: '/work' },
            { name: 'Contact Us', path: '/contact' },
          ].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name}
                to={item.path} 
                className={`transition-colors relative group ${
                  isActive ? 'text-pink-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-gradient-to-r from-pink-500 to-rose-500 transition-transform origin-left duration-300 ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-pink-500/20 hover:scale-105 hover:shadow-pink-500/30 transition-all flex items-center gap-2"
          >
            Get Started
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
