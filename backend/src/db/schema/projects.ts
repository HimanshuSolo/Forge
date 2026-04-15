import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const projects = pgTable("projects", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(), // used in subdomain: slug.forge.dev
  repoUrl: text("repo_url"), // GitHub repo link
  buildCommand: text("build_command").default("npm run build").notNull(),
  outputDir: text("output_dir").default("dist").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
