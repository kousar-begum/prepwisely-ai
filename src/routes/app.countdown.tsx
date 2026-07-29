import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/countdown")({
  component: () => (
    <ReservedSections
      title="Exam Countdown"
      description="Keep the date in view without letting it take over."
      emptyIcon={CalendarDays}
      emptyTitle="No exam date set."
      emptyDescription="Add your exam date to see a countdown and readiness view."
      sections={["Days Remaining", "Syllabus Coverage", "Daily Requirement", "Revision Window", "Milestones", "Readiness Check"]}
      message="This section fills once an exam date is added."
    />
  ),
});