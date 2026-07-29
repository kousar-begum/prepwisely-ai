import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/settings")({
  component: () => (
    <ReservedSections
      title="Settings"
      description="Control appearance, language, notifications and privacy."
      emptyIcon={Settings}
      emptyTitle="Default settings applied."
      emptyDescription="Nothing has been customised yet."
      sections={["Appearance", "Language", "Notifications", "Study Preferences", "Privacy", "Account"]}
      message="Controls for this area will be available here."
    />
  ),
});