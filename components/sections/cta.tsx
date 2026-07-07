import { BookTrialButton } from "@/components/booking/book-trial-button";
import { ctaData } from "../data/dummydata";


const CTA = () => {
  const ButtonIcon = ctaData?.button?.icon;
  return (
    <section id={ctaData?.sectionId} className="py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 sm:px-14">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brass/20 blur-[100px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="max-w-md text-3xl text-ivory sm:text-4xl">
                {ctaData?.title}
              </h2>

              <p className="mt-3 max-w-md text-ivory/55">
                {ctaData?.description}
              </p>
            </div>

            <BookTrialButton size="lg">
              {ctaData?.button?.label}
              <ButtonIcon className="ml-2 h-4 w-4" />
            </BookTrialButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA;