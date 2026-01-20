import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Users, Phone, Mail, MessageSquare, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ReservePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const { toast } = useToast();
  const { cartItems, totalPrice, clearCart } = useCart();

  // reserve.tsx (only changes shown)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // Combine reservation form + order
    const reservationData = {
      ...formData,
      cart: cartItems,
      totalPrice,
    };

    // Send to backend
    const response = await fetch("/api/reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) throw new Error("Failed to save reservation");

    const savedReservation = await response.json();

    if (cartItems.length > 0) {
      clearCart();
      toast({
        title: "Reservation & Order Confirmed!",
        description: `Thank you ${formData.firstName}! Your table reservation and order for $${totalPrice.toFixed(
          2
        )} has been saved with ID: ${savedReservation.id}.`,
      });
    } else {
      toast({
        title: "Reservation Confirmed!",
        description: `Thank you ${formData.firstName}! Your table reservation has been saved with ID: ${savedReservation.id}.`,
      });
    }

    // reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  } catch (err: any) {
    toast({
      title: "Error",
      description: err.message || "Something went wrong. Please try again.",
      variant: "destructive",
    });
  }
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", 
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", 
    "9:00 PM", "9:30 PM", "10:00 PM"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Link href="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-darkBrown mb-4">
                Reserve Your <span className="text-gradient">Table</span>
              </h1>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Book your culinary experience at Savoria. Let us create an unforgettable dining moment for you.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="font-playfair text-2xl font-bold text-darkBrown mb-6">
                  Reservation Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-darkBrown mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        First Name
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darkBrown mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-darkBrown mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darkBrown mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-darkBrown mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Date
                      </label>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darkBrown mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darkBrown mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Number of guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="7">7 Guests</option>
                        <option value="8">8 Guests</option>
                        <option value="8+">8+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-darkBrown mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Special Requests
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about any special occasions, dietary restrictions, or other preferences..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-primary text-black px-8 py-4 rounded-full font-semibold text-lg w-full"
                  >
                    <CalendarCheck className="w-5 h-5 mr-2" />
                    Confirm Reservation
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Order Summary & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Order Summary */}
              {cartItems.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="font-playfair text-xl font-bold text-darkBrown mb-4">
                    Your Order
                  </h3>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-darkBrown">{item.name}</p>
                          <p className="text-sm text-secondary">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-primary">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Restaurant Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-playfair text-xl font-bold text-darkBrown mb-4">
                  Restaurant Information
                </h3>
                <div className="space-y-4 text-secondary">
                  <div>
                    <h4 className="font-semibold text-darkBrown">Location</h4>
                    <p>123 Pataudi<br />Gurgaon, Haryana, 122503 India</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-darkBrown">Hours</h4>
                    <p>Monday - Sunday<br />5:00 PM - 11:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-darkBrown">Contact</h4>
                    <p>+91 8950604144<br />info@savoria.com</p>
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-playfair text-lg font-bold text-darkBrown mb-3">
                  Reservation Policy
                </h3>
                <div className="text-sm text-secondary space-y-2">
                  <p>• Reservations are held for 15 minutes past the reserved time</p>
                  <p>• Cancellations must be made 24 hours in advance</p>
                  <p>• Large parties (8+) may require a deposit</p>
                  <p>• Smart casual dress code is appreciated</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}