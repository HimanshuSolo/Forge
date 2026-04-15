import "dotenv/config";
import { Elysia } from "elysia";
import { db } from "./db";

const app = new Elysia()
  .get("/", () => ({ message: "Forge API is running 🔥" }))
  .get("/health", async () => {
    // quick DB ping to confirm connection works
    await db.execute("select 1");
    return { status: "ok", db: "connected" };
  })
  .listen(process.env.PORT ?? 3001);

console.log(`Forge API running at http://localhost:${app.server?.port}`);