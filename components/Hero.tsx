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
    <section className="relative overflow-hidden min-h-screen flex flex-col bg-neutral-950">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ea580c]/6 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#fbbf24]/4 blur-[130px] pointer-events-none z-0" />
      {/* Section 1: Size selector */}
      <div className="relative z-20 flex flex-col items-center pt-6 pb-2 sm:pb-4">
        <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
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
                className={`h-10 w-10 rounded-full text-sm font-bold transition-all duration-300 sm:h-12 sm:w-12 border ${selectedSize === size
                  ? "bg-[#ea580c] border-[#ea580c] text-white shadow-lg shadow-orange-500/25 scale-110"
                  : "bg-neutral-900/60 border-white/5 text-neutral-300 hover:bg-neutral-800/80 hover:text-white"
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
          className="relative w-full min-w-full aspect-square drop-shadow-[0_25px_50px_-12px_rgba(234,88,12,0.15)]"
          style={{ transform: `translateY(-25%) scale(${sizeScale[selectedSize]})` }}
        >
          {/* Pizza radial glow */}
          <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-orange-600/10 to-amber-600/10 blur-3xl -z-10 animate-pulse pointer-events-none" />

          {/* Pizza circle - picture style: shadow + frame */}
          <div className="absolute inset-0 rounded-full overflow-hidden ring-4 ring-white/10 ring-offset-4 ring-offset-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
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
                    className={`absolute text-[clamp(0.4rem,1.1vw,0.6rem)] font-bold uppercase tracking-widest whitespace-nowrap -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      isHighlighted ? "text-orange-500 scale-110 drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]" : "text-neutral-500"
                    }`}
                    style={{
                      left: `${textX}%`,
                      top: `${textY}%`,
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

      {/* Section 4: Premium glass card */}
      <div className="relative z-10 w-full px-4 py-12 sm:py-16 md:py-20 mt-auto">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-10 bg-neutral-900/40 border border-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
          {/* Left: Pizza image */}
          <div className="relative w-full flex-shrink-0 overflow-hidden rounded-2xl md:w-2/5 md:max-w-md ring-1 ring-white/10">
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
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 px-8 py-8 text-center shadow-lg shadow-orange-500/5 ring-1 ring-white/5">
              <span className="text-2xl font-black tracking-widest bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent sm:text-3xl block">
                CRUST
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mt-1">
                PIZZA CO.
              </span>
            </div>
          </div>
          {/* Right: Headline + description */}
          <div className="flex flex-1 flex-col justify-center text-white">
            <h2 className="mb-4 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
              Chicago-Style Thin Crust Pizza That Even Texans Will Love
            </h2>
            <p className="max-w-lg text-neutral-400 sm:text-lg font-light leading-relaxed">
              We&apos;re a locally owned pizza shop serving quality ingredients and a comfortable
              atmosphere. Stop by or order online for pickup and delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Order Now - clickable overlay */}
      <div className="relative z-20 pointer-events-auto pb-12 sm:pb-16 flex justify-center">
        <Tooltip text="Place your order" placement="top">
          <span className="inline-block">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white focus:ring-orange-500 px-8 py-4 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
            >
              Order Now
            </button>
          </span>
        </Tooltip>
      </div>
    </section>
  );
}
