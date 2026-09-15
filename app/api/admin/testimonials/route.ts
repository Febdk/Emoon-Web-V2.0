import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 1. GET: Ambil semua testimoni (baik pending maupun yang sudah approved)
export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: testimonials });
  } catch (error) {
    console.error("Fetch Admin Testimonials Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data testimoni." },
      { status: 500 },
    );
  }
}

// 2. PATCH: Setujui (Approve) atau Batal Setujui testimoni
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, isApproved } = body;

    if (id === undefined || isApproved === undefined) {
      return NextResponse.json(
        { success: false, error: "ID dan status approval wajib diisi!" },
        { status: 400 },
      );
    }

    const updated = await prisma.testimonial.update({
      where: { id: Number(id) },
      data: { isApproved },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("Update Testimonial Status Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengubah status testimoni." },
      { status: 500 },
    );
  }
}
