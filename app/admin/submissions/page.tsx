"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  RefreshCw,
  Phone,
  Building2,
  Layers,
  Clock,
} from "lucide-react";

interface Submission {
  id: number;
  customerName: string;
  whatsappNo: string;
  formData: {
    bisnis?: string;
    jenis_usaha?: string;
    fitur?: string[];
    totalPrice?: number;
    catatanTambahan?: string;
  };
  status: string;
  createdAt: string;
}

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/submissions");
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.data);
      }
    } catch (err) {
      console.error("Gagal mengambil data submissions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      fetchSubmissions();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function formatRupiah(val?: number) {
    if (!val) return "Rp 0";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  }

  const filteredSubmissions = submissions.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.customerName.toLowerCase().includes(query) ||
      item.whatsappNo.includes(query) ||
      (item.formData?.bisnis || "").toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-clash text-2xl sm:text-3xl font-bold text-white">
            Data Pesanan E-Form
          </h1>
          <p className="text-xs text-white/50 mt-1">
            Kelola prospek dan invoice pemesan yang masuk dari landing page.
          </p>
        </div>
        <button
          onClick={fetchSubmissions}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white hover:bg-white/10 transition-all disabled:opacity-50 self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          Refresh Data
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Cari nama pemesan, brand, atau nomor WA..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#0F0A1E]/90 sm:bg-[#0F0A1E]/60 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#7C3AED] transition-all"
        />
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="text-center py-16 text-xs text-white/40">
          Memuat data pesanan...
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="p-8 text-center rounded-2xl bg-white/5 border border-white/5 text-xs text-white/40">
          {searchQuery
            ? "Tidak ada pesanan yang sesuai kata kunci."
            : "Belum ada pesanan masuk."}
        </div>
      ) : (
        <>
          {/* DESKTOP VIEW: TABEL (Tampil di Layar Medium Ke Atas / >= 768px) */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10 bg-[#0F0A1E]/80 backdrop-blur-md shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-[11px] uppercase tracking-wider text-white/50 font-semibold">
                    <th className="p-4">Pemesan & Brand</th>
                    <th className="p-4">Jenis Usaha</th>
                    <th className="p-4">Fitur Dipilih</th>
                    <th className="p-4">Total Invoice</th>
                    <th className="p-4">Tanggal</th>
                    <th className="p-4 text-right">Aksi WA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-white/80">
                  {filteredSubmissions.map((sub) => (
                    <tr
                      key={sub.id}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4">
                        <div className="font-semibold text-white">
                          {sub.customerName}
                        </div>
                        <div className="text-[11px] text-white/40 flex items-center gap-1 mt-0.5">
                          <Building2 size={12} /> {sub.formData?.bisnis || "-"}
                        </div>
                      </td>
                      <td className="p-4 text-white/60">
                        {sub.formData?.jenis_usaha || "-"}
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#A78BFA] text-[10px] font-medium">
                          <Layers size={10} />
                          {sub.formData?.fitur?.length || 0} Fitur
                        </span>
                      </td>
                      <td className="p-4 font-semibold text-[#F59E0B]">
                        {formatRupiah(sub.formData?.totalPrice)}
                      </td>
                      <td className="p-4 text-white/40 text-[11px]">
                        {new Date(sub.createdAt).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="p-4 text-right">
                        <a
                          href={`https://wa.me/${sub.whatsappNo.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-medium hover:bg-[#25D366]/30 transition-all text-[11px]"
                        >
                          <Phone size={12} /> Chat WA
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MOBILE VIEW: CARD LAYOUT (Sangat Ringan & Pas di HP / < 768px) */}
          <div className="grid grid-cols-1 gap-3 md:hidden">
            {filteredSubmissions.map((sub) => (
              <div
                key={sub.id}
                className="p-4 rounded-2xl bg-[#0F0A1E]/90 border border-white/10 space-y-3 shadow-lg"
              >
                <div className="flex items-start justify-between border-b border-white/10 pb-2.5">
                  <div>
                    <h3 className="font-semibold text-white text-sm">
                      {sub.customerName}
                    </h3>
                    <p className="text-xs text-white/50 flex items-center gap-1 mt-0.5">
                      <Building2 size={12} /> {sub.formData?.bisnis || "-"}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#F59E0B] px-2 py-1 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                    {formatRupiah(sub.formData?.totalPrice)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-white/60">
                  <div>
                    <span className="text-white/30 block">Jenis Usaha:</span>
                    <span className="truncate block font-medium">
                      {sub.formData?.jenis_usaha || "-"}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/30 block">Fitur:</span>
                    <span className="font-medium text-[#A78BFA]">
                      {sub.formData?.fitur?.length || 0} Terpilih
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
                  <span className="text-white/40 flex items-center gap-1">
                    <Clock size={12} />
                    {new Date(sub.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                  <a
                    href={`https://wa.me/${sub.whatsappNo.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366] text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    <Phone size={12} /> Hubungi WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
