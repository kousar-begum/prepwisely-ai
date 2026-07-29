import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/help")({
  component: () => (
    <ReservedSections
      title="Help & Support"
      description="Guides, FAQs and a direct line when you need it."
      emptyIcon={HelpCircle}
      emptyTitle="No support tickets yet."
      emptyDescription="Browse the guides or reach out and your requests will show here."
      sections={["Getting Started", "FAQs", "Feature Guides", "Troubleshooting", "Contact Support", "Feedback"]}
      message="Content for this section is on the way."
    />
  ),
});