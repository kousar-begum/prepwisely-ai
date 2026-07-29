import { createFileRoute } from "@tanstack/react-router";
import { UsersRound } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/study-buddy")({
  component: () => (
    <ReservedSections
      title="Study Buddy"
      description="Pair up with someone preparing for the same exam."
      emptyIcon={UsersRound}
      emptyTitle="No study buddy yet."
      emptyDescription="Matching opens once your syllabus and goals are set."
      sections={["Buddy Matches", "Shared Goals", "Joint Sessions", "Accountability Log", "Chat", "Buddy Progress"]}
      message="This section becomes active after matching."
    />
  ),
});