"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { bookingModalData, whatsappConfig } from "@/components/data/dummydata";
import { useBooking } from "./booking-provider";

export function BookingModal() {
  const { open, selectedPlan, closeModal } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [instrument, setInstrument] = useState("");
  const [plan, setPlan] = useState(selectedPlan);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setPlan(selectedPlan);
      setError("");
    }
  }, [open, selectedPlan]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !instrument) {
      setError(bookingModalData.validationMessage);
      return;
    }

    const message = encodeURIComponent(
      `${whatsappConfig.defaultMessage}\n\nName: ${name.trim()}\nPhone: ${phone.trim()}\nInstrument: ${instrument}\nPlan: ${plan}`
    );

    window.open(
      `https://wa.me/${whatsappConfig.phone}?text=${message}`,
      "_blank"
    );
    closeModal();
    setName("");
    setPhone("");
    setInstrument("");
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && closeModal()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{bookingModalData.title}</DialogTitle>
          <DialogDescription>{bookingModalData.description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="booking-name">{bookingModalData.fields.name}</Label>
            <Input
              id="booking-name"
              placeholder={bookingModalData.placeholders.name}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-phone">
              {bookingModalData.fields.phone}
            </Label>
            <Input
              id="booking-phone"
              type="tel"
              placeholder={bookingModalData.placeholders.phone}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-instrument">
              {bookingModalData.fields.instrument}
            </Label>
            <select
              id="booking-instrument"
              value={instrument}
              onChange={(event) => setInstrument(event.target.value)}
              className="flex h-12 w-full rounded-xl border border-ink/10 bg-white px-4 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
            >
              <option value="">{bookingModalData.placeholders.instrument}</option>
              {bookingModalData.instruments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-plan">{bookingModalData.fields.plan}</Label>
            <select
              id="booking-plan"
              value={plan}
              onChange={(event) => setPlan(event.target.value)}
              className="flex h-12 w-full rounded-xl border border-ink/10 bg-white px-4 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
            >
              {bookingModalData.plans.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" size="lg" className="w-full">
            {bookingModalData.submitLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
