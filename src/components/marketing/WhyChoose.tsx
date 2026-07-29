import { Leaf, Lock, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";

const reasons = [
  {
    icon: Sparkles,
    title: "Built around your syllabus",
    text: "Nothing generic. Every explanation, quiz and plan follows the exact units you have to cover.",
  },
  {
    icon: Leaf,
    title: "Calm by design",
    text: "A quiet interface with generous space, so studying feels focused instead of overwhelming.",
  },
  {
    icon: Workflow,
    title: "One connected workflow",
    text: "Learn, practise, revise and plan without switching between five different apps.",
  },
  {
    icon: Lock,
    title: "Your data stays yours",
    text: "Your uploads and study history are private, and only used to personalise your learning.",
  },
];

export function WhyChoose() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">Why choose SmartPrep AI</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          A study companion designed for clarity, not for noise.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <article className="h-full rounded-3xl border bg-hero-gradient p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="grid size-11 place-items-center rounded-xl bg-card text-primary shadow-soft">
                <r.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}