import { Guitar, Piano, Mic2, Music2, Music3, Music4 } from "lucide-react";

const ITEMS = [
  { icon: Guitar, tall: true },
  { icon: Piano, tall: false },
  { icon: Mic2, tall: false },
  { icon: Music2, tall: true },
  { icon: Music3, tall: false },
  { icon: Music4, tall: false },
];
const Gallery = () => {
  return (
    <section id="gallery" className="bg-ivory py-24">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-brass-dark">
            MOMENTS
          </p>
          <h2 className="mt-3 text-4xl text-ink">From the Studio</h2>
          <p className="mt-3 text-ink/55">
            Glimpses of lessons, recitals, and student milestones
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-walnut via-ink to-ink ${
                  item.tall ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Icon className="h-10 w-10 text-brass/60" strokeWidth={1.2} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Gallery;