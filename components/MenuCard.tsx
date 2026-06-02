"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useOrder } from "./OrderContext";

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
}

interface MenuCardProps {
  item: MenuItem;
}

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { addItem } = useOrder();

  const handleOrder = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: parsePrice(item.price),
    });
    toast.success("Added to cart", { description: `${item.name} has been added to your order.` });
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/60 backdrop-blur-sm shadow-lg hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/25">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-orange-400 transition-colors duration-200">{item.name}</h3>
        <p className="text-sm text-neutral-400">Starting <span className="text-orange-400 font-semibold">{item.price}</span></p>
        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={handleOrder}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 hover:bg-orange-500 active:scale-95 text-white py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20"
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
}
