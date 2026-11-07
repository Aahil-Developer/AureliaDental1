import { useState, type FormEvent } from 'react';
import { CheckCircle2, ShieldCheck, Loader2, ChevronDown, MessageCircle, MessageSquareText } from 'lucide-react';
import { CLINIC, SERVICES } from '../lib/data';

export interface BookingData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const TIMES = ['Morning · 9:00 – 12:00', 'Midday · 12:00 – 2:00', 'Afternoon · 2:00 – 5:00', 'Evening · 5:00 – 8:00'];
const EMPTY: BookingData = { name: '', phone: '', email: '', service: '', date: '', time: '', message: '' };

export default function BookingForm({ onClose, initialService }: { onClose?: () => void; initialService?: string }) {
  const [form, setForm] = useState<BookingData>(() => ({ ...EMPTY, service: initialService ?? '' }));
  const [errors, setErrors] = useState<Partial<Record<keyof BookingData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const set = (k: keyof BookingData) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof BookingData, string>> = {};
    if (form.name.trim().length < 2) e.name = 'Please enter your full name.';
    if (!/^[+()\-\s\d]{7,18}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number (7–15 digits).';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = 'That email address looks invalid.';
    if (!form.service) e.service = 'Please choose a treatment.';
    if (!form.date) e.date = 'Pick a preferred date.';
    if (!form.time) e.time = 'Pick a preferred time.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setBookingRef('AU-' + Math.floor(100000 + Math.random() * 900000));
      setDone(true);
    }, 1400);
  };

  const bookingMessage = [
    `Hello ${CLINIC.name}, I would like to request an appointment.`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : '',
    `Treatment: ${form.service}`,
    `Preferred date: ${form.date}`,
    `Preferred time: ${form.time}`,
    `Reference: ${bookingRef}`,
  ].filter(Boolean).join('\n');
  const whatsappUrl = new URL(CLINIC.whatsappHref);
  whatsappUrl.searchParams.set('text', bookingMessage);
  const smsHref = `sms:${CLINIC.phoneHref.slice(4)}?body=${encodeURIComponent(bookingMessage)}`;

  if (done) {
    return (
      <div className="text-center py-6 px-2 animate-[fadeIn_0.5s_ease]">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
          <CheckCircle2 size={34} className="text-emerald-600" strokeWidth={2} />
        </div>
        <h3 className="font-display text-2xl font-semibold text-primary-deep mt-5">Choose how to send your request</h3>
        <p className="text-sm text-ink/70 mt-2 max-w-sm mx-auto leading-relaxed">
          Your appointment details are ready. Choose WhatsApp or SMS, then tap Send in your messaging app. The clinic will contact you to confirm your visit.
        </p>
        <div className="mt-5 inline-flex flex-col items-center gap-1 bg-mist rounded-2xl px-6 py-4 border border-primary/10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary/70 font-bold">Reference</span>
          <span className="font-mono font-bold text-lg text-primary-deep tracking-widest">{bookingRef}</span>
          <span className="text-xs text-ink/60">{form.service} · {form.date} · {form.time.split(' · ')[0]}</span>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
          <a href={whatsappUrl.toString()} target="_blank" rel="noreferrer" className="h-11 px-6 rounded-full bg-[#25D366] text-[#0b3d2e] text-sm font-bold flex items-center justify-center gap-2 hover:brightness-105 transition">
            <MessageCircle size={17} /> Continue in WhatsApp
          </a>
          <a href={smsHref} className="h-11 px-6 rounded-full border border-primary/25 text-primary-deep text-sm font-semibold flex items-center justify-center gap-2 hover:bg-mist transition-colors">
            <MessageSquareText size={17} /> Continue in SMS
          </a>
          <button onClick={() => { setForm(EMPTY); setDone(false); if (onClose) onClose(); }} className="h-11 px-6 rounded-full border border-primary/25 text-primary-deep text-sm font-semibold hover:bg-mist transition-colors">
            Done
          </button>
        </div>
      </div>
    );
  }

  const inputCls = (k: keyof BookingData) =>
    `w-full h-12 rounded-xl border bg-white px-4 text-sm text-ink placeholder-ink/40 transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/40 ${errors[k] ? 'border-rose-400 ring-1 ring-rose-300' : 'border-primary/15 hover:border-primary/35'}`;

  return (
    <form onSubmit={submit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="sm:col-span-2 relative">
        <label htmlFor="bf-name" className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80 mb-1.5 block">Full Name</label>
        <input id="bf-name" className={inputCls('name')} placeholder="e.g. Layla Al Mansoori" value={form.name} onChange={set('name')} autoComplete="name" />
        {errors.name && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="bf-phone" className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80 mb-1.5 block">Phone / WhatsApp</label>
        <input id="bf-phone" type="tel" className={inputCls('phone')} placeholder="+971 5x xxx xxxx" value={form.phone} onChange={set('phone')} autoComplete="tel" />
        {errors.phone && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="bf-email" className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80 mb-1.5 block">Email <span className="text-ink/40 normal-case font-semibold">(optional)</span></label>
        <input id="bf-email" type="email" className={inputCls('email')} placeholder="you@example.com" value={form.email} onChange={set('email')} autoComplete="email" />
        {errors.email && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.email}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="bf-service" className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80 mb-1.5 block">Treatment Needed</label>
        <div className="relative">
          <select id="bf-service" className={`${inputCls('service')} appearance-none pr-10 ${form.service ? '' : 'text-ink/40'}`} value={form.service} onChange={set('service')}>
            <option value="">Select a treatment…</option>
            {SERVICES.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
            <option value="Not sure — need advice">Not sure — I need advice</option>
          </select>
          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/45 pointer-events-none" />
        </div>
        {errors.service && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="bf-date" className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80 mb-1.5 block">Preferred Date</label>
        <input id="bf-date" type="date" min={today} className={inputCls('date')} value={form.date} onChange={set('date')} />
        {errors.date && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.date}</p>}
      </div>

      <div>
        <label htmlFor="bf-time" className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80 mb-1.5 block">Preferred Time</label>
        <div className="relative">
          <select id="bf-time" className={`${inputCls('time')} appearance-none pr-10 ${form.time ? '' : 'text-ink/40'}`} value={form.time} onChange={set('time')}>
            <option value="">Select a slot…</option>
            {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/45 pointer-events-none" />
        </div>
        {errors.time && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.time}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="bf-msg" className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80 mb-1.5 block">Additional Message <span className="text-ink/40 normal-case font-semibold">(optional)</span></label>
        <textarea id="bf-msg" rows={2} className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm placeholder-ink/40 hover:border-primary/35 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none" placeholder="Anything we should know? e.g. sensitivity, anxiety, previous work…" value={form.message} onChange={set('message')} />
      </div>

      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
        <button type="submit" disabled={submitting} className="flex-1 h-[52px] rounded-full bg-gradient-to-r from-primary-deep via-primary to-primary-deep bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] text-white font-bold tracking-wide flex items-center justify-center gap-2 shadow-[0_14px_34px_rgba(11,79,87,0.4)] transition-all duration-700 disabled:opacity-70 cursor-pointer">
          {submitting ? <><Loader2 size={18} className="animate-spin" /> Reserving your slot…</> : 'Book My Appointment'}
        </button>
        <p className="flex items-center gap-1.5 text-[11px] text-ink/60 sm:max-w-[140px] leading-snug">
          <ShieldCheck size={14} className="text-primary shrink-0" /> Private & confidential. We never share your details.
        </p>
      </div>
    </form>
  );
}
