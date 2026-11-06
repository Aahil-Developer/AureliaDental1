import { useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import Logo from './Logo';
import BookingForm from './BookingForm';
import { CLINIC } from '../lib/data';

export default function AppointmentModal({ open, onClose, service }: { open: boolean; onClose: () => void; service?: string }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center" role="dialog" aria-modal="true" aria-label="Book an appointment">
      <button className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm cursor-default" onClick={onClose} aria-label="Close booking dialog" />
      <div className="relative w-full sm:max-w-lg max-h-[94vh] overflow-y-auto bg-cream rounded-t-3xl sm:rounded-3xl shadow-2xl">
        <div className="sticky top-0 z-10 bg-primary-deep text-white px-6 py-4 flex items-center justify-between rounded-t-3xl sm:rounded-t-3xl">
          <div className="flex items-center gap-3">
            <Logo light compact />
            <div>
              <p className="font-display font-semibold leading-tight">Reserve Your Visit</p>
              <a href={CLINIC.phoneHref} className="text-[10px] text-white/70 hover:text-white flex items-center gap-1 mt-0.5"><Phone size={9} /> {CLINIC.phone}</a>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
            <X size={19} />
          </button>
        </div>
        <div className="p-6">
          <BookingForm onClose={onClose} initialService={service} />
        </div>
      </div>
    </div>
  );
}
