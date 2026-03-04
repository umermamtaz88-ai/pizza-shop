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
    <section className="bg-white px-4 py-8 sm:py-10 md:py-12" id="locations">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
          Visit Any Of Our Locations
        </h2>

        {/* Tabs */}
        <div className="mb-6 flex overflow-x-auto border-b border-neutral-200 pb-px scrollbar-thin">
          {locations.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setActiveId(loc.id)}
              className={`shrink-0 border-b-2 px-4 py-2 text-sm font-medium transition-colors sm:px-6 ${
                activeId === loc.id
                  ? "border-[#ea580c] text-[#ea580c]"
                  : "border-transparent text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {loc.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Two columns: delivery image + info (left) | map (right) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="relative mb-4 aspect-[4/5] max-h-[300px] w-full overflow-hidden rounded-lg sm:mb-6">
              <Image
                src="/44071-removebg-preview.png"
                alt="Pizza delivery person on scooter"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 text-neutral-700">
              <p className="font-medium text-neutral-900">{active.name}</p>
              <p className="text-sm">{active.address}</p>
              <p className="text-sm font-medium">Hours of operation</p>
              <p className="text-sm">{active.hours}</p>
              <p className="text-sm">
                <a href={`tel:${active.phone.replace(/\s/g, "")}`} className="underline hover:no-underline">
                  {active.phone}
                </a>
              </p>
            </div>
          </div>
          <div className="min-h-[220px] overflow-hidden rounded-lg border border-neutral-200 lg:min-h-[260px]">
            <iframe
              title="Store location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(active.address)}&output=embed`}
              width="100%"
              height="100%"
              className="min-h-[220px] w-full border-0 lg:min-h-[260px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
