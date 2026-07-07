"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const AUTO_MODAL_KEY = "mr-rythms-auto-modal-shown";

type BookingContextValue = {
  open: boolean;
  selectedPlan: string;
  openModal: (options?: { plan?: string }) => void;
  closeModal: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Free Trial");
  const autoOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModal = useCallback((options?: { plan?: string }) => {
    if (autoOpenTimerRef.current) {
      clearTimeout(autoOpenTimerRef.current);
      autoOpenTimerRef.current = null;
    }

    sessionStorage.setItem(AUTO_MODAL_KEY, "true");
    setSelectedPlan(options?.plan ?? "Free Trial");
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(AUTO_MODAL_KEY);
    if (alreadyShown) return;

    autoOpenTimerRef.current = setTimeout(() => {
      openModal();
    }, 5000);

    return () => {
      if (autoOpenTimerRef.current) {
        clearTimeout(autoOpenTimerRef.current);
      }
    };
  }, [openModal]);

  return (
    <BookingContext.Provider
      value={{ open, selectedPlan, openModal, closeModal }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
