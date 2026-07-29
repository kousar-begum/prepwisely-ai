import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/burnout")({
  component: () => (
    <ReservedSections
      title="Burnout Detection"
      description="A quiet check on your workload, sleep-friendly hours and pace."
      emptyIcon={HeartPulse}
      emptyTitle="No wellbeing signals yet."
      emptyDescription="Study activity is needed before wellbeing insights can be shown."
      sections={["Workload Balance", "Fatigue Signals", "Break Adherence", "Late-night Study", "Recovery Tips", "Wellbeing Trend"]}
      message="Signals will appear here as you study."
    />
  ),
});