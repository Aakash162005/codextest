import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, 
    Clock, 
    Headphones, 
    Award, 
    ArrowRight, 
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Palette,
    Code,
    Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Importing assets
import teamComposite from '../../assets/team-composite.png';
import aboutTeam from '../../assets/images/about_team.png';
import whyChooseUsImg from '../../assets/images/why_choose_us.png';
import projectApp1 from '../../assets/images/project_app_1.png';
import projectWeb1 from '../../assets/images/project_web_1.png';
import foodImg from '../../assets/food.png';

export default function Landing() {
    // Services Carousel State
    const [currentService, setCurrentService] = useState(0);
    const services = [
        {
            title: "UI/UX Design",
            description: "We design intuitive, user-friendly and visually clean interfaces that improve usability and engagement across web and mobile platforms.",
            icon: <Palette className="w-12 h-12 text-pink-500" />,
            bg: "from-pink-500/20 to-purple-500/10",
            link: "/ui-ux"
        },
        {
            title: "Web Development",
            description: "Build robust, scalable, and high-performance web applications tailored to your business needs.",
            icon: <Code className="w-12 h-12 text-purple-500" />,
            bg: "from-purple-500/20 to-indigo-500/10",
            link: "#"
        },
        {
            title: "Mobile App Development",
            description: "Developing seamless mobile experiences for iOS and Android platforms using modern technologies.",
            icon: <Smartphone className="w-12 h-12 text-indigo-500" />,
            bg: "from-indigo-500/20 to-blue-500/10",
            link: "/app-development"
        }
    ];

    const nextService = () => {
        setCurrentService((prev) => (prev + 1) % services.length);
    };

    const prevService = () => {
        setCurrentService((prev) => (prev - 1 + services.length) % services.length);
    };

    // Testimonials State
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            name: "Amey Mishra",
            role: "Founder, Pi-Amazonia",
            quote: "Antigravity team helped us build our platform from scratch. Their UI/UX design and development expertise are top-notch. Highly recommended for any serious business.",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Sarah Jenkins",
            role: "CEO, TechFlow",
            quote: "Working with them was a game-changer. They delivered a product that exceeded our expectations in both design and performance.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="min-h-screen font-sans text-white selection:bg-pink-500/30 overflow-x-hidden relative" style={{ background: '#060212' }}>
            {/* ── Global Background Glows ── */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-pink-900/10 blur-[180px] rounded-full animate-pulse" />
                <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[180px] rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[50%] bg-indigo-900/10 blur-[180px] rounded-full" />
            </div>

            <div className="relative z-10">
                <Navbar />

                {/* ── Hero Section ── */}
                <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-left"
                        >
                            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1] text-white">
                                We Design Digital <br/>
                                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Experiences That Drive Growth</span>
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-xl">
                                We help businesses build and scale digital products through thoughtful design, robust development, and results-driven solutions.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs shadow-xl shadow-pink-500/20 hover:scale-105 transition-all flex items-center gap-2">
                                    Get Started
                                </Link>
                                <a href="#work" className="border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all">
                                    View Work
                                </a>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="absolute inset-0 bg-pink-500/10 blur-[100px] rounded-full" />
                            <img 
                                src={teamComposite} 
                                alt="Our Team" 
                                className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* ── Partners Section ── */}
                <section className="py-12 border-y border-white/10 bg-white/[0.02]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-wrap justify-between items-center gap-8 opacity-60">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" className="h-6 filter invert" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Microsoft_logo.svg" alt="Microsoft" className="h-6 filter invert" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 filter invert" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-5 filter invert" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="Adidas" className="h-8 filter invert" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-5 filter invert" />
                        </div>
                    </div>
                </section>

                {/* ── About Company Section ── */}
                <section className="py-32 px-6 bg-transparent relative border-b border-white/10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/10 blur-[80px] rounded-full" />
                            <img 
                                src={aboutTeam} 
                                alt="About Us" 
                                className="w-full rounded-[40px] shadow-2xl border border-white/10"
                            />
                        </div>

                        <div>
                            <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">About company</h2>
                            <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">We provide modern web and app solutions</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10">
                                We are a team of passionate designers and developers dedicated to creating impactful digital experiences. Our mission is to help businesses grow by providing innovative solutions that resonate with their audience.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: <Users className="w-6 h-6 text-pink-500" />, title: "Dedicated Team" },
                                    { icon: <Clock className="w-6 h-6 text-orange-500" />, title: "On Time Delivery" },
                                    { icon: <Headphones className="w-6 h-6 text-purple-500" />, title: "24/7 Support" },
                                    { icon: <Award className="w-6 h-6 text-indigo-500" />, title: "Winning Award" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="p-3 rounded-xl bg-white/5">{item.icon}</div>
                                        <span className="font-bold text-white">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Services Section (Featured Carousel style) ── */}
                <section className="py-32 px-6 bg-transparent relative border-b border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">Services</h2>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Unlock revenue growth for your business</h3>
                    </div>

                    <div className="max-w-5xl mx-auto relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-[100px] rounded-full" />
                        
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentService}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className={`p-12 md:p-20 rounded-[40px] border border-white/10 bg-gradient-to-br ${services[currentService].bg} backdrop-blur-xl relative flex flex-col md:flex-row items-center gap-12`}
                            >
                                <div className="p-6 rounded-3xl bg-white/10 border border-white/20">
                                    {services[currentService].icon}
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h4 className="text-2xl md:text-4xl font-black mb-4 text-white">{services[currentService].title}</h4>
                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                        {services[currentService].description}
                                    </p>
                                    <Link to={services[currentService].link} className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 w-fit mx-auto md:mx-0">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button onClick={prevService} className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={nextService} className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </section>

                {/* ── Our Work Section ── */}
                <section id="work" className="py-32 px-6 bg-transparent relative border-b border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-24">
                        <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">Our Work</h2>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Take a look at our recent projects</h3>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="rounded-[30px] overflow-hidden border border-white/10 bg-[#121225]/50 backdrop-blur-xl group"
                        >
                            <div className="h-[300px] overflow-hidden relative">
                                <img src={projectApp1} alt="Services Cellplus" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060212] via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="p-8">
                                <h4 className="text-xl font-bold mb-2 text-white">Services Cellplus</h4>
                                <p className="text-gray-400 text-sm mb-4">Mobile App Mockup</p>
                                <Link to="/app-development" className="text-pink-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="rounded-[30px] overflow-hidden border border-white/10 bg-[#121225]/50 backdrop-blur-xl group"
                        >
                            <div className="h-[300px] overflow-hidden relative">
                                <img src={foodImg} alt="Al-Ingasceria" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060212] via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="p-8">
                                <h4 className="text-xl font-bold mb-2 text-white">Al-Ingasceria</h4>
                                <p className="text-gray-400 text-sm mb-4">Food & Restaurant Platform</p>
                                <Link to="#" className="text-pink-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="rounded-[30px] overflow-hidden border border-white/10 bg-[#121225]/50 backdrop-blur-xl group"
                        >
                            <div className="h-[300px] overflow-hidden relative">
                                <img src={projectWeb1} alt="Visa Direct" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060212] via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="p-8">
                                <h4 className="text-xl font-bold mb-2 text-white">Visa Direct</h4>
                                <p className="text-gray-400 text-sm mb-4">Fintech Dashboard</p>
                                <Link to="/ui-ux" className="text-pink-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── Why Choose Us Section ── */}
                <section className="py-32 px-6 bg-transparent relative border-b border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-24">
                        <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">Why Choose Us</h2>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">The right partner to build and scale your digital products</h3>
                    </div>

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Features */}
                        <div className="flex-1 space-y-12 order-2 lg:order-1">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center shrink-0 border border-pink-500/30">
                                    <CheckCircle2 className="w-6 h-6 text-pink-500" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">User Centered Design</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        We create intuitive experiences that align with user behavior and business goals.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center shrink-0 border border-orange-500/30">
                                    <CheckCircle2 className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Scalable Solutions</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Building architecture that grows seamlessly with your user base.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="flex-1 order-1 lg:order-2 flex justify-center relative">
                            <div className="absolute inset-0 bg-pink-500/10 blur-[80px] rounded-full" />
                            <img 
                                src={whyChooseUsImg} 
                                alt="Why Choose Us" 
                                className="w-full max-w-[400px] h-auto rounded-[30px]"
                            />
                        </div>

                        {/* Right Features */}
                        <div className="flex-1 space-y-12 order-3">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30">
                                    <CheckCircle2 className="w-6 h-6 text-purple-500" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Expert Support</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Dedicated maintenance and guidance to ensure continuous operation.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                                    <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Data Driven Results</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Optimizing products based on real analytics and performance metrics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Pricing Plan Section ── */}
                <section className="py-32 px-6 bg-transparent relative border-b border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-24">
                        <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">Pricing Plan</h2>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Best Plans for Your Business</h3>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Standard Pack */}
                        <motion.div 
                            whileHover={{ y: -10, borderColor: 'rgba(236, 72, 153, 0.8)' }}
                            className="p-10 rounded-[30px] border border-pink-500/20 bg-[#121225]/50 backdrop-blur-xl relative flex flex-col justify-between group overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-white">Standard Pack</h3>
                                <div className="text-3xl font-black mb-6 text-pink-500">4,999/- <span className="text-sm font-medium text-gray-400">Per Month</span></div>
                                <div className="w-full h-px bg-white/10 mb-8" />
                                <ul className="space-y-4 mb-8 text-left text-gray-300 font-medium">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> UI/UX Design</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Web Development</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> 2 Revision Cycles</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Support & Maintenance</li>
                                </ul>
                            </div>
                            <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold hover:bg-pink-500 hover:border-pink-500 transition-all">
                                Subscribe Now
                            </button>
                        </motion.div>

                        {/* Premium Pack */}
                        <motion.div 
                            whileHover={{ y: -10, borderColor: 'rgba(249, 115, 22, 0.8)' }}
                            className="p-10 rounded-[30px] border border-orange-500/20 bg-[#121225]/50 backdrop-blur-xl relative flex flex-col justify-between group overflow-hidden transition-all duration-300 shadow-xl shadow-orange-500/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-white">Premium Pack</h3>
                                <div className="text-3xl font-black mb-6 text-orange-500">Customized Prices</div>
                                <div className="w-full h-px bg-white/10 mb-8" />
                                <ul className="space-y-4 mb-8 text-left text-gray-200 font-medium">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Everything in Standard</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Mobile App Development</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Unlimited Revisions</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Priority Support</li>
                                </ul>
                            </div>
                            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
                                Get a Quote
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* ── Testimonials Section ── */}
                <section className="py-32 px-6 bg-transparent relative border-b border-white/10">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-pink-500 font-bold text-lg mb-2 uppercase tracking-widest">What Our Clients Say About Us</h2>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Real feedback from real clients</h3>
                    </div>

                    <div className="max-w-3xl mx-auto relative">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentTestimonial}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="p-10 md:p-14 rounded-[30px] border border-white/10 bg-[#121225]/50 backdrop-blur-xl text-center relative"
                            >
                                <img 
                                    src={testimonials[currentTestimonial].image} 
                                    alt={testimonials[currentTestimonial].name} 
                                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-pink-500"
                                />
                                <p className="text-gray-300 text-lg md:text-xl italic mb-6 leading-relaxed">
                                    "{testimonials[currentTestimonial].quote}"
                                </p>
                                <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                                <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button onClick={prevTestimonial} className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={nextTestimonial} className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </section>

                {/* ── CTA Card Section ── */}
                <section className="py-32 px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto rounded-[50px] p-12 md:p-20 relative overflow-hidden text-center border border-pink-500/10 shadow-2xl shadow-pink-500/5"
                        style={{ background: 'linear-gradient(135deg, #0d0c15 0%, #1a153a 100%)' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-orange-500/5" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Ready to build something impactful together?</h2>
                            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-medium">
                                Let's collaborate to bring your digital vision to life with expert design and development.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto justify-center">
                                <Link to="/contact" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-pink-500/20">
                                    Get Started
                                </Link>
                                <Link to="/contact" className="border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        
                        {/* Background Glows */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />
                    </motion.div>
                </section>

                <Footer />
            </div>
        </div>
    );
}