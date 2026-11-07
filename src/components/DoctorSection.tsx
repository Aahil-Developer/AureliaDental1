import { motion } from 'framer-motion';
import { GraduationCap, Award, BadgeCheck, Quote, CalendarCheck, MapPin } from 'lucide-react';
import { MEMBERSHIPS, CLINIC } from '../lib/data';

export default function DoctorSection({ onBook }: { onBook: () => void }) {
  const facts = [
    { label: 'Qualification', value: 'BDS, MDS — Prosthodontics & Implantology' },
    { label: 'Specialisation', value: 'Dental Implants · Smile Design · Full-Mouth Rehabilitation' },
    { label: 'Experience', value: '15+ years · 12,400+ procedures · 3,100 implant fixtures placed' },
    { label: 'Alma Mater', value: 'King’s College London (MDS) · MUHS, Mumbai (BDS)' },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-cream overflow-hidden">
      {/* Watermark */}
      <span aria-hidden="true" className="absolute -left-6 top-8 font-display italic font-light text-[9rem] sm:text-[13rem] leading-none text-primary/[0.05] select-none pointer-events-none">Doctor</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 lg:gap-20 items-center">
        {/* Portrait */}
        <div className="relative mx-auto lg:mx-0 w-full max-w-md">
          <div className="absolute -inset-3 sm:-inset-4 rounded-[2.2rem] border border-gold/40 rotate-[-2deg]" aria-hidden="true" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_35px_80px_rgba(8,61,68,0.35)]">
            <img
              src={`${import.meta.env.BASE_URL}images/doctor.jpg`}
              alt="Dr. Rohan Mehta, Founder and Chief Dental Surgeon at Aurelia Dental Clinic"
              className="w-full aspect-[3/4] object-cover object-top"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent p-5 pt-16">
              <p className="font-display text-xl text-white font-semibold">{CLINIC.doctor}</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold font-bold">{CLINIC.title}</p>
            </div>
          </div>
          {/* Award badge */}
          <div className="absolute -right-2 sm:-right-6 top-6 bg-white rounded-2xl shadow-[0_18px_45px_rgba(8,61,68,0.28)] px-4 py-3 flex items-center gap-3 border border-gold/30">
            <span className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center"><Award size={22} className="text-gold" /></span>
            <span className="leading-tight">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-ink/55 font-bold">Recognition</span>
              <span className="block text-[12px] font-bold text-primary-deep">Best Implantologist<br />UAE 2023 · 2024</span>
            </span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="eyebrow">Meet Your Dentist</span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-deep tracking-tight mt-4 leading-[1.08]">
            Dentistry with the<br />patience of a <em className="italic text-primary">craftsman</em>.
          </h2>

          <p className="mt-6 text-ink/75 leading-relaxed">
            Dr. Rohan Mehta founded Aurelia with one conviction — that world-class dentistry should feel calm, honest and human. Trained at King’s College London, he blends microscopic precision with an artist’s eye for smile aesthetics, and explains every option in plain language before a single instrument is picked up. His philosophy is simple: preserve natural teeth wherever possible, never over-treat, and treat every patient as if they were his own family.
          </p>

          {/* Pull quote */}
          <figure className="mt-6 flex gap-4 bg-primary-deep rounded-2xl p-5 text-white shadow-[0_18px_45px_rgba(11,79,87,0.35)]">
            <Quote size={28} className="text-gold shrink-0 rotate-180" fill="#c8a35f" strokeWidth={1} />
            <blockquote className="font-display italic text-[15px] sm:text-base text-white/90 leading-snug">
              “A great smile is engineered, not luck — but the patient should feel only comfort, never the machinery.”
              <figcaption className="not-italic font-sans text-[11px] uppercase tracking-[0.2em] text-gold font-bold mt-3">Dr. Rohan Mehta</figcaption>
            </blockquote>
          </figure>

          {/* Fact grid */}
          <dl className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {facts.map((f) => (
              <div key={f.label} className="border-l-2 border-gold/50 pl-4">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-primary/70 font-bold flex items-center gap-1.5"><GraduationCap size={12} />{f.label}</dt>
                <dd className="text-[13px] font-semibold text-ink mt-1 leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>

          {/* Memberships */}
          <div className="mt-7 flex flex-wrap gap-2">
            {MEMBERSHIPS.map((m) => (
              <span key={m} className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold text-primary-deep bg-mist border border-primary/15 rounded-full px-3 py-1.5">
                <BadgeCheck size={12} className="text-primary" />{m}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={onBook} className="h-13 sm:h-14 pl-6 pr-7 py-4 rounded-full bg-primary-deep text-white font-bold text-sm sm:text-[15px] flex items-center gap-2 hover:bg-primary transition-colors shadow-[0_16px_36px_rgba(11,79,87,0.4)] cursor-pointer">
              <CalendarCheck size={18} /> Consult Dr. Mehta
            </button>
            <span className="flex items-center gap-1.5 text-xs text-ink/60 font-medium"><MapPin size={13} className="text-primary" /> Marina Plaza, Dubai Marina</span>
          </div>
        </div>
      </div>
    </section>
  );
}
