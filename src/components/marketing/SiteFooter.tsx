import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            SmartPrep AI turns your syllabus into a calm, personalised study system — explanations,
            practice and planning in one place.
          </p>
          <div className="flex items-center gap-2">
            {[
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Github, label: "GitHub" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation" className="space-y-3 text-sm">
          <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Navigation
          </h2>
          <Link to="/" className="block text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/" hash="features" className="block text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link
            to="/"
            hash="how-it-works"
            className="block text-muted-foreground hover:text-foreground"
          >
            How It Works
          </Link>
          <Link to="/about" className="block text-muted-foreground hover:text-foreground">
            About
          </Link>
        </nav>

        <nav aria-label="Legal and support" className="space-y-3 text-sm">
          <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Company
          </h2>
          <Link to="/contact" className="block text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Link to="/privacy" className="block text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/terms" className="block text-muted-foreground hover:text-foreground">
            Terms &amp; Conditions
          </Link>
          <Link to="/help" className="block text-muted-foreground hover:text-foreground">
            Help &amp; Support
          </Link>
        </nav>
      </div>
      <div className="border-t px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} SmartPrep AI — Learn Smarter. Prepare Better.
      </div>
    </footer>
  );
}