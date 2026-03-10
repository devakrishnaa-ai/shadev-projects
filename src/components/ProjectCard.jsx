import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    const whatsappNumber = '919865735691';
    const whatsappText = encodeURIComponent(`Hi! I want to buy: ${project.title} - ₹${project.price}. Please share payment details.`);

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass-card overflow-hidden h-full"
        >
            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                        {project.category}
                    </span>
                    {project.badge && (
                        <span className="px-2 py-0.5 bg-secondary text-white text-[10px] font-bold rounded uppercase tracking-wider">
                            {project.badge}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                <div className="text-xs text-gray-500 font-mono mb-6">
                    {project.stack}
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-2xl font-black text-white">
                        ₹{project.price}
                    </div>

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg"
                    >
                        <MessageCircle className="h-4 w-4" />
                        <span>Buy Now</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
