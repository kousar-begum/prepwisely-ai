import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText, FolderOpen, UploadCloud } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { PlaceholderPanel } from "@/components/common/PlaceholderPanel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/upload")({
  component: UploadPage,
});

function UploadPage() {
  const [dragging, setDragging] = useState(false);

  return (
    <>
      <PageHeader
        title="Syllabus Upload"
        description="Upload your syllabus to unlock AI-powered learning. PDF, DOCX, TXT and images are supported."
      />

      <section
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
        }}
        className={cn(
          "rounded-3xl border-2 border-dashed bg-card/60 px-6 py-16 text-center transition-colors",
          dragging && "border-primary bg-accent/50",
        )}
      >
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
          <UploadCloud className="size-6" aria-hidden />
        </span>
        <h2 className="mt-5 text-lg font-semibold">Drag and drop your syllabus here</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Upload your syllabus to unlock AI-powered learning.
        </p>
        <div className="mt-6">
          <Button className="rounded-full px-6">
            <FolderOpen className="size-4" aria-hidden />
            Browse Files
          </Button>
          <input type="file" className="sr-only" aria-label="Upload syllabus file" />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">PDF · DOCX · TXT · Image — up to 20&nbsp;MB</p>
      </section>

      <section className="rounded-3xl border bg-card p-6 shadow-soft">
        <h2 className="flex items-center gap-2 text-sm font-semibold">
          <FileText className="size-4 text-primary" aria-hidden />
          Upload progress
        </h2>
        <Progress value={0} className="mt-4" aria-label="Upload progress" />
        <p className="mt-3 text-sm text-muted-foreground">No file uploaded yet.</p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Topic Extraction",
          "Unit Detection",
          "Subject Identification",
          "Difficulty Analysis",
          "Learning Roadmap",
        ].map((s) => (
          <PlaceholderPanel
            key={s}
            title={s}
            message="Results will appear here after your syllabus is processed."
          />
        ))}
      </div>
    </>
  );
}