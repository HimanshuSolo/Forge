import { drizzle } from "drizzle-orm/postgres-js";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env");
}

export const db = drizzle(process.env.DATABASE_URL);
