export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ankit Yadav",
    role: "Food Critic",
    quote: "An absolutely phenomenal dining experience. Every dish was a masterpiece, and the service was impeccable. The ambiance is perfect for special occasions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  },
  {
    id: "2",
    name: "Aman Kumar",
    role: "Regular Guest",
    quote: "Savoria exceeded all expectations. The chef's tasting menu was an incredible journey of flavors. We'll definitely be returning for our anniversary.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  },
  {
    id: "3",
    name: "Ankur Yadav",
    role: "Business Executive",
    quote: "From the moment we walked in, we felt like royalty. The attention to detail in both food and service is unmatched. A truly five-star experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  },
];
