import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/profile")({
  component: () => (
    <ReservedSections
      title="Profile"
      description="Your academic details and learning preferences."
      emptyIcon={User}
      emptyTitle="Profile not completed yet."
      emptyDescription="Add your course, year and goals to personalise SmartPrep AI."
      sections={["Personal Details", "Academic Info", "Exam Details", "Learning Preferences", "Achievements", "Activity Summary"]}
      message="This section will show your details once added."
    />
  ),
});