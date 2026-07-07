"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useBooking } from "./booking-provider";

type BookTrialButtonProps = ButtonProps & {
  plan?: string;
  children: React.ReactNode;
};

export function BookTrialButton({
  plan,
  children,
  onClick,
  ...props
}: BookTrialButtonProps) {
  const { openModal } = useBooking();

  return (
    <Button
      {...props}
      onClick={(event) => {
        onClick?.(event);
        openModal(plan ? { plan } : undefined);
      }}
    >
      {children}
    </Button>
  );
}
