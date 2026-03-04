"use client";

import { useState } from "react";
import MenuCard, { type MenuItem } from "./MenuCard";

const categories = [
  { id: "gourmet", label: "Gourmet Pizzas", icon: "🍕" },
  { id: "build", label: "Build Your Own", icon: "👨‍🍳" },
  { id: "salads", label: "Salads & Sides", icon: "🥗" },
  { id: "pasta", label: "Pastas & Subs", icon: "🍝" },
  { id: "other", label: "Everything Else", icon: "🥤" },
];

// 8 different working Unsplash images (used elsewhere on site) – each item gets one, no duplicate in a row
const MENU_IMAGES = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
  "https://images.unsplash.com/photo-1593504049359-74330189a345?w=400&q=80",
  "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
];

const menuItems: MenuItem[] = [
  { id: "g1", name: "The Blanco", price: "$11", imageUrl: MENU_IMAGES[0], category: "gourmet" },
  { id: "g2", name: "Tuscany", price: "$11", imageUrl: MENU_IMAGES[1], category: "gourmet" },
  { id: "g3", name: "The Jerk", price: "$12", imageUrl: MENU_IMAGES[2], category: "gourmet" },
  { id: "g4", name: "Old Smokey", price: "$12", imageUrl: MENU_IMAGES[3], category: "gourmet" },
  { id: "b1", name: "Custom Classic", price: "$10", imageUrl: MENU_IMAGES[4], category: "build" },
  { id: "b2", name: "Create Your Slice", price: "$9", imageUrl: MENU_IMAGES[5], category: "build" },
  { id: "b3", name: "Designer Pie", price: "$13", imageUrl: MENU_IMAGES[6], category: "build" },
  { id: "b4", name: "Make It Yours", price: "$11", imageUrl: MENU_IMAGES[7], category: "build" },
  { id: "s1", name: "House Salad", price: "$6", imageUrl: MENU_IMAGES[0], category: "salads" },
  { id: "s2", name: "Caesar Salad", price: "$7", imageUrl: MENU_IMAGES[1], category: "salads" },
  { id: "s3", name: "Garlic Bread", price: "$5", imageUrl: MENU_IMAGES[2], category: "salads" },
  { id: "s4", name: "Mozzarella Sticks", price: "$6", imageUrl: MENU_IMAGES[3], category: "salads" },
  { id: "p1", name: "Spaghetti & Meatballs", price: "$10", imageUrl: MENU_IMAGES[4], category: "pasta" },
  { id: "p2", name: "Chicken Parmesan", price: "$12", imageUrl: MENU_IMAGES[5], category: "pasta" },
  { id: "p3", name: "Italian Sub", price: "$9", imageUrl: MENU_IMAGES[6], category: "pasta" },
  { id: "p4", name: "Penne Alfredo", price: "$11", imageUrl: MENU_IMAGES[7], category: "pasta" },
  { id: "e1", name: "Fresh Lemonade", price: "$3", imageUrl: MENU_IMAGES[0], category: "other" },
  { id: "e2", name: "Chocolate Brownie", price: "$5", imageUrl: MENU_IMAGES[1], category: "other" },
  { id: "e3", name: "Iced Tea", price: "$2.50", imageUrl: MENU_IMAGES[2], category: "other" },
  { id: "e4", name: "Tiramisu", price: "$6", imageUrl: MENU_IMAGES[3], category: "other" },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("gourmet");
  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-neutral-50 px-4 py-12 sm:py-16 md:py-20" id="menu">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
          Our Menu
        </h2>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "border-[#ea580c] bg-orange-50 text-[#ea580c]"
                  : "border-transparent bg-white text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <span aria-hidden>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid: filtered by category */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
