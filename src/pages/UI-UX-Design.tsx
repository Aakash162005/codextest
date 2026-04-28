import React from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowRight, 
    CheckCircle2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import circleImg from '../assets/images/images/f9e18b9e4aac280758f4a53fcac7154e9892feb5.jpg';
import uxCardImg from '../assets/images/images/5eb4cbe6565c572aad2c8bc2348e32e39f0ab94c.jpg';
import uiCardImg from '../assets/images/ui_design_card.png';
import heroBg from '../assets/image.png';

/* ── Local Components ── */



export default function UIUXDesign() {
    return (
        <div className="min-h-screen font-sans text-white selection:bg-pink-500/30 overflow-x-hidden relative" style={{ background: 'rgba(28, 27, 45, 0.75)' }}>
            {/* ── Global Background Glows ── */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-indigo-900/20 blur-[180px] rounded-full animate-pulse" />
                <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-pink-900/10 blur-[180px] rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[50%] bg-blue-900/20 blur-[180px] rounded-full" />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
            </div>

            <div className="relative z-10">
                <Navbar />

                {/* ── Hero Section ── */}
                <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url(${heroBg})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>
                
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.1] text-white"
                    >
                        UI/UX Design for <br/>
                        <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Better User Experience</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        We design intuitive, user-friendly and visually clean interfaces that improve usability and engagement across web and mobile platforms
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-pink-500/40 flex items-center gap-3 hover:scale-105 transition-all mx-auto group">
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-500/10 blur-[60px] rounded-full animate-pulse" />
                <div className="absolute top-40 right-20 w-40 h-40 bg-rose-500/10 blur-[80px] rounded-full animate-pulse delay-700" />
            </section>

            {/* ── Services Section ── */}
            <section className="py-32 px-6 bg-transparent relative border-t border-white/10">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Our UI/UX Design Services</h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
                        We provide UI/UX design solutions focused on usability, clarity and consistent user experience across digital platforms.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* UI Design Card */}
                    <motion.div 
                        whileHover={{ y: -10, borderColor: 'rgba(244, 63, 94, 0.8)', boxShadow: '0 0 30px rgba(244, 63, 94, 0.2)' }}
                        className="relative h-[400px] rounded-[40px] overflow-hidden group cursor-pointer border border-rose-500/30 transition-all duration-300"
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${uiCardImg})` }}
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                        <div className="absolute inset-0 p-12 flex flex-col justify-end">
                            <h3 className="text-2xl font-black mb-4">User Interface (UI) Design</h3>
                            <p className="text-gray-300 font-medium">Design visually consistent and aesthetic interfaces that align with your brand and improve clarity.</p>
                        </div>
                    </motion.div>

                    {/* UX Design Card */}
                    <motion.div 
                        whileHover={{ y: -10, borderColor: 'rgba(244, 63, 94, 0.8)', boxShadow: '0 0 30px rgba(244, 63, 94, 0.2)' }}
                        className="relative h-[400px] rounded-[40px] overflow-hidden group cursor-pointer border border-rose-500/30 transition-all duration-300"
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${uxCardImg})` }}
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                        <div className="absolute inset-0 p-12 flex flex-col justify-end">
                            <h3 className="text-2xl font-black mb-4">User Experience (UX) Design</h3>
                            <p className="text-gray-300 font-medium">Create smooth user journeys with clear navigation and logical user flows.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Design Capabilities Section ── */}
            <section className="py-32 px-6 bg-transparent relative overflow-hidden border-t border-white/10">
                <div className="max-w-7xl mx-auto mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side: Title & Description */}
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight text-white">Design Capabilities</h2>
                            <p className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed">
                                We design intuitive and user-friendly interfaces that improve usability and create smooth digital experiences.
                            </p>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                                Our UI/UX design focuses on clarity, consistency and responsiveness across web and mobile platforms.
                            </p>
                        </div>

                        {/* Right Side: Features Box */}
                        <div className="bg-[#121225] border-2 border-rose-500/30 rounded-[40px] p-10 md:p-14 relative group hover:border-rose-500/60 transition-colors duration-500 shadow-[0_0_40px_rgba(244,63,94,0.05)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent rounded-[40px]" />
                            <div className="relative z-10 space-y-8">
                                {[
                                    "Wireframing and prototyping to define layout structure and user flow",
                                    "Responsive designs for mobile, tablet, and desktop screens",
                                    "Usability and accessibility improvements for better interaction",
                                    "Design enhancements and redesigns to improve clarity and performance"
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-5 items-start group">
                                        <div className="w-6 h-6 rounded-lg bg-rose-500 flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/30">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <p className="text-gray-200 font-bold text-base md:text-lg leading-snug">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Part: Central Image with Curved Arrows */}
                <div className="max-w-7xl mx-auto relative min-h-[600px] md:min-h-[800px] flex items-center justify-center mt-20">
                    {/* Central Circular Image */}
                    <div className="relative z-10 w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full border-[6px] border-rose-500/20 p-4 bg-white/5 backdrop-blur-xl group transition-all duration-700 hover:scale-105 hover:border-rose-500/40">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500/20 to-transparent animate-pulse" />
                        <img 
                            src={circleImg} 
                            alt="Design Process"
                            className="w-full h-full object-cover rounded-full shadow-[0_0_80px_rgba(244,63,94,0.2)] relative z-10"
                        />
                    </div>

                    {/* Unified SVG for Arrows - Desktop Only */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <marker id="arrow-tip" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                                <path d="M 0 0 L 10 5 L 0 10" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </marker>
                        </defs>

                        {/* Top Left Path */}
                        <path 
                            d="M 450 300 C 350 300, 150 250, 150 160" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="3" 
                            strokeDasharray="5, 5" 
                            strokeLinecap="round" 
                            className="opacity-80"
                            markerEnd="url(#arrow-tip)"
                        />

                        {/* Top Right Path */}
                        <path 
                            d="M 750 300 C 850 300, 1050 250, 1050 160" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="3" 
                            strokeDasharray="5, 5" 
                            strokeLinecap="round" 
                            className="opacity-80"
                            markerEnd="url(#arrow-tip)"
                        />

                        {/* Bottom Left Path */}
                        <path 
                            d="M 450 500 C 350 500, 150 550, 150 640" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="3" 
                            strokeDasharray="5, 5" 
                            strokeLinecap="round" 
                            className="opacity-80"
                            markerEnd="url(#arrow-tip)"
                        />

                        {/* Bottom Right Path */}
                        <path 
                            d="M 750 500 C 850 500, 1050 550, 1050 640" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="3" 
                            strokeDasharray="5, 5" 
                            strokeLinecap="round" 
                            className="opacity-80"
                            markerEnd="url(#arrow-tip)"
                        />
                    </svg>

                    {/* Labels - Absolute positioned relative to the container */}
                    <div className="absolute inset-0 pointer-events-none hidden lg:block">
                        <div className="absolute top-[12%] left-[2%] xl:left-[5%] text-rose-500 font-black text-2xl xl:text-3xl tracking-tight">
                            Usability & Accessibility
                        </div>
                        <div className="absolute top-[12%] right-[2%] xl:right-[5%] text-rose-500 font-black text-2xl xl:text-3xl tracking-tight text-right">
                            Wireframing & Prototyping
                        </div>
                        <div className="absolute bottom-[12%] left-[0%] xl:left-[2%] text-rose-500 font-black text-2xl xl:text-3xl tracking-tight">
                            Design Improvements & Redesign
                        </div>
                        <div className="absolute bottom-[12%] right-[0%] xl:right-[2%] text-rose-500 font-black text-2xl xl:text-3xl tracking-tight text-right">
                            Responsive Design
                        </div>
                    </div>

                    {/* Mobile Labels (Simpler layout) */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-center gap-4 lg:hidden px-6">
                        {["Usability & Accessibility", "Wireframing & Prototyping", "Design Improvements & Redesign", "Responsive Design"].map((label, i) => (
                            <div key={i} className="bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded-full text-rose-500 font-bold text-sm">
                                {label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-rose-500/5 blur-[150px] rounded-full -z-10" />
            </section>

            {/* ── Design Process Section ── */}
            <section className="py-32 px-6 bg-transparent relative overflow-visible border-t border-white/10">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Inter:wght@300;400&display=swap');

                    @keyframes dp-fadeUp {
                        from { opacity: 0; transform: translateY(16px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }

                    .dp-step { opacity: 0; animation: dp-fadeUp 0.45s ease forwards; }
                    .dp-step:nth-child(1)  { animation-delay: 0.05s; }
                    .dp-step:nth-child(3)  { animation-delay: 0.15s; }
                    .dp-step:nth-child(5)  { animation-delay: 0.25s; }
                    .dp-step:nth-child(7)  { animation-delay: 0.35s; }
                    .dp-step:nth-child(9)  { animation-delay: 0.45s; }
                    .dp-step:nth-child(11) { animation-delay: 0.55s; }

                    .dp-icon {
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                        cursor: default;
                    }
                    .dp-icon:hover {
                        transform: scale(1.1);
                        box-shadow:
                            0 0 0 10px rgba(232,49,90,0.18),
                            0 0 32px rgba(232,49,90,0.45) !important;
                    }
                `}</style>

                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    {/* Header */}
                    <div className="max-w-[460px] text-center mb-16">
                        <h2 className="font-outfit font-extrabold text-3xl md:text-5xl text-white tracking-tight mb-4">
                            Our Design Process
                        </h2>
                        <p className="text-[#b4afd7]/70 text-sm md:text-base leading-relaxed font-light">
                            We follow a structured design process to ensure clarity, usability and consistency across all UI/UX projects.
                        </p>
                    </div>

                    {/* Timeline Container */}
                    <div className="w-full max-w-[460px]">
                        {[
                            {
                                id: 1,
                                title: "Requirement Understanding",
                                description: "We understand project goals, target users and design expectations before starting.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                        <circle cx="11" cy="11" r="5" />
                                        <line x1="16.5" y1="16.5" x2="21" y2="21" />
                                        <line x1="11" y1="8" x2="11" y2="14" />
                                        <line x1="8" y1="11" x2="14" y2="11" />
                                    </svg>
                                ),
                            },
                            {
                                id: 2,
                                title: "User Flow Planning",
                                description: "We plan clear user journeys to ensure smooth navigation and interaction.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <path d="M7 8h10M7 12h6M7 16h4" />
                                    </svg>
                                ),
                            },
                            {
                                id: 3,
                                title: "Wireframing",
                                description: "We create structured layouts to define screen placement and content flow.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                        <rect x="2" y="3" width="20" height="14" rx="2" />
                                        <path d="M8 21h8M12 17v4M6 7h12M6 11h8" />
                                    </svg>
                                ),
                            },
                            {
                                id: 4,
                                title: "UI Design",
                                description: "We design visually clean and consistent interfaces aligned with the product.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                        <rect x="3" y="3" width="18" height="18" rx="3" />
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                                    </svg>
                                ),
                            },
                            {
                                id: 5,
                                title: "Review & Refinement",
                                description: "We refine designs based on feedback to improve usability and clarity.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                                    </svg>
                                ),
                            },
                            {
                                id: 6,
                                title: "Final Design Handoff",
                                description: "We deliver finalized design files ready for development implementation.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                ),
                            },
                        ].map((step, i, arr) => {
                            const isRight = i % 2 === 1;
                            const isLast = i === arr.length - 1;
                            
                            // Arrow logic
                            const W = 380;
                            const H = 64;
                            const leftCX = 28;
                            const rightCX = W - 28;
                            const sweepRight = !isRight;
                            const startX = sweepRight ? leftCX : rightCX;
                            const endX = sweepRight ? rightCX : leftCX;
                            const hw = 7;
                            const hl = 12;
                            const curveEndY = H - hl;
                            const d = `M ${startX} 0 C ${startX} ${H / 2}, ${endX} ${H / 2}, ${endX} ${curveEndY}`;

                            return (
                                <React.Fragment key={step.id}>
                                    <div
                                        className="dp-step flex items-center gap-5 group"
                                        style={{ 
                                            flexDirection: isRight ? "row-reverse" : "row",
                                            textAlign: isRight ? "right" : "left" 
                                        }}
                                    >
                                        <div className="dp-icon shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#e8315a] flex items-center justify-center relative z-10 shadow-[0_0_0_8px_rgba(232,49,90,0.12),_0_0_24px_rgba(232,49,90,0.3)]">
                                            {step.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-outfit font-bold text-base md:text-lg text-white mb-1 tracking-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-[#af98d2]/70 text-xs md:text-sm leading-relaxed font-light">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {!isLast && (
                                        <div className="flex justify-center w-full max-w-[380px] mx-auto overflow-visible my-1">
                                            <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="overflow-visible block">
                                                <path d={d} stroke="rgba(255,255,255,0.28)" strokeWidth="1.6" strokeDasharray="5 5" strokeLinecap="round" fill="none" />
                                                <polygon points={`${endX},${H} ${endX - hw},${H - hl} ${endX + hw},${H - hl}`} fill="rgba(255,255,255,0.6)" />
                                            </svg>
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us Section ── */}
            <section className="py-32 px-6 bg-transparent relative border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tight text-center text-white">Why Choose CodeXConquer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "User-Focused Design", desc: "We design interfaces that are easy to understand and simple for users to navigate." },
                            { title: "Clean & Consistent Layout", desc: "Our designs follow a clear structure and consistent visual style across all screens." },
                            { title: "Responsive Across Devices", desc: "We ensure designs work perfectly on mobile, tablet and desktop devices." },
                            { title: "Development-Ready Designs", desc: "Our UI/UX design files are structured for easy and smooth implementation by developers." }
                        ].map((card, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10, borderColor: 'rgba(244, 63, 94, 0.8)', boxShadow: '0 0 30px rgba(244, 63, 94, 0.2)' }}
                                className="p-12 rounded-[40px] border border-rose-500/30 bg-white/[0.02] backdrop-blur-xl relative group overflow-hidden text-center transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-black mb-6 relative z-10 tracking-tight text-white">{card.title}</h3>
                                <p className="text-gray-400 text-lg font-medium relative z-10 leading-relaxed max-w-sm mx-auto">{card.desc}</p>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-500/10 blur-[60px] rounded-full" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Card Section ── */}
            <section className="py-32 px-6 border-t border-white/10">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-[50px] p-12 md:p-20 relative overflow-hidden text-center border border-rose-500/10 shadow-2xl shadow-rose-500/5"
                    style={{ background: 'linear-gradient(135deg, #1c1c35 0%, #2d2d5a 100%)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Want Better User Experience?</h2>
                        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-medium">
                            Let's discuss how we can design a seamless user experience for your product.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-pink-500 transition-all text-white placeholder:text-gray-500"
                            />
                            <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-pink-500/20">
                                Get Started
                            </button>
                        </div>
                    </div>
                    
                    {/* Background Glows */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full" />
                </motion.div>
            </section>

            <Footer />
            </div>
        </div>
    );
}
