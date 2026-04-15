import { pgTable, text, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { projects } from "./projects";

// Postgres enum for deployment status
export const deploymentStatusEnum = pgEnum("deployment_status", [
  "queued",
  "building",
  "uploading",
  "live",
  "failed",
]);

export const deployments = pgTable("deployments", {
  id: text("id").primaryKey(),
  projectId: text("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  status: deploymentStatusEnum("status").default("queued").notNull(),
  commitHash: text("commit_hash"), // optional, for display
  s3Key: text("s3_key"), // e.g. deployments/dep_abc123/
  deployedAt: timestamp("deployed_at"), // set when status becomes "live"
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
