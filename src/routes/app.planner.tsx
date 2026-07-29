import { createFileRoute } from "@tanstack/react-router";
import { Compass } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/planner")({
  component: () => (
    <ReservedSections
      title="Study Planner"
      description="Daily, weekly and monthly plans generated around your syllabus and exam dates."
      emptyIcon={Compass}
      emptyTitle="No study plan yet."
      emptyDescription="Upload your syllabus and set an exam date to generate a plan."
      sections={[
        "Daily Plan",
        "Weekly Plan",
        "Monthly Plan",
        "Priority Topics",
        "Time Allocation",
        "Break Schedule",
      ]}
      message="This section will fill once your plan is generated."
    />
  ),
});