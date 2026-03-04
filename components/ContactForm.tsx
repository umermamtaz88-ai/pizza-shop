"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import Button from "./ui/Button";

const ACCEPT = "image/*,.pdf,.doc,.docx";
const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selected: File | null) => {
    setFileError("");
    if (!selected) {
      setFile(null);
      return;
    }
    if (selected.size > MAX_SIZE_BYTES) {
      setFileError(`File must be under ${MAX_SIZE_MB} MB`);
      setFile(null);
      return;
    }
    setFile(selected);
  };

  const onDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    handleFile(f ?? null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app you would send name, email, subject, message, and file to an API
    setSubmitted(true);
    toast.success("Message sent!", { description: "We'll get back to you soon." });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-neutral-700">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:outline-none focus:ring-1 focus:ring-[#ea580c]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:outline-none focus:ring-1 focus:ring-[#ea580c]"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-1 block text-sm font-medium text-neutral-700">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:outline-none focus:ring-1 focus:ring-[#ea580c]"
          placeholder="e.g. Feedback, Catering inquiry"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:outline-none focus:ring-1 focus:ring-[#ea580c] resize-y min-h-[100px]"
          placeholder="Your message..."
        />
      </div>

      {/* File upload */}
      <div>
        <span className="mb-1 block text-sm font-medium text-neutral-700">
          Attachment <span className="text-neutral-500 font-normal">(optional, max {MAX_SIZE_MB} MB)</span>
        </span>
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT}
          onChange={onFileInputChange}
          className="sr-only"
          id="contact-file"
          aria-describedby="file-hint"
        />
        <div
          onDragEnter={onDrag}
          onDragLeave={onDrag}
          onDragOver={onDrag}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`cursor-pointer rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors ${
            dragActive
              ? "border-[#ea580c] bg-orange-50/50"
              : "border-neutral-300 bg-neutral-50/50 hover:border-neutral-400 hover:bg-neutral-100/50"
          } ${fileError ? "border-red-400 bg-red-50/50" : ""}`}
        >
          {file ? (
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-3">
              <span className="text-sm font-medium text-neutral-800 truncate max-w-[200px] sm:max-w-none">
                {file.name}
              </span>
              <span className="text-xs text-neutral-500">{formatFileSize(file.size)}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  setFileError("");
                  if (inputRef.current) inputRef.current.value = "";
                }}
                className="text-sm font-medium text-[#ea580c] hover:underline"
              >
                Remove
              </button>
            </div>
          ) : (
            <p className="text-sm text-neutral-600">
              Drag and drop a file here, or <span className="font-medium text-[#ea580c]">browse</span>
            </p>
          )}
        </div>
        <p id="file-hint" className="mt-1 text-xs text-neutral-500">
          Images, PDF, or Word documents
        </p>
        {fileError && <p className="mt-1 text-sm text-red-600" role="alert">{fileError}</p>}
      </div>

      {submitted ? (
        <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
          Thank you! We&apos;ve received your message and will get back to you soon.
        </div>
      ) : (
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
        </Button>
      )}
    </form>
  );
}
