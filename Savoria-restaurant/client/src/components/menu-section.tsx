import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/menu-items";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

type Category = "all" | "appetizers" | "mains" | "desserts";

export default function MenuSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filterButtons = [
    { key: "all" as Category, label: "All Dishes" },
    { key: "appetizers" as Category, label: "Appetizers" },
    { key: "mains" as Category, label: "Main Courses" },
    { key: "desserts" as Category, label: "Desserts" },
  ];

  const filteredItems = activeFilter === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold text-darkBrown mb-4"
          >
            Our <span className="text-gradient">Signature</span> Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-secondary max-w-2xl mx-auto"
          >
            Each dish is carefully crafted with passion and precision, featuring fresh, locally-sourced ingredients and innovative culinary techniques.
          </motion.p>
        </div>

        {/* Menu Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterButtons.map((button) => (
            <Button
              key={button.key}
              onClick={() => setActiveFilter(button.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === button.key
                  ? "bg-primary text-white"
                  : "bg-muted text-darkBrown hover:bg-primary hover:text-white"
              }`}
            >
              {button.label}
            </Button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="menu-card bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-darkBrown mb-2">
                  {item.name}
                </h3>
                <p className="text-secondary mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">
                    Rs {item.price}
                  </span>
                  <Button
                    size="sm"
                    className="text-accent hover:text-primary transition-colors p-2"
                    variant="ghost"
                    onClick={() => handleAddToCart(item)}
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
