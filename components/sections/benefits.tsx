import { benefitsData } from "../data/dummydata";

const Benefits = () => {
  return (
     <section
      id={benefitsData?.sectionId}
      className="bg-ink py-24"
    >
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">

        {/* Left Content */}
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-brass">
            {benefitsData?.badge}
          </p>

          <h2 className="mt-3 text-4xl text-balance text-ivory">
            {benefitsData?.title}
          </h2>

          <p className="mt-4 max-w-md leading-relaxed text-ivory/55">
            {benefitsData?.description}
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {benefitsData?.items?.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-ivory/10 bg-ivory/[0.04] p-6 transition-colors hover:border-brass/40"
              >
                <Icon className="h-6 w-6 text-brass" />

                <h3 className="mt-4 font-display font-semibold text-ivory">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ivory/50">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits;