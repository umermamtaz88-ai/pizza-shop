import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers – Crust Pizza",
  description: "Join the Crust Pizza team. View open positions, benefits, and how to apply.",
};

const benefits = [
  "Flexible schedules for students and part-time workers",
  "Competitive pay and tips where applicable",
  "Meal discounts and team perks",
  "Growth opportunities: crew to shift lead to manager",
  "Friendly, supportive team environment",
];

const openRoles = [
  {
    title: "Team Member / Crew",
    location: "Lahore, Islamabad, Karachi",
    type: "Part-time & Full-time",
    description: "Prepare food, serve customers, and keep the store running smoothly. No experience required—we train you.",
  },
  {
    title: "Shift Lead",
    location: "All locations",
    type: "Full-time",
    description: "Lead shifts, support the team, and ensure quality and cleanliness. Previous restaurant experience preferred.",
  },
  {
    title: "Assistant Manager",
    location: "All locations",
    type: "Full-time",
    description: "Support daily operations, inventory, and staff scheduling. Leadership and pizza experience a plus.",
  },
];

const careerImages = [
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&q=80", alt: "Team at work" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80", alt: "Restaurant" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", alt: "Our pizza" },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero with image */}
        <section className="relative h-72 w-full overflow-hidden sm:h-80 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80"
            alt="Careers at Crust Pizza"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl mb-3">
                Careers at Crust Pizza
              </h1>
              <p className="text-lg text-white/90 max-w-xl mx-auto">
                Join a team that loves great pizza and great people.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:py-20">
          {/* Three image strip */}
          <section className="mb-16 md:mb-20">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {careerImages.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 33vw, 280px"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Why join: image + list */}
          <section className="mb-16 md:mb-20">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                  alt="Work with us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900">
                  Why Work With Us
                </h2>
                <ul className="space-y-3">
                  {benefits.map((item, i) => (
                    <li key={i} className="flex gap-3 text-neutral-700">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ea580c]" aria-hidden />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Open positions */}
          <section className="mb-16 md:mb-20">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-neutral-900 text-center">
              Open Positions
            </h2>
            <div className="space-y-6">
              {openRoles.map((role) => (
                <article
                  key={role.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-neutral-900">{role.title}</h3>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                      {role.type}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-neutral-500">{role.location}</p>
                  <p className="text-neutral-700">{role.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* How to apply: image + CTA */}
          <section className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
            <div className="grid gap-0 md:grid-cols-5">
              <div className="relative h-56 md:h-auto md:col-span-2 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
                  alt="Join our team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center bg-neutral-50/50">
                <h2 className="mb-3 text-xl font-semibold text-neutral-900">How to Apply</h2>
                <p className="mb-4 text-neutral-700">
                  Send your resume and a short note about why you'd like to join Crust Pizza. We'll get back to you soon.
                </p>
                <p className="text-base mb-2">
                  <strong className="text-neutral-900">Email:</strong>{" "}
                  <a href="mailto:careers@crustpizza.com" className="text-[#ea580c] underline hover:no-underline">
                    careers@crustpizza.com
                  </a>
                </p>
                <p className="text-sm text-neutral-600 mb-6">
                  Or visit any of our locations and ask for a manager—we're happy to meet you in person.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 w-fit"
                >
                  View Our Locations
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
