// storage.ts
import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";

/**
 * -------------------------------
 * TYPES
 * -------------------------------
 */
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Reservation {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
  cart?: CartItem[];
  totalPrice?: number;
}

/**
 * -------------------------------
 * IN-MEMORY STORAGE
 * -------------------------------
 */
let carts: CartItem[] = [];
let reservations: Reservation[] = [];

/**
 * -------------------------------
 * STORAGE INTERFACE FOR CART & RESERVATION
 * -------------------------------
 */
export const storage = {
  // CART CRUD
  insertCart: async (cart: Omit<CartItem, "id">): Promise<CartItem> => {
    const newCart: CartItem = { ...cart, id: randomUUID() };
    carts.push(newCart);
    return newCart;
  },

  getAllCarts: async (): Promise<CartItem[]> => carts,

  getCartById: async (id: string): Promise<CartItem | null> =>
    carts.find(c => c.id === id) || null,

  updateCart: async (id: string, data: Partial<CartItem>): Promise<CartItem | null> => {
    const index = carts.findIndex(c => c.id === id);
    if (index === -1) return null;
    carts[index] = { ...carts[index], ...data };
    return carts[index];
  },

  deleteCart: async (id: string): Promise<boolean> => {
    const index = carts.findIndex(c => c.id === id);
    if (index === -1) return false;
    carts.splice(index, 1);
    return true;
  },

  // RESERVATION CRUD
  insertReservation: async (reservation: Omit<Reservation, "id">): Promise<Reservation> => {
    const newReservation: Reservation = { ...reservation, id: randomUUID() };
    reservations.push(newReservation);
    return newReservation;
  },

  getAllReservations: async (): Promise<Reservation[]> => reservations,

  getReservationById: async (id: string): Promise<Reservation | null> =>
    reservations.find(r => r.id === id) || null,

  updateReservation: async (id: string, data: Partial<Reservation>): Promise<Reservation | null> => {
    const index = reservations.findIndex(r => r.id === id);
    if (index === -1) return null;
    reservations[index] = { ...reservations[index], ...data };
    return reservations[index];
  },

  deleteReservation: async (id: string): Promise<boolean> => {
    const index = reservations.findIndex(r => r.id === id);
    if (index === -1) return false;
    reservations.splice(index, 1);
    return true;
  },
};

/**
 * -------------------------------
 * USER STORAGE CLASS
 * -------------------------------
 */
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      user => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}
