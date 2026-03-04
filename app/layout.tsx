import type { Metadata } from "next";
import { DM_Sans, Poppins, Roboto_Condensed } from "next/font/google";
import { OrderProvider } from "@/components/OrderContext";
import OrderModal from "@/components/OrderModal";
import FloatingActionButton from "@/components/FloatingActionButton";
import Toaster from "@/components/Toaster";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Crust Pizza – Chicago-Style Thin Crust",
  description: "Chicago-style thin crust pizza. Order online, visit our locations, view our menu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${poppins.variable} ${robotoCondensed.variable} antialiased font-sans`}>
        <OrderProvider>
          {children}
          <OrderModal />
          <FloatingActionButton />
          <Toaster />
        </OrderProvider>
      </body>
    </html>
  );
}

