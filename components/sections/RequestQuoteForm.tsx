"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "../ui/CustomComponents";

const JENIS_USAHA = [
  "Fotografer Wedding",
  "Fotografer Portrait / Keluarga",
  "MUA (Makeup Artist)",
  "Studio Foto",
  "Videografer",
  "Desainer Grafis",
  "Event Organizer",
  "Usaha Kreatif Lainnya",
];

const FITUR_OPTIONS = [
  { id: "form_order", label: "Form Order Digital" },
  { id: "pricelist", label: "Pricelist Terintegrasi" },
  { id: "notif_wa", label: "Notifikasi WhatsApp" },
  { id: "branding", label: "Custom Branding (Logo, Warna)" },
  { id: "rekap", label: "Rekap Data Otomatis" },
  { id: "link_bio", label: "Link Bio (untuk IG / Linktree)" },
  { id: "multi_paket", label: "Multi Paket / Tier Harga" },
  { id: "galeri", label: "Galeri / Portfolio" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Pilih range (opsional)" },
  { value: "< 200k", label: "Di bawah Rp 200.000" },
  { value: "200k - 500k", label: "Rp 200.000 – 500.000" },
  { value: "500k - 1jt", label: "Rp 500.000 – 1.000.000" },
  { value: "> 1jt", label: "Di atas Rp 1.000.000" },
  { value: "belum tau", label: "Belum tau / Fleksibel" },
];

interface FormData {
  nama: string;
  bisnis: string;
  jenis_usaha: string;
  kebutuhan: string;
  fitur: string[];
  nomor_wa: string;
  budget: string;
}

const initialForm: FormData = {
  nama: "",
  bisnis: "",
  jenis_usaha: "",
  kebutuhan: "",
  fitur: [],
  nomor_wa: "",
  budget: "",
};

function InputField({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/80">
        {label}
        {required && <span className="text-[#F59E0B] ml-1">*</span>}
        {hint && (
          <span className="ml-2 text-white/30 font-normal text-xs">{hint}</span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-[#7C3AED]/60 focus:bg-[#7C3AED]/5 transition-all duration-200 text-sm";

export default function RequestQuoteForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const set = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggleFitur = (id: string) => {
    setForm((prev) => ({
      ...prev,
      fitur: prev.fitur.includes(id)
        ? prev.fitur.filter((f) => f !== id)
        : [...prev.fitur, id],
    }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.nama.trim()) e.nama = "Nama wajib diisi";
    if (!form.bisnis.trim()) e.bisnis = "Nama bisnis wajib diisi";
    if (!form.jenis_usaha) e.jenis_usaha = "Pilih jenis usaha";
    if (!form.kebutuhan.trim()) e.kebutuhan = "Ceritain dulu kebutuhanmu";
    if (!form.nomor_wa.trim()) e.nomor_wa = "Nomor WA wajib diisi";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildWAMessage = () => {
    const fiturLabel = form.fitur
      .map((id) => FITUR_OPTIONS.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    return encodeURIComponent(
      `Halo Emoon! 👋\n\nGua mau request quote sistem order digital.\n\n` +
        `*Nama:* ${form.nama}\n` +
        `*Bisnis:* ${form.bisnis}\n` +
        `*Jenis Usaha:* ${form.jenis_usaha}\n` +
        `*Kebutuhan:* ${form.kebutuhan}\n` +
        `*Fitur yang diinginkan:* ${fiturLabel || "-"}\n` +
        `*Budget:* ${form.budget || "Belum ditentukan"}\n\n` +
        `Tolong bantu valuasi dan kasih harga terbaik ya!`,
    );
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);

    // Simulate brief loading for UX
    await new Promise((r) => setTimeout(r, 800));

    setLoading(false);
    setSubmitted(true);

    // Open WA after short delay
    setTimeout(() => {
      const waNumber = "6285291619898"; // TODO: ganti nomor WA owner
      window.open(
        `https://wa.me/${waNumber}?text=${buildWAMessage()}`,
        "_blank",
      );
    }, 1200);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-12 text-center max-w-lg mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 size={40} className="text-[#7C3AED]" />
        </motion.div>
        <h3 className="font-clash text-3xl font-semibold text-white mb-3">
          Request Terkirim!
        </h3>
        <p className="text-white/60 leading-relaxed mb-8">
          WhatsApp kamu bakal terbuka otomatis. Kalau belum terbuka,{" "}
          <button
            onClick={() => {
              const waNumber = "6285291619898";
              window.open(
                `https://wa.me/6285291619898?text=${buildWAMessage()}`,
                "_blank",
              );
            }}
            className="text-[#F59E0B] underline underline-offset-4 hover:text-[#D97706] transition-colors"
          >
            klik di sini
          </button>
          .
        </p>
        <p className="text-sm text-white/40">
          Gua akan valuasi kebutuhanmu dan balas dalam 1×24 jam.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card rounded-3xl p-8 md:p-10 max-w-2xl mx-auto"
    >
      <div className="space-y-7">
        {/* Identitas */}
        <div className="grid sm:grid-cols-2 gap-5">
          <InputField label="Nama kamu" required>
            <input
              type="text"
              placeholder="Misal: Budi Santoso"
              value={form.nama}
              onChange={(e) => set("nama", e.target.value)}
              className={inputClass}
            />
            {errors.nama && (
              <p className="text-xs text-red-400 mt-1">{errors.nama}</p>
            )}
          </InputField>

          <InputField label="Nama bisnis" required>
            <input
              type="text"
              placeholder="Misal: Lumina Pictures"
              value={form.bisnis}
              onChange={(e) => set("bisnis", e.target.value)}
              className={inputClass}
            />
            {errors.bisnis && (
              <p className="text-xs text-red-400 mt-1">{errors.bisnis}</p>
            )}
          </InputField>
        </div>

        {/* Jenis usaha */}
        <InputField label="Jenis usaha" required>
          <div className="relative">
            <select
              value={form.jenis_usaha}
              onChange={(e) => set("jenis_usaha", e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer pr-10 ${
                !form.jenis_usaha ? "text-white/25" : "text-white"
              }`}
            >
              <option value="" disabled className="bg-[#0F0A1E] text-white/50">
                Pilih jenis usaha kamu
              </option>
              {JENIS_USAHA.map((j) => (
                <option key={j} value={j} className="bg-[#0F0A1E] text-white">
                  {j}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
            />
          </div>
          {errors.jenis_usaha && (
            <p className="text-xs text-red-400 mt-1">{errors.jenis_usaha}</p>
          )}
        </InputField>

        {/* Kebutuhan */}
        <InputField
          label="Ceritain kebutuhanmu"
          hint="semakin detail, makin tepat valuasinya"
          required
        >
          <textarea
            rows={4}
            placeholder="Contoh: Gua fotografer wedding di Solo, klien sering nanya paket via WA dan sering ketinggalan info. Pengen ada form yang klien bisa isi sendiri lengkap dengan T&C dan pilihan paket..."
            value={form.kebutuhan}
            onChange={(e) => set("kebutuhan", e.target.value)}
            className={`${inputClass} resize-none leading-relaxed`}
          />
          {errors.kebutuhan && (
            <p className="text-xs text-red-400 mt-1">{errors.kebutuhan}</p>
          )}
        </InputField>

        {/* Fitur checkbox */}
        <InputField
          label="Fitur yang kamu inginkan"
          hint="boleh pilih lebih dari satu"
        >
          <div className="grid grid-cols-2 gap-2.5 mt-1">
            {FITUR_OPTIONS.map((fitur) => {
              const checked = form.fitur.includes(fitur.id);
              return (
                <button
                  key={fitur.id}
                  type="button"
                  onClick={() => toggleFitur(fitur.id)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-sm text-left transition-all duration-200 ${
                    checked
                      ? "border-[#7C3AED]/60 bg-[#7C3AED]/10 text-white"
                      : "border-white/10 bg-white/3 text-white/50 hover:border-white/20 hover:text-white/70"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-[4px] border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      checked
                        ? "bg-[#7C3AED] border-[#7C3AED]"
                        : "border-white/20"
                    }`}
                  >
                    {checked && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  {fitur.label}
                </button>
              );
            })}
          </div>
        </InputField>

        {/* Nomor WA + Budget */}
        <div className="grid sm:grid-cols-2 gap-5">
          <InputField label="Nomor WhatsApp" required>
            <input
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={form.nomor_wa}
              onChange={(e) => set("nomor_wa", e.target.value)}
              className={inputClass}
            />
            {errors.nomor_wa && (
              <p className="text-xs text-red-400 mt-1">{errors.nomor_wa}</p>
            )}
          </InputField>

          <InputField label="Budget estimasi" hint="opsional">
            <div className="relative">
              <select
                value={form.budget}
                onChange={(e) => set("budget", e.target.value)}
                className={`${inputClass} appearance-none cursor-pointer pr-10 ${
                  !form.budget ? "text-white/25" : "text-white"
                }`}
              >
                {BUDGET_OPTIONS.map((b) => (
                  <option
                    key={b.value}
                    value={b.value}
                    disabled={b.value === "" && !form.budget}
                    className="bg-[#0F0A1E] text-white"
                  >
                    {b.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
              />
            </div>
          </InputField>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <Button
            onClick={handleSubmit}
            disabled={loading}
            icon={loading ? undefined : <Send size={16} />}
            className="w-full py-4 text-base"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Memproses...
              </span>
            ) : (
              "Kirim Request"
            )}
          </Button>
          <p className="text-center text-xs text-white/30 mt-4">
            Setelah submit, gua akan valuasi kebutuhan dan kasih harga terbaik
            dalam 1×24 jam.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
