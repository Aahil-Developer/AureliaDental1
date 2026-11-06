import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck, Info } from 'lucide-react';
import { REVIEWS, CLINIC } from '../lib/data';

export default function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const cardStep = () => {
    const track = trackRef.current;
    if (!track) return 320;
    const card = track.querySelector('figure') as HTMLElement | null;
    return card ? card.getBoundingClientRect().width + 16 : 320;
  };

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  };

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const max = track.scrollWidth - track.clientWidth - 8;
      if (track.scrollLeft >= max) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: cardStep(), behavior: 'smooth' });
      }
    }, 4500);
    return () => window.clearInterval(t);
  }, [paused]);

  return (
    <section id="reviews" className="relative py-20 sm:py-28 bg-mist overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <span aria-hidden="true" className="absolute right-[-1rem] top-10 font-display italic text-[10rem] leading-none text-primary/[0.05] select-none pointer-events-none">Smiles</span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Patient Stories</span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-deep tracking-tight mt-4 leading-[1.08]">
              Trusted by the<br /><em className="italic text-primary">Marina’s Smiles.</em>
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 bg-white rounded-2xl border border-primary/10 px-5 py-3 shadow-sm">
              <div>
                <p className="font-display text-3xl font-semibold text-primary-deep leading-none">4.9<span className="text-base text-ink/50">/5</span></p>
                <div className="flex gap-0.5 mt-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="#c8a35f" className="text-gold" />)}</div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-ink/55 leading-relaxed border-l border-primary/10 pl-4">
                {CLINIC.reviewCount.toLocaleString()}<br />Google Reviews
              </div>
            </div>
            <div className="hidden sm:flex gap-2">
              <button onClick={() => scrollBy(-1)} aria-label="Previous reviews" className="w-12 h-12 rounded-full border border-primary/20 bg-white text-primary-deep hover:bg-primary-deep hover:text-white transition-colors flex items-center justify-center"><ChevronLeft size={18} /></button>
              <button onClick={() => scrollBy(1)} aria-label="Next reviews" className="w-12 h-12 rounded-full border border-primary/20 bg-white text-primary-deep hover:bg-primary-deep hover:text-white transition-colors flex items-center justify-center"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Patient reviews carousel"
        >
          {REVIEWS.map((r) => (
            <figure key={r.name} className="snap-start shrink-0 w-[85%] sm:w-[47%] lg:w-[31.6%] bg-white rounded-3xl border border-primary/10 p-6 flex flex-col shadow-[0_6px_26px_rgba(8,61,68,0.07)]">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={15} fill="#c8a35f" className="text-gold" />)}</div>
                <Quote size={22} className="text-primary/20" fill="currentColor" strokeWidth={0} />
              </div>
              <blockquote className="mt-4 text-[13px] leading-relaxed text-ink/80 flex-1">“{r.text}”</blockquote>
              <div className="mt-5 pt-4 border-t border-primary/10 flex items-center gap-3">
                <span className="w-12 h-12 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ background: r.color }}>{r.initials}</span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 text-[13px] font-bold text-primary-deep">{r.name} <BadgeCheck size={13} className="text-primary" /></span>
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-ink/50 font-semibold mt-0.5">{r.service} · {r.role}</span>
                  <span className="block text-[10px] text-ink/40 mt-0.5">{r.date}</span>
                </span>
              </div>
            </figure>
          ))}
        </div>

        <p className="mt-5 flex items-center justify-center gap-1.5 text-[10.5px] text-ink/45 font-medium text-center">
          <Info size={11} className="shrink-0" /> Illustrative patient feedback shown for demonstration. Verified Google rating: 4.9★ from {CLINIC.reviewCount.toLocaleString()} patients.
        </p>
      </div>
    </section>
  );
}
