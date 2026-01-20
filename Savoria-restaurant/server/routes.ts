// routes.tsx
import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  const baseUrl = "/api";

  /**
   * ------------------------
   * CART CRUD
   * ------------------------
   */

  // Create cart
  app.post(`${baseUrl}/cart`, async (req: Request, res: Response) => {
    try {
      const cart = await storage.insertCart(req.body);
      res.status(201).json(cart);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get all carts
  app.get(`${baseUrl}/cart`, async (_req: Request, res: Response) => {
    try {
      const carts = await storage.getAllCarts();
      res.json(carts);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get cart by id
  app.get(`${baseUrl}/cart/:id`, async (req: Request, res: Response) => {
    try {
      const cart = await storage.getCartById(req.params.id);
      if (!cart) return res.status(404).json({ message: "Cart not found" });
      res.json(cart);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Update cart
  app.put(`${baseUrl}/cart/:id`, async (req: Request, res: Response) => {
    try {
      const updated = await storage.updateCart(req.params.id, req.body);
      if (!updated) return res.status(404).json({ message: "Cart not found" });
      res.json(updated);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Delete cart
  app.delete(`${baseUrl}/cart/:id`, async (req: Request, res: Response) => {
    try {
      const deleted = await storage.deleteCart(req.params.id);
      if (!deleted) return res.status(404).json({ message: "Cart not found" });
      res.json({ message: "Cart deleted successfully" });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  /**
   * ------------------------
   * RESERVE CRUD
   * ------------------------
   */

  // Create reservation
  app.post(`${baseUrl}/reserve`, async (req: Request, res: Response) => {
    try {
      const reservation = await storage.insertReservation(req.body);
      res.status(201).json(reservation);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get all reservations
  app.get(`${baseUrl}/reserve`, async (_req: Request, res: Response) => {
    try {
      const reservations = await storage.getAllReservations();
      res.json(reservations);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get reservation by id
  app.get(`${baseUrl}/reserve/:id`, async (req: Request, res: Response) => {
    try {
      const reservation = await storage.getReservationById(req.params.id);
      if (!reservation)
        return res.status(404).json({ message: "Reservation not found" });
      res.json(reservation);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Update reservation
  app.put(`${baseUrl}/reserve/:id`, async (req: Request, res: Response) => {
    try {
      const updated = await storage.updateReservation(req.params.id, req.body);
      if (!updated)
        return res.status(404).json({ message: "Reservation not found" });
      res.json(updated);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Delete reservation
  app.delete(`${baseUrl}/reserve/:id`, async (req: Request, res: Response) => {
    try {
      const deleted = await storage.deleteReservation(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Reservation not found" });
      res.json({ message: "Reservation deleted successfully" });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
