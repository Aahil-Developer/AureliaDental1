export default function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3 group select-none" aria-label="Aurelia Dental Clinic — Home">
      <svg viewBox="0 0 64 64" className="w-11 h-11 drop-shadow-sm transition-transform duration-500 group-hover:scale-105" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill={light ? '#f7fafb' : '#0b4f57'} />
        <path
          fill={light ? '#0b4f57' : '#f7fafb'}
          d="M32 12c-5.2 0-6.8 2.4-11.4 2.4C14.3 14.4 11 19.6 11 26.4c0 4.6 1.7 7.4 3 12.2 1.2 4.5 1.9 13.4 6.4 13.4 4.2 0 3.4-6.9 5.6-11.4.9-1.9 2.3-3.1 6-3.1s5.1 1.2 6 3.1c2.2 4.5 1.4 11.4 5.6 11.4 4.5 0 5.2-8.9 6.4-13.4 1.3-4.8 3-7.6 3-12.2 0-6.8-3.3-12-9.6-12C38.8 14.4 37.2 12 32 12z"
        />
        <path d="M25.5 30.5c4.3-2.8 8.7-2.8 13 0" stroke="#c8a35f" strokeWidth="2.3" strokeLinecap="round" fill="none" />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className={`font-display text-[1.32rem] font-semibold tracking-tight ${light ? 'text-white' : 'text-primary-deep'}`}>
            Aurelia<span className="text-gold">.</span>
          </span>
          <span className={`text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${light ? 'text-white/70' : 'text-primary/80'}`}>
            Dental Clinic
          </span>
        </span>
      )}
    </a>
  );
}
