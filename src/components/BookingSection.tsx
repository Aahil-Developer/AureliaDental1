import { Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import BookingForm from './BookingForm';
import { CLINIC } from '../lib/data';

export default function BookingSection() {
  return (
    <section id="book" className="relative py-20 sm:py-28 bg-primary-dark overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[130px]" aria-hidden="true" />
      <div className="absolute -bottom-48 -right-40 w-[560px] h-[560px] rounded-full bg-gold/10 blur-[140px]" aria-hidden="true" />
      <span aria-hidden="true" className="absolute left-[-1rem] bottom-6 font-display italic text-[9rem] leading-none text-white/[0.03] select-none">Book</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 lg:gap-16 items-center">
        <div className="text-white">
          <span className="eyebrow !text-gold">Reserve Your Visit</span>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight mt-4 leading-[1.05]">
            The Only Thing<br />Left Is Your<br /><em className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f3e3bd] to-gold">First Smile.</em>
          </h2>
          <p className="mt-6 text-white/75 leading-relaxed max-w-md">Free parking, valet on weekends, and a care coordinator who confirms every booking personally within one working hour.</p>

          <div className="mt-8 space-y-4">
            <a href={CLINIC.phoneHref} className="flex items-center gap-4 group">
              <span className="w-13 h-13 sm:w-14 sm:h-14 p-4 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-dark transition-all duration-300"><Phone size={22} /></span>
              <span><span className="block text-[10px] uppercase tracking-[0.22em] text-white/50 font-bold">Call the clinic</span><span className="block font-display text-lg sm:text-xl font-semibold mt-0.5 group-hover:text-gold transition-colors">{CLINIC.phone}</span></span>
            </a>
            <a href={CLINIC.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="w-13 h-13 sm:w-14 sm:h-14 p-4 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center text-gold group-hover:bg-[#25D366] group-hover:text-[#083b24] transition-all duration-300"><MessageCircle size={22} /></span>
              <span><span className="block text-[10px] uppercase tracking-[0.22em] text-white/50 font-bold">WhatsApp us</span><span className="block font-display text-lg sm:text-xl font-semibold mt-0.5 group-hover:text-gold transition-colors">{CLINIC.whatsapp}</span></span>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-13 h-13 sm:w-14 sm:h-14 p-4 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center text-gold"><Clock size={22} /></span>
              <span><span className="block text-[10px] uppercase tracking-[0.22em] text-white/50 font-bold">Working hours</span><span className="block text-sm text-white/85 mt-1 leading-snug">Mon–Sat 9:00–20:00 · Sun 10:00–18:00<br />24/7 emergency line for registered patients</span></span>
            </div>
          </div>

          <p className="mt-8 flex items-center gap-2 text-[11px] text-white/45 font-medium"><ShieldCheck size={13} className="text-emerald-400" /> Your details stay private — PDPL & DHA-compliant data handling. No spam, ever.</p>
        </div>

        {/* Form card */}
        <div className="relative bg-cream rounded-[2rem] p-6 sm:p-8 shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
          <div className="absolute -top-4 left-6 bg-gold text-[#241a08] text-[10px] font-extrabold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full shadow-lg">Confirmation within 1 hour</div>
          <h3 className="font-display text-2xl font-semibold text-primary-deep">Book an Appointment</h3>
          <p className="text-xs text-ink/55 mt-1 mb-5">Fields marked are required. We confirm every request personally by phone.</p>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
