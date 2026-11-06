import { useEffect, useRef, useState } from 'react';
import { CLINIC } from '../lib/data';

function useCountUp(target: number, active: boolean, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * p);
      setValue(parseFloat((target * (p === 1 ? 1 : eased)).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, decimals]);
  return value;
}

function Stat({ value, suffix, label, decimals = 0, format = false, active }: { value: number; suffix: string; label: string; decimals?: number; format?: boolean; active: boolean }) {
  const v = useCountUp(value, active, 1800, decimals);
  const display = decimals ? v.toFixed(decimals) : format ? Math.round(v).toLocaleString() : Math.round(v).toString();
  return (
    <div className="text-center px-4">
      <p className="font-display text-4xl sm:text-5xl font-medium text-white tracking-tight">
        {display}<span className="text-gold">{suffix}</span>
      </p>
      <p className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold max-w-[180px] mx-auto leading-relaxed">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); obs.disconnect(); }
    }, { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-primary-dark border-y border-white/5 py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-8 divide-x divide-white/8">
        {CLINIC.stats.map((s) => (
          <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} decimals={s.decimals ?? 0} format={s.format ?? false} active={active} />
        ))}
      </div>
    </div>
  );
}
