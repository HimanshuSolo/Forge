import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Forge API is Running").listen(3001);

console.log(
  `🦊 Forge is running at ${app.server?.hostname}:${app.server?.port}`,
);
