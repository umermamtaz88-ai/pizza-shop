import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Crust Pizza",
  description: "Learn about Crust Pizza: our story, values, and commitment to Chicago-style thin crust pizza.",
};

const storyImages = [
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80", alt: "Fresh pizza from our kitchen" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", alt: "Our signature pizzas" },
  { src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80", alt: "Fresh ingredients" },
];

const values = [
  "Fresh, high-quality ingredients in every order",
  "Friendly, fast service for dine-in, takeout, and delivery",
  "Supporting local communities and families",
  "Consistent, delicious thin crust that travels well",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero with full-width image */}
        <section className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80"
            alt="Crust Pizza"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl">
              About Crust Pizza
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 md:py-20">
          {/* Our Story: image left, text right */}
          <section className="mb-16 md:mb-24">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg order-2 md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                  alt="Our pizza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                  Our Story
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  Crust Pizza started with a simple idea: bring Chicago-style thin
                  crust pizza to our community. We use fresh ingredients, hand-tossed
                  dough, and time-tested recipes to create pizzas that keep customers
                  coming back. Whether you dine in, take out, or get delivery, we're
                  committed to quality in every slice.
                </p>
              </div>
            </div>
          </section>

          {/* Triple image strip */}
          <section className="mb-16 md:mb-24">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {storyImages.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl shadow-md">
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

          {/* What We Believe: text left, image right */}
          <section className="mb-16 md:mb-24">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                  What We Believe
                </h2>
                <ul className="space-y-3">
                  {values.map((item, i) => (
                    <li key={i} className="flex gap-3 text-neutral-700">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ea580c]" aria-hidden />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
                  alt="Fresh ingredients"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>

          {/* Locations: two images + text */}
          <section className="mb-16 md:mb-24">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl text-center">
              Our Locations
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Crust Pizza restaurant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                  alt="Pizza at Crust Pizza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
            <p className="text-center text-base leading-relaxed text-neutral-700 max-w-2xl mx-auto">
              We serve Lahore, Islamabad, and Karachi. Visit any of our
              locations for the same great pizza and atmosphere, or order
              online for delivery and pickup.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
