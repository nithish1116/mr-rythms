import {
  Home,
  Users,
  CalendarClock,
  Sparkles,
  LineChart,
  GraduationCap,
} from "lucide-react";

const FEATURES = [
  {
    icon: Home,
    title: "Learn From Home",
    desc: "Comfort of your home, better learning",
  },
  {
    icon: Users,
    title: "Live 1-on-1 Classes",
    desc: "Personal attention in every class",
  },
  {
    icon: CalendarClock,
    title: "Flexible Schedule",
    desc: "Choose time slots that suit you",
  },
  {
    icon: Sparkles,
    title: "All Age Groups",
    desc: "Kids, teens & adults all welcome",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    desc: "Regular feedback & performance reports",
  },
  {
    icon: GraduationCap,
    title: "Expert Tutors",
    desc: "Learn from experienced & passionate musicians",
  },
];

const FeatureCard = ({ icon: Icon, title, desc }: (typeof FEATURES)[number]) => {
  return (
    <div className="mx-3 flex w-72 shrink-0 items-start gap-4 rounded-2xl border border-ink/5 bg-white p-6 shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brass/15">
        <Icon className="h-5 w-5 text-brass-dark" />
      </div>
      <div>
        <p className="font-display font-semibold text-ink">{title}</p>
        <p className="mt-1 text-sm text-ink/55 leading-snug">{desc}</p>
      </div>
    </div>
  );
}

export function MarqueeFeatures() {
  const loop = [...FEATURES, ...FEATURES];

  return (
    <section className="relative -mt-12 z-10 overflow-hidden py-4">
      <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default MarqueeFeatures;