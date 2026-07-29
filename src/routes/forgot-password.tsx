import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.string().trim().min(1, "Email is required").email("Enter a valid email address");

const title = "Reset your password — SmartPrep AI";
const description = "Request a secure password reset link for your SmartPrep AI account.";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = String(new FormData(event.currentTarget).get("email") ?? "");
    const parsed = schema.safeParse(value);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError("");
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSentTo(parsed.data);
    }, 600);
  }

  return (
    <AuthLayout
      title={sentTo ? "Check your inbox" : "Forgot password"}
      subtitle={
        sentTo
          ? "If an account exists for that address, a reset link is on its way."
          : "Enter your email and we'll send you a link to reset your password."
      }
      footer={
        <>
          Remembered it?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Back to Login
          </Link>
        </>
      }
    >
      {sentTo ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed bg-accent/40 px-6 py-10 text-center">
          <CheckCircle2 className="size-8 text-primary" aria-hidden />
          <p className="text-sm font-medium">Reset link sent to {sentTo}</p>
          <p className="text-xs text-muted-foreground">
            The link expires in 30 minutes. You can close this page safely.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={!!error}
              aria-describedby={error ? "email-error" : undefined}
            />
            {error && (
              <p id="email-error" role="alert" className="text-xs text-destructive">
                {error}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full rounded-full" disabled={pending}>
            {pending && <Loader2 className="size-4 animate-spin" aria-hidden />}
            {pending ? "Sending…" : "Reset Password"}
          </Button>
        </form>
      )}
    </AuthLayout>
  );
}