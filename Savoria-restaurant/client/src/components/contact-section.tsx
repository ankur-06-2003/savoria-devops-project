import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter, Youtube, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Requested",
      description: "Thank you for your reservation request! We will contact you shortly.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Pataudi, Gurgaon, Haryana 122503\nIndia",
      color: "bg-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8950604144\nAvailable 24/7",
      color: "bg-accent",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday - Sunday\n5:00 PM - 11:00 PM",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-darkBrown text-white">
      <div className="container mx-auto px-4">
       

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-300 mb-6">
                  Whether you're planning a romantic dinner, business meeting, or special celebration, our team is here to make your experience extraordinary.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-gray-600">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      
    </section>
  );
}
