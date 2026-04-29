import React from 'react';
import { motion } from 'framer-motion';
import { 
    Paintbrush, 
    Smartphone, 
    Rocket, 
    Database, 
    Bug, 
    Wrench, 
    RefreshCw,
    ArrowRight, 
    CheckCircle2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importing generated images
import phoneMockup from '../assets/images/images/phone_mockup.png';
import laptopCafe from '../assets/images/images/laptop_cafe.png';
import laptopMockup from '../assets/images/images/laptop_mockup.png';

export default function AppDevelopment() {
    return (
        <div className="min-h-screen font-sans text-white selection:bg-purple-500/30 overflow-x-hidden relative" style={{ background: '#0d0c15' }}>
            {/* ── Global Background Glows ── */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-900/20 blur-[180px] rounded-full animate-pulse" />
                <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-pink-900/10 blur-[180px] rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[50%] bg-blue-900/20 blur-[180px] rounded-full" />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
            </div>

            <div className="relative z-10">
                <Navbar />

                {/* ── Hero Section ── */}
                <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">
                    <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] text-white"
                        >
                            Transform Your Vision Into <br/>
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Powerful Mobile App</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-12"
                        >
                            We are a premium mobile app development company building custom iOS, Android, and cross-platform apps that drive business growth.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mb-16"
                        >
                            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-pink-500/40 flex items-center gap-3 hover:scale-105 transition-all group">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Phone Mockup Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="relative w-full max-w-[800px] mx-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c15] via-transparent to-transparent z-10 bottom-0 h-40" />
                            <img 
                                src={phoneMockup} 
                                alt="Mobile App Mockup" 
                                className="w-full h-auto object-contain rounded-[40px] shadow-[0_0_50px_rgba(168,85,247,0.3)] border border-white/10"
                            />
                        </motion.div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-pink-500/10 blur-[80px] rounded-full animate-pulse" />
                    <div className="absolute top-1/4 right-10 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full animate-pulse delay-700" />
                </section>

                {/* ── Services Section  grid of 7 with center image ── */}
                <section className="py-32 px-6 bg-transparent relative border-t border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">Services</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
                            We offer end-to-end mobile app development services tailored to your business needs.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        {/* Left Column (3 Services) */}
                        <div className="space-y-12 order-2 lg:order-1">
                            {/* Custom UI/UX Design */}
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className="flex gap-6 items-start text-left"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/20">
                                    <Paintbrush className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Custom UI/UX Design</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Create intuitive and engaging app experiences with our custom UI/UX design approach that connects your brand with users.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Native iOS & Android Development */}
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className="flex gap-6 items-start text-left"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                                    <Smartphone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Native iOS & Android</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Leverage the full potential of each platform with our native iOS and Android app development using Swift, Kotlin and Java.
                                    </p>
                                </div>
                            </motion.div>

                            {/* App Store Development */}
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className="flex gap-6 items-start text-left"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">App Store Development</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Navigate the complex submission process with our expert guidance, ensuring successful deployment to Apple App Store and Google Play.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Center Image */}
                        <div className="order-1 lg:order-2 flex justify-center relative">
                            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="relative rounded-[30px] overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20"
                            >
                                <img 
                                    src={laptopCafe} 
                                    alt="Workspace" 
                                    className="w-full max-w-[400px] h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c15] via-transparent to-transparent opacity-60" />
                            </motion.div>
                        </div>

                        {/* Right Column (4 Services) */}
                        <div className="space-y-12 order-3">
                            {/* Backend Development & API */}
                            <motion.div 
                                whileHover={{ x: -10 }}
                                className="flex gap-6 items-start text-left"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/20">
                                    <Database className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Backend Development & API</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Build robust, scalable backends and seamlessly integrate third-party services and APIs.
                                    </p>
                                </div>
                            </motion.div>

                            {/* App Testing & QA */}
                            <motion.div 
                                whileHover={{ x: -10 }}
                                className="flex gap-6 items-start text-left"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                                    <Bug className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">App Testing & QA</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Ensure flawless performance across all devices with our comprehensive testing and quality assurance protocols.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Ongoing Maintenance */}
                            <motion.div 
                                whileHover={{ x: -10 }}
                                className="flex gap-6 items-start text-left"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                                    <Wrench className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Maintenance & Support</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Keep your app secure and up-to-date with our comprehensive mobile app support and maintenance services.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Cross-Platform Development */}
                            <motion.div 
                                whileHover={{ x: -10 }}
                                className="flex gap-6 items-start text-left"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                                    <RefreshCw className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Cross-Platform</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Reach more users efficiently with cross-platform mobile apps built using Flutter and React Native.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── Lifecycle Section ── */}
                <section className="py-32 px-6 bg-transparent relative overflow-visible border-t border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Our Proven Mobile App Development Lifecycle</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
                            Our structured app development lifecycle ensures transparency, quality and timely delivery.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto relative">
                        {[
                            {
                                id: 1,
                                title: "Discovery & Consultation",
                                description: "We analyze your business goals, target audience and competitors to define the project scope and strategy.",
                                image: laptopMockup,
                            },
                            {
                                id: 2,
                                title: "Wireframing & Prototyping",
                                description: "Create structured layouts to define screen placement and user flow before starting design.",
                                image: laptopMockup,
                            },
                            {
                                id: 3,
                                title: "UI/UX Design",
                                description: "Design visually clean and consistent interfaces aligned with your brand.",
                                image: laptopMockup,
                            },
                            {
                                id: 4,
                                title: "Agile App Development",
                                description: "Our expert developers bring your app to life using the latest technologies and agile methodology.",
                                image: laptopMockup,
                            },
                            {
                                id: 5,
                                title: "QA & Testing",
                                description: "Rigorous testing across multiple devices ensures your app performs flawlessly at scale.",
                                image: laptopMockup,
                            },
                            {
                                id: 6,
                                title: "Deployment",
                                description: "We handle the complete submission process to launch your app on App Store and Google Play Store.",
                                image: laptopMockup,
                            },
                            {
                                id: 7,
                                title: "Post-Launch Support",
                                description: "Continuous monitoring, updates and scaling to keep your app compatible and performing optimally.",
                                image: laptopMockup,
                            },
                        ].map((step, i) => {
                            const isEven = i % 2 === 1;
                            return (
                                <div 
                                    key={step.id} 
                                    className={`flex flex-col md:flex-row items-center gap-12 mb-24 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Text Content */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex-1 text-left"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-3xl font-black text-pink-500">0{step.id}</div>
                                            <h3 className="text-2xl font-black text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </motion.div>

                                    {/* Image/Mockup */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex-1 flex justify-center relative"
                                    >
                                        <div className="absolute inset-0 bg-pink-500/10 blur-[80px] rounded-full" />
                                        <img 
                                            src={step.image} 
                                            alt={step.title} 
                                            className="w-full max-w-[400px] h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
                                        />
                                    </motion.div>
                                </div>
                            );
                        })}

                        {/* Dotted Connection Lines (Visual only, could be enhanced with SVG) */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-dashed bg-gradient-to-b from-pink-500/50 to-indigo-500/50 hidden md:block" style={{ strokeDasharray: '4 4' }} />
                    </div>
                </section>

                {/* ── Pricing Section ── */}
                <section className="py-32 px-6 bg-transparent relative border-t border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Transparent & Affordable App Development Pricing</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
                            Flexible pricing models to suit your budget and project requirements. Hire mobile app developers on your terms.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter Plan */}
                        <motion.div 
                            whileHover={{ y: -10, borderColor: 'rgba(236, 72, 153, 0.8)' }}
                            className="p-10 rounded-[30px] border border-pink-500/20 bg-[#121225]/50 backdrop-blur-xl relative flex flex-col justify-between group overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-white">Starter</h3>
                                <div className="text-3xl font-black mb-6 text-pink-500">15,000/- <span className="text-sm font-medium text-gray-400">Per Month</span></div>
                                <div className="w-full h-px bg-white/10 mb-8" />
                                <ul className="space-y-4 mb-8 text-left text-gray-300 font-medium">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Custom UI/UX Design</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Single Platform (iOS/Android)</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Basic Backend Management</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> App Store Deployment</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> 3 Months Support</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> 2 Revision Rounds</li>
                                </ul>
                            </div>
                            <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold hover:bg-pink-500 hover:border-pink-500 transition-all">
                                Choose Plan
                            </button>
                        </motion.div>

                        {/* Business Plan (Popular) */}
                        <motion.div 
                            whileHover={{ y: -10, borderColor: 'rgba(168, 85, 247, 0.8)' }}
                            className="p-10 rounded-[30px] border border-purple-500/50 bg-[#121225]/80 backdrop-blur-xl relative flex flex-col justify-between group overflow-hidden transition-all duration-300 shadow-2xl shadow-purple-500/20 transform md:-translate-y-4"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-100" />
                            <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-white">Business</h3>
                                <div className="text-3xl font-black mb-6 text-purple-500">25,000/- <span className="text-sm font-medium text-gray-400">Per Month</span></div>
                                <div className="w-full h-px bg-white/10 mb-8" />
                                <ul className="space-y-4 mb-8 text-left text-gray-200 font-medium">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Advanced UI/UX Design</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Cross-Platform Development</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Advanced Backend & API</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> App Store Deployment</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> 6 Months Support</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> 4 Revision Rounds</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Performance Optimization</li>
                                </ul>
                            </div>
                            <button className="w-full bg-purple-500 text-white py-4 rounded-xl font-bold hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/30">
                                Choose Plan
                            </button>
                        </motion.div>

                        {/* Enterprise Plan */}
                        <motion.div 
                            whileHover={{ y: -10, borderColor: 'rgba(79, 70, 229, 0.8)' }}
                            className="p-10 rounded-[30px] border border-indigo-500/20 bg-[#121225]/50 backdrop-blur-xl relative flex flex-col justify-between group overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-white">Enterprise</h3>
                                <div className="text-3xl font-black mb-6 text-indigo-500">Custom*</div>
                                <div className="w-full h-px bg-white/10 mb-8" />
                                <ul className="space-y-4 mb-8 text-left text-gray-300 font-medium">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Enterprise-Grade UI/UX</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Native iOS & Android</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Scalable Architecture</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Advanced Security Features</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Dedicated Support</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Unlimited Revisions</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> 24/7 Priority Support</li>
                                </ul>
                            </div>
                            <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold hover:bg-indigo-500 hover:border-indigo-500 transition-all">
                                Contact Us
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* ── CTA Card Section ── */}
                <section className="py-32 px-6 border-t border-white/10">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto rounded-[50px] p-12 md:p-20 relative overflow-hidden text-center border border-purple-500/10 shadow-2xl shadow-purple-500/5"
                        style={{ background: 'linear-gradient(135deg, #0d0c15 0%, #1a153a 100%)' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Ready to build your app?</h2>
                            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-medium">
                                From idea to launch - we handle design, development, and deployment. Let's talk about your project!
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 transition-all text-white placeholder:text-gray-500"
                                />
                                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-pink-500/20">
                                    Get Started
                                </button>
                            </div>
                        </div>
                        
                        {/* Background Glows */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />
                    </motion.div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
