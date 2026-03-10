import { Github, Linkedin, Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function About() {
    const contactInfo = [
        { icon: <Mail className="h-6 w-6" />, label: 'Email', value: 'devakrishnaa12@gmail.com', href: 'mailto:devakrishnaa12@gmail.com', color: '#EA4335' },
        { icon: <MessageCircle className="h-6 w-6" />, label: 'WhatsApp', value: '+91 98657 35691', href: 'https://wa.me/919865735691', color: '#25D366' },
        { icon: <Github className="h-6 w-6" />, label: 'GitHub', value: 'github.com/devakrishnaa-ai', href: 'https://github.com/devakrishnaa-ai', color: '#333' },
        { icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn', value: 'linkedin.com/in/devakrishnaae', href: 'https://www.linkedin.com/in/devakrishnaae/', color: '#0A66C2' },
    ];

    return (
        <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-24">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Shadev Projects</h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Shadev Projects is a premier destination for computer science students seeking high-quality, professional academic projects. We specialize in React.js, Machine Learning, Data Science, and AI.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Our mission is to bridge the gap between academic theory and practical implementation, helping students achieve excellence in their final years and mini-projects.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {['Expert-Level Codebase', 'Step-by-Step Documentation', 'Submission Ready', 'Full Technical Support'].map((item, idx) => (
                            <div key={idx} className="flex items-center text-white font-medium">
                                <ArrowRight className="h-5 w-5 text-primary mr-3" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mb-24">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info, idx) => (
                        <a
                            key={idx}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-8 flex flex-col items-center text-center group"
                        >
                            <div
                                className="h-14 w-14 rounded-full flex items-center justify-center mb-6"
                                style={{ backgroundColor: `${info.color}15`, color: info.color }}
                            >
                                {info.icon}
                            </div>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">{info.label}</p>
                            <p className="text-lg font-bold text-white truncate max-w-full">{info.value}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
