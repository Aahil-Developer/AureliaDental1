import { useEffect, useState } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import Logo from './Logo';
import { CLINIC } from '../lib/data';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About the Doctor', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const link = NAV_LINKS.find((l) => l.href === `#${e.target.id}`);
            if (link) setActive(link.label);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top strip */}
      <div className={`hidden md:block bg-primary-deep text-white/90 text-[11px] transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between tracking-wide">
          <span className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Open today · 9:00 AM – 8:00 PM</span>
            <span className="text-white/40">|</span>
            <span>{CLINIC.address}, {CLINIC.city.split(',')[0]}</span>
          </span>
          <span className="flex items-center gap-4">
            <a href={CLINIC.phoneHref} className="flex items-center gap-1.5 hover:text-white transition-colors"><Phone size={11} /> {CLINIC.phone}</a>
            <span className="text-gold">★ 4.9 · 2,412 Google Reviews</span>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className={`transition-all duration-500 ${scrolled ? 'bg-white/92 backdrop-blur-xl shadow-[0_8px_30px_rgba(8,61,68,0.12)]' : 'bg-white/70 backdrop-blur-md'} border-b border-primary/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[72px]">
            <Logo />
            <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`nav-link text-[13px] font-semibold tracking-wide ${active === l.label ? 'active text-primary-deep' : 'text-ink/70 hover:text-primary-deep'}`}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onBook}
                className="hidden sm:inline-flex items-center gap-2 bg-primary-deep text-white text-[13px] font-semibold pl-4 pr-5 h-11 rounded-full hover:bg-primary transition-all duration-300 shadow-[0_10px_25px_rgba(11,79,87,0.35)] hover:shadow-[0_14px_32px_rgba(14,124,134,0.45)] hover:-translate-y-0.5 cursor-pointer"
              >
                <CalendarCheck size={16} strokeWidth={2.2} />
                Book an Appointment
              </button>
              <button
                className="lg:hidden w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-primary-deep bg-white"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'max-h-[560px] border-t border-primary/10' : 'max-h-0'}`}>
          <div className="bg-white/97 backdrop-blur-xl px-5 py-5">
            <nav className="grid grid-cols-2 gap-2" aria-label="Mobile">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl bg-mist text-primary-deep text-sm font-semibold hover:bg-mist-2 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => { setOpen(false); onBook(); }}
              className="mt-3 w-full h-12 rounded-xl bg-primary-deep text-white font-semibold flex items-center justify-center gap-2"
            >
              <CalendarCheck size={18} /> Book an Appointment
            </button>
            <a href={CLINIC.phoneHref} className="mt-2 w-full h-11 rounded-xl border border-primary/25 text-primary-deep font-semibold flex items-center justify-center gap-2">
              <Phone size={17} /> {CLINIC.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
