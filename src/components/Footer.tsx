import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { CLINIC, SERVICES } from '../lib/data';
import { NAV_LINKS } from './NavBar';

export default function Footer() {
  const socials = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/aureliadentalclinic' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/aureliadentalclinic' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/aurelia-dental-clinic' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@aureliadentalclinic' },
    { icon: null, label: 'TikTok', href: 'https://www.tiktok.com/@aureliadental', text: 'TT' },
  ] as const;

  return (
    <footer className="bg-primary-dark text-white/75">
      {/* CTA strip */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-display text-xl sm:text-2xl text-white text-center sm:text-left">Ready for the smile you keep <em className="italic text-gold">postponing?</em></p>
          <a href="#book" className="h-12 px-7 rounded-full bg-gold text-[#241a08] text-sm font-extrabold tracking-wide hover:brightness-110 transition flex items-center shrink-0">Reserve Your Visit →</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-12 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-3">
          <Logo light />
          <p className="mt-4 text-[13px] leading-relaxed text-white/65">Dubai Marina’s calm, clinical address for implants, cosmetic makeovers and complete family dentistry — led personally by Dr. Rohan Mehta since 2011.</p>
          <div className="mt-6 flex items-center gap-2.5">
            {socials.map(({ icon: Icon, label, href, ...rest }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-11 h-11 rounded-full border border-white/12 flex items-center justify-center text-white/70 hover:text-primary-dark hover:bg-gold hover:border-gold transition-all duration-300">
                {Icon ? <Icon size={17} /> : <span className="text-[10px] font-black tracking-tight">{(rest as { text: string }).text}</span>}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav className="lg:col-span-2" aria-label="Footer navigation">
          <h3 className="text-[10px] uppercase tracking-[0.25em] text-gold font-extrabold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-[13px]">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
            ))}
            <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#book" className="hover:text-white transition-colors">Book Online</a></li>
          </ul>
        </nav>

        {/* Services */}
        <div className="lg:col-span-3">
          <h3 className="text-[10px] uppercase tracking-[0.25em] text-gold font-extrabold">Treatments</h3>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-[13px]">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="hover:text-white transition-colors">{s.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4">
          <h3 className="text-[10px] uppercase tracking-[0.25em] text-gold font-extrabold">Contact & Location</h3>
          <ul className="mt-4 space-y-3.5 text-[13px]">
            <li className="flex items-start gap-3"><MapPin size={16} className="text-gold mt-0.5 shrink-0" />{CLINIC.address}<br />{CLINIC.city}</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-gold shrink-0" /><a href={CLINIC.phoneHref} className="hover:text-white transition-colors">{CLINIC.phone}</a></li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-gold shrink-0" /><a href={`mailto:${CLINIC.email}`} className="hover:text-white transition-colors">{CLINIC.email}</a></li>
          </ul>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-[12px]">
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/45 font-extrabold mb-2">Opening Hours</p>
            {CLINIC.hours.map((h) => (
              <p key={h.day} className="flex justify-between gap-4 py-1"><span className="text-white/60">{h.day}</span><span className="text-white/85 font-medium">{h.time}</span></p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/45">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved. DHA-licensed facility · Practitioner credentials & facility licensing available on request at reception.</p>
          <div className="flex items-center gap-5">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Care</a>
            <a href="#home" className="hover:text-white transition-colors">Insurance & Plans</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
