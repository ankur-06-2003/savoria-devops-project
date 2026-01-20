// schema.ts (MySQL version)
import { sql } from "drizzle-orm";
import { mysqlTable, char, text, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// MySQL table definition
export const users = mysqlTable("users", {
  id: char("id").primaryKey().default(sql`UUID()`), // MySQL UUID
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),
});

// Drizzle-Zod insert schema
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// TypeScript types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
