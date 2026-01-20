import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MenuSection from "@/components/menu-section";
import Testimonials from "@/components/testimonials";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <Testimonials />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
