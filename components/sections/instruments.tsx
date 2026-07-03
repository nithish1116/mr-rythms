import { Guitar, Piano, Music2, Music3, Music4, Mic2, Drum } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTRUMENTS = [
  { name: "drums", icon: Drum, tag: null },
  { name: "Guitar", icon: Guitar, tag: null },
  { name: "Piano", icon: Piano, tag:null },
  { name: "Flute", icon: Music3, tag: null },
  { name: "Saxophone", icon: Music4, tag: null },
  { name: "Vocals", icon: Mic2, tag: null },
];

const Instruments = () => {
  return (
    <section id="instruments" className="bg-ivory py-24">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-brass-dark">
            OUR OFFERINGS
          </p>

          <h2 className="mt-3 text-4xl font-bold text-ink">
            Explore Instruments
          </h2>

          <p className="mt-3 text-ink/60">
            Choose an instrument to start your musical journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {INSTRUMENTS.map((inst) => {
            const Icon = inst.icon;
            const isPopular = inst.tag === "Popular";

            return (
              <div
                key={inst.name}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ease-out cursor-pointer
                hover:-translate-y-3
                hover:scale-105
                hover:border-brass
                hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)]
                ${
                  isPopular
                    ? "border-brass bg-ink"
                    : "border-ink/10 bg-white"
                }`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-yellow-100/20 to-transparent" />
                </div>

                {/* Popular Tag */}
                {inst.tag && (
                  <span className="absolute right-3 top-3 rounded-full bg-brass px-2.5 py-1 text-[10px] font-semibold text-ink z-10">
                    {inst.tag}
                  </span>
                )}

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 py-10">
                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300
                    ${
                      isPopular
                        ? "bg-brass/20"
                        : "bg-brass/10 group-hover:bg-brass group-hover:scale-110"
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 transition-all duration-300
                      ${
                        isPopular
                          ? "text-brass"
                          : "text-brass-dark group-hover:text-white"
                      }`}
                    />
                  </div>

                  {/* Name */}
                  <p
                    className={`font-display text-sm font-semibold transition-colors duration-300
                    ${
                      isPopular
                        ? "text-ivory"
                        : "text-ink group-hover:text-brass-dark"
                    }`}
                  >
                    {inst.name}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brass transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Button */}
        {/* <div className="mt-14 text-center">
          <Button
            variant="dark"
            size="lg"
            className="transition-transform duration-300 hover:scale-105"
          >
            View All Instruments
          </Button>
        </div> */}
      </div>
    </section>
  );
}
export default Instruments;