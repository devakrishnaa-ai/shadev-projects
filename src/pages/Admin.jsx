import { useState, useEffect } from 'react';
import { Lock, Plus, Trash2, Edit2, LogOut, Save, X, Eye, EyeOff } from 'lucide-react';
import { getProjects, saveProject, deleteProject } from '../utils/storage';

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [projects, setProjects] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProject, setCurrentProject] = useState({
        title: '', description: '', stack: '', category: 'ML', price: '', badge: ''
    });

    const ADMIN_PASSWORD = 'admin123';

    useEffect(() => {
        if (isAuthenticated) {
            setProjects(getProjects());
        }
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert('Invalid Password');
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        saveProject(currentProject);
        setProjects(getProjects());
        setIsEditing(false);
        setCurrentProject({ title: '', description: '', stack: '', category: 'ML', price: '', badge: '' });
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            deleteProject(id);
            setProjects(getProjects());
        }
    };

    const handleEdit = (project) => {
        setCurrentProject(project);
        setIsEditing(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <div className="glass p-10 max-w-md w-full text-center">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
                    <p className="text-gray-400 mb-8">Please enter the password to manage Shadev Projects.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Admin Password"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-[#FF4C29] text-white font-bold py-3 rounded-xl shadow-lg"
                        >
                            Login to Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                    <p className="text-gray-400">Manage your project store catalog.</p>
                </div>
                <button
                    onClick={() => setIsAuthenticated(false)}
                    className="flex items-center space-x-2 text-gray-400 hover:text-red-500"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Project Form */}
                <div className="lg:col-span-1">
                    <div className="glass p-8 sticky top-28">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                            {isEditing ? <Edit2 className="mr-2 text-primary" size={20} /> : <Plus className="mr-2 text-primary" size={20} />}
                            {isEditing ? 'Edit Project' : 'Add New Project'}
                        </h2>

                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Project Title</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Chatbot API"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:ring-1 focus:ring-primary"
                                    value={currentProject.title}
                                    onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                                <textarea
                                    required
                                    rows="3"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:ring-1 focus:ring-primary h-24"
                                    value={currentProject.description}
                                    onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Price (₹)</label>
                                    <input
                                        required
                                        type="number"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:ring-1 focus:ring-primary"
                                        value={currentProject.price}
                                        onChange={(e) => setCurrentProject({ ...currentProject, price: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                                    <select
                                        className="w-full bg-darkBg border border-white/10 rounded-lg p-2.5 text-white focus:ring-1 focus:ring-primary"
                                        value={currentProject.category}
                                        onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value })}
                                    >
                                        <option value="ML">Machine Learning</option>
                                        <option value="NLP">NLP</option>
                                        <option value="DL">Deep Learning</option>
                                        <option value="Web">Web Development</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Tech Stack</label>
                                <input
                                    type="text"
                                    placeholder="React, CSS, Node"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:ring-1 focus:ring-primary"
                                    value={currentProject.stack}
                                    onChange={(e) => setCurrentProject({ ...currentProject, stack: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Badge (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="NEW, HOT, 20% OFF"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:ring-1 focus:ring-primary"
                                    value={currentProject.badge}
                                    onChange={(e) => setCurrentProject({ ...currentProject, badge: e.target.value })}
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    className="flex-grow bg-primary hover:bg-[#FF4C29] text-white font-bold py-3 rounded-xl flex items-center justify-center"
                                >
                                    <Save size={20} className="mr-2" />
                                    {isEditing ? 'Update Project' : 'Save Project'}
                                </button>
                                {isEditing && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEditing(false);
                                            setCurrentProject({ title: '', description: '', stack: '', category: 'ML', price: '', badge: '' });
                                        }}
                                        className="bg-white/5 hover:bg-white/10 text-gray-400 p-3 rounded-xl"
                                    >
                                        <X size={24} />
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Project List */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-xl font-bold text-white mb-4">Project Catalog ({projects.length})</h2>
                    <div className="overflow-hidden glass rounded-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 border-b border-white/10 text-xs text-gray-400 uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4">Title</th>
                                        <th className="px-6 py-4">Category</th>
                                        <th className="px-6 py-4">Price</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {projects.map((p) => (
                                        <tr key={p.id} className="hover:bg-white/5">
                                            <td className="px-6 py-4 font-medium text-white max-w-xs truncate">{p.title}</td>
                                            <td className="px-6 py-4 text-gray-400">{p.category}</td>
                                            <td className="px-6 py-4 font-bold text-white">₹{p.price}</td>
                                            <td className="px-6 py-4 text-right flex justify-end space-x-2">
                                                <button
                                                    onClick={() => handleEdit(p)}
                                                    className="p-2 text-gray-400 hover:text-primary hover:bg-white/5 rounded-lg"
                                                >
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(p.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-white/5 rounded-lg"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {projects.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-12 text-center text-gray-500 italic">
                                                No projects in catalog.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
