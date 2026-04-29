import React from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowRight, 
    CheckCircle2, 
    Sparkles, 
    Smartphone, 
    Layout, 
    Layers, 
    Eye 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Use relevant available assets
import circleImg from '../../assets/images/images/f9e18b9e4aac280758f4a53fcac7154e9892feb5.jpg';
import uxCardImg from '../../assets/images/images/5eb4cbe6565c572aad2c8bc2348e32e39f0ab94c.jpg';
import uiCardImg from '../../assets/images/ui_design_card.png';
import heroBg from '../../assets/images/uiux_hero_bg.png';
import InstructorImage from '../../assets/images/images/avatar.png';

export default function UIUXDesignCourse() {
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
                <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">
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
                            <Sparkles className="w-4 h-4" /> Certification Course
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] text-white"
                        >
                            Design Experiences, <br/>
                            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Not Just Screens</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10"
                        >
                            Learn UI/UX from scratch—master wireframing, prototyping, and user-centered design to build impactful digital products.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-pink-500/40 flex items-center gap-3 hover:scale-105 transition-all mx-auto group">
                                Enroll Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* ── UI/UX Design Course Section ── */}
                <section className="py-24 px-6 bg-transparent relative border-t border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">UI/UX Design Course</h2>
                        <p className="text-gray-400 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                            Learn to design user-friendly and visually appealing digital products by understanding UI and UX principles and using modern design tools.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 1. User Research */}
                        <div className="relative h-[250px] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${uxCardImg})` }} />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                <h3 className="text-2xl font-black text-white">User Research<br/>& Personas</h3>
                            </div>
                        </div>

                        {/* 2. Wireframing */}
                        <div className="relative h-[250px] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${circleImg})` }} />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                <h3 className="text-2xl font-black text-white">Wireframing<br/>& Prototyping</h3>
                            </div>
                        </div>

                        {/* 3. Design Systems */}
                        <div className="relative h-[250px] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${uiCardImg})` }} />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                <h3 className="text-2xl font-black text-white">Design Systems<br/>& UI Components</h3>
                            </div>
                        </div>

                        {/* 4. Usability Testing */}
                        <div className="relative h-[250px] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${heroBg})` }} />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                <h3 className="text-2xl font-black text-white">Usability Testing<br/>& UX Evaluation</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Crafting Better User Experiences ── */}
                <section className="py-24 px-6 bg-transparent relative border-t border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Crafting Better User Experiences</h2>
                        <p className="text-gray-400 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                            From user research to final prototypes, gain practical skills to design intuitive, user-focused digital experiences.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative">
                        {/* Left Column */}
                        <div className="flex-1 space-y-12 w-full">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-pink-500/30 transition-all">
                                <h4 className="text-pink-500 font-bold text-lg mb-1">UX Design Fundamentals</h4>
                                <p className="text-gray-300 text-sm font-medium">Learn the core principles of user experience and empathy.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-pink-500/30 transition-all">
                                <h4 className="text-pink-500 font-bold text-lg mb-1">UI Principles & Aesthetics</h4>
                                <p className="text-gray-300 text-sm font-medium">Understand the visual rules of high-fidelity interface layouts.</p>
                            </div>
                        </div>

                        {/* Central Phone Graphic */}
                        <div className="shrink-0 w-[260px] h-[520px] rounded-[50px] border-[8px] border-white/10 bg-black/50 p-4 relative flex items-center justify-center shadow-2xl">
                            <div className="absolute inset-4 rounded-[36px] bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-transparent blur-xl" />
                            <img src={heroBg} alt="Mobile Mockup" className="w-full h-full object-cover rounded-[36px]" />
                        </div>

                        {/* Right Column */}
                        <div className="flex-1 space-y-12 w-full">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-pink-500/30 transition-all">
                                <h4 className="text-pink-500 font-bold text-lg mb-1">Wireframing & Prototyping</h4>
                                <p className="text-gray-300 text-sm font-medium">Turn rough ideas into actionable, dynamic product templates.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-pink-500/30 transition-all">
                                <h4 className="text-pink-500 font-bold text-lg mb-1">Design Systems & Tokens</h4>
                                <p className="text-gray-300 text-sm font-medium">Build reusable component kits for cross-platform alignment.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Tools Section ── */}
                <section className="py-24 px-6 bg-transparent relative border-t border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Tools You Will Work With</h2>
                        <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">
                            Get hands-on with industry-approved software suites relied on by modern UI/UX workflows.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {/* Figma */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-6 hover:border-pink-500/30 transition-all">
                            <div className="w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 text-pink-500 text-3xl font-black">
                                Fi
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h4 className="text-xl font-bold text-white mb-2">Figma</h4>
                                <p className="text-gray-300 text-sm leading-relaxed font-medium">Design responsive screens, structure reusable layouts, and test lightweight interaction behaviors.</p>
                            </div>
                        </div>

                        {/* Adobe XD */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col sm:flex-row-reverse items-center gap-6 hover:border-pink-500/30 transition-all">
                            <div className="w-16 h-16 bg-[#470137] rounded-2xl flex items-center justify-center shrink-0 border border-white/10 text-[#FF61F6] text-3xl font-black">
                                Xd
                            </div>
                            <div className="flex-1 text-center sm:text-right">
                                <h4 className="text-xl font-bold text-white mb-2">Adobe XD</h4>
                                <p className="text-gray-300 text-sm leading-relaxed font-medium">Create quick wireframes and establish structured transitions mapped to existing assets.</p>
                            </div>
                        </div>

                        {/* Framer */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-6 hover:border-pink-500/30 transition-all">
                            <div className="w-16 h-16 bg-[#FFC500] rounded-2xl flex items-center justify-center shrink-0 text-black text-3xl font-black">
                                F
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h4 className="text-xl font-bold text-white mb-2">Framer</h4>
                                <p className="text-gray-300 text-sm leading-relaxed font-medium">Build complex UI states, incorporate production-level micro-interactions easily.</p>
                            </div>
                        </div>

                        {/* FigJam */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col sm:flex-row-reverse items-center gap-6 hover:border-pink-500/30 transition-all">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 text-purple-600 text-3xl font-black border border-white/10">
                                Fj
                            </div>
                            <div className="flex-1 text-center sm:text-right">
                                <h4 className="text-xl font-bold text-white mb-2">FigJam</h4>
                                <p className="text-gray-300 text-sm leading-relaxed font-medium">Brainstorm initial directions through user journeys or collaborative mapping exercises.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Instructor Section ── */}
                <section className="py-24 px-6 bg-transparent relative border-t border-white/10">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Instructor</h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-[40px] overflow-hidden border-4 border-pink-500/30 mb-6 mx-auto group hover:border-pink-500/60 transition-all duration-500 shadow-2xl shadow-pink-500/10">
                                <img
                                    src={InstructorImage}
                                    alt="Instructor"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <h3 className="text-2xl font-black mb-1">Vasanthi Gantiya</h3>
                            <p className="text-pink-500 font-bold text-sm uppercase tracking-widest">Product Designer</p>
                        </motion.div>
                    </div>
                </section>

                {/* ── Roadmap Section ── */}
                <section className="py-24 px-6 bg-transparent relative border-t border-white/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Course Roadmap</h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                A step-by-step journey covering everything from user research to high-fidelity prototypes.
                            </p>
                        </div>

                        <div className="relative py-20 hidden lg:block">
                            {/* Central Dotted Line */}
                            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 border-dashed border-t-2 -translate-y-1/2" />

                            <div className="relative flex justify-between items-center px-10">
                                {[
                                    { id: 1, title: "Design Fundamentals", desc: "Understand core UX principles.", side: "top" },
                                    { id: 2, title: "UX Research", desc: "Build user personas.", side: "bottom" },
                                    { id: 3, title: "Wireframing", desc: "Draft layout components.", side: "top" },
                                    { id: 4, title: "Visual UI Design", desc: "Style digital interfaces.", side: "bottom" },
                                    { id: 5, title: "Prototyping", desc: "Add robust animations.", side: "top" },
                                    { id: 6, title: "Usability Testing", desc: "Verify with real traffic.", side: "bottom" }
                                ].map((step) => (
                                    <div key={step.id} className="relative flex flex-col items-center w-1/6">
                                        <div className="w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_15px_rgba(244,63,94,0.5)] z-10" />
                                        <motion.div
                                            initial={{ opacity: 0, y: step.side === "top" ? -30 : 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className={`absolute ${step.side === "top" ? "bottom-[40px]" : "top-[40px]"} w-40 p-4 rounded-xl border border-pink-500/20 bg-[#1c1c35]/60 text-center hover:border-pink-500/40 transition-all`}
                                        >
                                            <h4 className="text-white font-bold text-xs mb-1">{step.title}</h4>
                                            <p className="text-gray-400 text-[10px] leading-tight">{step.desc}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Roadmap Mobile */}
                        <div className="lg:hidden space-y-6">
                            {[
                                { id: 1, title: "Design Fundamentals", desc: "Understand core UX principles." },
                                { id: 2, title: "UX Research", desc: "Build user personas." },
                                { id: 3, title: "Wireframing", desc: "Draft layout components." },
                                { id: 4, title: "Visual UI Design", desc: "Style digital interfaces." },
                                { id: 5, title: "Prototyping", desc: "Add robust animations." },
                                { id: 6, title: "Usability Testing", desc: "Verify with real traffic." }
                            ].map((step) => (
                                <div key={step.id} className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-pink-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                                        {step.id}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{step.title}</h4>
                                        <p className="text-gray-400 text-xs">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA Card ── */}
                <section className="py-24 px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto rounded-[50px] p-12 md:p-20 relative overflow-hidden text-center border border-pink-500/10 shadow-2xl shadow-pink-500/5"
                        style={{ background: 'linear-gradient(135deg, #0d0c15 0%, #1a153a 100%)' }}
                    >
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Start Designing Experiences That Matter</h2>
                            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-medium">
                                Join the course and turn your creativity into real-world UI/UX skills with hands-on projects.
                            </p>
                            <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-pink-500/20 group">
                                Enroll Now
                                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
