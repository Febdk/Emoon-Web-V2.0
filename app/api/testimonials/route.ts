import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 1. GET (Public): Ambil HANYA testimoni yang sudah di-approve admin
export async function GET() {
  try {
    const approvedTestimonials = await prisma.testimonial.findMany({
      where: { isApproved: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: approvedTestimonials });
  } catch (error) {
    console.error("Fetch Public Testimonials Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data testimoni." },
      { status: 500 },
    );
  }
}

// 2. POST (Public): Klien mengirim ulasan testimoni baru
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, quote, rating } = body;

    if (!name || !role || !quote) {
      return NextResponse.json(
        {
          success: false,
          error: "Nama, jenis usaha/role, dan ucapan testimoni wajib diisi!",
        },
        { status: 400 },
      );
    }

    const newTestimonial = await prisma.testimonial.create({
      data: {
        name,
        role,
        quote,
        rating: Number(rating) || 5,
        isApproved: false, // Default false, wajib di-approve admin dulu
      },
    });

    return NextResponse.json({
      success: true,
      message: "Testimoni berhasil dikirim dan menunggu persetujuan admin.",
      data: newTestimonial,
    });
  } catch (error) {
    console.error("Submit Testimonial Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengirim testimoni." },
      { status: 500 },
    );
  }
}
