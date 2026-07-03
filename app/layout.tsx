import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
// Ignore TS complaining about side-effect CSS import in Next.js app directory
// @ts-ignore
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mr Rythms | Learn Music From Home",
  description:
    "Personalized one-on-one music tuition for all ages. Learn guitar, piano, violin, flute, saxophone & vocals from the comfort of your home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
