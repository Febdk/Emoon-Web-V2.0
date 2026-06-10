"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowLeft, MessageSquare } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Data 5 Testimoni Lengkap Khusus Vendor Kreatif Emoon
const allTestimonials = [
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
            {allTestimonials.map((testi, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={
                  { "--glow-color": testi.glowColor } as React.CSSProperties
                }
                className="relative p-8 rounded-3xl border border-[#7C3AED]/10 bg-[#0F0A1E]/60 backdrop-blur-md overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-[#7C3AED]/30 transition-colors"
              >
                {/* Subtle hover background accent inside card */}
                <div className="absolute -inset-px bg-gradient-to-br from-transparent via-transparent to-[var(--glow-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Stars Rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testi.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={15}
                      className="text-[#F59E0B] fill-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-[#FAF8FF]/80 text-base leading-relaxed mb-6 italic">
                  &ldquo;{testi.quote}&rdquo;
                </p>

                {/* Divider line */}
                <div className="w-full h-[1px] bg-[#FAF8FF]/5 mb-6" />

                {/* User Identity Info */}
                <div className="flex items-center gap-4">
                  {/* Premium Avatar Placeholder with Initials */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7C3AED]/30 to-[#F59E0B]/20 border border-[#7C3AED]/30 flex items-center justify-center font-clash text-xs font-semibold text-[#FAF8FF]">
                    {testi.initials}
                  </div>
                  <div>
                    <div className="font-medium text-[#FAF8FF] text-sm md:text-base">
                      {testi.name}
                    </div>
                    <div className="text-xs text-[#FAF8FF]/40 mt-0.5">
                      {testi.role} at{" "}
                      <span className="text-[#D97706]/90 font-medium">
                        {testi.company}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-sm text-[#FAF8FF]/25 mt-16">
            Siap untuk punya sistem order digital sendiri?{" "}
            <Link
              href="/pricing"
              className="text-[#FAF8FF]/40 underline underline-offset-4 hover:text-[#FAF8FF]/60 transition-colors"
            >
              Request Quote Sekarang
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
