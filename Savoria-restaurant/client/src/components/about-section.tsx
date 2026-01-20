import { motion } from "framer-motion";
import { Award, Leaf, Heart } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Award-Winning Chef",
      description: "Michelin-starred culinary expertise",
      color: "bg-primary",
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "Locally sourced, seasonal produce",
      color: "bg-accent",
    },
    {
      icon: Heart,
      title: "Passionate Service",
      description: "Dedicated to creating memorable experiences",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-darkBrown mb-6">
              Our <span className="text-gradient">Culinary</span>
              <br />
              Journey
            </h2>
            <p className="text-lg text-secondary mb-6">
              Founded in 2010, Savoria has been at the forefront of innovative cuisine, blending traditional techniques with modern creativity. Our commitment to excellence has earned us recognition from culinary experts worldwide.
            </p>
            <p className="text-lg text-secondary mb-8">
              Every dish tells a story, crafted with passion by our award-winning chef who brings over 20 years of international experience to create unforgettable dining experiences.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mr-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-darkBrown">
                      {feature.title}
                    </h4>
                    <p className="text-secondary">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              alt="Chef in Action"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-accent text-white p-6 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Happy Guests</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
