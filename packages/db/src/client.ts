import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Lazily initialise so that importing this module at Next.js build time does
// not throw even when DATABASE_URL is absent.  The error surfaces at
// runtime the first time a query is executed.
let _db: ReturnType<typeof drizzle<typeof schema>> | undefined;

function getDb() {
  if (!_db) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is required");
    }
    const sql = neon(process.env.DATABASE_URL);
    _db = drizzle(sql, { schema });
  }
  return _db;
}

export const db: ReturnType<typeof drizzle<typeof schema>> = new Proxy(
  {} as ReturnType<typeof drizzle<typeof schema>>,
  {
    get(_target, prop) {
      return getDb()[prop as keyof ReturnType<typeof drizzle<typeof schema>>];
    },
  }
);
