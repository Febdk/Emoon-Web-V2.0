import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE: Hapus testimoni berdasarkan ID
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    await prisma.testimonial.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      success: true,
      message: "Testimoni berhasil dihapus.",
    });
  } catch (error) {
    console.error("Delete Testimonial Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal menghapus testimoni." },
      { status: 500 },
    );
  }
}
