import { createFileRoute } from "@tanstack/react-router";
import { Target } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/goals")({
  component: () => (
    <ReservedSections
      title="Goal Tracker"
      description="Set study targets and follow completion without pressure."
      emptyIcon={Target}
      emptyTitle="No goals set yet."
      emptyDescription="Create your first goal to start tracking completion."
      sections={["Active Goals", "Completed Goals", "Weekly Targets", "Streaks", "Milestones", "Reminders"]}
      message="Your goals will be listed here once created."
    />
  ),
});