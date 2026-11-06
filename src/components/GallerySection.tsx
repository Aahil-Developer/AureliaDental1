import { useEffect, useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY } from '../lib/data';

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((v) => (v === null ? v : (v + 1) % GALLERY.length));
      if (e.key === 'ArrowLeft') setLightbox((v) => (v === null ? v : (v - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [lightbox]);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow justify-center"><Camera size={12} className="inline -mt-0.5" /> Inside Aurelia</span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-deep tracking-tight mt-4 leading-[1.08]">
            Step Inside a<br /><em className="italic text-primary">Calmer Kind of Dentistry.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[230px] gap-3 sm:gap-4">
          {GALLERY.map((img, i) => {
            const featured = i === 0;
            return (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-primary ${featured ? 'col-span-2 row-span-2' : i === 3 ? 'col-span-2 lg:col-span-1' : ''}`}
                aria-label={`Enlarge: ${img.caption}`}
              >
                <img src={img.src} alt={img.caption} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/15 to-transparent" />
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/35 backdrop-blur-sm flex items-center justify-center text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"><ZoomIn size={16} /></span>
                <span className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3">
                  <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.24em] text-gold font-extrabold">{img.tag}</span>
                  <span className="block text-[12px] sm:text-sm font-display font-semibold text-white mt-0.5 leading-snug">{img.caption}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-primary-dark/92 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Gallery viewer">
          <button className="absolute inset-0 cursor-default" onClick={() => setLightbox(null)} aria-label="Close gallery" />
          <figure className="relative max-w-5xl w-full mx-4 z-10">
            <img src={GALLERY[lightbox].src} alt={GALLERY[lightbox].caption} className="w-full max-h-[76vh] object-contain rounded-2xl shadow-2xl" />
            <figcaption className="mt-4 flex items-center justify-between text-white">
              <span><span className="text-[9px] uppercase tracking-[0.25em] text-gold font-bold block">{GALLERY[lightbox].tag}</span><span className="font-display text-lg">{GALLERY[lightbox].caption}</span></span>
              <span className="text-xs text-white/50 font-mono">{lightbox + 1} / {GALLERY.length}</span>
            </figcaption>
          </figure>
          <button onClick={() => setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length)} aria-label="Previous image" className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"><ChevronLeft size={22} /></button>
          <button onClick={() => setLightbox((lightbox + 1) % GALLERY.length)} aria-label="Next image" className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"><ChevronRight size={22} /></button>
          <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"><X size={20} /></button>
        </div>
      )}
    </section>
  );
}
