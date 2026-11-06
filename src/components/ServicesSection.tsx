import { useCallback, useEffect, useState } from 'react';
import { ArrowRight, X, Clock, BadgeDollarSign, CheckCircle2, CalendarCheck } from 'lucide-react';
import { SERVICES, type Service } from '../lib/data';

export default function ServicesSection({ onBook }: { onBook: (service?: string) => void }) {
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    if (active) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  const close = useCallback(() => setActive(null), []);

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Do</span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-deep tracking-tight mt-4 leading-[1.08]">
              Complete Care,<br /><em className="italic text-primary">One Beautiful Clinic.</em>
            </h2>
          </div>
          <p className="text-ink/65 max-w-sm text-sm leading-relaxed">Every treatment is delivered in-house by Dr. Mehta and senior clinicians — no referrals, no surprises, transparent pricing from the first consultation.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.id}
                id={s.id}
                className="service-card group bg-white rounded-3xl border border-primary/10 p-5 flex flex-col shadow-[0_4px_20px_rgba(8,61,68,0.06)] hover:shadow-[0_24px_55px_rgba(8,61,68,0.18)] hover:-translate-y-2 transition-all duration-500"
              >
                {s.popular && (
                  <span className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.18em] font-extrabold text-[#241a08] bg-gold rounded-full px-2.5 py-1 shadow-sm">Popular</span>
                )}
                <span className="w-13 h-13 sm:w-14 sm:h-14 p-3.5 rounded-2xl bg-gradient-to-br from-mist to-mist-2 text-primary-deep flex items-center justify-center group-hover:from-primary-deep group-hover:to-primary group-hover:text-white transition-all duration-500">
                  <Icon size={26} strokeWidth={1.7} />
                </span>
                <h3 className="font-display text-[17px] font-semibold text-primary-deep mt-4 leading-snug">{s.name}</h3>
                <p className="text-[12px] text-ink/65 leading-relaxed mt-1.5 flex-1">{s.short}</p>
                <button
                  onClick={() => setActive(s)}
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-primary hover:text-primary-deep transition-colors self-start group/link cursor-pointer"
                  aria-label={`Learn more about ${s.name}`}
                >
                  Learn More
                  <ArrowRight size={13} strokeWidth={2.5} className="transition-transform duration-300 group-hover/link:translate-x-1.5" />
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      {active && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center" role="dialog" aria-modal="true" aria-label={active.name}>
          <button className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm cursor-default" onClick={close} aria-label="Close details" />
          <div className="relative w-full sm:max-w-lg bg-cream rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
            <div className="bg-primary-deep p-6 flex items-start gap-4">
              <span className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-gold shrink-0">
                <active.icon size={32} strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-semibold text-white leading-tight">{active.name}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-[11px] font-semibold text-white/75">
                  <span className="flex items-center gap-1.5"><BadgeDollarSign size={12} className="text-gold" />{active.price}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{active.duration}</span>
                </div>
              </div>
              <button onClick={close} aria-label="Close" className="ml-auto w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0"><X size={17} /></button>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-ink/80">{active.description}</p>
              <ul className="mt-4 space-y-2 text-[13px] text-ink/75">
                {['Written quote before any treatment — no hidden fees', 'Advanced anaesthesia for a genuinely pain-free visit', '0% instalment plans available on plans above AED 2,000'].map((t) => (
                  <li key={t} className="flex items-start gap-2"><CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />{t}</li>
                ))}
              </ul>
              <button
                onClick={() => { close(); onBook(active.name); }}
                className="mt-6 w-full h-13 py-4 rounded-full bg-primary-deep text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary transition-colors"
              >
                <CalendarCheck size={17} /> Book {active.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
