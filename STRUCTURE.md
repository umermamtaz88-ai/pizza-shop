# Crust Pizza – Folder Structure

```
e:\my-pizza\
├── app/
│   ├── layout.tsx          # Root layout (metadata, fonts)
│   ├── page.tsx            # Home page (composes all sections)
│   └── globals.css         # Global + Tailwind styles
├── components/
│   ├── ui/
│   │   └── Button.tsx      # Reusable primary/secondary buttons
│   ├── Navbar.tsx          # Sticky nav: logo, links, Order Online
│   ├── Hero.tsx            # Hero: pizza image, size selector, Order Now
│   ├── LocationSection.tsx # Locations: title, tabs, branch info + map
│   ├── MenuSection.tsx     # Menu: title, filters, pizza grid
│   ├── MenuCard.tsx        # Single pizza card (image, name, price, button)
│   ├── PromoSection.tsx    # Dark promo: image collage + heading
│   └── Footer.tsx          # Links, social, copyright
├── public/
│   └── images/             # Placeholder images (add your assets here)
├── package.json
├── tailwind.config.* / postcss / tsconfig / next.config
└── STRUCTURE.md            # This file
```

**Conventions**
- **Mobile-first:** Base styles for small screens; `sm:`, `md:`, `lg:` for larger.
- **Components:** One main component per section; `MenuCard` reused in `MenuSection`.
- **Styling:** Tailwind only; brand orange `#ea580c` / `orange-600`, black CTAs where needed.
