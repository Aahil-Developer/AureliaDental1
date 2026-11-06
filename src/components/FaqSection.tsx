import { useState } from 'react';
import { Plus, MessageCircle } from 'lucide-react';
import { FAQS, CLINIC } from '../lib/data';

export default function FaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 self-start">
          <span className="eyebrow">Good to Know</span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-deep tracking-tight mt-4 leading-[1.08]">
            Every Question,<br /><em className="italic text-primary">Answered Honestly.</em>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-md">Still curious about something? Our care team replies personally — usually within minutes on WhatsApp.</p>
          <a href={CLINIC.whatsappHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-[#083b24] font-bold text-sm hover:brightness-105 transition">
            <MessageCircle size={18} /> Ask Us Anything
          </a>
          <div className="mt-8 hidden lg:block rounded-3xl overflow-hidden border border-primary/10 shadow-lg">
            <img src="/images/smile.jpg" alt="Relaxing before treatment at Aurelia" className="w-full h-56 object-cover object-center" loading="lazy" />
          </div>
        </div>

        <div className="divide-y divide-primary/10 border-y border-primary/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center gap-4 text-left py-5 sm:py-6 group cursor-pointer"
                >
                  <span className="font-display text-sm text-gold font-semibold w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`flex-1 font-semibold text-[15px] sm:text-base transition-colors ${isOpen ? 'text-primary-deep' : 'text-ink/85 group-hover:text-primary-deep'}`}>{item.q}</span>
                  <span className={`w-9 h-9 shrink-0 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary-deep border-primary-deep text-white rotate-45' : 'border-primary/25 text-primary-deep group-hover:border-primary'}`}>
                    <Plus size={17} strokeWidth={2.2} />
                  </span>
                </button>
                <div id={`faq-panel-${i}`} role="region" className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-12 pr-4 text-[13.5px] leading-relaxed text-ink/70">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
