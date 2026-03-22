"use client";

import { useState } from "react";
import Image from "next/image";
import Tooltip from "./ui/Tooltip";
import { useOrder } from "./OrderContext";

const sizes = ["S", "M", "L", "XL"] as const;
const sizeScale: Record<(typeof sizes)[number], number> = {
  S: 0.58,
  M: 0.78,
  L: 0.96,
  XL: 1.08,
};

const pizzaNames = [
  "MARGHERITA",
  "THE BLANCO",
  "TUSCANY",
  "MR. POTATO HEAD",
  "THE BIG CHEESY",
  "THE JERK",
  "OLD SMOKEY",
  "THE VEGGIE",
  "THE MISSING LINK",
];

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState<(typeof sizes)[number]>("L");
  const [highlightedPizza, setHighlightedPizza] = useState(0);
  const { openModal } = useOrder();

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col bg-neutral-200/80">
      {/* Section 1: Size selector */}
      <div className="relative z-20 flex flex-col items-center pt-6 pb-2 sm:pb-4">
        <span className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
          Select size
        </span>
        <div className="flex justify-center gap-2">
          {sizes.map((size) => (
            <Tooltip
              key={size}
              text={
                size === "S"
                  ? "Small"
                  : size === "M"
                    ? "Medium"
                    : size === "L"
                      ? "Large"
                      : "Extra large"
              }
              placement="bottom"
            >
              <button
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`h-10 w-10 rounded-full text-sm font-semibold transition-colors sm:h-12 sm:w-12 ${selectedSize === size
                  ? "bg-neutral-900 text-white"
                  : "bg-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-neutral-300"
                  }`}
                aria-pressed={selectedSize === size}
                aria-label={`Size ${size}`}
              >
                {size}
              </button>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Huge centered pizza + dotted arc + pizza names — scales with selected size (background) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="relative w-full min-w-full aspect-square drop-shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]"
          style={{ transform: `translateY(-25%) scale(${sizeScale[selectedSize]})` }}
        >
          {/* Pizza circle - picture style: shadow + frame */}
          <div className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-white/90 ring-offset-4 ring-offset-neutral-200/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_10px_25px_-5px_rgba(0,0,0,0.06),0_25px_50px_-12px_rgba(0,0,0,0.15)]">
            <Image
              src="/057f1b6c-ec55-47d9-8275-cabf3479c3fe.jpg"
              alt="Fresh pepperoni pizza with melted cheese"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          {/* Dotted circular arc around pizza */}
          <svg
            className="absolute w-[108%] h-[108%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <circle
              cx="50"
              cy="50"
              r="50"
              fill="none"
              stroke="#d4d4d4"
              strokeWidth="0.6"
              strokeDasharray="2 5"
            />
          </svg>

          {/* Dots on the arc (clickable) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[118%] aspect-square relative">
              {pizzaNames.map((name, i) => {
                const angle = (i / pizzaNames.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const r = 50;
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setHighlightedPizza(i)}
                    className="absolute left-0 top-0 w-4 h-4 -ml-2 -mt-2 pointer-events-auto group"
                    style={{
                      transform: `translate(${x}%, ${y}%)`,
                    }}
                    aria-pressed={highlightedPizza === i}
                    aria-label={`Select ${name}`}
                  >
                    <span className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-neutral-800 -translate-x-1/2 -translate-y-1/2 group-hover:bg-neutral-600" />
                  </button>
                );
              })}
            </div>
          </div>
          {/* Pizza names along the arc */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[118%] aspect-square relative">
              {pizzaNames.map((name, i) => {
                const angle = (i / pizzaNames.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const textR = 54;
                const textX = 50 + textR * Math.cos(rad);
                const textY = 50 + textR * Math.sin(rad);
                const isHighlighted = highlightedPizza === i;
                return (
                  <span
                    key={name}
                    className="absolute text-[clamp(0.4rem,1.1vw,0.6rem)] font-semibold uppercase tracking-wider whitespace-nowrap -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${textX}%`,
                      top: `${textY}%`,
                      color: isHighlighted ? "#ea580c" : "#525252",
                    }}
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Dark block — pizza image, CRUST PIZZA card, headline + description */}
      <div className="relative z-10 w-full bg-neutral-900 px-4 py-12 sm:py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-10">
          {/* Left: Pizza image */}
          <div className="relative w-full flex-shrink-0 overflow-hidden rounded-2xl md:w-2/5 md:max-w-md">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/057f1b6c-ec55-47d9-8275-cabf3479c3fe.jpg"
                alt="Fresh pizza on wooden board"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          {/* Middle: CRUST PIZZA card */}
          <div className="flex flex-shrink-0 items-center justify-center md:w-auto">
            <div className="rounded-xl border border-neutral-600 bg-neutral-800 px-8 py-6 text-center">
              <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                CRUST PIZZA
              </span>
            </div>
          </div>
          {/* Right: Headline + description */}
          <div className="flex flex-1 flex-col justify-center text-white">
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Chicago-Style Thin Crust Pizza That Even Texans Will Love
            </h2>
            <p className="max-w-lg text-neutral-300 sm:text-lg">
              We&apos;re a locally owned pizza shop serving quality ingredients and a comfortable
              atmosphere. Stop by or order online for pickup and delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Order Now - clickable overlay */}
      <div className="relative z-20 pointer-events-auto pb-8 sm:pb-10 md:pb-12">
        <Tooltip text="Place your order" placement="top">
          <span className="inline-block">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 bg-neutral-900 text-white focus:ring-neutral-600 px-5 py-3 hover:bg-gradient-to-r hover:from-[#ea580c] hover:via-[#c2410c] hover:to-neutral-800 shadow-lg sm:px-6 sm:py-3"
            >
              Order Now
            </button>
          </span>
        </Tooltip>
      </div>
    </section>
  );
}
