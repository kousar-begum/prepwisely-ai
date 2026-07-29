import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/common/Reveal";

const faqs = [
  {
    q: "What exactly is SmartPrep AI?",
    a: "SmartPrep AI is a learning platform that turns your syllabus into personalised explanations, quizzes, revision schedules and study plans.",
  },
  {
    q: "Which file types can I upload?",
    a: "You can upload your syllabus as a PDF, DOCX, TXT file, or as an image such as a photo or scan.",
  },
  {
    q: "Do I need an account to use it?",
    a: "Yes. Your learning workspace is private, so you need to create an account and sign in before accessing it.",
  },
  {
    q: "Does it work for technical subjects with diagrams?",
    a: "Yes. Topics that need visuals reserve a dedicated diagram panel beside the explanation, so circuits, structures and processes stay readable.",
  },
  {
    q: "Can I study in a language other than English?",
    a: "A language selector is built into the platform so your learning content can be delivered in your preferred language.",
  },
  {
    q: "Is my uploaded material private?",
    a: "Your uploads and study history belong to you and are only used to personalise your own learning experience.",
  },
];

export function FaqSection() {
  return (
    <section className="border-t bg-card/40">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Everything you might want to know before you start.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border bg-card px-5 shadow-soft last:border-b"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}