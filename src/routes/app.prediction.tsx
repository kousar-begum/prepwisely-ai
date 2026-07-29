import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/prediction")({
  component: () => (
    <ReservedSections
      title="Performance Prediction"
      description="A forward look at where your preparation is heading."
      emptyIcon={Sparkles}
      emptyTitle="No prediction available yet."
      emptyDescription="Predictions need a few quizzes and study sessions to be meaningful."
      sections={["Predicted Score", "Confidence Level", "Readiness Index", "Risk Areas", "Suggested Focus", "Projection Timeline"]}
      message="Predictions will appear here once enough data exists."
    />
  ),
});