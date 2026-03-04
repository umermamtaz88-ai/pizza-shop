"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { toast } from "sonner";
import Tooltip from "./ui/Tooltip";
import { useOrder } from "./OrderContext";

const aboutDropdownItems = [
  { label: "About", href: "/about", tooltip: "Our story & values" },
  { label: "Orders", href: "/orders", tooltip: "View your orders" },
  { label: "Careers", href: "/careers", tooltip: "Join our team" },
];

const navLinks = [
  { label: "Our Menu", href: "/#menu", tooltip: "View our full menu" },
  { label: "Catering", href: "/catering", tooltip: "Order for events & parties" },
  { label: "Contact Us", href: "/contact", tooltip: "Get in touch" },
  { label: "Franchise", href: "/franchise", tooltip: "Franchise opportunities" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { openModal } = useOrder();

  useEffect(() => {
    if (!aboutOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [aboutOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        {/* Logo – icon-based */}
        <Tooltip text="Go to home" placement="bottom">
          <Link
            href="/"
            onClick={() => toast("Going to Home")}
            className="flex shrink-0 items-center gap-2.5 text-neutral-900 no-underline transition-opacity hover:opacity-90"
            aria-label="Crust Pizza home"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
              <svg
                viewBox="0 0 40 40"
                className="h-9 w-9 sm:h-10 sm:w-10"
                aria-hidden
              >
                <defs>
                  <linearGradient id="logo-crust" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#c2410c" />
                  </linearGradient>
                  <linearGradient id="logo-cheese" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="100%" stopColor="#fde68a" />
                  </linearGradient>
                </defs>
                {/* Crust */}
                <circle cx="20" cy="20" r="18" fill="url(#logo-crust)" stroke="#b45309" strokeWidth="1.5" />
                {/* Cheese */}
                <circle cx="20" cy="20" r="14" fill="url(#logo-cheese)" />
                {/* Pepperoni */}
                <circle cx="20" cy="15" r="2.8" fill="#dc2626" />
                <circle cx="27" cy="23" r="2.8" fill="#dc2626" />
                <circle cx="13" cy="23" r="2.8" fill="#dc2626" />
              </svg>
            </span>
            <span className="hidden font-bold tracking-tight sm:inline">
              <span className="bg-gradient-to-r from-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                CRUST
              </span>
              <span className="text-neutral-800"> PIZZA</span>
            </span>
          </Link>
        </Tooltip>

        {/* Desktop nav links – center */}
        <nav
          className="hidden flex-1 justify-center gap-6 md:flex md:items-center"
          aria-label="Main navigation"
        >
          {navLinks.map(({ label, href, tooltip }, index) => (
            <span key={href} className="flex items-center gap-6">
              <Tooltip text={tooltip}>
                <Link
                  href={href}
                  onClick={() => toast(`Going to ${label}`)}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
                >
                  {label}
                </Link>
              </Tooltip>
              {index === 0 && (
                <div className="relative" ref={aboutRef}>
                  <button
                    type="button"
                    onClick={() => setAboutOpen((o) => !o)}
                    className="flex items-center gap-0.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded-md px-1"
                    aria-expanded={aboutOpen}
                    aria-haspopup="true"
                    aria-label="About menu"
                  >
                    About
                    <svg
                      className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {aboutOpen && (
                    <div
                      className="absolute left-1/2 top-full z-50 mt-1 min-w-[160px] -translate-x-1/2 rounded-lg border border-neutral-200 bg-white py-1 shadow-lg"
                      role="menu"
                    >
                      {aboutDropdownItems.map(({ label: itemLabel, href: itemHref, tooltip: itemTooltip }) => (
                        <Tooltip key={itemHref} text={itemTooltip}>
                          <Link
                            href={itemHref}
                            role="menuitem"
                            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                            onClick={() => {
                              setAboutOpen(false);
                              toast(`Going to ${itemLabel}`);
                            }}
                          >
                            {itemLabel}
                          </Link>
                        </Tooltip>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </span>
          ))}
        </nav>

        {/* Right: icon button + Order Online (desktop) or menu (mobile) */}
        <div className="flex shrink-0 items-center gap-1">
          <Tooltip text="View cart & order">
            <button
              type="button"
              onClick={openModal}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Cart / Order"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </Tooltip>
          <div className="hidden md:block">
            <Tooltip text="Place your order online">
              <span className="inline-block">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#ea580c] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#c2410c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Order Online
                </button>
              </span>
            </Tooltip>
          </div>
          {/* Mobile menu button */}
          <Tooltip text={open ? "Close menu" : "Open menu"}>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100 md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? (
                <span className="text-xl leading-none">×</span>
              ) : (
                <span className="text-xl leading-none">☰</span>
              )}
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            <Link
              href={navLinks[0].href}
              className="rounded-lg py-2 text-neutral-700 hover:bg-neutral-50"
              onClick={() => {
                setOpen(false);
                toast(`Going to ${navLinks[0].label}`);
              }}
            >
              {navLinks[0].label}
            </Link>
            <p className="mt-2 mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              About
            </p>
            {aboutDropdownItems.map(({ label: itemLabel, href: itemHref }) => (
              <Link
                key={itemHref}
                href={itemHref}
                className="block rounded-lg py-2 pl-4 text-neutral-700 hover:bg-neutral-50"
                onClick={() => {
                  setOpen(false);
                  toast(`Going to ${itemLabel}`);
                }}
              >
                {itemLabel}
              </Link>
            ))}
            {navLinks.slice(1).map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg py-2 text-neutral-700 hover:bg-neutral-50"
                onClick={() => {
                  setOpen(false);
                  toast(`Going to ${label}`);
                }}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => { openModal(); setOpen(false); }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ea580c] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#c2410c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Order Online
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
