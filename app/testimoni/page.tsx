"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  ArrowLeft,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface TestimonialItem {
  id?: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating?: number;
  initials?: string;
  glowColor?: string;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Andi R.",
    role: "MUA & Hair Do",
    company: "AndiR Makeup Studio",
    quote:
      "Gila, semenjak pakai Emoon klien jadi jarang banyak nanya karena pricelist & T&C udah jelas banget di dalam form. Tinggal transfer terus verifikasi otomatis. Hemat waktu chat sampai 80%!",
    rating: 5,
    initials: "AR",
    glowColor: "rgba(124,58,237,0.15)",
  },
  {
    name: "Saras W.",
    role: "Studio Owner",
    company: "Permata Photography",
    quote:
      "Dulu rekap manual jadwal studio di Excel sering bentrok dan kelewat. Sekarang tiap ada order masuk lewat Emoon langsung ternotif otomatis ke WhatsApp admin dan ke-rekap rapi. Branding formnya juga clean dan premium parah!",
    rating: 5,
    initials: "SW",
    glowColor: "rgba(245,158,11,0.12)",
  },
  {
    name: "Bima Sakti",
    role: "Wedding Photographer",
    company: "Kagumi Studio",
    quote:
      "Klien wedding kelas high-end itu sensitif banget sama estetika. Form order bawaan Emoon bener-bener minimalis-industrial, pas banget sama persona brand studio foto gua. Gak kelihatan murahan!",
    rating: 5,
    initials: "BS",
    glowColor: "rgba(217,119,6,0.12)",
  },
  {
    name: "Devi Lestari",
    role: "Visual Content Creator",
    company: "Far Horizon Project",
    quote:
      "Fitur integrasi booking-nya juara. Begitu klien pilih tanggal slot kosong dan isi formulir, link invoice langsung ke-generate otomatis. Buat freelancer yang handle semuanya sendiri, Emoon ini penyelamat.",
    rating: 5,
    initials: "DL",
    glowColor: "rgba(124,58,237,0.12)",
  },
  {
    name: "Rian Utama",
    role: "Commercial Videographer",
    company: "Varia Creative Media",
    quote:
      "Sistem down payment (DP) dan termin pembayaran jadi teratur semenjak migrasi ke sistem Emoon. Klien jadi lebih percaya karena alur invoicing-nya sangat profesional setara agensi korporat besar.",
    rating: 5,
    initials: "RU",
    glowColor: "rgba(245,158,11,0.15)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export default function TestimoniPage() {
  const [list, setList] = useState<TestimonialItem[]>(defaultTestimonials);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mapped = data.data.map((item: TestimonialItem) => ({
            ...item,
            company: item.role,
            initials: item.name.substring(0, 2).toUpperCase(),
            glowColor: "rgba(124,58,237,0.12)",
          }));
          setList(mapped);
        }
      })
      .catch(() => {});
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, quote, rating }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setName("");
        setRole("");
        setQuote("");
      } else {
        alert(data.error || "Gagal mengirim testimoni.");
      }
    } catch {
      alert("Terjadi kesalahan jaringan.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[#0F0A1E] text-[#FAF8FF] pt-32 pb-24 overflow-hidden">
        {/* BACKGROUND TEXTURE & GLOW EFFECTS */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FAF8FF_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12)_0%,transparent_70%)] blur-[80px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#D97706]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* BACK TO HOME LINK */}
          <div className="mb-10 text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#FAF8FF]/40 hover:text-[#FAF8FF]/70 transition-colors group"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Kembali ke beranda
            </Link>
          </div>

          {/* HEADER SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/20 bg-[#0F0A1E]/80 text-sm font-medium text-[#D97706] mb-6 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
              <MessageSquare size={14} className="text-[#F59E0B]" /> Cerita
              Sukses Vendor Kami
            </div>
            <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-[#FAF8FF] mb-5">
              Ulasan Jujur dari Mereka yang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#F59E0B] to-[#D97706]">
                Naik Kelas
              </span>
            </h1>
            <p className="text-lg text-[#FAF8FF]/55 max-w-xl mx-auto leading-relaxed">
              Dengarkan langsung bagaimana para fotografer, MUA, dan pemilik
              studio kreatif memotong jalur birokrasi orderan mereka menjadi
              serba otomatis bersama Emoon.
            </p>
          </div>

          {/* TESTIMONIALS GRID LAYOUT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-start"
          >
            {list.map((testi, i) => (
              <motion.div
                key={testi.id || i}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={
                  {
                    "--glow-color": testi.glowColor || "rgba(124,58,237,0.12)",
                  } as React.CSSProperties
                }
                className="relative p-8 rounded-3xl border border-[#7C3AED]/10 bg-[#0F0A1E]/60 backdrop-blur-md overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-[#7C3AED]/30 transition-colors"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-transparent via-transparent to-[var(--glow-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testi.rating || 5 }).map(
                    (_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={15}
                        className="text-[#F59E0B] fill-[#F59E0B]"
                      />
                    ),
                  )}
                </div>

                <p className="text-[#FAF8FF]/80 text-base leading-relaxed mb-6 italic">
                  &ldquo;{testi.quote}&rdquo;
                </p>

                <div className="w-full h-[1px] bg-[#FAF8FF]/5 mb-6" />

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7C3AED]/30 to-[#F59E0B]/20 border border-[#7C3AED]/30 flex items-center justify-center font-clash text-xs font-semibold text-[#FAF8FF]">
                    {testi.initials || testi.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium text-[#FAF8FF] text-sm md:text-base">
                      {testi.name}
                    </div>
                    <div className="text-xs text-[#FAF8FF]/40 mt-0.5">
                      {testi.role} {testi.company ? `at ${testi.company}` : ""}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FORM KIRIM TESTIMONI BARU */}
          <div className="mt-20 max-w-xl mx-auto text-left">
            <div className="p-8 rounded-3xl border border-[#7C3AED]/20 bg-[#0F0A1E]/80 backdrop-blur-md shadow-2xl">
              <h3 className="font-clash text-2xl font-semibold text-[#FAF8FF] mb-2">
                Tulis Testimonimu
              </h3>
              <p className="text-xs text-[#FAF8FF]/50 mb-6">
                Pengalaman kamu sangat berharga untuk membantu perkembangan
                sesama vendor kreatif.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto mb-3" />
                  <h4 className="font-semibold text-lg text-[#FAF8FF]">
                    Terima kasih atas testimoninya!
                  </h4>
                  <p className="text-xs text-[#FAF8FF]/50 mt-1">
                    Ulasan kamu sudah tersimpan dan akan segera tampil setelah
                    disetujui admin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#FAF8FF]/80 mb-1.5">
                      Nama Kamu <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Contoh: Budi Santoso"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#FAF8FF] placeholder:text-white/20 text-xs focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#FAF8FF]/80 mb-1.5">
                      Role / Nama Studio{" "}
                      <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                      placeholder="Contoh: Owner Permata Photo"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#FAF8FF] placeholder:text-white/20 text-xs focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#FAF8FF]/80 mb-1.5">
                      Rating
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full bg-[#18122B] border border-white/10 rounded-xl px-4 py-2.5 text-[#FAF8FF] text-xs focus:outline-none focus:border-[#7C3AED]"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 - Sangat Puas)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 - Bagus)</option>
                      <option value={3}>⭐⭐⭐ (3 - Cukup)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#FAF8FF]/80 mb-1.5">
                      Pesan Testimoni <span className="text-[#F59E0B]">*</span>
                    </label>
                    <textarea
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      required
                      rows={4}
                      placeholder="Apa yang paling kamu suka dari sistem Emoon?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#FAF8FF] placeholder:text-white/20 text-xs focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] text-white font-medium rounded-xl flex items-center justify-center gap-2 transition text-xs disabled:opacity-50"
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    Kirim Testimoni
                  </button>
                </form>
              )}
            </div>
          </div>

          <p className="text-center text-sm text-[#FAF8FF]/35 mt-16">
            Siap untuk punya sistem order digital sendiri?{" "}
            <Link
              href="/simulator"
              className="text-[#FAF8FF]/60 underline underline-offset-4 hover:text-[#F59E0B] transition-colors font-medium"
            >
              Coba Simulator Sekarang
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
