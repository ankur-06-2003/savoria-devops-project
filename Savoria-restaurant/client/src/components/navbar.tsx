import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Calendar, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import CartSidebar from "@/components/cart-sidebar";
import { Link } from "wouter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? "navbar-scroll shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-playfair text-2xl md:text-3xl font-bold text-primary"
        >
          Savoria
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-darkBrown hover:text-primary transition-colors duration-200"
          >
            <Link to="/"> Home</Link>  
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="text-darkBrown hover:text-primary transition-colors duration-200"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-darkBrown hover:text-primary transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-darkBrown hover:text-primary transition-colors duration-200"
          >
            Contact
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-darkBrown hover:text-primary transition-colors duration-200 mr-4"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </button>
          <Link href="/reserve">
            <Button className="btn-primary text-black px-6 py-2 rounded-full font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              Reserve Table
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-darkBrown"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-darkBrown hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left text-darkBrown hover:text-primary transition-colors duration-200"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-darkBrown hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-darkBrown hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-darkBrown hover:text-primary transition-colors duration-200 mb-4 flex items-center justify-center"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              Cart {totalItems > 0 && `(${totalItems})`}
            </button>
            <Link href="/reserve">
              <Button className="btn-primary text-black px-6 py-2 rounded-full font-medium w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Reserve Table
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
      
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </motion.nav>
  );
}
