import { ArrowRight, Mail, ShieldCheck, Globe, Zap } from 'lucide-react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const ecosystemLinks = [
  { 
    name: 'Core Services', 
    links: [
      { name: 'App Development', href: '/app-development' },
      { name: 'UI/UX Design', href: '/ui-ux' },
      { name: 'Digital Marketing', href: '#' },
      { name: 'Custom Software', href: '#' }
    ] 
  },
  { 
    name: 'Ecosystem', 
    links: [
      { name: 'CodexPulse', href: '#' },
      { name: 'CodexGrid', href: '#' },
      { name: 'CodexLabs', href: '#' },
      { name: 'CodexVault', href: '#' }
    ] 
  },
  {
    name: 'Company', 
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Our Work', href: '/work' },
      { name: 'Careers', href: '#' }
    ]
  }
];

const socialLinks = [
  { Icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/61584550145573/', color: '#1877F2' },
  { Icon: FaTwitter, label: 'Twitter', href: 'https://x.com/CodexConquer', color: '#1DA1F2' },
  { Icon: FaLinkedin, label: 'Linkedin', href: 'https://www.linkedin.com/company/codexconquer', color: '#0077B5' },
  { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/codexconquer', color: '#E4405F' },
  { Icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/@codexquestmedia?si=v3lmDnHwuIckbVWq', color: '#FF0000' },
];

export default function Footer() {
  const { isLight } = useTheme();
  const accentColor = isLight ? '#E94B59' : '#F43F5E';

  return (
    <footer
      className={`footer-shell px-6 md:px-16 pt-24 pb-12 w-full border-t transition-all duration-700 relative mt-20 shadow-[0_-20px_50px_rgba(244,63,94,0.03)] ${
        isLight ? 'border-slate-200' : 'border-white/5'
      }`}
      style={{
        background: isLight ? 'linear-gradient(135deg, #1B1F3A, #3B2D3F)' : '#04020a',
      }}
    >
      {/* Background Visual Enhancers */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-1/2 left-1/3 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── Looking for a Design Partner? Banner ── */}
        <div className="w-full rounded-[30px] overflow-hidden relative shadow-2xl -mt-40 mb-20 z-20 min-h-[180px] flex items-center bg-transparent group border border-white/10">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-[1.02]"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(20,10,35,0.6) 100%), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=400&fit=crop&crop=center')`,
            }}
          />
          <div className="px-8 md:px-16 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between relative z-10 w-full gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight leading-none">
                Looking for a Design Partner?
              </h2>
              <p className="text-gray-300 text-sm md:text-base font-medium">Elevate your brand presence with outstanding aesthetics.</p>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-black text-xs md:text-sm tracking-widest uppercase px-10 py-5 rounded-2xl flex items-center gap-3 hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300 shadow-2xl shadow-pink-500/20"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── Main Links Deck ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand/Introduction */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 blur-[30px] bg-pink-500/20 rounded-full group-hover:opacity-60 transition-opacity" />
              <img
                src={logoImg}
                alt="CodeXConquer Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-contain relative z-10 transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white tracking-tighter mb-2">CodeXConquer</h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed max-w-sm">
                Transforming enterprise architectures via premium custom UI/UX paradigms seamlessly.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-gray-400 text-xs font-semibold">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-pink-500" /> Secure Data</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-purple-500" /> Global Reach</span>
            </div>
          </div>

          {/* Dynamic Ecosystem Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8 content-start">
            {ecosystemLinks.map((section) => (
              <div key={section.name} className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest text-white">{section.name}</h4>
                <ul className="space-y-4">
                  {section.links.map((sublink) => (
                    <li key={sublink.name} className="flex items-center gap-2 group/link">
                      <Zap className="w-3 h-3 text-pink-500/60 group-hover/link:text-pink-500 transition-colors shrink-0" />
                      <Link
                        to={sublink.href}
                        className="text-gray-400 font-semibold text-sm hover:text-pink-500 transition-colors duration-200"
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            <h4 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2 justify-center lg:justify-start">
              <Mail className="w-4 h-4 text-pink-500" /> Stay Informed
            </h4>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Get the latest insights on design trends directly.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-gray-500 focus:border-pink-500/50 outline-none transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:brightness-110 text-white font-bold text-xs uppercase tracking-widest px-4 rounded-xl transition-all shadow-md">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* ── Social Connect Deck ── */}
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {socialLinks.map(({ Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
              >
                <div style={{ color: color }} className="group-hover:scale-110 group-hover:-translate-y-1 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Legal / Metadata ── */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-11px font-bold text-gray-500 uppercase tracking-widest text-center md:text-left">
            © 2023-2026 CODEXCONQUER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-widest">
            <Link to="/terms" className="text-gray-400 hover:text-pink-500 transition-colors">Terms</Link>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-pink-500 transition-colors">Privacy</Link>
            <Link to="/faq" className="text-gray-400 hover:text-pink-500 transition-colors">FAQs</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
