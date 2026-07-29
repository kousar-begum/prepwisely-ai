import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageSquare } from "lucide-react";
import { MarketingPage } from "@/components/marketing/MarketingPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const title = "Contact SmartPrep AI — talk to the team";
const description =
  "Questions, feedback or partnership ideas? Reach the SmartPrep AI team and we'll get back to you.";

export const Route = createFileRoute("/contact")({
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
      title="Contact us"
      intro="Tell us what you're preparing for and what's getting in the way. We read everything."
    >
      <form className="mt-10 space-y-5 rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" maxLength={100} placeholder="Your name" className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            maxLength={255}
            placeholder="you@example.com"
            className="rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            rows={5}
            maxLength={1000}
            placeholder="How can we help?"
            className="rounded-xl"
          />
        </div>
        <Button type="button" className="rounded-full px-6">
          <MessageSquare className="size-4" aria-hidden />
          Send message
        </Button>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Mail className="size-3.5" aria-hidden />
          Messaging is not connected yet — this form is reserved for the support integration.
        </p>
      </form>
    </MarketingPage>
  ),
});