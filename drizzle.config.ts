import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ override: false });

export default {
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_URL || "",
    authToken: process.env.TURSO_AUTH_TOKEN || "",
  },
} satisfies Config;