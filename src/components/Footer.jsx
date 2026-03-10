import { Link } from 'react-router-dom';
import { Rocket, Github, Linkedin, Mail, Smartphone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-darkBg border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <Rocket className="h-8 w-8 text-primary flex-shrink-0" />
                            <span className="font-bold text-2xl tracking-tight text-white">
                                Shadev Projects
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            We provide high-quality, professional React.js and AI/ML college projects for CSE, AI&DS, and AI&ML students. Ready-made options and custom solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/devakrishnaa-ai" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/devakrishnaae/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="mailto:devakrishnaa12@gmail.com" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#EA4335] hover:text-white">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/projects" className="text-gray-400 hover:text-primary">Ready-Made Projects</Link></li>
                            <li><Link to="/custom" className="text-gray-400 hover:text-primary">Custom Projects</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-400">
                                <Smartphone className="h-5 w-5 mr-3 text-primary" />
                                <span>+91 98657 35691</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Mail className="h-5 w-5 mr-3 text-primary" />
                                <span>devakrishnaa12@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-black/5 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Shadev Projects. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
