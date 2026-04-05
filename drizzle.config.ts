import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

const url = new URL(process.env.DATABASE_URL || "");
const authToken = url.searchParams.get("authToken") || "";
url.searchParams.delete("authToken");

export default {
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: url.toString(),
    authToken: authToken,
  },
} satisfies Config;