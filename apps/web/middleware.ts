import { auth } from "@foerderis/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PORTAL_PREFIX = "/portal";
const LOGIN_PATH = "/portal/login";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith(PORTAL_PREFIX)) {
    return NextResponse.next();
  }

  // Allow the login page and auth API through without session check
  if (pathname === LOGIN_PATH || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    const loginUrl = new URL(LOGIN_PATH, request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*"],
};
