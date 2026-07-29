import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/report")({
  component: () => (
    <ReservedSections
      title="Reports"
      description="Shareable summaries of your preparation over time."
      emptyIcon={FileText}
      emptyTitle="No reports generated yet."
      emptyDescription="Reports become available after your first week of activity."
      sections={["Weekly Report", "Monthly Report", "Subject Report", "Quiz Report", "Time Report", "Export Options"]}
      message="Reports will be listed here once generated."
    />
  ),
});