import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardList } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/app/quiz")({
  component: QuizPage,
});

const configs = [
  { label: "Difficulty", options: ["Easy", "Medium", "Hard", "Mixed"] },
  { label: "Question type", options: ["MCQ", "True / False", "Short answer", "Mixed"] },
  { label: "Number of questions", options: ["5", "10", "20", "30"] },
  { label: "Time limit", options: ["No limit", "10 minutes", "20 minutes", "45 minutes"] },
];

function QuizPage() {
  return (
    <>
      <PageHeader
        title="Quiz Generator"
        description="Create practice sets from your own syllabus, at the depth you need."
      />

      <section className="rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {configs.map((c) => (
            <div key={c.label} className="space-y-2">
              <Label htmlFor={c.label}>{c.label}</Label>
              <Select>
                <SelectTrigger id={c.label} className="w-full rounded-xl">
                  <SelectValue placeholder={`Select ${c.label.toLowerCase()}`} />
                </SelectTrigger>
                <SelectContent>
                  {c.options.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="mt-7 rounded-full px-7">
          <Link to="/app/quiz/attempt">Start Quiz</Link>
        </Button>
      </section>

      <EmptyState
        icon={ClipboardList}
        title="No quizzes generated yet."
        description="Once you generate a quiz, your attempts and scores will be listed here."
      />
    </>
  );
}