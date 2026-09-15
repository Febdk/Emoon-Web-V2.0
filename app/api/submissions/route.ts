import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ============================================================
// RATE LIMITER: maks 5 request per IP per 1 menit (in-memory)
// ============================================================
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 menit

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

// Validasi format nomor WhatsApp Indonesia
function isValidWhatsApp(value: string): boolean {
  const cleaned = value.replace(/[\s\-()]/g, "");
  return /^(\+?62|0)8[1-9]\d{6,11}$/.test(cleaned);
}

export async function POST(request: NextRequest) {
  // 1. Rate limiting berdasarkan IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      {
        success: false,
        error: "Terlalu banyak permintaan. Coba lagi dalam 1 menit.",
      },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();

    // 2. Cek keberadaan field wajib
    if (!body.name || !body.whatsapp) {
      return NextResponse.json(
        { success: false, error: "Data nama dan whatsapp wajib diisi." },
        { status: 400 },
      );
    }

    // 3. Validasi tipe & panjang string nama
    const name = String(body.name).trim();
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { success: false, error: "Nama tidak valid (2–100 karakter)." },
        { status: 400 },
      );
    }

    // 4. Validasi format nomor WhatsApp
    const whatsapp = String(body.whatsapp).trim();
    if (!isValidWhatsApp(whatsapp)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Format nomor WhatsApp tidak valid. Gunakan format: 08xxxxxxxxxx",
        },
        { status: 400 },
      );
    }

    // 5. Insert ke database MySQL via Prisma
    const newSubmission = await prisma.formSubmission.create({
      data: {
        customerName: name,
        whatsappNo: whatsapp,
        formData: body.data ?? {},
      },
    });

    // Hanya kembalikan ID, bukan seluruh objek DB
    return NextResponse.json({
      success: true,
      message: "Berhasil menyimpan data form.",
      data: { id: newSubmission.id },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Database Error:", message);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server/database." },
      { status: 500 },
    );
  }
}
