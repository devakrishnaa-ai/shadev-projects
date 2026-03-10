import { ArrowRight, Code, Cpu, Database, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const features = [
        { icon: <Cpu className="h-6 w-6 text-primary" />, title: 'Machine Learning', desc: 'Predictive models & data analysis' },
        { icon: <LayoutTemplate className="h-6 w-6 text-primary" />, title: 'Web Apps', desc: 'Modern React & Fullstack apps' },
        { icon: <Database className="h-6 w-6 text-primary" />, title: 'Data Science', desc: 'Visualization & insights' },
        { icon: <Code className="h-6 w-6 text-primary" />, title: 'Custom Solutions', desc: 'Built to your requirements' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 glass mb-6">
                        <span className="text-white font-semibold text-sm">For CSE, AI&DS, and AI&ML Students</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Premium College Projects<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Ready to Submit
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        High-quality, professional React.js and AI/ML projects built for computer science students. Get top grades with our ready-made and custom solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/projects">
                            <button
                                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-primary/50 hover:bg-[#FF4C29] flex items-center group w-full sm:w-auto justify-center"
                            >
                                Browse Projects
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                        </Link>
                        <Link to="/custom">
                            <button
                                className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 w-full sm:w-auto text-center"
                            >
                                Request Custom Project
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">What We Offer</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Specialized in modern tech stacks to provide you with the best learning resources and project submissions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="glass-card p-6"
                            >
                                <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
