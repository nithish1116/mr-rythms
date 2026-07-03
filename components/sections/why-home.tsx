import { Check, X } from "lucide-react";

const ROWS = [
  { label: "Comfort of your own space", home: true, studio: false },
  { label: "One-on-one, undivided attention", home: true, studio: false },
  { label: "Flexible scheduling around your life", home: true, studio: false },
  { label: "No travel time or commute", home: true, studio: false },
  { label: "Lessons recorded for later practice", home: true, studio: false },
];

const WhyHome = () => {
  return (
    <section className="bg-white py-24">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-brass-dark">
            THE DIFFERENCE
          </p>
          <h2 className="mt-3 text-4xl text-ink text-balance">
            Why home tuition beats the studio
          </h2>
          <p className="mt-4 max-w-md text-ink/55 leading-relaxed">
            Traditional studios add commute time and rigid schedules. Learning
            from home keeps the focus on you — your pace, your space, your
            growth.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink/5">
          <div className="grid grid-cols-3 bg-ink px-6 py-4 text-sm font-semibold text-ivory">
            <span>What you get</span>
            <span className="text-center text-brass">Home Tuition</span>
            <span className="text-center text-ivory/40">Studio Classes</span>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${
                i % 2 === 0 ? "bg-ivory" : "bg-white"
              }`}
            >
              <span className="text-ink/70">{r.label}</span>
              <span className="flex justify-center">
                <Check className="h-4 w-4 text-brass-dark" />
              </span>
              <span className="flex justify-center">
                <X className="h-4 w-4 text-ink/25" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyHome;
