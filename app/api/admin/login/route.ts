import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Password admin yang kamu masukkan salah!" },
        { status: 401 },
      );
    }

    const token = await signToken({ role: "admin" });

    const response = NextResponse.json({
      success: true,
      message: "Login berhasil!",
    });

    response.cookies.set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan sistem." },
      { status: 500 },
    );
  }
}
