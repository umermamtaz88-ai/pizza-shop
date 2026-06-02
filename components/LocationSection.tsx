"use client";

import { useState } from "react";
import Image from "next/image";

const locations = [
  {
    id: "lahore",
    name: "Lahore",
    address: "Mall Road, Lahore, Punjab, Pakistan",
    hours: "Sun–Thu 11:00am – 9:00pm, Fri–Sat 11:00am – 10:00pm",
    phone: "+92 42 3576 0000",
  },
  {
    id: "islamabad",
    name: "Islamabad",
    address: "F-7 Markaz, Islamabad, Pakistan",
    hours: "Sun–Thu 11:00am – 9:00pm, Fri–Sat 11:00am – 10:00pm",
    phone: "+92 51 265 0000",
  },
  {
    id: "karachi",
    name: "Karachi",
    address: "Clifton Block 2, Karachi, Sindh, Pakistan",
    hours: "Sun–Thu 11:00am – 9:00pm, Fri–Sat 11:00am – 10:00pm",
    phone: "+92 21 3586 0000",
  },
];

export default function LocationSection() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find((l) => l.id === activeId) ?? locations[0];

  return (
    <section className="bg-neutral-950 px-4 py-16 sm:py-20 md:py-24 relative overflow-hidden border-b border-white/5" id="locations">
      {/* Ambient decorative glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ea580c]/3 blur-[120px] pointer-events-none z-0" />

      <div className="mx-auto max-w-6xl relative z-10">
        <h2 className="mb-3 text-center text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent sm:text-4xl">
          Visit Our Locations
        </h2>
        <p className="text-center text-neutral-400 text-sm max-w-md mx-auto mb-10">
          Cozy dining spots, fresh ingredients, and hot deliveries across the country.
        </p>

        {/* Tabs */}
        <div className="mb-10 flex overflow-x-auto border-b border-white/5 pb-px justify-center gap-4 scrollbar-none">
          {locations.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setActiveId(loc.id)}
              className={`shrink-0 border-b-2 px-6 py-3.5 text-sm font-bold tracking-widest transition-all duration-300 cursor-pointer ${
                activeId === loc.id
                  ? "border-orange-500 text-orange-500 scale-105"
                  : "border-transparent text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {loc.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-5 relative z-10">
          {/* Card 1: Outlet Details & Delivery Promo (Span 2) */}
          <div className="lg:col-span-2 bg-neutral-900/40 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-white/10 transition-colors duration-300">
            <div>
              <span className="inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400 mb-4">
                Now Serving
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-2">{active.name} Outlet</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">{active.address}</p>
              
              <div className="space-y-4 border-t border-white/5 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">Hours of operation</p>
                  <p className="text-sm text-neutral-300 font-medium">{active.hours}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">Contact Hotline</p>
                  <a 
                    href={`tel:${active.phone.replace(/\s/g, "")}`} 
                    className="text-lg font-extrabold text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.44.011-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v1.25Z" />
                    </svg>
                    {active.phone}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Delivery ride banner */}
            <div className="mt-8 flex items-center gap-4 bg-orange-600/10 border border-orange-500/20 rounded-2xl p-4">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/44071-removebg-preview.png"
                  alt="Pizza delivery bike"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Free Hot Delivery</p>
                <p className="text-xs text-neutral-400">Within 30 minutes in all sectors</p>
              </div>
            </div>
          </div>

          {/* Card 2: Wide Immersive grayscaled Google Maps (Span 3) */}
          <div className="lg:col-span-3 min-h-[350px] overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/20 shadow-2xl relative group hover:border-white/10 transition-colors duration-300">
            <iframe
              title="Store location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(active.address)}&output=embed`}
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0 grayscale invert contrast-125 opacity-70 group-hover:opacity-85 transition-opacity duration-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map border highlight */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
