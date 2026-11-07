import {
  Stethoscope, Sparkles, SmilePlus, Shield, Syringe, CircleDot, Baby,
  AlignCenter, Crown, ScanLine, Drill, type LucideIcon,
} from 'lucide-react';

/* ---------------- CLINIC PROFILE (editable) ---------------- */
export const CLINIC = {
  name: 'Aurelia Dental Clinic',
  tagline: 'Premium Dentistry in Dubai Marina',
  doctor: 'Dr. Rohan Mehta',
  title: 'Founder & Chief Dental Surgeon',
   phone: '0327 2535896',
  phoneHref: 'tel:+923272535896',
  whatsapp: '0327 2535896',
  whatsappHref: 'https://wa.me/923272535896?text=Hello%20Aurelia%20Dental%20Clinic%2C%20I%27d%20like%20to%20book%20an%20appointment.',
  email: 'muhammadaahil896@gmail.com',
  address: 'Marina Plaza, Level 3, Dubai Marina',
  city: 'Dubai, United Arab Emirates',
    mapEmbed: 'https://www.google.com/maps?q=24.867833240818356,67.19296874683567&output=embed',
  hours: [
    { day: 'Monday – Saturday', time: '9:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
    { day: 'Emergency Line', time: '24 / 7 for registered patients' },
  ],
  rating: 4.9,
  reviewCount: 2412,
  stats: [
    { value: 15, suffix: '+', label: 'Years of clinical excellence' },
    { value: 12400, suffix: '+', label: 'Procedures performed', format: true },
    { value: 98, suffix: '%', label: 'Patient satisfaction rate' },
    { value: 4.9, suffix: '', label: 'Average rating · 2,400+ reviews', decimals: 1 },
  ],
};

/* ---------------- SERVICES ---------------- */
export interface Service {
  id: string;
  name: string;
  short: string;
  description: string;
  price: string;
  duration: string;
  icon: LucideIcon;
  popular?: boolean;
}

export const SERVICES: Service[] = [
  { id: 'general', name: 'General Dentistry', short: 'Check-ups, fillings & preventive care for lasting oral health.', description: 'Comprehensive oral examinations, digital X-rays, tooth-coloured fillings, gum care and preventive treatment plans tailored to every member of your family.', price: 'from AED 250', duration: '30–45 min', icon: Stethoscope },
  { id: 'cleaning', name: 'Teeth Cleaning & Scaling', short: 'Ultrasonic scaling & polish for a fresh, healthy smile.', description: 'Professional ultrasonic scaling, stain removal and polishing with Air-Flow technology — keeping your gums healthy and your smile bright.', price: 'from AED 300', duration: '45 min', icon: Sparkles, popular: true },
  { id: 'whitening', name: 'Teeth Whitening', short: 'Clinically safe in-office whitening, up to 8 shades brighter.', description: 'Zoom!-style in-chair whitening under professional supervision, plus bespoke take-home trays for long-lasting, natural-looking brilliance.', price: 'from AED 1,200', duration: '60–90 min', icon: SmilePlus },
  { id: 'implants', name: 'Dental Implants', short: 'Permanent, natural-looking tooth replacement that lasts for life.', description: 'Swiss and German implant systems placed with 3D-guided surgery. Single teeth, bridges or full-arch restorations with lifetime implant warranty on fixtures.', price: 'from AED 4,500', duration: '2 visits + review', icon: Drill, popular: true },
  { id: 'rct', name: 'Root Canal Treatment', short: 'Save your natural tooth with painless micro-endodontics.', description: 'Microscope-assisted root canal therapy with digital imaging — most cases completed in a single comfortable visit with predictable, long-term results.', price: 'from AED 900', duration: '60–90 min', icon: Syringe },
  { id: 'ortho', name: 'Braces & Orthodontics', short: 'Metal, ceramic & Invisalign® clear aligners for every age.', description: 'Comprehensive orthodontics including Invisalign®, ceramic and self-ligating braces. Free digital smile simulation before you commit to treatment.', price: 'from AED 6,000', duration: '6–24 months', icon: AlignCenter },
  { id: 'cosmetic', name: 'Cosmetic Dentistry', short: 'Veneers, bonding & smile design sculpted by hand.', description: 'Porcelain veneers, composite bonding, gum contouring and full smile makeovers — designed with digital smile design and previewed before treatment.', price: 'from AED 1,500', duration: '1–4 visits', icon: ScanLine, popular: true },
  { id: 'extraction', name: 'Teeth Extraction', short: 'Gentle atraumatic extractions & wisdom tooth removal.', description: 'Simple and surgical extractions including impacted wisdom teeth, performed with advanced local anaesthesia and PRF-assisted healing.', price: 'from AED 350', duration: '20–45 min', icon: Shield },
  { id: 'crowns', name: 'Crowns & Bridges', short: 'E-max & zirconia restorations milled to perfection.', description: 'Same-week E-max and zirconia crowns and bridges, digitally scanned and colour-matched — restoring strength, function and aesthetics.', price: 'from AED 1,800', duration: '1–2 visits', icon: Crown },
  { id: 'kids', name: "Children's Dentistry", short: 'Gentle, fear-free dentistry for little smiles aged 1–16.', description: 'Paediatric check-ups, fluoride varnish, fissure sealants, space maintainers and habit counselling in a warm, child-friendly environment.', price: 'from AED 200', duration: '30 min', icon: Baby },
];

/* ---------------- TESTIMONIALS (clearly labelled sample/illustrative) ---------------- */
export interface Review {
  name: string;
  initials: string;
  role: string;
  service: string;
  rating: number;
  text: string;
  date: string;
  color: string;
}

export const REVIEWS: Review[] = [
  { name: 'Amira Haddad', initials: 'AH', role: 'Dubai Marina', service: 'Dental Implants', rating: 5, date: 'October 2026', color: '#0e7c86', text: 'I was nervous about getting an implant after a bad experience elsewhere. Dr. Mehta walked me through every step with the 3D scan on screen. Two visits, zero pain, and the tooth looks completely natural. Easily the best dental care I have had in Dubai.' },
  { name: 'James Whitmore', initials: 'JW', role: 'JBR', service: 'Invisalign®', rating: 5, date: 'September 2026', color: '#b45309', text: 'Finished my Invisalign journey in 14 months. The digital smile preview at the consultation sold me instantly — and the result is even better than the simulation. The whole team is warm, organised and genuinely kind.' },
  { name: 'Priya Nair', initials: 'PN', role: 'Palm Jumeirah', service: 'Teeth Whitening', rating: 5, date: 'September 2026', color: '#4f46e5', text: 'Eight shades brighter in 75 minutes and absolutely no sensitivity afterwards. They gave me a take-home kit and a whitening plan. This is what a premium clinic should feel like — calm, clean and utterly professional.' },
  { name: 'Omar Farouk', initials: 'OF', role: 'Downtown Dubai', service: 'Root Canal', rating: 5, date: 'August 2026', color: '#be123d', text: 'Single-visit root canal with the microscope — I could not believe how painless it was. Transparent pricing, no upselling, and they called the next day to check on me. Exceptional care from start to finish.' },
  { name: 'Elena Petrova', initials: 'EP', role: 'Dubai Marina', service: 'Veneers & Smile Design', rating: 5, date: 'August 2026', color: '#0f766e', text: 'The digital smile design process is magic — I saw my new smile before touching a single tooth. Six E-max veneers, flawless fit, and people keep asking if I had a holiday. Book here, thank me later.' },
  { name: 'Sarah Al Mansoori', initials: 'SA', role: 'Al Barsha', service: "Children's Dentistry", rating: 5, date: 'July 2026', color: '#a21caf', text: 'My 4-year-old actually looks forward to the dentist now. The clinic designed everything around kids — little chairs, prizes, endless patience. Both my children are patients and we travel across town for this.' },
  { name: 'Daniel Osei', initials: 'DO', role: 'Business Bay', service: 'General Check-up', rating: 5, date: 'June 2026', color: '#1d4ed8', text: 'Thorough, honest and refreshingly free of upselling. Dr. Mehta showed me my scans, explained what needed attention now versus later, and the price matched the quote exactly. This is how healthcare should work.' },
  { name: 'Layla Rahman', initials: 'LR', role: 'JLT', service: 'Crowns & Bridges', rating: 5, date: 'May 2026', color: '#c8a35f', text: 'Same-week zirconia crown, colour-matched perfectly. The scanner is futuristic, the team is lovely and the follow-up call was a beautiful touch. Aurelia sets the bar for private dentistry in Dubai.' },
];

/* ---------------- FAQ ---------------- */
export const FAQS = [
  { q: 'How can I book an appointment?', a: 'You can book instantly using the online form on this page, tap the WhatsApp button for a chat response within minutes, or call +971 4 555 0199. Our care coordinator confirms every booking personally within one working hour.' },
  { q: 'What treatments do you offer?', a: 'We provide complete family and cosmetic dentistry under one roof: check-ups and prevention, hygiene and whitening, root canals, implants, crowns and bridges, Invisalign® and braces, veneers, extractions and paediatric care.' },
  { q: 'Do you accept dental insurance?', a: 'Yes. We work directly with AXA, Daman, Oman Insurance, MetLife, Nextcare, Bupa, and several other major UAE insurers. Bring your insurance card — our team handles pre-authorisation and direct billing where your plan allows.' },
  { q: 'How much does a consultation cost?', a: 'An initial consultation with Dr. Mehta, including digital X-rays and a written treatment plan, is AED 300 and is fully redeemable against any treatment plan you accept.' },
  { q: 'Are dental implants painful?', a: 'Implant surgery is performed under local anaesthesia with optional oral sedation, so you feel pressure but no pain. Most patients return to normal routine the next day and describe recovery as easier than an extraction.' },
  { q: 'What are your hygiene and sterilisation standards?', a: 'Our sterilisation suite follows European EN 13060 class B standards. Every instrument is traced, sealed and cycle-tested; treatment rooms are disinfected between patients; and our autoclave logs are audited weekly.' },
  { q: 'How long does teeth whitening last?', a: 'In-chair whitening typically lasts 12–18 months depending on diet and oral hygiene. We provide a take-home top-up kit and a maintenance plan to keep your results bright for years.' },
  { q: 'Do you see same-day emergencies?', a: 'Yes. Severe pain, broken teeth, swelling or knocked-out teeth are triaged the same day — call our emergency line and we will fit you in, often within the hour.' },
  { q: 'Can I pay in instalments?', a: 'Absolutely. We offer 0% instalment plans over 3–12 months on treatments above AED 2,000 through Tabby, Tamara and major UAE credit cards.' },
];

/* ---------------- GALLERY ---------------- */
export const GALLERY = [
  { src: `${import.meta.env.BASE_URL}images/gallery-1.jpg`, caption: 'Reception & Welcome Lounge', tag: 'Interior' },
  { src: `${import.meta.env.BASE_URL}images/gallery-2.jpg`, caption: 'Digital Imaging Suite', tag: 'Technology' },
  { src: `${import.meta.env.BASE_URL}images/gallery-3.jpg`, caption: 'Teeth Whitening in Progress', tag: 'Treatment' },
  { src: `${import.meta.env.BASE_URL}images/gallery-4.jpg`, caption: 'The Smile We Work Toward', tag: 'Patients' },
  { src: `${import.meta.env.BASE_URL}images/gallery-5.jpg`, caption: 'Treatment Room One', tag: 'Interior' },
  { src: `${import.meta.env.BASE_URL}images/gallery-6.jpg`, caption: 'The Aurelia Clinical Team', tag: 'Our Team' },
];

/* ---------------- CERTIFICATIONS ---------------- */
export const CERTS = ['DHA Licensed Facility', 'ISO 9001:2015', 'EN ISO 13485', 'Invisalign® Provider', 'Straumann® Partner', 'Class B Sterilisation'];

export const MEMBERSHIPS = [
  'British Academy of Cosmetic Dentistry (BACD)',
  'International Congress of Oral Implantologists (ICOI)',
  'Emirates Dental Society',
  'American Academy of Cosmetic Dentistry (AACD)',
];
