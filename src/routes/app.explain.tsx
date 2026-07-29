import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/explain")({
  component: () => (
    <ReservedSections
      title="Topic Explanation"
      description="Clear, layered explanations for any topic in your syllabus."
      emptyIcon={BookOpen}
      emptyTitle="No topic selected yet."
      emptyDescription="Upload a syllabus and choose a topic to see a full explanation here."
      sections={[
        "Simple Explanation",
        "Detailed Explanation",
        "Real-life Examples",
        "Formulas & Key Points",
        "Common Mistakes",
        "Practice Questions",
      ]}
      message="This section will be filled once a topic is selected."
    />
  ),
});