// app/upload/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";     // ← same helper as before
import { Loader2 } from "lucide-react";

type Stage = "idle" | "upload" | "process" | "done" | "error";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [stage, setStage] = useState<Stage>("idle");
  const [msg, setMsg]   = useState("");

  // -------- UPLOAD HANDLER --------
  const handleUpload = async () => {
    if (!file) return;

    try {
      // 1️⃣ Upload to Supabase Storage
      setStage("upload");
      setMsg("Uploading…");
      const { data, error } = await supabase.storage
        .from("uploads")                                   // be sure this bucket exists
        .upload(`pitches/${crypto.randomUUID()}-${file.name}`, file);

      if (error) throw error;

      // 2️⃣ Trigger the server‑side processing route
      setStage("process");
      setMsg("Analyzing your pitch…");
      const res = await fetch("/api/process-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: data.path, filename: file.name }),
      });
      if (!res.ok) throw new Error("AI processing failed.");

      // ✔️ Finished
      setStage("done");
      setMsg("Done! You can now search or view the summary.");
      setFile(null);
    } catch (err: any) {
      setStage("error");
      setMsg(err.message || "Something went wrong.");
    }
  };

  // -------- UI --------
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16 bg-background text-foreground">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-primary">
          Upload your Pitch Deck
        </h1>

        {/* file chooser */}
        <input
          type="file"
          accept=".ppt,.pptx,.doc,.docx,.pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full cursor-pointer rounded-lg border border-border bg-background p-2 text-sm"
        />

        {/* action button */}
        <button
          onClick={handleUpload}
          disabled={!file || stage === "upload" || stage === "process"}
          className="mt-6 w-full rounded-lg bg-primary px-4 py-2 text-white transition
                     hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/40"
        >
          {stage === "upload" || stage === "process" ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              {msg}
            </span>
          ) : (
            "Upload & Analyse"
          )}
        </button>

        {/* status / error */}
        {msg && stage !== "upload" && stage !== "process" && (
          <p
            className={`mt-4 text-center ${
              stage === "error" ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {msg}
          </p>
        )}
      </div>
    </section>
  );
}
