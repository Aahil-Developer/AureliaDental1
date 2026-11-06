import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { CLINIC } from '../lib/data';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-40 flex flex-col items-end gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`w-12 h-12 rounded-full bg-white border border-primary/20 text-primary-deep shadow-lg flex items-center justify-center transition-all duration-500 hover:-translate-y-1 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp size={19} strokeWidth={2.2} />
      </button>
      <a
        href={CLINIC.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-pulse-ring w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_14px_34px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle size={28} color="#fff" fill="#fff" strokeWidth={1.4} aria-hidden="true" />
      </a>
    </div>
  );
}
