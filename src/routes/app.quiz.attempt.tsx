import { createFileRoute, Link } from "@tanstack/react-router";
import { CircleHelp } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/app/quiz/attempt")({
  component: QuizAttemptPage,
});

function QuizAttemptPage() {
  return (
    <>
      <PageHeader
        title="Quiz Attempt"
        description="One question at a time, with a calm pace and a visible timer."
      />
      <section className="rounded-3xl border bg-card p-6 shadow-soft">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Question 0 of 0</span>
          <span>Time remaining: --:--</span>
        </div>
        <Progress value={0} className="mt-3" aria-label="Quiz progress" />
        <div className="mt-6">
          <EmptyState
            icon={CircleHelp}
            title="No active quiz."
            description="Generate a quiz first and it will run in this space."
            className="border-none bg-transparent"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button variant="outline" className="rounded-full">
            Previous
          </Button>
          <Button variant="outline" className="rounded-full">
            Next
          </Button>
          <Button asChild className="rounded-full">
            <Link to="/app/quiz/results">Submit Quiz</Link>
          </Button>
        </div>
      </section>
    </>
  );
}