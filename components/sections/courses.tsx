import React from 'react'
import { Button } from '../ui/button';
import { coursesData } from '../data/dummydata';
import { Check } from 'lucide-react';

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

            return (
              <div
                key={course.name}
                className={`rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  course.featured
                    ? "scale-[1.03] bg-ink text-ivory shadow-2xl"
                    : "border border-ink/5 bg-white"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    course.featured
                      ? "bg-brass/20"
                      : "bg-brass/10"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      course.featured
                        ? "text-brass"
                        : "text-brass-dark"
                    }`}
                  />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold">
                  {course.name}
                </h3>

                <p
                  className={`mt-1 text-xs ${
                    course.featured
                      ? "text-ivory/50"
                      : "text-ink/45"
                  }`}
                >
                  {course.level}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-3xl">
                    {course.price}
                  </span>

                  <span
                    className={
                      course.featured
                        ? "text-ivory/50"
                        : "text-ink/45"
                    }
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
                        className={
                          course.featured
                            ? "text-ivory/75"
                            : "text-ink/65"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-8 w-full"
                  variant={course.featured ? "default" : "dark"}
                >
                  {coursesData.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default courses