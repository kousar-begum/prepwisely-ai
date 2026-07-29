import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { ReservedSections } from "@/components/common/ReservedSections";

export const Route = createFileRoute("/app/image-notes")({
  component: () => (
    <ReservedSections
      title="Image to Notes"
      description="Turn a photo of a page or whiteboard into structured notes."
      emptyIcon={Camera}
      emptyTitle="No images processed yet."
      emptyDescription="Upload a photo and the extracted notes will appear here."
      sections={["Extracted Text", "Summarised Notes", "Key Terms", "Diagram Notes", "Saved Notes", "Export"]}
      message="This section fills after an image is processed."
    />
  ),
});