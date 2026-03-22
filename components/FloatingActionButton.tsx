"use client";

import { useOrder } from "./OrderContext";

export default function FloatingActionButton() {
  const { openModal, totalItems } = useOrder();

  return (
    <button
      type="button"
      onClick={openModal}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-lg shadow-orange-500/30 hover:bg-[#c2410c] hover:shadow-xl hover:shadow-orange-500/40 focus:outline-none focus:ring-4 focus:ring-orange-400/50 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="Open cart"
    >
      <svg
        className="h-6 w-6 sm:h-7 sm:w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#ea580c] shadow-md sm:h-6 sm:w-6 sm:text-xs">
          {totalItems}
        </span>
      )}
    </button>
  );
}
