import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/community")({
  component: () => (
    <ReservedSections
      title="Community"
      description="Learn alongside other students, without the noise."
      emptyIcon={Users}
      emptyTitle="No community activity yet."
      emptyDescription="Discussions and shared resources will appear here."
      sections={["Discussions", "Study Groups", "Shared Notes", "Leaderboard", "Q&A Threads", "Announcements"]}
      message="This section will populate as the community grows."
    />
  ),
});