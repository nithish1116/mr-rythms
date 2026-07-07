"use client";

import { BookTrialButton } from "@/components/booking/book-trial-button";
import { coursesData } from "../data/dummydata";
import { Check } from "lucide-react";

const courses = () => {
  return (
   <section
      id={coursesData.sectionId}
      className="bg-ivory py-24"
    >
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-brass-dark">
            {coursesData.badge}
          </p>

          <h2 className="mt-3 text-4xl text-ink">
            {coursesData.title}
          </h2>

          <p className="mt-3 text-ink/55">
            {coursesData.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {coursesData.courses.map((course) => {
            const Icon = course.icon;

            const isFeatured = course.featured;

            return (
              <div
                key={course.name}
                className={`group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-ink hover:text-ivory hover:shadow-2xl ${
                  isFeatured
                    ? "scale-[1.03] bg-ink text-ivory shadow-2xl"
                    : "border border-ink/5 bg-white hover:border-transparent"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                    isFeatured
                      ? "bg-brass/20"
                      : "bg-brass/10 group-hover:bg-brass/20"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-colors duration-300 ${
                      isFeatured
                        ? "text-brass"
                        : "text-brass-dark group-hover:text-brass"
                    }`}
                  />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold">
                  {course.name}
                </h3>

                <p
                  className={`mt-1 text-xs transition-colors duration-300 ${
                    isFeatured
                      ? "text-ivory/50"
                      : "text-ink/45 group-hover:text-ivory/50"
                  }`}
                >
                  {course.level}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-3xl">
                    {course.price}
                  </span>

                  <span
                    className={`transition-colors duration-300 ${
                      isFeatured
                        ? "text-ivory/50"
                        : "text-ink/45 group-hover:text-ivory/50"
                    }`}
                  >
                    {course.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />

                      <span
                        className={`transition-colors duration-300 ${
                          isFeatured
                            ? "text-ivory/75"
                            : "text-ink/65 group-hover:text-ivory/75"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <BookTrialButton
                  className={`mt-8 w-full transition-all duration-300 ${
                    isFeatured
                      ? ""
                      : "group-hover:bg-brass group-hover:text-ink group-hover:shadow-[0_8px_24px_-8px_rgba(217,164,65,0.6)] group-hover:hover:bg-brass-light"
                  }`}
                  variant={isFeatured ? "default" : "dark"}
                  plan={course.name}
                >
                  {coursesData.buttonText}
                </BookTrialButton>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default courses