import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, CalendarCheck, Sparkles, BadgeCheck } from 'lucide-react';
import { CLINIC, CERTS } from '../lib/data';

export default function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-primary-dark">
      {/* Background image + cinematic gradients */}
      <img
        src={`${import.meta.env.BASE_URL}images/hero.jpg`}
        alt="Aurelia Dental Clinic — bright, modern reception and treatment lounge"
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041e23]/95 via-[#062e35]/78 to-[#062e35]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#041e23]/90 via-transparent to-[#041e23]/45" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 pb-24 sm:pt-36 lg:pt-40">
        <div className="max-w-2xl">
          {/* Availability pill */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full pl-2 pr-4 py-1.5 mb-6"
          >
            <span className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
              <ShieldCheck size={12} className="text-emerald-950" strokeWidth={3} />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-white/90 tracking-wide">DHA-Licensed · Same-day emergency appointments</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.6rem] leading-[1.04] sm:text-6xl xl:text-[4.3rem] font-medium text-white tracking-tight"
          >
            Your Smile<br />
            Deserves <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f3e3bd] via-gold to-[#8f6a2f]">Expert Care.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base sm:text-lg text-white/82 leading-relaxed max-w-xl font-light"
          >
            Aurelia blends artistry with advanced technology — from single-visit root canals to complete smile makeovers — delivered by <span className="text-white font-medium">Dr. Rohan Mehta</span> and a team that treats every patient like family.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={onBook}
              className="group h-14 pl-6 pr-7 rounded-full bg-gold text-[#241a08] font-bold text-sm sm:text-[15px] tracking-wide flex items-center gap-2.5 shadow-[0_18px_40px_rgba(200,163,95,0.4)] hover:shadow-[0_22px_50px_rgba(200,163,95,0.55)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <CalendarCheck size={19} strokeWidth={2.3} />
              Book an Appointment
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="#services"
              className="h-14 px-7 rounded-full border border-white/30 text-white font-semibold text-sm sm:text-[15px] flex items-center gap-2.5 backdrop-blur-sm hover:bg-white hover:text-primary-deep hover:border-white transition-all duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {['AH', 'JW', 'PN', 'OF'].map((ini, i) => (
                  <span key={i} className="w-10 h-10 rounded-full border-2 border-[#062e35] text-[10px] font-bold text-white flex items-center justify-center" style={{ background: ['#0e7c86', '#b45309', '#4f46e5', '#be123d'][i] }}>
                    {ini}
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="#c8a35f" className="text-gold" />)}
                </div>
                <p className="text-[11px] text-white/75 mt-0.5 font-medium"><strong className="text-white">4.9/5</strong> · {CLINIC.reviewCount.toLocaleString()} Google reviews</p>
              </div>
            </div>
            <span className="hidden sm:block w-px h-9 bg-white/15" />
            <div className="leading-tight">
              <p className="font-display text-2xl font-semibold text-white">15<span className="text-gold">+</span> <span className="text-sm font-sans font-medium text-white/70">years</span></p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/55 font-semibold mt-0.5">12,400+ smiles restored</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating experience badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex absolute right-[7%] bottom-[21%] animate-float-slow"
        aria-hidden="true"
      >
        <div className="relative w-40 h-40 rounded-full border border-white/20 bg-white/8 backdrop-blur-md flex flex-col items-center justify-center text-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_22s_linear_infinite]">
            <defs><path id="circlePath" d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" /></defs>
            <text className="fill-white/80" style={{ fontSize: '8.2px', letterSpacing: '2.6px', fontWeight: 700 }}>
              <textPath href="#circlePath">PRECISION · ARTISTRY · COMFORT · EST. 2011 · </textPath>
            </text>
          </svg>
          <BadgeCheck size={26} className="text-gold" />
          <p className="font-display text-3xl font-semibold text-white leading-none mt-1">15<span className="text-gold">+</span></p>
          <p className="text-[8px] uppercase tracking-[0.22em] text-white/65 font-bold mt-1">Years<br />Experience</p>
        </div>
      </motion.div>

      {/* Certifications marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/12 bg-[#041e23]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee whitespace-nowrap flex w-max">
            {[...CERTS, ...CERTS].map((c, i) => (
              <span key={i} className="mx-6 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                <Sparkles size={11} className="text-gold" /> {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
