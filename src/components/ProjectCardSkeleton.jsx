export default function ProjectCardSkeleton() {
    return (
        <div className="glass-card p-6 animate-pulse">
            <div className="flex justify-between items-start mb-4">
                <div className="h-6 w-32 bg-white/10 rounded"></div>
                <div className="h-6 w-16 bg-primary/20 rounded"></div>
            </div>
            <div className="h-7 w-3/4 bg-white/10 rounded mb-3"></div>
            <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-white/5 rounded mb-6"></div>
            <div className="flex gap-2 mb-6">
                <div className="h-6 w-20 bg-white/10 rounded-full"></div>
                <div className="h-6 w-24 bg-white/10 rounded-full"></div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <div className="h-8 w-24 bg-white/10 rounded-lg"></div>
                <div className="h-8 w-28 bg-primary/30 rounded-lg"></div>
            </div>
        </div>
    );
}
