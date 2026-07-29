import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/marketing/MarketingPage";

const title = "Privacy Policy — SmartPrep AI";
const description =
  "How SmartPrep AI handles your syllabus uploads, study data and account information.";

export const Route = createFileRoute("/privacy")({
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
      title="Privacy Policy"
      intro="Your study material belongs to you. This page explains what SmartPrep AI stores and why."
      sections={[
        {
          heading: "What we collect",
          body: "Account details you provide, the syllabus files you upload, and the study activity generated while you use the product.",
        },
        {
          heading: "How it is used",
          body: "Your material is used to personalise plans, explanations and practice for your account only. It is never sold.",
        },
        {
          heading: "Retention and deletion",
          body: "You can remove uploaded files and delete your account at any time from Settings; associated study data is removed with it.",
        },
        {
          heading: "Contact",
          body: "For privacy questions, reach us through the contact page and we will respond as quickly as we can.",
        },
      ]}
    />
  ),
});