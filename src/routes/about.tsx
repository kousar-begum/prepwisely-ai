import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/marketing/MarketingPage";

const title = "About SmartPrep AI — calm, AI-powered exam preparation";
const description =
  "SmartPrep AI helps students turn any syllabus into a clear, personalised study plan with adaptive practice and gentle progress tracking.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: () => (
    <MarketingPage
      title="About SmartPrep AI"
      intro="We build study tools that feel calm instead of competitive — designed around how students actually learn."
      sections={[
        {
          heading: "Our mission",
          body: "Every student should have a personal tutor that understands their syllabus, their pace and their pressure. SmartPrep AI turns a plain syllabus document into an organised, adaptive learning path.",
        },
        {
          heading: "How we think about design",
          body: "Preparation is stressful enough. The interface stays quiet, spacious and readable so attention goes to the material, not the dashboard.",
        },
        {
          heading: "What comes next",
          body: "Adaptive learning, wellbeing signals and collaborative study are being rolled out step by step, with each feature earning its place before it ships.",
        },
      ]}
    />
  ),
});