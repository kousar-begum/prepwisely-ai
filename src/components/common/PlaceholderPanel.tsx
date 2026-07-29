import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PlaceholderPanel({
  icon: Icon,
  title,
  message,
  lines = 3,
}: {
  icon?: LucideIcon;
  title: string;
  message: string;
  lines?: number;
}) {
  return (
    <Card className="border-dashed bg-card/60 shadow-soft">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm font-semibold">
          {Icon && <Icon className="size-4 text-primary" aria-hidden />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className="h-3 w-full opacity-60" style={{ width: `${100 - i * 12}%` }} />
        ))}
        <p className="pt-1 text-xs text-muted-foreground">{message}</p>
      </CardContent>
    </Card>
  );
}