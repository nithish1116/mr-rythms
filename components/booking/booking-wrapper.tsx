"use client";

import { BookingModal } from "./booking-modal";
import { BookingProvider } from "./booking-provider";

export function BookingWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      {children}
      <BookingModal />
    </BookingProvider>
  );
}
