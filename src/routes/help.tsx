import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/marketing/MarketingPage";

const title = "Help Centre — SmartPrep AI support and guides";
const description =
  "Getting-started guides, FAQs and troubleshooting help for students using SmartPrep AI.";

export const Route = createFileRoute("/help")({
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
      title="Help Centre"
      intro="Short answers to the questions students ask most before they get started."
      sections={[
        {
          heading: "Getting started",
          body: "Create an account, verify your email, then upload your syllabus. Everything else in the dashboard unlocks from that first upload.",
        },
        {
          heading: "Supported syllabus formats",
          body: "PDF, DOCX, TXT and clear photos of printed pages. Files up to 20 MB are accepted.",
        },
        {
          heading: "Why are some sections empty?",
          body: "SmartPrep AI never shows invented data. Panels stay empty until you generate real study activity.",
        },
        {
          heading: "Still stuck?",
          body: "Use the contact page to reach the team directly, or open Help & Support inside the dashboard.",
        },
      ]}
    />
  ),
});