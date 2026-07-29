import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { PlaceholderPanel } from "@/components/common/PlaceholderPanel";
import { EmptyState } from "@/components/common/EmptyState";
import { Reveal } from "@/components/common/Reveal";

export function ReservedSections({
  title,
  description,
  emptyIcon,
  emptyTitle,
  emptyDescription,
  sections,
  message,
}: {
  title: string;
  description: string;
  emptyIcon: LucideIcon;
  emptyTitle: string;
  emptyDescription?: string;
  sections: string[];
  message: string;
}) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <Reveal>
        <EmptyState icon={emptyIcon} title={emptyTitle} description={emptyDescription} />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s, i) => (
          <Reveal key={s} delay={i * 0.03}>
            <PlaceholderPanel title={s} message={message} />
          </Reveal>
        ))}
      </div>
    </>
  );
}