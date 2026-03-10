import { ArrowRight, Code, Cpu, Database, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
    const features = [
        { icon: <Cpu className="h-6 w-6 text-primary" />, title: 'Machine Learning', desc: 'Predictive models & data analysis' },
        { icon: <LayoutTemplate className="h-6 w-6 text-primary" />, title: 'Web Apps', desc: 'Modern React & Fullstack apps' },
        { icon: <Database className="h-6 w-6 text-primary" />, title: 'Data Science', desc: 'Visualization & insights' },
        { icon: <Code className="h-6 w-6 text-primary" />, title: 'Custom Solutions', desc: 'Built to your requirements' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            <ParticleBackground />

            {/* Hero Section */}
            <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="max-w-3xl"
                >
                    <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full border border-white/20 glass mb-6">
                        <span className="text-white font-semibold text-sm">For CSE, AI&DS, and AI&ML Students</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Premium College Projects<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Ready to Submit
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        High-quality, professional React.js and AI/ML projects built for computer science students. Get top grades with our ready-made and custom solutions.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-primary/50 hover:bg-[#FF4C29] flex items-center group w-full sm:w-auto justify-center"
                            >
                                Browse Projects
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </motion.button>
                        </Link>
                        <Link to="/custom">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass text-white font-semibold rounded-xl w-full sm:w-auto text-center"
                            >
                                Request Custom Project
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">What We Offer</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Specialized in modern tech stacks to provide you with the best learning resources and project submissions.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Tilt
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    perspective={1000}
                                    scale={1.05}
                                    transitionSpeed={1500}
                                    className="h-full"
                                >
                                    <div className="glass-card p-6 h-full flex flex-col items-center text-center cursor-pointer hover:border-primary/50 transition-colors duration-300">
                                        <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.desc}</p>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

