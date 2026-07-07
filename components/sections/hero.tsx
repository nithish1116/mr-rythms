import { CheckCircle2 } from "lucide-react";
import { BookTrialButton } from "@/components/booking/book-trial-button";
import { Button } from "@/components/ui/button";
import { heroData } from "../data/dummydata";


const Hero = () => {
  const PrimaryIcon = heroData?.buttons?.primary?.icon;

  return (
    <section
      id={heroData?.sectionId}
      className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroData?.backgroundImage})`,
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-brass/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-walnut/40 blur-[100px]" />

      <div className="container relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-brass">
            {heroData?.badge}
          </p>

          <h1 className="text-balance font-display text-5xl leading-[1.05] text-white sm:text-6xl">
            {heroData?.title?.line1}
            <br />
            {heroData?.title?.line2}{" "}
            <span className="italic text-brass">
              {heroData?.title?.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-md leading-relaxed text-white/80">
            {heroData?.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <BookTrialButton size="lg">
              {heroData?.buttons?.primary?.label}
              <PrimaryIcon className="ml-2 h-4 w-4" />
            </BookTrialButton>

            <Button size="lg" variant="outline">
              {heroData?.buttons?.secondary?.label}
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {heroData?.students?.avatars.map((color, index) => (
                <div
                  key={index}
                  className="h-10 w-10 rounded-full border-2 border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">
                {heroData?.students?.total}
              </span>{" "}
              {heroData?.students?.title}
              <br />
              <span className="text-xs">
                {heroData?.students?.subtitle}
              </span>
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative flex justify-end">
          <div className="w-64 rounded-2xl border border-brass/30 bg-black/50 p-5 backdrop-blur-xl shadow-2xl">
            <p className="mb-3 font-display text-sm font-semibold text-white">
              {heroData?.card?.title}
            </p>

            <ul className="space-y-2">
              {heroData?.card?.highlights?.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;