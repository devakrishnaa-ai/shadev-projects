import { useState, useEffect } from 'react';
import { Search, Rocket } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectCardSkeleton from '../components/ProjectCardSkeleton';
import { getProjects } from '../utils/storage';

const INITIAL_PROJECTS = [
    {
        id: '1',
        title: 'House Price Predictor',
        description: 'Predicts house prices using multiple regression algorithms with high accuracy.',
        stack: 'Python · Scikit-learn · Streamlit',
        category: 'ML',
        price: 699,
        badge: '🔥 HOT'
    },
    {
        id: '2',
        title: 'Sentimental Analysis',
        description: 'Real-time sentiment analyzer for social media comments using NLP.',
        stack: 'Python · NLTK · Flask',
        category: 'NLP',
        price: 499,
        badge: 'NEW'
    },
    {
        id: '3',
        title: 'E-Commerce Dashboard',
        description: 'Full-stack React dashboard with sales analytics and product management.',
        stack: 'React · Tailwind · Firebase',
        category: 'Web',
        price: 999,
        badge: ''
    }
];

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            let stored = getProjects();
            if (stored.length === 0) {
                setProjects(INITIAL_PROJECTS);
            } else {
                setProjects(stored);
            }
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const categories = ['All', 'ML', 'NLP', 'DL', 'Web'];

    const filteredProjects = projects.filter((p) => {
        const matchesCategory = filter === 'All' || p.category === filter;
        const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Ready-Made Projects</h1>
                <p className="text-gray-400">Choose from our premium selection of pre-built college projects.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-12">
                <div className="relative flex-grow">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-gray-500"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-xl border font-medium whitespace-nowrap ${filter === cat
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white/5 text-gray-400 border-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <ProjectCardSkeleton key={i} />
                    ))}
                </div>
            ) : filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 glass rounded-3xl">
                    <Rocket className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-xl text-gray-400 font-semibold">No projects found.</p>
                    <button
                        onClick={() => { setFilter('All'); setSearch('') }}
                        className="mt-4 text-primary font-medium"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
}
