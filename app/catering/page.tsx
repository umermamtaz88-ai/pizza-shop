import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering & Events – Crust Pizza",
  description: "Order Crust Pizza for your next event. Office parties, birthdays, and gatherings. Packages and delivery options.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", alt: "Pizza for events" },
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80", alt: "Fresh pizza" },
  { src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80", alt: "Ingredients" },
  { src: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=500&q=80", alt: "Pizza party" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80", alt: "Restaurant" },
  { src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80", alt: "Catering spread" },
];

const packages = [
  {
    name: "Office Box",
    guests: "5–15 people",
    includes: "Assorted pizzas, cut and ready to serve. Ideal for meetings and lunch orders.",
    note: "Order 24 hours ahead.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    alt: "Office Box catering",
  },
  {
    name: "Party Pack",
    guests: "15–40 people",
    includes: "Mix of classic and specialty pizzas, plus optional sides. Perfect for birthdays and team events.",
    note: "48 hours notice recommended.",
    image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=600&q=80",
    alt: "Party Pack catering",
  },
  {
    name: "Large Event",
    guests: "40+ people",
    includes: "Custom menu, multiple varieties, delivery or setup. We work with you on timing and quantities.",
    note: "Book at least 1 week in advance.",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
    alt: "Large event catering",
  },
];

const eventTypes = [
  "Office meetings & corporate lunches",
  "Birthday parties & family gatherings",
  "School events & sports teams",
  "Weddings & receptions (pizza stations)",
  "Fundraisers & community events",
];

export default function CateringPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero with image */}
        <section className="relative h-72 w-full overflow-hidden sm:h-80 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=80"
            alt="Catering by Crust Pizza"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl mb-3">
                Catering & Events
              </h1>
              <p className="text-lg text-white/90 max-w-xl mx-auto">
                Make your next event memorable with Crust Pizza.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:py-20">
          {/* Image gallery grid - 6 images */}
          <section className="mb-16 md:mb-24">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl text-center">
              Why Choose Crust Pizza
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-xl shadow-md ${
                    i === 0 ? "col-span-2 sm:col-span-1 aspect-[16/10] sm:aspect-square" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Perfect For: image + list side by side */}
          <section className="mb-16 md:mb-24">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1593504049359-74330189a345?w=800&q=80"
                  alt="Events we cater"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900">
                  Perfect For
                </h2>
                <ul className="space-y-3">
                  {eventTypes.map((item, i) => (
                    <li key={i} className="flex gap-3 text-neutral-700">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ea580c]" aria-hidden />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Packages - each with its own image */}
          <section className="mb-16 md:mb-24">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl text-center">
              Catering Packages
            </h2>
            <div className="space-y-10">
              {packages.map((pkg, i) => (
                <article
                  key={pkg.name}
                  className={`rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm transition-shadow hover:shadow-lg ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="grid gap-0 md:grid-cols-2 md:gap-0">
                    <div className="relative aspect-video md:aspect-auto md:min-h-[240px] overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-neutral-900">{pkg.name}</h3>
                        <span className="rounded-full bg-[#ea580c]/10 px-3 py-1 text-sm font-medium text-[#ea580c]">
                          {pkg.guests}
                        </span>
                      </div>
                      <p className="mb-3 text-neutral-700">{pkg.includes}</p>
                      <p className="text-sm text-neutral-500">{pkg.note}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* How to order: numbered steps with small image */}
          <section className="mb-16 md:mb-24">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                  alt="Order catering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900">
                  How to Order
                </h2>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-sm font-bold text-white">1</span>
                    <div>
                      <span className="font-medium text-neutral-900">Contact us</span> – Call or email with date, headcount, and preferences.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-sm font-bold text-white">2</span>
                    <div>
                      <span className="font-medium text-neutral-900">Confirm menu & timing</span> – We suggest quantities. Delivery or pickup.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-sm font-bold text-white">3</span>
                    <div>
                      <span className="font-medium text-neutral-900">Enjoy</span> – Fresh pizza when you need it.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* CTA with background-style image */}
          <section className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
            <div className="grid gap-0 md:grid-cols-5">
              <div className="relative h-48 md:h-auto md:col-span-2 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
                  alt="Get a quote"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center bg-neutral-50/50">
                <h2 className="mb-3 text-xl font-semibold text-neutral-900">Get a Quote</h2>
                <p className="mb-4 text-neutral-700">
                  Email or call your nearest Crust Pizza with your event date, number of guests, and any dietary needs.
                </p>
                <p className="text-base mb-4">
                  <strong className="text-neutral-900">Email:</strong>{" "}
                  <a href="mailto:catering@crustpizza.com" className="text-[#ea580c] underline hover:no-underline">
                    catering@crustpizza.com
                  </a>
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 w-fit"
                >
                  View Locations & Contact
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
