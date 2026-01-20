export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "appetizers" | "mains" | "desserts";
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Pan-Seared Scallops",
    description: "Fresh Atlantic scallops with cauliflower purée and truffle oil",
    price: 280,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "appetizers",
  },
  {
    id: "2",
    name: "Prime Ribeye Steak",
    description: "28oz dry-aged ribeye with roasted vegetables and red wine reduction",
    price: 650,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "mains",
  },
  {
    id: "3",
    name: "Herb-Crusted Salmon",
    description: "Atlantic salmon with dill crust, quinoa pilaf and lemon butter",
    price: 420,
    image: "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "mains",
  },
  {
    id: "4",
    name: "Artisan Cheese Board",
    description: "Selection of imported cheeses with honeycomb and seasonal fruits",
    price: 320,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "appetizers",
  },
  {
    id: "5",
    name: "Truffle Fettuccine",
    description: "House-made pasta with black truffle cream sauce and parmesan",
    price: 380,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "mains",
  },
  {
    id: "6",
    name: "Dark Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream and gold leaf",
    price: 180,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "desserts",
  },
  {
    id: "7",
    name: "Tuna Tartare",
    description: "Fresh yellowfin tuna with avocado mousse and sesame crisp",
    price: 240,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "appetizers",
  },
  {
    id: "8",
    name: "Classic Tiramisu",
    description: "Traditional Italian tiramisu with espresso-soaked ladyfingers",
    price: 150,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "desserts",
  },
  {
    id: "9",
    name: "Lobster Thermidor",
    description: "Maine lobster with cognac cream sauce and gruyère cheese",
    price: 720,
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "mains",
  },
];
