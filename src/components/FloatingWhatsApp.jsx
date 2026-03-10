import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    const whatsappNumber = '919865735691';

    return (
        <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] flex items-center justify-center"
        >
            <MessageCircle className="h-7 w-7" />
        </a>
    );
}
