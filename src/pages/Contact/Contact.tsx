import React from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowRight, 
    Mail, 
    PhoneCall, 
    MapPin
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logoImg from '../../assets/logo.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';



export default function Contact2() {
    const [isLight, setIsLight] = React.useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('theme-light');
        }
        return false;
    });

    React.useEffect(() => {
        const root = document.documentElement;
        const observer = new MutationObserver(() => {
            setIsLight(root.classList.contains('theme-light'));
        });
        observer.observe(root, { attributes: true });
        return () => observer.disconnect();
    }, []);

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add submission logic here
    };

    const contactMethods = [
        {
            icon: <Mail className="w-5 h-5 text-white" />,
            bgColor: "bg-red-500",
            title: "Email Us",
            value: "info@codexconquer.com",
            subtext: "Expect a response within 24 hours."
        },
        {
            icon: <PhoneCall className="w-5 h-5 text-white" />,
            bgColor: "bg-pink-500",
            title: "Call or WhatsApp",
            value: "+91 7330722274 | +44 7448579136",
            subtext: "Quick support and instant consultation available."
        },
        {
            icon: <MapPin className="w-5 h-5 text-white" />,
            bgColor: "bg-rose-500",
            title: "Where We Work",
            value: "Aziziyah, Jeddah, Saudi Arabia | India",
            subtext: "Working with clients globally across multiple regions."
        }
    ];

    return (
        <div className="min-h-screen font-sans bg-white dark:bg-black transition-colors duration-500 overflow-x-hidden">
            <Navbar />

            {/* ── Hero Section ── */}
            <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center overflow-hidden pt-20">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')`,
                        filter: 'brightness(0.5)'
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
                
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-32">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter"
                    >
                        Let's Build Something Great Together
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        Have an idea or project in mind? We'd love to hear from you. Share your requirements and we'll help you bring it to life
                    </motion.p>
                </div>
            </section>

            {/* ── Contact Card Section ── */}
            <section className="relative z-20 -mt-24 px-6 mb-20">
                <div className="max-w-6xl mx-auto bg-white dark:bg-[#0c0c0c] rounded-[40px] shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-100 dark:border-white/5">
                    
                    {/* Left Column: Get In Touch */}
                    <div className="lg:w-1/2 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-white/5">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Get In Touch</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-md font-medium text-sm">
                            Whether you have a question, a project idea, or just want to say hello our team is here to help.
                        </p>

                        <div className="space-y-10">
                            {contactMethods.map((method, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className={`w-14 h-14 rounded-full ${method.bgColor} flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110`}>
                                        {method.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{method.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 font-bold mb-1">{method.value}</p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{method.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-14">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Follow our social media</h4>
                            <div className="flex gap-4">
                                {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-pink-500 hover:text-white transition-all shadow-sm">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Send Us a Message */}
                    <div className="lg:w-1/2 p-8 md:p-14 bg-gray-50/30 dark:bg-white/[0.01]">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-10 tracking-tight">Send Us a Message</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Name"
                                    className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-transparent shadow-sm focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all placeholder:text-gray-400 dark:text-white font-medium"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-transparent shadow-sm focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all placeholder:text-gray-400 dark:text-white font-medium"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <div>
                                <textarea 
                                    rows={5} 
                                    placeholder="Message"
                                    className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-transparent shadow-sm focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all placeholder:text-gray-400 dark:text-white font-medium resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>
                            <button 
                                type="submit"
                                className="group w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-xl shadow-pink-500/20 active:scale-[0.98]"
                            >
                                Send Message
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ── Map Section ── */}
            <section className="px-6 mb-32">
                <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14843.37570100345!2d39.1944103!3d21.55295725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1b606de3cc3%3A0x58b21a47960b7430!2sAziziyah%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1774367694994!5m2!1sen!2sin"
                        className={`w-full h-full border-none transition-all duration-700 ${!isLight ? 'grayscale invert brightness-[0.8]' : ''}`}
                        loading="lazy"
                        title="Office Location"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}