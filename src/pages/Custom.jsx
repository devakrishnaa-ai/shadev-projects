import { Brain, Cpu, Database, Eye, Globe, MessageCircle, Sparkles } from 'lucide-react';

export default function Custom() {
    const whatsappNumber = '919865735691';
    const whatsappText = encodeURIComponent('Hi! I want a custom project from Shadev Projects. Please tell me more about your services.');

    const services = [
        {
            icon: <Brain className="h-8 w-8 text-primary" />,
            title: 'Machine Learning Models',
            desc: 'Supervised, Unsupervised, and Reinforcement learning models for predictive analysis.',
        },
        {
            icon: <Sparkles className="h-8 w-8 text-primary" />,
            title: 'NLP / Text Analysis',
            desc: 'Sentiment analysis, Chatbots, and Language processing using NLTK and Transformers.',
        },
        {
            icon: <Database className="h-8 w-8 text-primary" />,
            title: 'Data Science & Visualization',
            desc: 'Insightful dashboards, exploratory data analysis, and advanced visualizations.',
        },
        {
            icon: <Eye className="h-8 w-8 text-primary" />,
            title: 'Deep Learning / CV',
            desc: 'Computer Vision, Image Classification, and Neural Networks using TensorFlow/PyTorch.',
        },
        {
            icon: <Globe className="h-8 w-8 text-primary" />,
            title: 'AI Integrated Web Apps',
            desc: 'Full-stack web applications with integrated AI/ML backends for real-world use.',
        },
        {
            icon: <Cpu className="h-8 w-8 text-primary" />,
            title: 'IoT & Embedded AI',
            desc: 'Hardware integrations and small-scale AI models for microcontroller projects.',
        },
    ];

    return (
        <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Custom Project Services</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Can't find what you need? We build tailored solutions from scratch based on your specific academic Requirements.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="glass-card p-8 group"
                    >
                        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                    </div>
                ))}
            </div>

            <div className="glass p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] -z-10 rounded-full"></div>

                <h2 className="text-3xl font-bold text-white mb-4">Have a unique idea?</h2>
                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                    Click below to chat with us on WhatsApp. Share your abstract or requirements, and we'll provide a quote and timeline.
                </p>

                <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-primary hover:bg-[#FF4C29] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20"
                >
                    <MessageCircle className="h-6 w-6" />
                    <span>Discuss Your Project</span>
                </a>
            </div>
        </div>
    );
}
