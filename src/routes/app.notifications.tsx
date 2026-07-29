import { createFileRoute } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/notifications")({
  component: () => (
    <ReservedSections
      title="Notifications"
      description="Reminders, nudges and updates in one place."
      emptyIcon={Bell}
      emptyTitle="No notifications available."
      emptyDescription="Study reminders and updates will show up here."
      sections={["Study Reminders", "Revision Alerts", "Quiz Updates", "Goal Nudges", "Community Activity", "System Messages"]}
      message="Notifications will be listed here."
    />
  ),
});