import { createFileRoute } from "@tanstack/react-router";
import { LineChart } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/analytics")({
  component: () => (
    <ReservedSections
      title="Performance Dashboard"
      description="Progress, accuracy and consistency in one calm view."
      emptyIcon={LineChart}
      emptyTitle="No performance data yet."
      emptyDescription="Take a quiz or complete a topic to start building your analytics."
      sections={["Overall Progress", "Subject-wise Accuracy", "Time Spent", "Quiz Trends", "Consistency Score", "Strengths"]}
      message="Charts will appear here once you have activity."
    />
  ),
});