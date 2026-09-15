import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin_session")?.value;
  const isLoginPage = request.nextUrl.pathname === "/login";
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

  // Cek keabsahan token jika cookie ada
  let payload = null;
  if (token) {
    payload = await verifyToken(token);
  }

  // 1. Jika mencoba akses /admin/* tapi BELUM login / token tidak valid
  if (isAdminRoute && !payload) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2. Jika SUDAH login tapi malah membuka halaman /login
  if (isLoginPage && payload) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

// Konfigurasi route mana saja yang difilter oleh middleware ini
export const config = {
  matcher: ["/admin/:path*", "/login"],
};
