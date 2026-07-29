import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { MailCheck } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";

const title = "Verify your email — SmartPrep AI";
const description = "Confirm your email address to activate your SmartPrep AI account.";

export const Route = createFileRoute("/verify-email")({
  validateSearch: z.object({ email: z.string().optional() }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: VerifyEmailPage,
});

function VerifyEmailPage() {
  const { email } = Route.useSearch();

  return (
    <AuthLayout
      title="Verification pending"
      subtitle="We've sent a verification link to your email address. Confirm it to activate your account."
      footer={
        <>
          Wrong address?{" "}
          <Link to="/signup" className="font-medium text-primary hover:underline">
            Sign up again
          </Link>
        </>
      }
    >
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed bg-accent/40 px-6 py-10 text-center">
        <span className="grid size-14 place-items-center rounded-2xl bg-card text-primary shadow-soft">
          <MailCheck className="size-6" aria-hidden />
        </span>
        <p className="text-sm font-medium">{email ? `Sent to ${email}` : "Check your inbox"}</p>
        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
          Your account stays locked until the email is verified. You can request a new link if it
          doesn&apos;t arrive.
        </p>
      </div>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        <Button variant="outline" className="rounded-full" type="button">
          Resend link
        </Button>
        <Button asChild className="rounded-full">
          <Link to="/login">Go to Login</Link>
        </Button>
      </div>
    </AuthLayout>
  );
}