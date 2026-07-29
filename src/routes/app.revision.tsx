import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/revision")({
  component: () => (
    <ReservedSections
      title="Revision Scheduler"
      description="Spaced repetition scheduled around what you actually studied."
      emptyIcon={CalendarClock}
      emptyTitle="No revisions scheduled yet."
      emptyDescription="Study a topic and revision slots will be planned automatically."
      sections={["Today's Revision", "Upcoming Revisions", "Overdue Topics", "Spaced Repetition", "Retention Score", "Revision History"]}
      message="This section will populate as you complete topics."
    />
  ),
});