import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Crust Pizza",
  description: "Get in touch with Crust Pizza: locations, hours, phone numbers, and feedback.",
};

const locations = [
  {
    name: "Lahore",
    address: "Mall Road, Lahore, Punjab, Pakistan",
    hours: "Sun–Thu 11:00am – 9:00pm, Fri–Sat 11:00am – 10:00pm",
    phone: "+92 42 3576 0000",
  },
  {
    name: "Islamabad",
    address: "F-7 Markaz, Islamabad, Pakistan",
    hours: "Sun–Thu 11:00am – 9:00pm, Fri–Sat 11:00am – 10:00pm",
    phone: "+92 51 265 0000",
  },
  {
    name: "Karachi",
    address: "Clifton Block 2, Karachi, Sindh, Pakistan",
    hours: "Sun–Thu 11:00am – 9:00pm, Fri–Sat 11:00am – 10:00pm",
    phone: "+92 21 3586 0000",
  },
];

const contactImages = [
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80", alt: "Visit us" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", alt: "Our pizza" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80", alt: "Restaurant" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative h-64 w-full overflow-hidden sm:h-72 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
            alt="Contact Crust Pizza"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
              Contact Us
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:py-20">
          {/* Three image strip */}
          <section className="mb-12 md:mb-16">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {contactImages.map((img, i) => (
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

          {/* Enquiries: image + text */}
          <section className="mb-16 md:mb-20">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
              <div className="relative aspect-video md:aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Get in touch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900">
                  General Enquiries & Feedback
                </h2>
                <p className="mb-6 text-neutral-700">
                  Have a question or feedback? We&apos;d love to hear from you. Send a message below or email us.
                </p>
                <p className="mb-6 text-base">
                  <strong className="text-neutral-900">Email:</strong>{" "}
                  <a
                    href="mailto:feedback@crustpizza.com"
                    className="text-[#ea580c] underline hover:no-underline"
                  >
                    feedback@crustpizza.com
                  </a>
                </p>
                <ContactForm />
              </div>
            </div>
          </section>

          {/* Locations: two images + cards */}
          <section className="mb-16 md:mb-20">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 text-center">
              Our Locations
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                  alt="Crust Pizza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                  alt="Fresh pizza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
            <p className="mb-6 text-center text-neutral-700">
              Visit us or call your nearest branch for orders and reservations.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="mb-2 font-semibold text-neutral-900">{loc.name}</h3>
                  <p className="text-sm text-neutral-600">{loc.address}</p>
                  <p className="mt-1 text-sm text-neutral-600">{loc.hours}</p>
                  <p className="mt-2 text-sm">
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="font-medium text-[#ea580c] hover:underline"
                    >
                      {loc.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Catering & Franchise */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 sm:p-8">
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              Catering & Franchise
            </h2>
            <p className="text-neutral-700">
              For catering and franchise inquiries, please email{" "}
              <a
                href="mailto:feedback@crustpizza.com"
                className="text-[#ea580c] underline hover:no-underline"
              >
                feedback@crustpizza.com
              </a>{" "}
              and we'll get back to you shortly.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
