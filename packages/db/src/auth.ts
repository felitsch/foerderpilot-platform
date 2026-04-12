import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink } from "better-auth/plugins";
import { db } from "./client";
import * as schema from "./schema";

// Lazily create the auth instance so that importing this module during Next.js
// build does not throw when BETTER_AUTH_SECRET / BETTER_AUTH_URL are absent.
function createAuth() {
  if (!process.env.BETTER_AUTH_SECRET) {
    throw new Error("BETTER_AUTH_SECRET is required");
  }
  if (!process.env.BETTER_AUTH_URL) {
    throw new Error("BETTER_AUTH_URL is required");
  }

  return betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    database: drizzleAdapter(db, {
      provider: "pg",
      schema: {
        user: schema.user,
        session: schema.session,
        account: schema.account,
        verification: schema.verification,
      },
    }),
    plugins: [
      magicLink({
        sendMagicLink: async ({ email: _email, token: _token, url }) => {
          // Resend integration will be wired up in Phase 2
          // For now, log the magic link in development
          if (process.env.NODE_ENV === "development") {
            console.log(`[magic-link] ${_email}: ${url}`);
          }
        },
      }),
    ],
    trustedOrigins: [process.env.BETTER_AUTH_URL],
  });
}

type AuthInstance = ReturnType<typeof createAuth>;

let _auth: AuthInstance | undefined;

function getAuth(): AuthInstance {
  if (!_auth) {
    _auth = createAuth();
  }
  return _auth;
}

export const auth: AuthInstance = new Proxy({} as AuthInstance, {
  get(_target, prop) {
    return getAuth()[prop as keyof AuthInstance];
  },
});

export type Session = AuthInstance["$Infer"]["Session"];
export type User = AuthInstance["$Infer"]["Session"]["user"];
