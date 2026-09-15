import { prisma } from "@/lib/prisma";
import StatsCard from "@/components/admin/StatsCard";
import {
  FileText,
  Clock,
  CheckCircle2,
  MessageSquareQuote,
} from "lucide-react";
import Link from "next/link";

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const [
    totalSubmissions,
    pendingSubmissions,
    doneSubmissions,
    pendingTestimonials,
    recentSubmissions,
  ] = await Promise.all([
    prisma.formSubmission.count(),
    prisma.formSubmission.count({ where: { status: "pending" } }),
    prisma.formSubmission.count({ where: { status: "done" } }),
    prisma.testimonial.count({ where: { isApproved: false } }),
    prisma.formSubmission.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-clash text-3xl font-bold text-[#FAF8FF]">
          Ringkasan Sistem
        </h1>
        <p className="text-xs text-[#FAF8FF]/50 mt-1">
          Pantau aktivitas orderan form dan peninjauan testimoni klien Emoon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Submissions"
          value={totalSubmissions}
          description="Seluruh form terisi"
          icon={FileText}
          color="purple"
        />
        <StatsCard
          title="Perlu Follow-up"
          value={pendingSubmissions}
          description="Status order pending"
          icon={Clock}
          color="amber"
        />
        <StatsCard
          title="Order Selesai"
          value={doneSubmissions}
          description="Klien berhasil diproses"
          icon={CheckCircle2}
          color="emerald"
        />
        <StatsCard
          title="Testimoni Pending"
          value={pendingTestimonials}
          description="Menunggu approval admin"
          icon={MessageSquareQuote}
          color="amber"
        />
      </div>

      <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-clash text-lg font-bold text-[#FAF8FF]">
            Submissions Terbaru
          </h2>
          <Link
            href="/admin/submissions"
            className="text-xs text-[#F59E0B] hover:underline font-medium"
          >
            Lihat Semua →
          </Link>
        </div>

        {recentSubmissions.length === 0 ? (
          <p className="text-xs text-[#FAF8FF]/40 py-8 text-center">
            Belum ada submission masuk.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#FAF8FF]/80">
              <thead className="text-[10px] uppercase bg-white/5 text-[#FAF8FF]/50 border-b border-white/10">
                <tr>
                  <th className="px-4 py-3">Nama Klien</th>
                  <th className="px-4 py-3">WhatsApp</th>
                  <th className="px-4 py-3">Jenis Usaha</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Tanggal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentSubmissions.map(
                  (sub: {
                    id: number;
                    customerName: string;
                    whatsappNo: string;
                    businessType: string | null;
                    status: string;
                    createdAt: Date;
                  }) => (
                    <tr key={sub.id} className="hover:bg-white/5 transition">
                      <td className="px-4 py-3.5 font-medium text-[#FAF8FF]">
                        {sub.customerName}
                      </td>
                      <td className="px-4 py-3.5 text-[#FAF8FF]/60 font-mono">
                        {sub.whatsappNo}
                      </td>
                      <td className="px-4 py-3.5 text-[#FAF8FF]/60">
                        {sub.businessType || "-"}
                      </td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                            sub.status === "pending"
                              ? "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30"
                              : sub.status === "contacted"
                                ? "bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED]/30"
                                : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          }`}
                        >
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-[11px] text-[#FAF8FF]/40">
                        {new Date(sub.createdAt).toLocaleDateString("id-ID")}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
