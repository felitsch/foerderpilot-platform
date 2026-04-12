import { auth } from "@foerderis/db";
import { toNextJsHandler } from "better-auth/next-js";

// Opt out of static generation — DATABASE_URL and BETTER_AUTH_SECRET are
// only available at runtime, not during next build.
export const dynamic = "force-dynamic";

export const { GET, POST } = toNextJsHandler(auth);
