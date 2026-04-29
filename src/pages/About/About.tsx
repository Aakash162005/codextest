import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Eye, Target } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Use available imagery
import heroBg from '../../assets/images/images/13b7aba30dce6bbfdbaa27e21ded41e586cad872.jpg';
import team1 from '../../assets/images/images/5eb4cbe6565c572aad2c8bc2348e32e39f0ab94c.jpg';
import team2 from '../../assets/images/images/f9e18b9e4aac280758f4a53fcac7154e9892feb5.jpg';
import team3 from '../../assets/images/images/ac26d0f8f62ecd10c3482e0ba76d59e963878c6e.jpg';
import avatarPlaceholder from '../../assets/images/images/avatar.png';

export default function About() {
  return (
    <div className="min-h-screen font-sans text-white selection:bg-pink-500/30 overflow-x-hidden relative" style={{ background: '#060212' }}>
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-900/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-pink-900/15 blur-[180px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* ── Hero Section ── */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#060212] via-[#060212]/80 to-[#060212]" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto mt-12">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] text-white"
            >
              Driven by creativity, <br/>
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">powered by innovation</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Discover who we are, what we do, and how we turn ideas into powerful digital products.
            </motion.p>
          </div>
        </section>

        {/* ── Our Story Section ── */}
        <section className="py-24 px-6 bg-transparent relative border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Our Story</h2>
              <p className="text-pink-500 font-bold text-lg tracking-wide">
                How we started and our journey to becoming a leading technology solutions provider.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                At CodeXConquer, we believe technology should simplify challenges and drive growth. We have helped hundreds of brands across e-commerce, education, healthcare, and fintech build innovative, secure, and results-driven solutions.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                We combine creativity, technical expertise, and strategy to deliver high-performing, visually appealing solutions. We prioritize transparency, client satisfaction, and long-term partnerships to achieve client goals.
              </p>

              <div className="pt-4">
                <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-pink-500/20 hover:scale-105 transition-all flex items-center gap-3 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Images Collage */}
            <div className="flex-1 grid grid-cols-2 gap-4 relative">
              <div className="col-span-2 h-[250px] md:h-[300px] rounded-2xl overflow-hidden border border-white/10 group">
                <img src={team1} alt="Collaborative Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="h-[180px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 group">
                <img src={team2} alt="Brainstorming Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="h-[180px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 group">
                <img src={team3} alt="Iterative Execution" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

          </div>
        </section>

        {/* ── Our Vision & Mission ── */}
        <section className="py-24 px-6 bg-transparent relative border-t border-white/5">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl p-12 md:p-16 mb-16 text-center" style={{ background: 'linear-gradient(135deg, #0d0c15 0%, #1a153a 100%)' }}>
            <div className="absolute inset-0 z-0 opacity-20">
              <img src={heroBg} alt="Vision Banner" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">Our Vision & Mission</h2>
              <p className="text-gray-300 font-medium text-base mb-8">Guiding principles that drive everything we do.</p>
              <button className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all flex items-center gap-2 mx-auto">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-[#100d23]/80 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-pink-500/30 transition-all">
              <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center border border-pink-500/30 text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium mb-8">
                To empower businesses by transforming innovative ideas into seamless digital experiences that drive growth.
              </p>
              <ul className="space-y-3 font-semibold text-sm text-gray-200">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Digital Transformation
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Seamless Experience
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Business Growth
                </li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="bg-[#100d23]/80 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-pink-500/30 transition-all">
              <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center border border-rose-500/30 text-rose-500 mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium mb-8">
                To engineer visually outstanding product interfaces backed by highly reliable cross-platform infrastructures.
              </p>
              <ul className="space-y-3 font-semibold text-sm text-gray-200">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> Quality Digital Solutions
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> Business Efficiency
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> Customer Focus
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Meet Our Team Section ── */}
        <section className="py-24 px-6 bg-transparent relative border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Meet Our Team</h2>
            <p className="text-gray-400 font-medium text-base">The creative experts driving outstanding experiences.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            
            {/* Team Member 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center group w-full max-w-[320px]"
            >
              <div className="h-[360px] md:h-[400px] rounded-[40px] overflow-hidden border border-white/10 mb-6 shadow-2xl relative group-hover:border-pink-500/30 transition-all duration-500">
                <img src={avatarPlaceholder} alt="Ali Ahmed Siddiq" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-1">Ali Ahmed Siddiq</h3>
              <p className="text-pink-500 font-bold text-sm uppercase tracking-widest">Web Developer</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center group w-full max-w-[320px]"
            >
              <div className="h-[360px] md:h-[400px] rounded-[40px] overflow-hidden border border-white/10 mb-6 shadow-2xl relative group-hover:border-rose-500/30 transition-all duration-500">
                <img src={avatarPlaceholder} alt="Priyanshu Sarogi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-1">Priyanshu Sarogi</h3>
              <p className="text-rose-500 font-bold text-sm uppercase tracking-widest">Video Editor</p>
            </motion.div>

          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}