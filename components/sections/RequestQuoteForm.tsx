"use client";

// ============================================================================
// EMOON DYNAMIC QUOTE & INVOICE CALCULATOR (COMPONENTS/SECTIONS/REQUESTQUOTEFORM)
// Penanda: Komponen penerima query params dari simulator, penampil rincian invoice,
// kalkulasi total harga otomatis (Rupiah), simpan DB, dan kirim pesan terformat ke WA.
// ============================================================================

import React, { useState, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  ChevronDown,
  Receipt,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../ui/CustomComponents";
import { EMOON_WA_NUMBER } from "@/lib/constants";

// MAPPING HARGA RETAIL FITUR
const BASE_PRICE = 149000; // Harga dasar sistem E-Form

const FITUR_PRICE_MAP: Record<
  string,
  { label: string; price: number; description: string }
> = {
  form_order: {
    label: "Sistem Form Order Digital",
    price: 0, // Sudah termasuk di Base Price
    description: "Formulir booking rapi terintegrasi",
  },
  notif_wa: {
    label: "Notifikasi WA Invoice Otomatis",
    price: 50000,
    description: "Kirim struk & DP langsung ke WA klien",
  },
  pricelist: {
    label: "Katalog Pricelist Interaktif",
    price: 40000,
    description: "Tampilkan foto & rincian paket layanan",
  },
  custom_branding: {
    label: "Custom Branding & Logo",
    price: 30000,
    description: "Pasang logo & warna khas brand vendor",
  },
  google_sheet: {
    label: "Auto-Sync Google Spreadsheet",
    price: 50000,
    description: "Otomatisasi rekap data order tanpa manual",
  },
  tc: {
    label: "Syarat & Ketentuan (T&C)",
    price: 30000,
    description: "Kotak persetujuan aturan DP & hukum",
  },
  multi_paket: {
    label: "Multi-Paket & Add-on Selector",
    price: 40000,
    description: "Kalkulator variasi paket & item tambahan",
  },
};

const JENIS_USAHA = [
  "Fotografer Wedding",
  "MUA (Makeup Artist)",
  "Videografer",
  "Studio Foto",
  "Fotografer Portrait / Keluarga",
  "Event Organizer",
  "Usaha Kreatif Lainnya",
];

interface FormData {
  nama: string;
  bisnis: string;
  jenis_usaha: string;
  fitur: string[];
  nomor_wa: string;
  catatanTambahan?: string;
}

function QuoteFormContent() {
  const searchParams = useSearchParams();

  // Ambil data awal langsung saat inisialisasi state
  const paramProfil = searchParams.get("profil") || "";
  const paramFiturString = searchParams.get("fitur") || "";
  const paramNama = searchParams.get("nama") || "";

  const paramFitur = useMemo(
    () =>
      paramFiturString
        ? paramFiturString.split(",")
        : ["form_order", "notif_wa", "tc"],
    [paramFiturString],
  );

  const [form, setForm] = useState<FormData>(() => ({
    nama: "",
    bisnis: paramNama,
    jenis_usaha: paramProfil || "Fotografer Wedding",
    fitur: paramFitur,
    nomor_wa: "",
    catatanTambahan: "",
  }));

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const setField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggleFitur = (id: string) => {
    setForm((prev) => {
      const exists = prev.fitur.includes(id);
      return {
        ...prev,
        fitur: exists
          ? prev.fitur.filter((f) => f !== id)
          : [...prev.fitur, id],
      };
    });
  };

  const addOnsTotal = form.fitur.reduce((acc, fitId) => {
    const item = FITUR_PRICE_MAP[fitId];
    return acc + (item ? item.price : 0);
  }, 0);

  const subtotal = BASE_PRICE + addOnsTotal;
  const discount = form.fitur.length >= 4 ? 40000 : 0;
  const totalPrice = Math.max(subtotal - discount, BASE_PRICE);

  const formatRupiah = (val: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.nama.trim()) e.nama = "Nama Anda wajib diisi";
    if (!form.bisnis.trim()) e.bisnis = "Nama brand/bisnis wajib diisi";
    if (!form.nomor_wa.trim()) e.nomor_wa = "Nomor WhatsApp wajib diisi";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildWAMessage = () => {
    const fiturListText = form.fitur
      .map((id) => {
        const item = FITUR_PRICE_MAP[id];
        return item ? `  • ${item.label}` : null;
      })
      .filter(Boolean)
      .join("\n");

    const message =
      `Halo Emoon! 👋\n\n` +
      `Saya ingin memesan sistem E-Form Digital dengan rincian berikut:\n\n` +
      `📋 *INFORMASI PEMESAN*\n` +
      `• *Nama Pemesan:* ${form.nama}\n` +
      `• *Nama Brand / Studio:* ${form.bisnis}\n` +
      `• *Jenis Usaha:* ${form.jenis_usaha}\n` +
      `• *Nomor WA Kontak:* ${form.nomor_wa}\n\n` +
      `⚙️ *FITUR E-FORM DIPILIH (${form.fitur.length}):*\n` +
      `  • Base E-Form System (${formatRupiah(BASE_PRICE)})\n` +
      `${fiturListText}\n\n` +
      (discount > 0
        ? `🎁 *POTONGAN DISKON COMBO:* -${formatRupiah(discount)}\n`
        : "") +
      `💰 *ESTIMASI TOTAL INVOICE:* ${formatRupiah(totalPrice)} (One-Time Payment)\n\n` +
      (form.catatanTambahan
        ? `📝 *Catatan Khusus:* ${form.catatanTambahan}\n\n`
        : "") +
      `Mohon dibantu konfirmasi pesanan dan proses penerbitan e-form saya ya! Terima kasih.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nama,
          whatsapp: form.nomor_wa,
          data: {
            bisnis: form.bisnis,
            jenis_usaha: form.jenis_usaha,
            fitur: form.fitur,
            catatanTambahan: form.catatanTambahan || "",
            totalPrice,
          },
        }),
      });

      const result = await res.json();

      if (!result.success) {
        if (result.error?.includes("WhatsApp")) {
          setErrors((e) => ({ ...e, nomor_wa: result.error }));
        } else if (result.error?.includes("Nama")) {
          setErrors((e) => ({ ...e, nama: result.error }));
        } else {
          alert(result.error || "Gagal menyimpan data pesanan.");
        }
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        window.open(
          `https://wa.me/${EMOON_WA_NUMBER}?text=${buildWAMessage()}`,
          "_blank",
        );
      }, 800);
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Terjadi kesalahan sistem/jaringan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-10 text-center max-w-lg mx-auto border border-[#7C3AED]/30 shadow-2xl"
      >
        <div className="w-20 h-20 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-[#10B981]" />
        </div>
        <h3 className="font-clash text-3xl font-semibold text-white mb-3">
          Rincian Invoice Terbuka di WA!
        </h3>
        <p className="text-white/70 leading-relaxed mb-6 text-sm">
          Data pesanan kamu telah tersimpan di sistem Emoon. Aplikasi WhatsApp
          kamu akan otomatis terbuka dengan rincian invoice sebesar{" "}
          <strong className="text-[#F59E0B] font-semibold">
            {formatRupiah(totalPrice)}
          </strong>
          .
        </p>
        <button
          onClick={() => {
            window.open(
              `https://wa.me/${EMOON_WA_NUMBER}?text=${buildWAMessage()}`,
              "_blank",
            );
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:opacity-90 transition-opacity text-sm mb-6"
        >
          <Send size={16} /> Buka WhatsApp Sekarang
        </button>
        <div className="text-xs text-white/40 border-t border-white/10 pt-4">
          Tim Emoon akan mengonfirmasi rincian e-form kamu secara langsung via
          WhatsApp.
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-6 text-left border border-[#7C3AED]/20 shadow-xl"
      >
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED] px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 inline-block mb-2">
            Form Pemesanan E-Form
          </span>
          <h3 className="font-clash text-2xl font-semibold text-white">
            Isi Data Kontak & Pilih Fitur
          </h3>
          <p className="text-xs text-white/50 mt-1">
            Sesuaikan fitur kebutuhanmu di bawah. Total harga invoice di sebelah
            kanan akan terhitung otomatis secara live.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-white/80">
              Nama Anda <span className="text-[#F59E0B]">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Budi Santoso"
              value={form.nama}
              onChange={(e) => setField("nama", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder:text-white/25 focus:outline-none focus:border-[#7C3AED] text-xs transition-all"
            />
            {errors.nama && (
              <p className="text-[11px] text-red-400">{errors.nama}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-white/80">
              Nama Brand / Studio <span className="text-[#F59E0B]">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Permata Photo / Glow MUA"
              value={form.bisnis}
              onChange={(e) => setField("bisnis", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder:text-white/25 focus:outline-none focus:border-[#7C3AED] text-xs transition-all"
            />
            {errors.bisnis && (
              <p className="text-[11px] text-red-400">{errors.bisnis}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-white/80">
              Jenis Usaha
            </label>
            <div className="relative">
              <select
                value={form.jenis_usaha}
                onChange={(e) => setField("jenis_usaha", e.target.value)}
                className="w-full bg-[#18122B] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs appearance-none cursor-pointer pr-8 focus:outline-none"
              >
                {JENIS_USAHA.map((j) => (
                  <option key={j} value={j} className="bg-[#0F0A1E]">
                    {j}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-white/80">
              Nomor WhatsApp Kontak <span className="text-[#F59E0B]">*</span>
            </label>
            <input
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={form.nomor_wa}
              onChange={(e) => setField("nomor_wa", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder:text-white/25 focus:outline-none focus:border-[#7C3AED] text-xs transition-all"
            />
            {errors.nomor_wa && (
              <p className="text-[11px] text-red-400">{errors.nomor_wa}</p>
            )}
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <label className="text-xs font-medium text-white/80 flex items-center justify-between">
            <span>Pilih Fitur Tambahan (Add-on)</span>
            <span className="text-[11px] text-[#F59E0B]">
              {form.fitur.length >= 4
                ? "🎁 Hemat Rp 40rb Activated!"
                : "Centang untuk tambah fitur"}
            </span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {Object.entries(FITUR_PRICE_MAP).map(([id, item]) => {
              const checked = form.fitur.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleFitur(id)}
                  className={`p-3 rounded-xl border text-left flex items-start justify-between transition-all duration-200 ${
                    checked
                      ? "bg-[#7C3AED]/20 border-[#7C3AED] text-white"
                      : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-white/40 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <span className="text-[11px] font-semibold text-[#F59E0B]">
                      {item.price === 0
                        ? "Included"
                        : `+${formatRupiah(item.price)}`}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 text-left"
      >
        <div className="bg-[#0F0A1E] border border-[#7C3AED]/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Receipt size={18} className="text-[#F59E0B]" />
              <h4 className="font-clash font-semibold text-base text-white">
                Draf Invoice Pesanan
              </h4>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981]">
              One-Time Payment
            </span>
          </div>

          <div className="space-y-1 text-xs text-white/70 mb-4 bg-white/5 p-3 rounded-xl border border-white/5">
            <div className="flex justify-between">
              <span className="text-white/40">Brand / Studio:</span>
              <span className="font-semibold text-white">
                {form.bisnis || "Belum diisi"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Jenis Usaha:</span>
              <span>{form.jenis_usaha}</span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-white/80 border-b border-white/10 pb-4 mb-4">
            <div className="flex justify-between items-center">
              <span>System E-Form Order Base</span>
              <span className="font-semibold text-white">
                {formatRupiah(BASE_PRICE)}
              </span>
            </div>

            {form.fitur.map((fitId) => {
              const item = FITUR_PRICE_MAP[fitId];
              if (!item || item.price === 0) return null;
              return (
                <div
                  key={fitId}
                  className="flex justify-between items-center text-white/60"
                >
                  <span className="truncate pr-2">+ {item.label}</span>
                  <span className="font-medium text-white">
                    {formatRupiah(item.price)}
                  </span>
                </div>
              );
            })}

            {discount > 0 && (
              <div className="flex justify-between items-center text-[#10B981] pt-1">
                <span className="flex items-center gap-1 font-medium">
                  <Sparkles size={12} /> Diskon Combo (≥ 4 Fitur)
                </span>
                <span className="font-semibold">-{formatRupiah(discount)}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs text-white/40">Estimasi Total Biaya:</div>
              <div className="font-clash text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#7C3AED] via-[#EC4899] to-[#F59E0B]">
                {formatRupiah(totalPrice)}
              </div>
            </div>
            <div className="text-[10px] text-right text-white/40">
              Tanpa biaya bulanan
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading}
            icon={loading ? undefined : <Send size={16} />}
            className="w-full py-3.5 text-sm bg-linear-to-r from-[#7C3AED] to-[#F59E0B] hover:opacity-95 shadow-[0_0_25px_rgba(124,58,237,0.4)]"
          >
            {loading ? "Memproses & Menyimpan..." : "Kirim Order via WhatsApp"}
          </Button>

          <p className="text-center text-[10px] text-white/30 mt-3 flex items-center justify-center gap-1">
            <ShieldCheck size={12} className="text-[#10B981]" /> Konsultasi &
            Penyesuaian Gratis via WA
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// EKSPOR DEFAULT KOMPONEN UTAMA BERPEMBUNGKUS SUSPENSE
export default function RequestQuoteForm() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-12 text-white/40 text-sm">
          Memuat kalkulator invoice...
        </div>
      }
    >
      <QuoteFormContent />
    </Suspense>
  );
}
