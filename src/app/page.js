import About from "@/components/home/About";
import ContactSection from "@/components/home/Contact";
import GallerySection from "@/components/home/Gallery";
import Menu from "@/components/home/Menu";
import ProductSection from "@/components/home/Product";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";
import CaffioProfileDashboard from "@/components/home/Profile";

export default function Home() {
  return (
    <div>
      <Welcome />
      <About />
      <Menu />
      <ProductSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
