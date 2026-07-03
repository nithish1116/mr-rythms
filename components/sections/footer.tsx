"use client";

import React from 'react'
import { footerData } from '../data/dummydata';
import { Button } from '../ui/button';

const footer = () => {
  const LogoIcon = footerData?.logo?.icon;
  
  return (
    <footer
      id={footerData?.sectionId}
      className="bg-ink pt-20 pb-8 text-ivory/70"
    >
      <div className="container grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2">
            <LogoIcon className="h-5 w-5 text-brass" />

            <div>
              <p className="font-display text-lg italic text-ivory">
                {footerData?.logo?.title}
              </p>

              <p className="text-[9px] tracking-[0.3em] text-brass">
                {footerData?.logo?.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed">
            {footerData?.description}
          </p>

          <div className="mt-5 flex gap-3">
            {footerData?.socialLinks?.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 transition-colors hover:border-brass hover:text-brass"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-display font-semibold text-ivory">
            Quick Links
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            {footerData?.quickLinks?.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-brass"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Instruments */}
        <div>
          <p className="font-display font-semibold text-ivory">
            Instruments
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            {footerData?.instruments?.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-brass"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-display font-semibold text-ivory">
            Contact Info
          </p>

          <ul className="mt-4 space-y-3 text-sm">
            {footerData?.contact?.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.value}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4 text-brass" />
                  {item.value}
                </li>
              );
            })}
          </ul>

          <p className="mt-6 font-display font-semibold text-ivory">
            {footerData?.newsletter?.title}
          </p>

          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={footerData?.newsletter?.placeholder}
              className="w-full rounded-full border border-ivory/15 bg-ivory/5 px-4 py-2 text-sm text-ivory placeholder:text-ivory/40 focus:border-brass focus:outline-none"
            />

            <Button size="sm" className="shrink-0">
              {footerData?.newsletter?.button}
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="container mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {footerData?.copyright}
        </p>

        <div className="flex gap-6">
          {footerData?.policies?.map((policy) => (
            <a
              key={policy.label}
              href={policy.href}
              className="hover:text-brass"
            >
              {policy.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default footer;