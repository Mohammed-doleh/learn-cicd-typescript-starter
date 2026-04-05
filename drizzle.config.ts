import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

export default {
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
} satisfies Config;
