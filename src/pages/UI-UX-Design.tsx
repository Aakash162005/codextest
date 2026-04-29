import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowRight, 
    CheckCircle2,
    Palette,
    Layout,
    Layers,
    Smartphone,
    Eye,
    ChevronLeft,
    ChevronRight,
    Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importing assets
import circleImg from '../assets/images/images/f9e18b9e4aac280758f4a53fcac7154e9892feb5.jpg';
import uxCardImg from '../assets/images/images/5eb4cbe6565c572aad2c8bc2348e32e39f0ab94c.jpg';
import uiCardImg from '../assets/images/ui_design_card.png';
import heroBg from '../assets/images/uiux_hero_bg.png';

export default function UIUXDesign() {
    const [activeTab, setActiveTab] = useState('mobile');

    const designTypes = {
        mobile: {
            title: "Mobile App Interfaces",
            description: "Designing thumb-friendly, smooth, and highly interactive mobile experiences for modern iOS and Android apps.",
            features: ["Micro-interactions", "Gesture navigation", "Optimized accessibility", "Dark & Light mode support"],
            color: "from-pink-500 to-rose-500"
        },
        web: {
            title: "Responsive Web Design",
            description: "Crafting beautiful, content-driven desktop and tablet layouts that adapt flawlessly to any screen size.",
            features: ["Fluid grids", "Dynamic typography", "Smooth parallax effects", "SEO friendly structure"],
            color: "from-purple-500 to-indigo-500"
        },
        dashboard: {
            title: "Enterprise Dashboards",
            description: "Simplifying complex data into clear, actionable visual insights via highly intuitive data management panels.",
            features: ["Custom data viz", "Real-time feeds", "Role-based views", "Component libraries"],
            color: "from-blue-500 to-indigo-500"
        }
    };

    return (
        <div className="min-h-screen font-sans text-white selection:bg-pink-500/30 overflow-x-hidden relative" style={{ background: '#060212' }}>
            {/* ── Global Background Glows ── */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-pink-900/10 blur-[180px] rounded-full animate-pulse" />
                <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/15 blur-[180px] rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[50%] bg-rose-900/10 blur-[180px] rounded-full" />
            </div>

            <div className="relative z-10">
                <Navbar />

                {/* ── Hero Section ── */}
                <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#060212] via-[#060212]/80 to-[#060212]" />
                    </div>

                    <div className="relative z-10 text-center max-w-5xl mx-auto mt-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-pink-400 text-sm font-bold tracking-widest uppercase mb-6"
                        >
                            <Sparkles className="w-4 h-4" /> Professional UI/UX Studio
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.1] text-white"
                        >
                            Designing for <br/>
                            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Better Experiences</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-12"
                        >
                            We design intuitive, user-friendly, and visually clean interfaces that maximize usability and scale user engagement.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a href="#services" className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-pink-500/40 flex items-center gap-3 hover:scale-105 transition-all mx-auto group w-fit">
                                Explore Services
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* ── Interactive Showcase Section ── */}
                <section className="py-32 px-6 bg-transparent relative border-b border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">Capabilities</h2>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Our Design Versatility</h3>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Tabs */}
                        <div className="flex justify-center gap-4 mb-12 flex-wrap">
                            {Object.keys(designTypes).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-6 py-3 rounded-xl font-bold transition-all ${
                                        activeTab === key 
                                        ? 'bg-white/10 text-pink-500 border border-pink-500/30 shadow-lg' 
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                                    }`}
                                >
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={`p-10 md:p-14 rounded-[30px] border border-white/10 bg-gradient-to-br ${designTypes[activeTab].color}/10 backdrop-blur-xl relative flex flex-col md:flex-row gap-12 items-center`}
                            >
                                <div className="flex-1">
                                    <h4 className="text-2xl md:text-3xl font-black mb-4 text-white">
                                        {designTypes[activeTab].title}
                                    </h4>
                                    <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                                        {designTypes[activeTab].description}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {designTypes[activeTab].features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" />
                                                <span className="text-gray-200 text-sm font-semibold">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`w-32 h-32 rounded-[30px] bg-gradient-to-br ${designTypes[activeTab].color} flex items-center justify-center shrink-0 shadow-lg`}>
                                    {activeTab === 'mobile' && <Smartphone className="w-16 h-16 text-white" />}
                                    {activeTab === 'web' && <Layout className="w-16 h-16 text-white" />}
                                    {activeTab === 'dashboard' && <Layers className="w-16 h-16 text-white" />}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* ── Services Section ── */}
                <section id="services" className="py-32 px-6 bg-transparent relative border-b border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-24">
                        <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">Our UI/UX Services</h2>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">What We Excel At</h3>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* UI Design Card */}
                        <motion.div 
                            whileHover={{ y: -10, borderColor: 'rgba(244, 63, 94, 0.8)', boxShadow: '0 0 30px rgba(244, 63, 94, 0.2)' }}
                            className="relative h-[450px] rounded-[40px] overflow-hidden group cursor-pointer border border-rose-500/30 transition-all duration-300"
                        >
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${uiCardImg})` }}
                            />
                            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                <h3 className="text-2xl md:text-3xl font-black mb-4">User Interface (UI) Design</h3>
                                <p className="text-gray-300 font-medium">Design visually consistent and aesthetic interfaces that align with your brand and maximize clarity.</p>
                            </div>
                        </motion.div>

                        {/* UX Design Card */}
                        <motion.div 
                            whileHover={{ y: -10, borderColor: 'rgba(244, 63, 94, 0.8)', boxShadow: '0 0 30px rgba(244, 63, 94, 0.2)' }}
                            className="relative h-[450px] rounded-[40px] overflow-hidden group cursor-pointer border border-rose-500/30 transition-all duration-300"
                        >
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${uxCardImg})` }}
                            />
                            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                <h3 className="text-2xl md:text-3xl font-black mb-4">User Experience (UX) Design</h3>
                                <p className="text-gray-300 font-medium">Create smooth user journeys with flawless navigation and logical user flows.</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── Design Process Section ── */}
                <section className="py-32 px-6 bg-transparent relative overflow-visible border-b border-white/10">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">Process</h2>
                            <h3 className="font-extrabold text-3xl md:text-5xl text-white tracking-tight mb-4">
                                Our Design Journey
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                                We follow a robust, iterative design process to ensure every layout addresses core business objectives.
                            </p>
                        </div>

                        {/* Timeline Container */}
                        <div className="w-full max-w-[460px] space-y-12 relative">
                            {[
                                { id: 1, title: "Requirement Gathering", desc: "Understanding project scope, competitor data, and target personas." },
                                { id: 2, title: "User Flows & Architecture", desc: "Setting the foundation of seamless app routing." },
                                { id: 3, title: "Low-Fi Wireframing", desc: "Mapping layout essentials before applying visual styles." },
                                { id: 4, title: "High-Fi Visual Design", desc: "Branding and final styling integration." },
                                { id: 5, title: "Prototype & Test", desc: "Validating user interactions." }
                            ].map((step, idx) => (
                                <motion.div 
                                    key={step.id}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 items-center bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-pink-500/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shrink-0 shadow-lg shadow-pink-500/20">
                                        {step.id}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 text-lg">{step.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Design System / Tokens Showcase ── */}
                <section className="py-32 px-6 bg-transparent relative border-b border-white/10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">Design Systems</h2>
                            <h3 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight">Consistent visual frameworks</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We don't just design screens; we build reusable token frameworks that guarantee interface uniformity across multi-platform software.
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 font-semibold">Figma Tokens</div>
                                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 font-semibold">Tailwind Tokens</div>
                                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 font-semibold">Storybook Integration</div>
                            </div>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                            <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 text-center">
                                <div className="w-12 h-12 rounded-full bg-pink-500 mx-auto mb-4 shadow-lg shadow-pink-500/50" />
                                <span className="text-xs text-gray-400">Primary Color</span>
                                <div className="font-bold text-white mt-1">#FF3D77</div>
                            </div>
                            <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 text-center">
                                <div className="w-12 h-12 rounded-full bg-rose-500 mx-auto mb-4 shadow-lg shadow-rose-500/50" />
                                <span className="text-xs text-gray-400">Secondary Color</span>
                                <div className="font-bold text-white mt-1">#FF4D6D</div>
                            </div>
                            <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 text-center">
                                <div className="font-extrabold text-2xl text-pink-500 mb-2">Aa</div>
                                <span className="text-xs text-gray-400">Typography</span>
                                <div className="font-bold text-white mt-1">Inter / Outfit</div>
                            </div>
                            <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 text-center flex flex-col justify-center items-center">
                                <div className="w-8 h-8 rounded-xl border-2 border-dashed border-gray-400 mb-2" />
                                <span className="text-xs text-gray-400">Corner Radius</span>
                                <div className="font-bold text-white mt-1">24px - 40px</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA Section ── */}
                <section className="py-32 px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto rounded-[50px] p-12 md:p-20 relative overflow-hidden text-center border border-pink-500/10 shadow-2xl shadow-pink-500/5"
                        style={{ background: 'linear-gradient(135deg, #0d0c15 0%, #1a153a 100%)' }}
                    >
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Elevate Your Product UX</h2>
                            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
                                Let's build a customized, scalable design system that speaks directly to your users.
                            </p>
                            
                            <div className="flex justify-center gap-4 flex-wrap max-w-md mx-auto">
                                <button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-pink-500/20">
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
