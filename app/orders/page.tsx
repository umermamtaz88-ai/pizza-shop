import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Accordion from "@/components/ui/Accordion";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orders – Crust Pizza",
  description: "View and track your Crust Pizza orders, delivery status, and order history.",
};

type OrderStatus =
  | "Pending"
  | "Preparing"
  | "Out for delivery"
  | "Delivered"
  | "Picked up"
  | "Cancelled";

type DeliveryType = "Delivery" | "Pickup";

const sampleOrders = [
  {
    id: "CP-2847",
    date: "2025-02-22",
    time: "12:34",
    customer: "Ali Khan",
    items: "2× Margherita, 1× Pepperoni (L)",
    total: 2499,
    status: "Out for delivery" as OrderStatus,
    deliveryType: "Delivery" as DeliveryType,
    address: "Mall Road, Lahore",
    phone: "+92 300 1234567",
  },
  {
    id: "CP-2846",
    date: "2025-02-22",
    time: "11:02",
    customer: "Sara Ahmed",
    items: "1× The Blanco, 1× Garlic Bread",
    total: 1899,
    status: "Delivered" as OrderStatus,
    deliveryType: "Delivery" as DeliveryType,
    address: "F-7 Markaz, Islamabad",
    phone: "+92 321 9876543",
  },
  {
    id: "CP-2845",
    date: "2025-02-21",
    time: "19:45",
    customer: "Usman Malik",
    items: "3× Build Your Own (M), 2× Coke",
    total: 3299,
    status: "Picked up" as OrderStatus,
    deliveryType: "Pickup" as DeliveryType,
    address: "—",
    phone: "+92 333 5551234",
  },
  {
    id: "CP-2844",
    date: "2025-02-21",
    time: "18:20",
    customer: "Fatima Noor",
    items: "1× Tuscany (XL), 1× Caesar Salad",
    total: 1599,
    status: "Preparing" as OrderStatus,
    deliveryType: "Delivery" as DeliveryType,
    address: "Clifton Block 2, Karachi",
    phone: "+92 302 4445678",
  },
  {
    id: "CP-2843",
    date: "2025-02-21",
    time: "14:00",
    customer: "Hassan Raza",
    items: "2× The Big Cheesy, 1× Fries",
    total: 2199,
    status: "Pending" as OrderStatus,
    deliveryType: "Pickup" as DeliveryType,
    address: "—",
    phone: "+92 345 6789012",
  },
];

function StatusBadge({ status }: { status: OrderStatus }) {
  const styles: Record<OrderStatus, string> = {
    Pending: "bg-amber-100 text-amber-800",
    Preparing: "bg-blue-100 text-blue-800",
    "Out for delivery": "bg-orange-100 text-orange-800",
    Delivered: "bg-green-100 text-green-800",
    "Picked up": "bg-green-100 text-green-800",
    Cancelled: "bg-neutral-200 text-neutral-600",
  };
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function OrdersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative h-56 w-full overflow-hidden sm:h-64">
          <Image
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80"
            alt="Orders"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/50">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
              Orders
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <p className="mb-8 text-neutral-600">
            View and track your orders, delivery status, and pickup details.
          </p>

          {/* Table - desktop */}
          <div className="hidden overflow-hidden rounded-xl border border-neutral-200 shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="px-4 py-3 font-semibold text-neutral-900">Order ID</th>
                    <th className="px-4 py-3 font-semibold text-neutral-900">Date & Time</th>
                    <th className="px-4 py-3 font-semibold text-neutral-900">Customer</th>
                    <th className="px-4 py-3 font-semibold text-neutral-900">Items</th>
                    <th className="px-4 py-3 font-semibold text-neutral-900">Total</th>
                    <th className="px-4 py-3 font-semibold text-neutral-900">Status</th>
                    <th className="px-4 py-3 font-semibold text-neutral-900">Delivery</th>
                    <th className="px-4 py-3 font-semibold text-neutral-900">Address / Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/80"
                    >
                      <td className="px-4 py-3">
                        <span className="font-medium text-[#ea580c]">{order.id}</span>
                      </td>
                      <td className="px-4 py-3 text-neutral-700">
                        {order.date}
                        <span className="text-neutral-500"> {order.time}</span>
                      </td>
                      <td className="px-4 py-3 text-neutral-800">{order.customer}</td>
                      <td className="max-w-[200px] px-4 py-3 text-neutral-700">
                        <span className="line-clamp-2">{order.items}</span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-neutral-900">
                        PKR {order.total.toLocaleString()}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={
                            order.deliveryType === "Delivery"
                              ? "text-orange-600 font-medium"
                              : "text-neutral-600"
                          }
                        >
                          {order.deliveryType}
                        </span>
                      </td>
                      <td className="max-w-[180px] px-4 py-3 text-neutral-600">
                        {order.deliveryType === "Delivery" ? (
                          <>
                            <span className="block">{order.address}</span>
                            <span className="text-xs text-neutral-500">{order.phone}</span>
                          </>
                        ) : (
                          <span className="text-neutral-500">Pickup at store</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cards - mobile */}
          <div className="mt-6 space-y-4 md:mt-0 md:hidden">
            {sampleOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-semibold text-[#ea580c]">{order.id}</span>
                  <StatusBadge status={order.status} />
                </div>
                <p className="text-sm text-neutral-500">
                  {order.date} at {order.time}
                </p>
                <p className="mt-1 font-medium text-neutral-800">{order.customer}</p>
                <p className="mt-1 text-sm text-neutral-700 line-clamp-2">{order.items}</p>
                <p className="mt-2 font-semibold text-neutral-900">
                  PKR {order.total.toLocaleString()}
                </p>
                <div className="mt-3 border-t border-neutral-100 pt-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                    {order.deliveryType}
                  </p>
                  {order.deliveryType === "Delivery" ? (
                    <p className="text-sm text-neutral-600">
                      {order.address} · {order.phone}
                    </p>
                  ) : (
                    <p className="text-sm text-neutral-500">Pickup at store</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Q&A Accordion */}
          <section className="mt-14 md:mt-16">
            <h2 className="mb-6 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
              Order questions & answers
            </h2>
            <Accordion
              items={[
                {
                  id: "track",
                  question: "How do I track my order?",
                  answer: (
                    <p>
                      Once your order is confirmed, you can see its status in the orders table above. Statuses include Pending, Preparing, Out for delivery, and Delivered (or Picked up for pickup orders). For delivery orders we’ll use the phone number you provided if we need to reach you.
                    </p>
                  ),
                },
                {
                  id: "delivery-time",
                  question: "How long does delivery take?",
                  answer: (
                    <p>
                      Delivery usually takes 30–45 minutes from the time your order is confirmed, depending on your location and how busy we are. Pickup orders are typically ready in 15–25 minutes. We’ll give you an estimated time when you place your order.
                    </p>
                  ),
                },
                {
                  id: "cancel-modify",
                  question: "Can I cancel or modify my order?",
                  answer: (
                    <p>
                      You can cancel or change your order only while it’s still in &quot;Pending&quot; status. Once we’ve started preparing it, we can’t guarantee changes. Please call your branch as soon as possible with your order ID (e.g. CP-2847) to request a cancellation or change.
                    </p>
                  ),
                },
                {
                  id: "payment",
                  question: "What payment methods do you accept?",
                  answer: (
                    <p>
                      We accept cash on delivery, card on delivery, and online payment when ordering through our website. At the store you can pay by cash or card. Specific options may vary by location.
                    </p>
                  ),
                },
                {
                  id: "delivery-area",
                  question: "What are your delivery areas?",
                  answer: (
                    <p>
                      We deliver from our Lahore, Islamabad, and Karachi branches within a set radius of each store. Enter your address at checkout to see if we deliver to you. If you’re outside the delivery zone, you can still place an order for pickup at the nearest branch.
                    </p>
                  ),
                },
                {
                  id: "reorder",
                  question: "How do I reorder or repeat a previous order?",
                  answer: (
                    <p>
                      You can place a new order anytime from the menu. We’re working on a &quot;Reorder&quot; option for past orders. For now, head to Our Menu and add your favourite items again, or call your branch and quote a previous order ID if you’d like the same items.
                    </p>
                  ),
                },
              ]}
            />
          </section>

          <div className="mt-10 text-center">
            <Link
              href="/#order"
              className="inline-flex items-center gap-2 rounded-full bg-[#ea580c] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#c2410c]"
            >
              Place new order
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
