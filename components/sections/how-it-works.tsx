import { ArrowRight } from "lucide-react";
import { STEPS } from "../data/dummydata";




const HowItWorks = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl text-ink">How Home Music Tuition Works</h2>
          <p className="mt-3 text-ink/55">
            Simple steps to start learning music from home
          </p>
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl border border-ink/5 bg-ivory p-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-brass">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-display font-semibold text-ink">{s.title}</p>
                <p className="mt-2 text-sm text-ink/55 leading-relaxed">{s.desc}</p>

                {i < STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-6 top-5 h-5 w-5 text-brass/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;