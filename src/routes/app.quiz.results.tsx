import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/quiz/results")({
  component: () => (
    <ReservedSections
      title="Quiz Results"
      description="Score, accuracy and explanations for every question you attempt."
      emptyIcon={Trophy}
      emptyTitle="No results yet."
      emptyDescription="Complete a quiz and your detailed results will appear here."
      sections={[
        "Score Summary",
        "Accuracy Breakdown",
        "Correct Answers",
        "Explanations",
        "Weak Topics",
        "Improvement Suggestions",
      ]}
      message="Results will be shown here after your first attempt."
    />
  ),
});