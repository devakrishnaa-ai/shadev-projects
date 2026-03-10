import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import BackgroundEffects from './BackgroundEffects';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <BackgroundEffects />
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow pt-20 relative z-10">
                <Outlet />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <BackToTop />
        </div>
    );
}
