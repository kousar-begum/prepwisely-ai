import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/search")({
  component: () => (
    <ReservedSections
      title="Search"
      description="Find topics, notes, quizzes and conversations."
      emptyIcon={Search}
      emptyTitle="No search results."
      emptyDescription="Start typing in the search bar to look across your material."
      sections={["Topics", "Notes", "Quizzes", "Conversations", "Resources", "Recent Searches"]}
      message="Matching items will be listed here."
    />
  ),
});