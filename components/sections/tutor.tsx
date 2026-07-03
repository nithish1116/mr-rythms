import { Button } from "@/components/ui/button";
import { tutorData } from "../data/dummydata";
import Image from "next/image";


export const Tutor = () => {

  return (
    <section
      id={tutorData?.sectionId}
      className="bg-white py-24"
    >
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">

        {/* Image */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-walnut via-ink to-ink">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={tutorData?.image?.src}
              alt={tutorData?.image?.name}
              className="h-full w-full object-cover"
              width={400}
              height={500}
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-ink/80 p-4 backdrop-blur">
            <p className="font-display text-ivory">
              {tutorData?.image?.name}
            </p>

            <p className="text-xs text-brass">
              {tutorData?.image?.designation}
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-xs font-semibold italic tracking-[0.3em] text-brass-dark">
            {tutorData?.badge}
          </p>

          <h2 className="mt-3 text-4xl text-ink">
            {tutorData?.title?.line1}
            <br />
            {tutorData?.title?.line2}
          </h2>

          <p className="mt-4 max-w-md leading-relaxed text-ink/60">
            {tutorData?.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {tutorData?.stats?.map((stat:any) => {
              const Icon = stat?.icon;

              return (
                <div key={stat.label}>
                  <Icon className="h-5 w-5 text-brass-dark" />

                  <p className="mt-2 font-display text-2xl text-ink">
                    {stat.value}
                  </p>

                  <p className="text-xs text-ink/45">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          <Button
            variant="dark"
            size="lg"
            className="mt-8"
          >
            {tutorData?.button?.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
export default Tutor;