import Link from "next/link";
import Tooltip from "./ui/Tooltip";

const footerLinks = [
  { label: "Our Menu", href: "/#menu" },
  { label: "Catering", href: "/catering" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Franchise", href: "/franchise" },
  { label: "Order Online", href: "/orders" },
];

const socialLinks = [
  {
    label: "Facebook",
    tooltip: "Follow us on Facebook",
    href: "https://facebook.com",
    bgClass: "bg-[#1877F2] hover:bg-[#0d65d9] hover:scale-110",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    tooltip: "Chat with us on WhatsApp",
    href: "https://wa.me/924235760000",
    bgClass: "bg-[#25D366] hover:bg-[#1da851] hover:scale-110",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    tooltip: "Follow us on Instagram",
    href: "https://instagram.com",
    bgClass: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 hover:scale-110",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Google",
    tooltip: "Find us on Google Maps",
    href: "https://maps.google.com",
    bgClass: "bg-[#4285F4] hover:bg-[#3367d6] hover:scale-110",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="white" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="white" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="white" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 relative z-10">
      {/* Badges row */}
      <div className="border-b border-white/5 bg-neutral-900/10 px-4 py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
          {/* Fresh Ingredients */}
          <div className="flex flex-col items-center gap-3 text-center group">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 ring-2 ring-emerald-500/30 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-emerald-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Fresh Ingredients</p>
              <p className="text-xs text-neutral-500 mt-0.5">Always quality</p>
            </div>
          </div>

          {/* Fast Delivery */}
          <div className="flex flex-col items-center gap-3 text-center group">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 ring-2 ring-orange-500/30 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Fast Delivery</p>
              <p className="text-xs text-neutral-500 mt-0.5">30 min or less</p>
            </div>
          </div>

          {/* Top Rated */}
          <div className="flex flex-col items-center gap-3 text-center group">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 ring-2 ring-amber-500/30 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-amber-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Top Rated</p>
              <p className="text-xs text-neutral-500 mt-0.5">4.9★ average</p>
            </div>
          </div>

          {/* 100% Satisfaction */}
          <div className="flex flex-col items-center gap-3 text-center group">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/10 ring-2 ring-sky-500/30 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-sky-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">100% Satisfaction</p>
              <p className="text-xs text-neutral-500 mt-0.5">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upper block: Catering, Work, Franchise */}
      <div className="border-b border-white/5 px-4 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/10 transition-colors duration-300">
            <h3 className="mb-3 font-bold text-white text-lg tracking-tight">
              Catering & Events
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Make your next event memorable with Crust Pizza catering. Perfect
              for offices, parties, and gatherings.
            </p>
          </div>
          <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/10 transition-colors duration-300">
            <h3 className="mb-3 font-bold text-white text-lg tracking-tight">
              Work at Crust Pizza
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Join our team. We’re always looking for friendly, motivated people
              to help us serve great pizza.
            </p>
          </div>
          <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/10 transition-colors duration-300">
            <h3 className="mb-3 font-bold text-white text-lg tracking-tight">
              Own a Crust Franchise
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Interested in opening your own Crust Pizza? Get in touch about
              franchise opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer: links, contact, social, copyright */}
      <div className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <nav
            className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-neutral-400"
            aria-label="Footer navigation"
          >
            {footerLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
          <p className="mb-8 text-sm text-neutral-400 font-light">
            Tell us how we’re doing.{" "}
            <a
              href="mailto:feedback@crustpizza.com"
              className="underline text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-200"
            >
              feedback@crustpizza.com
            </a>
          </p>
          <div className="mb-8 flex justify-center gap-3">
            {socialLinks.map(({ label, href, icon, bgClass, tooltip }) => (
              <Tooltip key={label} text={tooltip} placement="top">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${bgClass}`}
                  aria-label={label}
                >
                  {icon}
                </a>
              </Tooltip>
            ))}
          </div>
          <p className="text-xs text-neutral-600 font-semibold">
            © {new Date().getFullYear()} CRUST PIZZA CO.
          </p>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-neutral-900/50 px-4 py-2 text-xs text-neutral-400 shadow-sm transition hover:shadow-md hover:border-white/10 hover:bg-neutral-900"
          >
            Powered by{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1155 1000"
              className="h-4 w-4"
            >
              <path d="m577.3 0 577.4 1000H0z" fill="currentColor" />
            </svg>
            <span className="font-bold text-white">Vercel</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
