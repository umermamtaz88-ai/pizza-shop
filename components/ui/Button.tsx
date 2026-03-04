import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "dark" | "heroOrder";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#ea580c] text-white hover:bg-[#c2410c] focus:ring-orange-500 px-5 py-3",
  secondary:
    "border-2 border-neutral-200 text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 focus:ring-neutral-400 px-5 py-3",
  dark:
    "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-600 px-5 py-3",
  heroOrder:
    "bg-neutral-900 text-white focus:ring-neutral-600 px-5 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ea580c] hover:via-[#c2410c] hover:to-neutral-800",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...(props as ButtonHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
