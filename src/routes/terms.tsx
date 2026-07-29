import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/marketing/MarketingPage";

const title = "Terms of Service — SmartPrep AI";
const description =
  "The terms that apply when you use SmartPrep AI for exam preparation and study planning.";

export const Route = createFileRoute("/terms")({
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
      title="Terms of Service"
      intro="Plain-language terms for using SmartPrep AI."
      sections={[
        {
          heading: "Using the platform",
          body: "SmartPrep AI is provided for personal study. Keep your account credentials secure and do not upload material you are not allowed to share.",
        },
        {
          heading: "AI-generated content",
          body: "Explanations, plans and predictions are generated assistance, not a guarantee of exam outcomes. Always cross-check against your official syllabus.",
        },
        {
          heading: "Availability",
          body: "Features are released progressively. Sections marked as reserved are not yet active and may change before launch.",
        },
        {
          heading: "Changes to these terms",
          body: "If the terms change materially, you will be notified in the app before the changes take effect.",
        },
      ]}
    />
  ),
});