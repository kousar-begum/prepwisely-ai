import {
  Activity,
  BookOpen,
  Brain,
  CalendarClock,
  Camera,
  Clock,
  Compass,
  Globe,
  Languages,
  LineChart,
  MessageCircleQuestion,
  Target,
  Wand2,
} from "lucide-react";
import { Reveal } from "@/components/common/Reveal";

const features = [
  { icon: BookOpen, title: "AI Topic Explanation", text: "Clear, structured explanations for any topic in your syllabus." },
  { icon: Wand2, title: "AI Quiz Generator", text: "Practice sets built from your own units and topics." },
  { icon: LineChart, title: "Performance Prediction", text: "Readiness estimates based on your real study activity." },
  { icon: CalendarClock, title: "Revision Scheduler", text: "Spaced revision planned around your exam dates." },
  { icon: MessageCircleQuestion, title: "AI Doubt Solver", text: "Ask anything and get a patient, step-by-step answer." },
  { icon: Compass, title: "Study Planner", text: "Daily, weekly and monthly plans that fit your hours." },
  { icon: Target, title: "Goal Tracking", text: "Set targets and follow completion without the noise." },
  { icon: Brain, title: "Adaptive Learning", text: "Difficulty and pacing that adjust as you improve." },
  { icon: Activity, title: "Weakness Detection", text: "Surfaces the topics quietly holding your score back." },
  { icon: Clock, title: "Focus Timer", text: "Pomodoro and custom sessions with gentle breaks." },
  { icon: Camera, title: "Image to Notes", text: "Turn board photos and handwriting into clean notes." },
  { icon: Languages, title: "Multi-language Support", text: "Study in the language you think in." },
];

export function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <Reveal className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Globe className="size-3.5" aria-hidden /> Everything in one place
        </span>
        <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
          A complete study system, quietly powered by AI
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Twelve focused tools that work together — no clutter, no distractions.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.03}>
            <article className="group h-full rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}