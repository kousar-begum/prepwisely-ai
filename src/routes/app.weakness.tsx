import { createFileRoute } from "@tanstack/react-router";
import { Gauge } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/weakness")({
  component: () => (
    <ReservedSections
      title="Weakness Detector"
      description="Spot the topics that need another pass, gently and early."
      emptyIcon={Gauge}
      emptyTitle="No weak areas detected yet."
      emptyDescription="Attempt quizzes so SmartPrep AI can identify patterns."
      sections={["Weak Topics", "Error Patterns", "Concept Gaps", "Recommended Practice", "Recovery Plan", "Progress After Fix"]}
      message="Insights will appear here as you practise."
    />
  ),
});