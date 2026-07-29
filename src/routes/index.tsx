import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { Hero } from "@/components/marketing/Hero";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { WhyChoose } from "@/components/marketing/WhyChoose";
import { FaqSection } from "@/components/marketing/FaqSection";

const title = "SmartPrep AI — Learn Smarter. Prepare Better.";
const description =
  "SmartPrep AI turns your syllabus into personalised explanations, quizzes, revision schedules and progress tracking in one calm workspace.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <WhyChoose />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
