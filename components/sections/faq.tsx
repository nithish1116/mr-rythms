import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "../data/dummydata";



const FAQ = () => {
  return (
    <section id="faq" className="bg-ivory py-24">
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-brass-dark">
            {"QUESTIONS"}
          </p>
          <h2 className="mt-3 text-4xl text-ink">{"Frequently Asked Questions"}</h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
export default FAQ;