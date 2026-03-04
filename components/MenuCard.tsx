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
    <article className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square w-full bg-neutral-100">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
          ✓
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-semibold text-neutral-900">{item.name}</h3>
        <p className="text-sm text-neutral-600">Starting {item.price}</p>
        <div className="mt-auto pt-2">
          <button
            type="button"
            onClick={handleOrder}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ea580c] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c2410c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
}
