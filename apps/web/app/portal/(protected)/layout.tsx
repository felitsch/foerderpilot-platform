import { auth } from "@foerderis/db";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// BETTER_AUTH_SECRET and DATABASE_URL are only available at runtime, not
// during next build — force dynamic rendering for the entire portal subtree.
export const dynamic = "force-dynamic";

/**
 * Portal protected layout — server-side auth guard.
 * The middleware (middleware.ts) handles the redirect for most requests;
 * this is a belt-and-suspenders guard for deeply nested server components.
 *
 * File structure note: Next.js route group `(protected)` groups auth-guarded
 * routes under /portal without adding a URL segment, yielding clean URLs like
 * /portal/dashboard, /portal/antraege, etc.
 */
export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/portal/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <span className="font-semibold text-foreground">Foerderis Kundenportal</span>
          <span className="text-sm text-muted-foreground">{session.user.email}</span>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
    </div>
  );
}
