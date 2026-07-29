import { createFileRoute } from "@tanstack/react-router";
import { Brain } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/adaptive")({
  component: () => (
    <ReservedSections
      title="Adaptive Learning"
      description="Difficulty and pacing that adjust to how you're actually doing."
      emptyIcon={Brain}
      emptyTitle="Adaptive learning not started."
      emptyDescription="Complete a few sessions so the system can adapt to you."
      sections={["Current Level", "Adaptive Path", "Next Recommended Topic", "Difficulty Curve", "Mastery Map", "Adjustment Log"]}
      message="This section will adapt once you have study history."
    />
  ),
});