"use client";

import { useState, useId, type ReactNode } from "react";

type Placement = "top" | "bottom";

interface TooltipProps {
  text: string;
  children: ReactNode;
  placement?: Placement;
  className?: string;
}

export default function Tooltip({
  text,
  children,
  placement = "top",
  className = "",
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const id = useId();

  const placementClasses =
    placement === "top"
      ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
      : "top-full left-1/2 -translate-x-1/2 mt-2";

  return (
    <span
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <span
        id={id}
        role="tooltip"
        aria-hidden={!visible}
        className={`pointer-events-none absolute z-[100] whitespace-nowrap rounded-lg bg-neutral-800 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-opacity duration-150 ${placementClasses} ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
        <span
          className={`absolute left-1/2 -translate-x-1/2 h-0 w-0 border-4 border-transparent ${
            placement === "top"
              ? "top-full border-t-neutral-800"
              : "bottom-full border-b-neutral-800"
          }`}
          aria-hidden
        />
      </span>
    </span>
  );
}
