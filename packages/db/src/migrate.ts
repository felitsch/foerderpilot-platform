import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

async function main() {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "./src/migrations" });
  console.log("Migrations complete.");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
