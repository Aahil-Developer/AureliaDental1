import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';
import { CLINIC } from '../lib/data';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Find the Clinic</span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-deep tracking-tight mt-4 leading-[1.08]">
              Visit Us at<br /><em className="italic text-primary">Marina Plaza.</em>
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/search/Dubai+Marina+Plaza+Dubai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-primary/25 text-primary-deep text-sm font-bold hover:bg-primary-deep hover:text-white transition-all duration-300 self-start lg:self-auto"
          >
            <Navigation size={16} /> Get Directions
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-primary/15 shadow-[0_18px_50px_rgba(8,61,68,0.15)] min-h-[320px] sm:min-h-[420px]">
            <iframe
              title="Aurelia Dental Clinic location map — Dubai Marina"
              src={CLINIC.mapEmbed}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-xl border border-primary/10 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary-deep flex items-center justify-center text-gold shrink-0"><MapPin size={19} /></span>
              <span className="text-[12px] leading-snug"><strong className="text-primary-deep">{CLINIC.name}</strong><br />{CLINIC.address}<br />{CLINIC.city}</span>
            </div>
          </div>

          {/* Details card */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-primary/10 shadow-[0_14px_40px_rgba(8,61,68,0.1)] p-6 sm:p-8 flex flex-col">
            <h3 className="font-display text-2xl font-semibold text-primary-deep">Clinic Details</h3>

            <ul className="mt-6 space-y-5 flex-1">
              <li className="flex items-start gap-3.5">
                <span className="w-11 h-11 rounded-xl bg-mist flex items-center justify-center text-primary shrink-0"><MapPin size={19} /></span>
                <span className="text-[13px] leading-relaxed"><span className="block text-[9px] uppercase tracking-[0.22em] text-ink/45 font-extrabold mb-0.5">Address</span><strong className="text-ink">{CLINIC.address}</strong><br />{CLINIC.city}<br /><span className="text-ink/55 text-[11px]">Free parking · Valet weekends · Metro: DMCC (Red Line)</span></span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-11 h-11 rounded-xl bg-mist flex items-center justify-center text-primary shrink-0"><Phone size={19} /></span>
                <span className="text-[13px]"><span className="block text-[9px] uppercase tracking-[0.22em] text-ink/45 font-extrabold mb-0.5">Phone</span><a href={CLINIC.phoneHref} className="font-bold text-primary-deep hover:text-primary transition-colors">{CLINIC.phone}</a><br /><span className="text-ink/55 text-[11px]">24/7 emergency line for registered patients</span></span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-11 h-11 rounded-xl bg-[#e6f7ee] flex items-center justify-center text-[#12a150] shrink-0"><MessageCircle size={19} /></span>
                <span className="text-[13px]"><span className="block text-[9px] uppercase tracking-[0.22em] text-ink/45 font-extrabold mb-0.5">WhatsApp</span><a href={CLINIC.whatsappHref} target="_blank" rel="noreferrer" className="font-bold text-primary-deep hover:text-primary transition-colors">{CLINIC.whatsapp}</a><br /><span className="text-ink/55 text-[11px]">Typical reply within minutes</span></span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-11 h-11 rounded-xl bg-mist flex items-center justify-center text-primary shrink-0"><Mail size={19} /></span>
                <span className="text-[13px]"><span className="block text-[9px] uppercase tracking-[0.22em] text-ink/45 font-extrabold mb-0.5">Email</span><a href={`mailto:${CLINIC.email}`} className="font-bold text-primary-deep hover:text-primary transition-colors">{CLINIC.email}</a></span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-11 h-11 rounded-xl bg-mist flex items-center justify-center text-primary shrink-0"><Clock size={19} /></span>
                <span className="text-[13px] flex-1"><span className="block text-[9px] uppercase tracking-[0.22em] text-ink/45 font-extrabold mb-1.5">Opening Hours</span>
                  {CLINIC.hours.map((h) => (
                    <span key={h.day} className="flex items-baseline justify-between gap-4 border-b border-primary/8 py-1.5"><span className="text-ink/75">{h.day}</span><span className="font-semibold text-primary-deep text-[12px] whitespace-nowrap">{h.time}</span></span>
                  ))}
                </span>
              </li>
            </ul>

            <a href={CLINIC.whatsappHref} target="_blank" rel="noreferrer" className="mt-6 h-12 rounded-full bg-primary-deep text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors"><MessageCircle size={17} /> Message Us on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
