import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import MenuSection from "@/components/MenuSection";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LocationSection />
        <MenuSection />
        <PromoSection />
        <Footer />
      </main>
    </>
  );
}
