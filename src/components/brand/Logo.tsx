import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="SmartPrep AI home">
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
        <Sparkles className="size-4.5" aria-hidden />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-semibold tracking-tight">
            SmartPrep AI
          </span>
          <span className="text-[0.68rem] text-muted-foreground">Learn Smarter. Prepare Better.</span>
        </span>
      )}
    </Link>
  );
}