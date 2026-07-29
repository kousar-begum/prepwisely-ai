import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z
  .object({
    fullName: z.string().trim().min(2, "Enter your full name").max(80),
    email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters").max(72),
    confirmPassword: z.string(),
    terms: z.literal("on", { errorMap: () => ({ message: "Please accept the terms to continue" }) }),
  })
  .refine((v) => v.password === v.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const title = "Create your account — SmartPrep AI";
const description =
  "Create your SmartPrep AI account to begin your personalised, AI-powered learning journey.";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SignUpPage,
});

function SignUpPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      fullName: String(data.get("fullName") ?? ""),
      email: String(data.get("email") ?? ""),
      password: String(data.get("password") ?? ""),
      confirmPassword: String(data.get("confirmPassword") ?? ""),
      terms: data.get("terms") ?? "",
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setPending(true);
    window.setTimeout(() => {
      navigate({ to: "/verify-email", search: { email: parsed.data.email } });
    }, 600);
  }

  const fields = [
    { id: "fullName", label: "Full Name", type: "text", autoComplete: "name" },
    { id: "email", label: "Email", type: "email", autoComplete: "email" },
    { id: "password", label: "Password", type: "password", autoComplete: "new-password" },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      autoComplete: "new-password",
    },
  ] as const;

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Create your account to begin your learning journey."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Login
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {fields.map((f) => (
          <div key={f.id} className="space-y-2">
            <Label htmlFor={f.id}>{f.label}</Label>
            <Input
              id={f.id}
              name={f.id}
              type={f.type}
              autoComplete={f.autoComplete}
              aria-invalid={!!errors[f.id]}
              aria-describedby={errors[f.id] ? `${f.id}-error` : undefined}
            />
            {errors[f.id] && (
              <p id={`${f.id}-error`} role="alert" className="text-xs text-destructive">
                {errors[f.id]}
              </p>
            )}
          </div>
        ))}

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Checkbox id="terms" name="terms" className="mt-0.5" aria-invalid={!!errors.terms} />
            <Label htmlFor="terms" className="text-sm leading-relaxed font-normal text-muted-foreground">
              I agree to the{" "}
              <Link to="/terms" className="text-primary hover:underline">
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </Label>
          </div>
          {errors.terms && (
            <p role="alert" className="text-xs text-destructive">
              {errors.terms}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full rounded-full" disabled={pending}>
          {pending && <Loader2 className="size-4 animate-spin" aria-hidden />}
          {pending ? "Creating account…" : "Create Account"}
        </Button>
      </form>
    </AuthLayout>
  );
}