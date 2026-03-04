import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise – Crust Pizza",
  description: "Own a Crust Pizza franchise. Learn about requirements, support, and how to get started.",
};

const franchiseBenefits = [
  "Proven brand and menu that customers love",
  "Training and ongoing operational support",
  "Marketing and promotional materials",
  "Supply chain and vendor relationships",
  "Site selection and build-out guidance",
];

const steps = [
  { step: 1, title: "Submit an inquiry", text: "Tell us about yourself and your interest in owning a Crust Pizza location." },
  { step: 2, title: "Initial discussion", text: "We'll review your application and schedule a call to discuss fit and markets." },
  { step: 3, title: "Discovery & agreement", text: "Review our franchise disclosure document and sign a franchise agreement." },
  { step: 4, title: "Training & open", text: "Complete training, build or adapt your store, and open with our support." },
];

const franchiseImages = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80", alt: "Crust Pizza restaurant" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", alt: "Our pizza" },
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80", alt: "Fresh pizza" },
];

export default function FranchisePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero with image */}
        <section className="relative h-72 w-full overflow-hidden sm:h-80 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
            alt="Own a Crust Pizza Franchise"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl mb-3">
                Own a Crust Pizza Franchise
              </h1>
              <p className="text-lg text-white/90 max-w-xl mx-auto">
                Partner with a brand built on quality pizza and strong operations.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:py-20">
          {/* Three image strip */}
          <section className="mb-16 md:mb-20">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {franchiseImages.map((img, i) => (
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

          {/* Why franchise: image + list */}
          <section className="mb-16 md:mb-20">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg order-2 md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                  alt="Crust Pizza brand"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900">
                  Why Franchise With Crust Pizza
                </h2>
                <ul className="space-y-3">
                  {franchiseBenefits.map((item, i) => (
                    <li key={i} className="flex gap-3 text-neutral-700">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ea580c]" aria-hidden />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* What we look for */}
          <section className="mb-16 md:mb-20">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 text-center">
              What We Look For
            </h2>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <p className="mb-4 text-neutral-700">
                We want franchisees who share our commitment to quality and customer service. Ideal partners have:
              </p>
              <ul className="list-inside list-disc space-y-2 text-neutral-700">
                <li>Experience in retail, food service, or business management</li>
                <li>Financial capacity to meet initial investment and ongoing fees</li>
                <li>Ability to follow brand standards and operations</li>
                <li>Interest in growing with Crust Pizza in your market</li>
              </ul>
            </div>
          </section>

          {/* How it works: two images + steps */}
          <section className="mb-16 md:mb-20">
            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                  alt="Fresh pizza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Restaurant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 text-center">
              How It Works
            </h2>
            <div className="space-y-6">
              {steps.map(({ step, title, text }) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-sm font-bold text-white">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{title}</h3>
                    <p className="mt-1 text-neutral-700">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Get in touch */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">Get in Touch</h2>
            <p className="mb-6 text-neutral-700">
              Ready to learn more? Send us your name, contact details, and a brief note about your background and preferred city.
            </p>
            <p className="text-base mb-6">
              <strong className="text-neutral-900">Email:</strong>{" "}
              <a href="mailto:franchise@crustpizza.com" className="text-[#ea580c] underline hover:no-underline">
                franchise@crustpizza.com
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                About Crust Pizza
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
