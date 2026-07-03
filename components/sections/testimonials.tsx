import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/dummydata";



const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl text-ink">What Students Say</h2>
          <p className="mt-3 text-ink/55">
            Real stories from students learning music from home
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-ink/5 bg-ivory p-7"
            >
              <Quote className="h-6 w-6 text-brass" />
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                {t.quote}
              </p>
              <div className="mt-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brass text-brass" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-brass/20" />
                <p className="text-sm font-semibold text-ink">— {t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
