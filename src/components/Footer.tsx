import { ArrowRight } from 'lucide-react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const ecosystemLinks = [
  { name: 'CodexCore', links: [{ name: 'Visa Direct', href: '#' }] },
  { name: 'CodexPulse', links: [{ name: 'Digital Marketing', href: '/digital-marketing' }] },
  { name: 'CodexVault', links: [{ name: 'Premium Features', href: '#' }] },
  {
    name: 'CodexIQ', links: [{ name: 'Employee Support', href: '#' },
    { name: 'Human Resources', href: '#' }
    ]
  },
  {
    name: 'CodexLabs', links: [
      { name: 'App Development', href: '/app-development' },
      { name: 'Website Development', href: '/web-development' },
      { name: 'Game Development', href: '/game-development' }

    ]
  },
  {
    name: 'CodexGrid', links: [{ name: 'Chat Application', href: '#' },
    { name: 'Resume Analyser', href: '#' },
    { name: 'Employee Management Pro', href: '#' }
    ]
  },
  { name: 'CodexAI', links: [{ name: 'AI Solutions', href: '#' }] },
  { name: 'CodexAcademy', links: [{ name: 'Blog', href: '#' }] },
  { name: 'CodexForge', links: [{ name: 'Graphics & UI/UX', href: '/ui-ux' }] },
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
  const accentColor = isLight ? '#E94B59' : '#C8FF00';

  return (
    <footer
      className={`footer-shell px-[20px] sm:px-[80px] pb-[40px] w-full border-t transition-all duration-700 relative mt-[80px] sm:mt-[100px] shadow-[0_0_50px_rgba(79,70,229,0.1)] ${isLight ? 'border-slate-200' : 'border-white/5'}`}
      style={{
        background: isLight ? 'linear-gradient(135deg, #1B1F3A, #3B2D3F)' : '#000000',
      }}
    >
      <div className="w-full relative">
        {/* Looking for a Design Partner? Banner (Kept for premium feel) */}
        <div className="w-full max-w-[1200px] mx-auto rounded-[12px] overflow-hidden relative shadow-2xl -mt-[50px] mb-[60px] z-20 min-h-[160px] flex items-center bg-transparent group">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-[1.02]"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=400&fit=crop&crop=center')`,
            }}
          />
          <div className="px-[20px] md:px-[40px] py-[20px] md:py-[25px] flex flex-col md:flex-row items-center justify-between relative z-10 w-full gap-4">
            <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-[24px] md:mb-0 text-center md:text-left">
              Looking for a Design Partner?
            </h2>
            <Link
              to="/contact"
              className={`flex items-center ${isLight
                ? 'bg-[#EF4444] !text-white hover:!text-white'
                : 'bg-[#C8FF00] !text-black hover:!text-black'
                } rounded-full pl-[24px] pr-[8px] py-[8px] font-bold text-[14px] tracking-wide shadow-md transition-all hover:scale-105 hover:brightness-110 hover:shadow-xl`}
            >
              GET STARTED
              <div className={`ml-[16px] ${isLight ? 'bg-black/20' : 'bg-black/10 text-black'} rounded-full p-[8px] transition-colors`}>
                <ArrowRight className="w-[16px] h-[16px]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Main row: Brand left | 9 Ecosystem headings right */}
        <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[80px] mb-[60px]">

          {/* Brand */}
          <div className="flex flex-col items-center text-center shrink-0 w-full lg:max-w-[280px]">
            <div className="relative mb-[20px] group">
              <div className={`absolute inset-0 blur-[35px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${isLight ? 'bg-red-500' : 'bg-[#C8FF00]'}`}></div>
              <img
                src={logoImg}
                alt="CodeXConquer Logo"
                className="w-[110px] md:w-[130px] h-auto relative z-10 transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="text-[22px] md:text-[26px] font-black text-white tracking-tight font-display mb-[10px]">CodeXConquer</div>
            <p className="text-[#A6A6A6] leading-[1.7] text-[13px] max-w-[400px] lg:max-w-none">
              Transforming Businesses through Innovative Digital Solutions, Social Media & Website Development, Mobile App Development & Online Courses.
            </p>
          </div>

          {/* 9 Ecosystem headings — Responsive grid filling the right side */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-[20px] sm:gap-x-[40px] gap-y-[32px] content-start">
            {ecosystemLinks.map((item) => (
              <div key={item.name} className="flex flex-col gap-[14px]">
                <h4 className="text-[14px] font-bold uppercase tracking-wider !text-white opacity-100">
                  {item.name}
                </h4>
                {item.links && item.links.length > 0 && (
                  <ul className="flex flex-col gap-[12px]">
                    {item.links.map((sublink) => (
                      <li key={sublink.name} className="flex items-start gap-[10px] group/item">
                        <span
                          className="w-[5px] h-[5px] rounded-full mt-[7px] shrink-0 transition-transform duration-300 group-hover/item:scale-125"
                          style={{ backgroundColor: accentColor }}
                        />
                        <Link
                          to={sublink.href}
                          className={`text-[13px] font-medium text-white/80 transition-all duration-300 leading-tight ${isLight ? 'hover:text-[#E94B59]' : 'hover:text-[#C8FF00]'
                            }`}
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Section: Social Labels Row and Copyright */}
        <div className="border-t border-white/5 pt-[60px] pb-[40px] flex flex-col items-center w-full">
          {/* Social Links with Labels - Full Width Spread */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center w-full px-[20px] md:px-[60px] gap-x-[40px] gap-y-[30px] mb-[60px]">
            {socialLinks.map(({ Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center gap-[10px] group transition-all"
              >
                <div
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{ color: color }}
                >
                  <Icon className="w-[16px] h-[16px]" />
                </div>
                <span className="text-[11px] font-black text-white/70 group-hover:text-white transition-colors tracking-[0.2em] uppercase">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright and Legal Links Row */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] px-[20px] md:px-[40px] mt-[40px] gap-y-[25px]">
            {/* Copyright Text - Far Left */}
            <div className="text-[10px] md:text-[10px] text-white tracking-[0.3em] font-medium uppercase text-center md:text-left">
              © 2023-2026 CODEXCONQUER. ALL RIGHTS RESERVED.
            </div>

            {/* Legal Links - Far Right */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-[25px] gap-y-[10px]">
              {[
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'FAQs', href: '/faq' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[10px] md:text-[10px] text-white font-bold uppercase tracking-[0.15em] transition-all duration-300 ${isLight ? 'hover:text-[#E94B59]' : 'hover:text-[#C8FF00]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
