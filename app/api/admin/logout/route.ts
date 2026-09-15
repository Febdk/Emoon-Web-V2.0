import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logout berhasil!",
  });

  // Hapus cookie admin_session dengan menghanguskan maxAge
  response.cookies.delete("admin_session");

  return response;
}
