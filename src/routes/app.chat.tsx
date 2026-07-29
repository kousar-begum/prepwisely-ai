import { createFileRoute } from "@tanstack/react-router";
import { ImagePlus, Mic, MessageSquare, Send } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/app/chat")({
  component: ChatPage,
});

const suggestions = [
  "Explain this topic in simple terms",
  "Give me a step-by-step derivation",
  "What are the key points to remember?",
  "Where do students usually go wrong here?",
];

function ChatPage() {
  return (
    <>
      <PageHeader
        title="AI Doubt Solver"
        description="Ask anything from your syllabus and get a patient, structured answer."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
        <section className="flex min-h-[28rem] flex-col rounded-3xl border bg-card shadow-soft">
          <div className="flex flex-1 items-center justify-center p-6">
            <EmptyState
              icon={MessageSquare}
              title="No conversations yet."
              description="Ask your first question to start a conversation with SmartPrep AI."
              className="w-full border-none bg-transparent"
            />
          </div>

          <div className="border-t p-4">
            <div className="flex flex-wrap gap-2 pb-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="rounded-full border bg-background px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex items-end gap-2">
              <Textarea
                rows={2}
                placeholder="Ask your doubt…"
                aria-label="Ask your question"
                className="min-h-[3rem] resize-none rounded-2xl"
              />
              <div className="flex gap-1.5">
                <Button variant="outline" size="icon" aria-label="Attach image" className="min-h-11 min-w-11">
                  <ImagePlus className="size-4" aria-hidden />
                </Button>
                <Button variant="outline" size="icon" aria-label="Voice input" className="min-h-11 min-w-11">
                  <Mic className="size-4" aria-hidden />
                </Button>
                <Button size="icon" aria-label="Send message" className="min-h-11 min-w-11">
                  <Send className="size-4" aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <aside>
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Recent conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No conversations yet.</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}