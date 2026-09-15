import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 1. GET: Ambil semua data pemesanan form untuk halaman admin
export async function GET() {
  try {
    const submissions = await prisma.formSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: submissions });
  } catch (error) {
    console.error("Fetch Submissions Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data submissions." },
      { status: 500 },
    );
  }
}

// 2. PATCH: Update status pemesanan (pending -> contacted -> done)
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "ID dan Status wajib diisi!" },
        { status: 400 },
      );
    }

    const updated = await prisma.formSubmission.update({
      where: { id: Number(id) },
      data: { status },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("Update Submission Status Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal memperbarui status submission." },
      { status: 500 },
    );
  }
}
