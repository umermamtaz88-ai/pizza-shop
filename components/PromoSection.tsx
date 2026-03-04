import Image from "next/image";

export default function PromoSection() {
  const pizzaImage =
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80";

  return (
    <section className="bg-neutral-900 px-4 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: image collage */}
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={pizzaImage}
                alt="Crust Pizza"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-lg bg-neutral-800 text-sm font-semibold text-white sm:aspect-auto sm:min-h-[140px]">
              CRUST PIZZA
            </div>
          </div>

          {/* Right: heading + text */}
          <div className="text-white">
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Chicago-Style Thin Crust Pizza That Even Texans Will Love
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed sm:text-lg">
              We’re a locally owned pizza shop serving quality ingredients and
              a comfortable atmosphere. Stop by or order online for pickup and
              delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
