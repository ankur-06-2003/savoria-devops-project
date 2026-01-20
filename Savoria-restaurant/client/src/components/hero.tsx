import { motion } from "framer-motion";
import { Utensils, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="hero-parallax relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(44, 24, 16, 0.4), rgba(44, 24, 16, 0.4)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      <div className="text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Exquisite <span className="text-gradient">Culinary</span>
          <br />
          Experience
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto"
        >
          Indulge in a symphony of flavors crafted by world-class chefs using the finest ingredients, creating unforgettable dining moments.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={scrollToMenu}
            className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            <Utensils className="w-5 h-5 mr-2" />
            Explore Menu
          </Button>
          <Link href="/reserve">
            <Button
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2 text-black" />
              <p className="text-black">Book Table</p>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
