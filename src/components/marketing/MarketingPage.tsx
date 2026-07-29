import type { ReactNode } from "react";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { Reveal } from "@/components/common/Reveal";

export function MarketingPage({
  title,
  intro,
  sections,
  children,
}: {
  title: string;
  intro: string;
  sections?: { heading: string; body: string }[];
  children?: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
        {sections?.map((s, i) => (
          <Reveal key={s.heading} delay={i * 0.04}>
            <section className="mt-10">
              <h2 className="text-lg font-semibold">{s.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          </Reveal>
        ))}
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}