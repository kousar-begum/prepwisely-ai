import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bookmark,
  CalendarClock,
  ClipboardList,
  Compass,
  LineChart,
  MessageSquare,
  NotebookPen,
  PlayCircle,
  Sparkles,
  Target,
  Upload,
} from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/app/")({
  component: DashboardPage,
});

const quickActions = [
  { icon: Upload, title: "Upload Syllabus", text: "Add your syllabus to unlock everything.", to: "/app/upload" },
  { icon: MessageSquare, title: "AI Doubt Solver", text: "Ask a question, get a clear answer.", to: "/app/chat" },
  { icon: ClipboardList, title: "Generate Quiz", text: "Practice built from your own units.", to: "/app/quiz" },
  { icon: Compass, title: "Study Planner", text: "Plan your days, weeks and months.", to: "/app/planner" },
  { icon: LineChart, title: "Performance Dashboard", text: "See progress once you start studying.", to: "/app/analytics" },
  { icon: CalendarClock, title: "Revision Scheduler", text: "Spaced revision around your exams.", to: "/app/revision" },
  { icon: Target, title: "Goal Tracker", text: "Set targets and follow completion.", to: "/app/goals" },
];

const smartSidebar = [
  { icon: Compass, title: "Today's Plan", empty: "No plan for today yet." },
  { icon: PlayCircle, title: "Continue Learning", empty: "Nothing in progress yet." },
  { icon: Sparkles, title: "Recent Topics", empty: "No topics explored yet." },
  { icon: NotebookPen, title: "Saved Notes", empty: "No notes saved yet." },
  { icon: Bookmark, title: "Bookmarks", empty: "No bookmarks yet." },
];

function DashboardPage() {
  return (
    <>
      <Reveal>
        <section className="rounded-3xl border bg-hero-gradient p-8 shadow-soft sm:p-10">
          <h1 className="text-3xl font-semibold sm:text-4xl">Welcome to SmartPrep AI</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Upload your syllabus to begin your personalised learning journey. Let&apos;s begin — one
            calm step at a time.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Current status: <span className="font-medium text-foreground">No syllabus uploaded yet.</span>
          </p>
          <Button asChild size="lg" className="mt-7 rounded-full px-7">
            <Link to="/app/upload">Upload Syllabus</Link>
          </Button>
        </section>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Quick actions</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {quickActions.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.04}>
                <Link
                  to={a.to}
                  className="group block h-full rounded-2xl border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <a.icon className="size-4.5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <aside className="space-y-4">
          <h2 className="text-lg font-semibold">Smart shortcuts</h2>
          {smartSidebar.map((s) => (
            <Card key={s.title} className="shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <s.icon className="size-4 text-primary" aria-hidden />
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.empty}</p>
              </CardContent>
            </Card>
          ))}
        </aside>
      </div>

      <Reveal>
        <EmptyState
          icon={Sparkles}
          title="Your learning insights will appear here"
          description="Once you upload a syllabus and start studying, SmartPrep AI will surface topics, weak areas and recommendations in this space."
        />
      </Reveal>
    </>
  );
}