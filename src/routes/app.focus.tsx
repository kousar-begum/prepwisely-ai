import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/focus")({
  component: () => (
    <ReservedSections
      title="Focus Timer"
      description="Pomodoro-style sessions with breaks that respect your energy."
      emptyIcon={Clock}
      emptyTitle="No focus sessions yet."
      emptyDescription="Start a session and your focus history will build up here."
      sections={["Session Timer", "Break Timer", "Session History", "Focus Score", "Distraction Log", "Daily Focus Goal"]}
      message="This section activates once you start a session."
    />
  ),
});