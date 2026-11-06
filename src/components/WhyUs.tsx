import { ScanLine, ShieldCheck, ClipboardList, Armchair, Users, ReceiptText, Stethoscope } from 'lucide-react';

const POINTS = [
  { icon: Stethoscope, title: 'Experienced Specialist', text: 'BDS, MDS from King’s College London with 15+ years and 3,100+ implants placed — precision you can measure.', span: 'sm:col-span-2 lg:col-span-2 bg-primary-deep text-white' },
  { icon: ScanLine, title: 'Advanced Technology', text: 'CBCT 3D imaging, intra-oral scanners, microscope-assisted RCT and same-week CAD/CAM crowns.' },
  { icon: ShieldCheck, title: 'Class-B Sterilisation', text: 'EN 13060-compliant sterilisation suite with full instrument traceability and weekly audit cycles.' },
  { icon: ClipboardList, title: 'Personalised Treatment Plans', text: 'Digital smile previews, written options and honest “wait vs treat now” guidance — never upsold.' },
  { icon: Armchair, title: 'Comfortable Environment', text: 'Weighted blankets, noise-cancelling headphones, aromatherapy and anxiety-free sedation options.' },
  { icon: Users, title: 'Warm, Expert Team', text: 'Multilingual care coordinators (English, Arabic, Hindi, Russian) and a guest relations lounge.' },
  { icon: ReceiptText, title: 'Transparent Pricing', text: 'Fixed quotes in writing, itemised invoices, insurance pre-approval and 0% instalments.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 bg-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-primary/[0.05] blur-3xl -z-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow justify-center">Why Patients Choose Aurelia</span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-deep tracking-tight mt-4 leading-[1.08]">
            The Standard Private<br /><em className="italic text-primary">Dentistry Should Meet.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {POINTS.map((p) => {
            const Icon = p.icon;
            const feature = p.span !== undefined;
            return (
              <div
                key={p.title}
                className={`group rounded-3xl p-6 border transition-all duration-500 hover:-translate-y-1.5 flex flex-col ${
                  feature
                    ? 'border-transparent shadow-[0_26px_60px_rgba(11,79,87,0.35)] ' + p.span
                    : 'bg-white border-primary/10 hover:shadow-[0_22px_50px_rgba(8,61,68,0.16)] shadow-[0_4px_18px_rgba(8,61,68,0.05)]'
                }`}
              >
                <span className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${feature ? 'bg-gold/20 text-gold' : 'bg-mist text-primary-deep group-hover:bg-primary-deep group-hover:text-white'}`}>
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className={`font-display text-lg font-semibold mt-4 ${feature ? 'text-white' : 'text-primary-deep'}`}>{p.title}</h3>
                <p className={`text-[12.5px] leading-relaxed mt-1.5 ${feature ? 'text-white/78' : 'text-ink/65'}`}>{p.text}</p>
                {feature && (
                  <div className="mt-5 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gold border-t border-white/15 pt-4">
                    <span>15+ Years</span><span className="text-white/30">•</span><span>3,100+ Implants</span><span className="text-white/30">•</span><span>98% Satisfaction</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
