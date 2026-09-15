"use client";

import { useState, useEffect } from "react";
import { Phone, ExternalLink, Loader2 } from "lucide-react";

interface Submission {
  id: number;
  customerName: string;
  whatsappNo: string;
  businessType: string | null;
  formData: Record<string, unknown>;
  status: "pending" | "contacted" | "done";
  createdAt: string;
}

export default function SubmissionsTable() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<
    "all" | "pending" | "contacted" | "done"
  >("all");
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/submissions")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setSubmissions(data.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleStatusChange = async (id: number, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/submissions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmissions((prev) =>
          prev.map((item) =>
            item.id === id
              ? { ...item, status: newStatus as Submission["status"] }
              : item,
          ),
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredData = submissions.filter((sub) => {
    if (filter === "all") return true;
    return sub.status === filter;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-[#FAF8FF]/40 gap-2 text-xs">
        <Loader2 className="w-4 h-4 animate-spin text-[#7C3AED]" />
        <span>Memuat data submissions...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        {(["all", "pending", "contacted", "done"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-1.5 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition ${
              filter === tab
                ? "bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-[#FAF8FF] shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                : "bg-white/5 text-[#FAF8FF]/50 hover:bg-white/10 hover:text-white"
            }`}
          >
            {tab === "all" ? "Semua" : tab}
          </button>
        ))}
      </div>

      {/* Table Card */}
      <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-xl">
        {filteredData.length === 0 ? (
          <p className="text-center py-12 text-[#FAF8FF]/40 text-xs">
            Tidak ada data submission.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#FAF8FF]/80">
              <thead className="text-[10px] uppercase bg-white/5 text-[#FAF8FF]/50 border-b border-white/10">
                <tr>
                  <th className="px-5 py-3.5">Klien</th>
                  <th className="px-5 py-3.5">WhatsApp</th>
                  <th className="px-5 py-3.5">Jenis Usaha</th>
                  <th className="px-5 py-3.5">Ubah Status</th>
                  <th className="px-5 py-3.5">Tanggal</th>
                  <th className="px-5 py-3.5 text-right">Aksi WA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredData.map((sub) => {
                  const cleanPhone = sub.whatsappNo.replace(/[^0-9]/g, "");
                  const waNumber = cleanPhone.startsWith("0")
                    ? `62${cleanPhone.slice(1)}`
                    : cleanPhone;
                  const waLink = `https://wa.me/${waNumber}?text=Halo%20${encodeURIComponent(
                    sub.customerName,
                  )},%20terima%20kasih%20sudah%20mengisi%20form%20di%20Emoon!`;

                  return (
                    <tr key={sub.id} className="hover:bg-white/5 transition">
                      <td className="px-5 py-4 font-medium text-[#FAF8FF]">
                        {sub.customerName}
                      </td>
                      <td className="px-5 py-4 text-[#FAF8FF]/60 font-mono">
                        {sub.whatsappNo}
                      </td>
                      <td className="px-5 py-4 text-[#FAF8FF]/60">
                        {sub.businessType || "-"}
                      </td>
                      <td className="px-5 py-4">
                        <select
                          value={sub.status}
                          disabled={updatingId === sub.id}
                          onChange={(e) =>
                            handleStatusChange(sub.id, e.target.value)
                          }
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-xl border bg-[#0F0A1E] focus:outline-none transition cursor-pointer ${
                            sub.status === "pending"
                              ? "text-[#F59E0B] border-[#F59E0B]/30"
                              : sub.status === "contacted"
                                ? "text-[#7C3AED] border-[#7C3AED]/30"
                                : "text-emerald-400 border-emerald-500/30"
                          }`}
                        >
                          <option
                            value="pending"
                            className="bg-[#0F0A1E] text-[#F59E0B]"
                          >
                            PENDING
                          </option>
                          <option
                            value="contacted"
                            className="bg-[#0F0A1E] text-[#7C3AED]"
                          >
                            CONTACTED
                          </option>
                          <option
                            value="done"
                            className="bg-[#0F0A1E] text-emerald-400"
                          >
                            DONE
                          </option>
                        </select>
                      </td>
                      <td className="px-5 py-4 text-[11px] text-[#FAF8FF]/40">
                        {new Date(sub.createdAt).toLocaleDateString("id-ID")}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 rounded-xl text-[11px] font-medium transition"
                        >
                          <Phone className="w-3 h-3" />
                          Chat WA
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
