import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validasi input sederhana
    if (!body.name || !body.whatsapp) {
      return NextResponse.json(
        { success: false, error: "Data nama dan whatsapp wajib diisi." },
        { status: 400 },
      );
    }
    // Insert data ke database MySQL VPS via Prisma
    const newSubmission = await prisma.formSubmission.create({
      data: {
        customerName: body.name,
        whatsappNo: body.whatsapp,
        formData: body.data || {},
      },
    });
    return NextResponse.json({
      success: true,
      message: "Berhasil menyimpan data form.",
      data: newSubmission,
    });
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server/database." },
      { status: 500 },
    );
  }
}
