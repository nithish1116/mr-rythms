"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BookTrialButton } from "@/components/booking/book-trial-button";
import { navbarData } from "../data/dummydata";


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LogoIcon = navbarData?.logo?.icon;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">

        {/* Logo */}
        <a
          href={navbarData?.logo?.href}
          className="flex items-center gap-2"
        >
          <LogoIcon className="h-6 w-6 text-brass" />

          <div className="leading-tight">
            <p className="font-display italic text-xl text-ivory">
              {navbarData?.logo?.title}
            </p>

            <p className="text-[10px] tracking-[0.3em] text-brass">
              {navbarData?.logo?.subtitle}
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navbarData?.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ivory/80 transition-colors hover:text-brass"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <BookTrialButton size="sm">
            {navbarData?.cta?.label}
          </BookTrialButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-ivory lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-ink/95 px-6 pb-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4">
            {navbarData.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-ivory/80 hover:text-brass"
              >
                {link.label}
              </a>
            ))}

            <BookTrialButton
              className="mt-2 w-full"
              size="sm"
              onClick={() => setOpen(false)}
            >
              {navbarData.cta.label}
            </BookTrialButton>
          </nav>
        </div>
      )}
    </header>
  );
}