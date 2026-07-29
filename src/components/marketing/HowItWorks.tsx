import { Reveal } from "@/components/common/Reveal";

const steps = [
  { title: "Create an account", text: "Sign up in under a minute — no card, no clutter." },
  { title: "Upload syllabus", text: "Drop in a PDF, DOCX, TXT or a photo of your syllabus." },
  { title: "AI analyses syllabus", text: "Subjects, units and topics are detected and structured." },
  { title: "Receive personalised learning", text: "Explanations, quizzes and a plan built around you." },
  { title: "Track progress", text: "Watch weak areas shrink as your readiness grows." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-y bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Five calm steps from your syllabus to a personalised learning journey.
          </p>
        </Reveal>

        <ol className="relative mt-12 space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[1.375rem] before:w-px before:bg-border">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="relative flex gap-5 rounded-2xl border bg-card p-5 pl-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-6">
                <span className="z-10 grid size-11 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}