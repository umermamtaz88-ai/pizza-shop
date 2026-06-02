import Image from "next/image";

export default function PromoSection() {
  const pizzaImage =
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80";

  return (
    <section className="bg-neutral-950 px-4 py-16 sm:py-20 md:py-24 relative overflow-hidden border-b border-white/5">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 rounded-full bg-[#fbbf24]/3 blur-[120px] pointer-events-none z-0" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: image collage */}
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3 relative z-10">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-3xl border border-white/5 shadow-2xl group">
              <Image
                src={pizzaImage}
                alt="Crust Pizza"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-3xl border border-white/5 bg-neutral-900/60 backdrop-blur-md text-sm font-bold text-orange-400 sm:aspect-auto sm:min-h-[140px] shadow-lg hover:border-white/10 transition-all duration-300 tracking-widest uppercase">
              Crust Pizza
            </div>
          </div>

          {/* Right: heading + text */}
          <div className="text-white relative z-10">
            <span className="inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400 mb-4">
              Local Legend
            </span>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent sm:text-4xl">
              Chicago-Style Thin Crust Pizza That Even Texans Will Love
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed sm:text-lg font-light leading-relaxed">
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
