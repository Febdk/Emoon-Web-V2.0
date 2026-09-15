"use client";

import { useState, useEffect } from "react";
import { Star, Check, X, Trash2, Loader2 } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  isApproved: boolean;
  createdAt: string;
}

export default function TestimonialsTable() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTestimonials(data.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleToggleApprove = async (id: number, currentApproved: boolean) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isApproved: !currentApproved }),
      });

      const data = await res.json();
      if (data.success) {
        setTestimonials((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, isApproved: !currentApproved } : item,
          ),
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus testimoni ini secara permanen?")) return;

    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setTestimonials((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-[#FAF8FF]/40 gap-2 text-xs">
        <Loader2 className="w-4 h-4 animate-spin text-[#7C3AED]" />
        <span>Memuat data testimoni...</span>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-xl">
      {testimonials.length === 0 ? (
        <p className="text-center py-12 text-[#FAF8FF]/40 text-xs">
          Belum ada testimoni masuk.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#FAF8FF]/80">
            <thead className="text-[10px] uppercase bg-white/5 text-[#FAF8FF]/50 border-b border-white/10">
              <tr>
                <th className="px-5 py-3.5">Nama & Role</th>
                <th className="px-5 py-3.5">Rating</th>
                <th className="px-5 py-3.5">Quote</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Aksi Moderasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {testimonials.map((item) => (
                <tr key={item.id} className="hover:bg-white/5 transition">
                  <td className="px-5 py-4">
                    <p className="font-medium text-[#FAF8FF]">{item.name}</p>
                    <p className="text-[10px] text-[#FAF8FF]/40">{item.role}</p>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center text-[#F59E0B] gap-0.5">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-[#FAF8FF]/70 max-w-xs truncate italic">
                    &ldquo;{item.quote}&rdquo;
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                        item.isApproved
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30"
                      }`}
                    >
                      {item.isApproved ? "Approved" : "Pending"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        disabled={updatingId === item.id}
                        onClick={() =>
                          handleToggleApprove(item.id, item.isApproved)
                        }
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-medium transition border ${
                          item.isApproved
                            ? "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30 hover:bg-[#F59E0B]/25"
                            : "bg-[#7C3AED]/15 text-[#7C3AED] border-[#7C3AED]/30 hover:bg-[#7C3AED]/25"
                        }`}
                      >
                        {item.isApproved ? (
                          <>
                            <X className="w-3 h-3" /> Unapprove
                          </>
                        ) : (
                          <>
                            <Check className="w-3 h-3" /> Approve
                          </>
                        )}
                      </button>

                      <button
                        disabled={updatingId === item.id}
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-rose-400 hover:text-white bg-rose-500/15 border border-rose-500/30 rounded-xl transition"
                        title="Hapus"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
