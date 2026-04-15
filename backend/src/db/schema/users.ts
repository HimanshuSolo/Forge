import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(), // we'll use nanoid to generate IDs
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  githubId: text("github_id").unique(), // for GitHub OAuth later
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
