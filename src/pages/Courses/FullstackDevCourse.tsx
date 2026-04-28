import { motion } from 'framer-motion';
import {
    Code2,
    Terminal,
    Globe,
    Database,
    ArrowRight,
    Layout
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InstructorImage from '../../assets/images/images/avatar.png';
import SkillsImage from '../../assets/Mask group.png';
import HeroBgImage from '../../assets/images/images/ferenc-almasi-fhAfLtHToCs-unsplash 1.png';
import HtmlImage from '../../assets/images/images/Group 647.png';
import CssImage from '../../assets/images/images/Group 638.png';
import JavaScriptImage from '../../assets/images/images/Group 637.png';
import ReactImage from '../../assets/images/images/Group 635.png';
import NodeImage from '../../assets/images/images/Group 633.png';

/* ── Asset URLs ── */
const HERO_BG = HeroBgImage;
const CENTRAL_IMG = SkillsImage;

const LOGOS = {
    html: HtmlImage,
    css: CssImage,
    js: JavaScriptImage,
    react: ReactImage,
    node: NodeImage
};

/* ── Components ── */

const SkillBox = ({ title, desc, position, icon: Icon }: { title: string; desc: string; position: string; icon: React.ComponentType<{ className: string }> }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, borderColor: 'rgba(244, 63, 94, 0.5)', boxShadow: '0 10px 30px -10px rgba(244, 63, 94, 0.3)' }}
        className={`p-6 rounded-2xl border border-rose-500/20 bg-[#1c1c35]/60 backdrop-blur-2xl absolute z-20 w-[280px] hidden lg:block transition-all duration-300 group ${position}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent rounded-2xl" />
        <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                {Icon && <Icon className="w-4 h-4 text-rose-500" />}
            </div>
            <h4 className="text-rose-500 font-black text-sm tracking-tight">{title}</h4>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors font-medium">{desc}</p>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl" />
    </motion.div>
);

const MobileSkillBox = ({ title, desc }: { title: string; desc: string }) => (
    <div className="p-6 rounded-2xl border border-rose-500/20 bg-white/[0.02] backdrop-blur-xl mb-4 lg:hidden">
        <h4 className="text-rose-500 font-bold text-sm mb-2">{title}</h4>
        <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
    </div>
);

export default function FullstackDevCourse() {
    return (
        <div className="min-h-screen font-sans text-white selection:bg-pink-500/30 overflow-x-hidden relative" style={{ background: 'rgba(28, 27, 45, 0.75)' }}>
            <Navbar />

            {/* ── Hero Section ── */}
            <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${HERO_BG})` }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight"
                    >
                        Build Powerful Web <br />
                        <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Applications From Scratch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        Learn frontend and backend development to create fast, scalable and fully functional web applications.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl shadow-pink-500/40 flex items-center gap-3 hover:scale-105 transition-all mx-auto group">
                            Enroll Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── Tools You Will Work With ── */}
            <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Tools You Will Work With</h2>
                    <p className="text-gray-400 text-lg font-medium">Get hands-on with modern technologies and frameworks used by professional developers.</p>
                </div>

                <div className="space-y-6">
                    {[
                        { name: "HTML5", logo: LOGOS.html, desc: "It is used to structure and organize content on web pages. Forms the backbone of every website with elements like text, images and layout.", side: "left" },
                        { name: "CSS3", logo: LOGOS.css, desc: "It is used to style and design the visual appearance of websites. Controls layout, colors, spacing and responsiveness across devices.", side: "right" },
                        { name: "JavaScript", logo: LOGOS.js, desc: "It is used to add interactivity and dynamic behavior to websites. Powers features like animations, form validation and real-time updates.", side: "left" },
                        { name: "React", logo: LOGOS.react, desc: "It is used to build dynamic and interactive user interfaces. Helps create reusable components and fast, responsive web apps.", side: "right" },
                        { name: "Node.js", logo: LOGOS.node, desc: "It is used to build fast and scalable backend applications using JavaScript. Handles server-side logic, APIs and real-time data efficiently.", side: "left" }
                    ].map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: tool.side === "left" ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:border-rose-500/30 transition-all ${tool.side === "right" ? "md:flex-row-reverse" : ""}`}
                        >
                            <div className="w-24 h-24 flex items-center justify-center bg-white/5 rounded-2xl p-4 shrink-0 group-hover:scale-110 transition-transform">
                                <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                            </div>
                            <div className={`text-center ${tool.side === "left" ? "md:text-left" : "md:text-right"}`}>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                                    {tool.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Skills You Will Master ── */}
            <section className="py-24 px-6 relative overflow-hidden border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Skills You Will Master</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Master everything from building responsive interfaces to developing secure servers and managing databases.</p>
                    </div>

                    <div className="relative h-[800px] flex items-center justify-center mt-0">
                        {/* Background Decorative Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
                            <div className="w-[500px] h-[500px] border border-white/10 border-dashed rounded-full absolute animate-[spin_20s_linear_infinite]" />
                            <div className="w-[700px] h-[700px] border border-white/5 border-dashed rounded-full absolute animate-[spin_30s_linear_infinite_reverse]" />
                            <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.05)_0%,transparent_70%)]" />
                        </div>

                        {/* Central Circular Image */}
                        <div className="relative z-10 w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-rose-500/30 p-3 bg-[#1c1c35]/50 backdrop-blur-xl group transition-all duration-700 hover:scale-105">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500/30 via-transparent to-rose-500/10 animate-pulse" />
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-rose-500/30 relative z-10">
                                <img
                                    src={CENTRAL_IMG}
                                    alt="Skills"
                                    className="w-full h-full object-cover shadow-2xl shadow-black/50"
                                />
                            </div>

                            {/* Inner Glow */}
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(244,63,94,0.3)]" />

                            {/* Rotating Ring Accent */}
                            <div className="absolute -inset-4 border border-rose-500/20 rounded-full border-dashed animate-[spin_15s_linear_infinite]" />
                        </div>

                        {/* Skill Boxes - Strategic Positioning */}
                        <div className="absolute top-[5%] left-[5%] xl:left-[10%]">
                            <SkillBox title="UI Development" icon={Layout} desc="Create clean and interactive user interfaces for modern web applications. Focus on usability and smooth user experience." position="relative" />
                        </div>
                        <div className="absolute top-[5%] right-[5%] xl:right-[10%]">
                            <SkillBox title="Server-side Development" icon={Terminal} desc="Develop backend logic and handle requests using Node.js. Ensure secure and efficient application functionality." position="relative" />
                        </div>
                        <div className="absolute top-[41%] left-[-2%] xl:left-[2%]">
                            <SkillBox title="API Integration" icon={Globe} desc="Connect front-end and back-end through RESTful APIs. Enable smooth data exchange between client and server." position="relative" />
                        </div>
                        <div className="absolute top-[41%] right-[-2%] xl:right-[2%]">
                            <SkillBox title="State & Data Handling" icon={Database} desc="Manage application data efficiently across front-end and back-end. Ensure consistency and scalability." position="relative" />
                        </div>
                        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2">
                            <SkillBox title="Frontend Frameworks" icon={Code2} desc="Build dynamic and reusable components using modern frameworks like React or Vue.js. Improve performance and maintainability." position="relative" />
                        </div>

                        {/* Premium SVG Connection Arrows */}
                        <div className="absolute inset-0 pointer-events-none hidden lg:block">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 800">
                                <defs>
                                    <marker id="arrowhead-premium" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                                    </marker>
                                </defs>

                                {/* UI Dev Arrow (Top Left) - longer swirly path */}
                                <path d="M 450,370 C 380,280 320,320 275,230" fill="none" stroke="white" strokeWidth="3" strokeDasharray="1, 15" strokeLinecap="round" className="opacity-60" markerEnd="url(#arrowhead-premium)" />

                                {/* Server Dev Arrow (Top Right) - longer swirly path */}
                                <path d="M 550,370 C 620,280 680,320 725,230" fill="none" stroke="white" strokeWidth="3" strokeDasharray="1, 15" strokeLinecap="round" className="opacity-60" markerEnd="url(#arrowhead-premium)" />

                                {/* API Integration Arrow (Mid Left) - longer swirly path */}
                                <path d="M 420,400 C 320,450 280,480 205,420" fill="none" stroke="white" strokeWidth="3" strokeDasharray="1, 15" strokeLinecap="round" className="opacity-60" markerEnd="url(#arrowhead-premium)" />

                                {/* State Handling Arrow (Mid Right) - longer swirly path */}
                                <path d="M 580,400 C 680,450 720,480 795,420" fill="none" stroke="white" strokeWidth="3" strokeDasharray="1, 15" strokeLinecap="round" className="opacity-60" markerEnd="url(#arrowhead-premium)" />

                                {/* Frontend Frameworks Arrow (Bottom) - longer swirly path */}
                                <path d="M 500,480 C 500,550 500,620 500,675" fill="none" stroke="white" strokeWidth="3" strokeDasharray="1, 15" strokeLinecap="round" className="opacity-60" markerEnd="url(#arrowhead-premium)" />
                            </svg>
                        </div>
                    </div>

                    {/* Mobile View Skill Boxes */}
                    <div className="mt-12 lg:hidden">
                        <MobileSkillBox title="UI Development" desc="Create clean and interactive user interfaces using modern web applications." />
                        <MobileSkillBox title="Server-side Development" desc="Develop backends that handle requests using Node.js." />
                        <MobileSkillBox title="API Integration" desc="Connect frontend to backend through RESTful APIs." />
                        <MobileSkillBox title="State & Data Handling" desc="Manage application data efficiently using React state." />
                        <MobileSkillBox title="Database Management" desc="Build dynamic and scalable components with database storage." />
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
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-[40px] overflow-hidden border-4 border-emerald-500/30 mb-6 mx-auto group hover:border-emerald-500/60 transition-all duration-500 shadow-2xl shadow-emerald-500/10">
                            <img
                                src={InstructorImage}
                                alt="Instructor"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <h3 className="text-2xl font-black mb-1">Ali Ahmed</h3>
                        <p className="text-rose-500 font-bold text-sm uppercase tracking-widest">Web Developer</p>
                    </motion.div>
                </div>
            </section>

            {/* ── Your Development Journey ── */}
            <section className="py-24 px-6 relative overflow-visible mt-12 mb-12 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Your Development Journey</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Follow a structured path from fundamentals to advanced full stack development with real-world projects.</p>
                    </div>

                    {/* Timeline Desktop */}
                    <div className="relative py-40 hidden lg:block">
                        {/* Central Line */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2" />

                        {/* Points & Cards */}
                        <div className="relative flex justify-between items-center px-10">
                            {[
                                { title: "Web Development Fundamentals", desc: "HTML, CSS, JavaScript basics, responsive design and browser concepts.", side: "top" },
                                { title: "Frontend Development", desc: "Modern UI development using frameworks like React, component-based architecture and state management.", side: "bottom" },
                                { title: "Backend Development", desc: "Server-side programming, APIs, databases, authentication and business logic.", side: "top" },
                                { title: "Databases & Version Control", desc: "Working with SQL/NoSQL databases, Git, GitHub and collaborative workflows.", side: "bottom" },
                                { title: "Deployment, Projects & Career Prep", desc: "Application deployment, real-world projects, portfolio building and interview preparation.", side: "top" }
                            ].map((step, i) => (
                                <div key={i} className="relative flex flex-col items-center w-1/5">
                                    {/* Point on line */}
                                    <div className="w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)] z-10" />

                                    {/* Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: step.side === "top" ? -30 : 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className={`absolute ${step.side === "top" ? "bottom-[120px]" : "top-[120px]"} w-64 p-6 rounded-2xl border border-rose-500/20 bg-white/[0.02] backdrop-blur-xl text-center group hover:border-rose-500/40 transition-all`}
                                    >
                                        <h4 className="text-white font-bold text-sm mb-2 group-hover:text-rose-500 transition-colors">{step.title}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                                    </motion.div>

                                    {/* Curved Arrow (SVG) */}
                                    <div className={`absolute ${step.side === "top" ? "bottom-0" : "top-0"} w-full h-[120px] overflow-visible pointer-events-none`}>
                                        <svg className="w-full h-[120px] overflow-visible" viewBox="0 0 100 120" preserveAspectRatio="none">
                                            <defs>
                                                <marker id={`arrow-step-${i}`} markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                                    <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255, 255, 255, 0.6)" />
                                                </marker>
                                            </defs>
                                            <path
                                                d={step.side === "top" ? "M 50,120 L 50,1" : "M 50,0 L 50,119"}
                                                fill="none"
                                                stroke="rgba(255, 255, 255, 0.3)"
                                                strokeWidth="1.5"
                                                strokeDasharray="6,6"
                                                markerEnd={`url(#arrow-step-${i})`}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Mobile */}
                    <div className="lg:hidden space-y-8">
                        {[
                            "Web Development Fundamentals",
                            "Frontend Development",
                            "Backend Development",
                            "Databases & Version Control",
                            "Deployment, Projects & Career Prep"
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="flex flex-col items-center shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold border border-rose-500/30">
                                        {i + 1}
                                    </div>
                                    <div className="w-[2px] h-full bg-rose-500/20 mt-2" />
                                </div>
                                <div className="p-6 rounded-2xl border border-rose-500/20 bg-white/[0.02] flex-1">
                                    <h4 className="text-white font-bold text-sm mb-2">{step}</h4>
                                    <p className="text-gray-400 text-xs">Complete path from fundamentals to advanced development.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className="py-24 px-6 bg-transparent relative border-t border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-[50px] p-12 md:p-20 relative overflow-hidden text-center border border-rose-500/10 shadow-2xl shadow-rose-500/5"
                    style={{ background: 'linear-gradient(135deg, #1c1c35 0%, #2d2d5a 100%)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Start Building Real-World Applications</h2>
                        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-medium">
                            Join the course and become a full stack developer with in-demand skills.
                        </p>

                        <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-pink-500/20 group">
                            Enroll Now
                            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Background Glows */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full" />
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
