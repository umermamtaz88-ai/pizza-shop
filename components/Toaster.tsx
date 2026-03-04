"use client";

import { Toaster as SonnerToaster } from "sonner";

export default function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      toastOptions={{
        style: {
          background: "var(--toast-bg, #fff)",
          border: "1px solid var(--toast-border, #e5e5e5)",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
        className: "font-sans",
      }}
      richColors
      closeButton
    />
  );
}
