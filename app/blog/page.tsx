"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ArrowUpRight,
  Newspaper,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Mock Data Artikel MDX Lokal (Tinggal kamu tambah sesuka hati nanti)
const BLOG_POSTS = [
  {
    slug: "format-wa-manual-bikin-vendor-mua-rugi-besar",
    title:
      "4 Kerugian Fatal Jika Vendor MUA Masih Pakai Format Text WhatsApp Manual untuk Booking",
    description:
      "Terlalu sering melayani chat tanya-tanya berujung 'hit and run'? Ini alasan format pesanan teks manual bikin bisnis MUA kamu sulit berkembang dan kehilangan klien premium.",
    date: "Juni 28, 2026",
    readTime: "4 min read",
    category: "Tip Vendor",
    featured: true,
    accent: "from-[#EC4899] to-[#F59E0B]", // Gradasi Pink-Orange estetik khas industri kecantikan & MUA
    },

  {
    slug: "strategi-form-order-wa-vendor-kreatif",
    title:
      "Strategi Transformasi Alur Kerja: Mengubah Chat Manual Menjadi Form Order Otomatis Terintegrasi untuk Vendor Kreatif",
    description:
      "Pelajari bagaimana ekosistem Emoon Store membantu MUA, studio, dan fotografer mengeliminasi ghosting, mengotomatisasi rekap Google Spreadsheet, serta mengunci komitmen klien lewat sistem T&C.",
    date: "Juni 24, 2026",
    readTime: "12 min read",
    category: "Tips Vendor",
    featured: false,
    accent: "from-[#3D3B8E] to-[#FFD700]",
  },

  {
    slug: "automasi-sangat-penting-untuk-vendor-kreatif",
    title: "Mengapa Automasi Form Booking adalah Kunci...",
    description:
      "Mengatur alur Down Payment (DP) yang terikat dengan sistem konfirmasi aturan T&C tertulis di form digital terbukti meminimalisir pembatalan mendadak hingga 95%.",
    date: "Juni 12, 2026",
    readTime: "10 min read",
    category: "Tips Vendor",
    featured: false,
    accent: "from-[#7C3AED] to-[#F59E0B]",
  },

  {
    slug: "arsitektur-keamanan-data-emoon",
    title:
      "Behind the Build: Bagaimana Emoon Mengamankan Data Formulir Klien Anda",
    description:
      "Kepercayaan klien adalah segalanya. Bedah arsitektur backend kami dalam menangani enkripsi data pemesanan, invoice, serta privasi transaksi para vendor industri kreatif.",
    date: "Mei 28, 2026",
    readTime: "7 min read",
    category: "Behind the Build",
    featured: false,
    accent: "from-[#7C3AED] to-[#7C3AED]/45",
  },
  {
    slug: "update-fitur-v1-2-whatsapp-invoice",
    title:
      "Update Emoon v1.2: Integrasi Invoice Otomatis Langsung ke WhatsApp Klien",
    description:
      "Kini sistem form Emoon resmi mendukung pengiriman struk DP, pelunasan, serta link terms & conditions langsung secara otomatis tanpa perlu intervensi admin.",
    date: "Mei 15, 2026",
    readTime: "3 min read",
    category: "Update Emoon",
    featured: false,
    accent: "from-[#F59E0B] to-[#D97706]",
  },
  {
    slug: "tips-makeup-artist-handling-client",
    title:
      "Strategi MUA Mengurangi Kerugian Akibat Klien Cancel Jadwal Sepihak",
    description:
      "Mengatur alur Down Payment (DP) yang terikat dengan sistem konfirmasi aturan T&C tertulis di form digital terbukti meminimalisir pembatalan mendadak hingga 95%.",
    date: "April 20, 2026",
    readTime: "4 min read",
    category: "Tips Vendor",
    featured: false,
    accent: "from-[#D97706] to-[#7C3AED]",
  },
];

const CATEGORIES = ["Semua", "Tips Vendor", "Behind the Build", "Update Emoon"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Filter artikel berdasarkan kategori yang dipilih
  const filteredPosts =
    activeCategory === "Semua"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const featuredPost = BLOG_POSTS.find((post) => post.featured);
  const regularPosts = filteredPosts.filter(
    (post) => !post.featured || activeCategory !== "Semua",
  );

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[#0F0A1E] text-[#FAF8FF] pt-32 pb-24 overflow-hidden">
        {/* BACKGROUND GLOWS & PATTERN */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#FAF8FF_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#F59E0B]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* TOMBOL BACK */}
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

          {/* HEADER NEWSROOM */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/20 bg-[#0F0A1E]/80 text-sm font-medium text-[#D97706] mb-6 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
              <Newspaper size={14} className="text-[#F59E0B]" /> Emoon Newsroom
              & Changelog
            </div>
            <h1 className="font-clash text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
              Wawasan Bisnis & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#F59E0B] to-[#D97706]">
                Perkembangan Sistem
              </span>
            </h1>
            <p className="text-lg text-[#FAF8FF]/60 max-w-2xl leading-relaxed">
              Ikuti catatan rilis pembaruan platform, edukasi operasional
              workflow studio, serta transparansi rekayasa produk digital dari
              internal tim Emoon.
            </p>
          </div>

          {/* TABS CATEGORY FILTER */}
          <div className="flex flex-wrap gap-2 border-b border-[#FAF8FF]/10 pb-6 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#7C3AED] text-[#FAF8FF] shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                    : "bg-[#7C3AED]/5 border border-[#7C3AED]/10 text-[#FAF8FF]/50 hover:text-[#FAF8FF] hover:border-[#7C3AED]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FEATURED POST (Hanya muncul jika filter di set "Semua") */}
          {activeCategory === "Semua" && featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 group"
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="relative p-8 md:p-12 rounded-3xl border border-[#7C3AED]/15 bg-[#0F0A1E]/40 backdrop-blur-md overflow-hidden grid md:grid-cols-12 gap-8 items-center hover:border-[#7C3AED]/40 transition-colors">
                  {/* Decorative Gradient Indicator Side Box */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${featuredPost.accent}`}
                  />

                  <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs font-medium text-[#F59E0B] mb-4">
                      <span className="px-2.5 py-1 bg-[#F59E0B]/10 rounded-md border border-[#F59E0B]/20">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#FAF8FF]/40">
                        <Calendar size={12} /> {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1 text-[#FAF8FF]/40">
                        <Clock size={12} /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="font-clash text-2xl md:text-4xl font-semibold text-[#FAF8FF] mb-4 group-hover:text-[#7C3AED] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-[#FAF8FF]/60 text-base leading-relaxed mb-6">
                      {featuredPost.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FAF8FF] group-hover:text-[#F59E0B] transition-colors">
                      Baca Artikel Lengkap{" "}
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>

                  {/* Right abstract layout geometric element for Corporate identity */}
                  <div className="hidden md:flex md:col-span-5 relative h-48 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#F59E0B]/5 border border-[#7C3AED]/10 items-center justify-center overflow-hidden">
                    <div
                      className={`absolute w-32 h-32 rounded-full bg-gradient-to-r ${featuredPost.accent} opacity-20 blur-xl`}
                    />
                    <span className="font-clash text-7xl font-bold tracking-tighter opacity-5 select-none">
                      EMOON
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* REGULAR POSTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-stretch">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl border border-[#7C3AED]/10 bg-[#0F0A1E]/60 backdrop-blur-md overflow-hidden hover:border-[#7C3AED]/30 transition-colors shadow-lg"
              >
                <div>
                  {/* Category & Meta tags */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#FAF8FF]/50 mb-5">
                    <span className="px-2 py-0.5 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded text-[#FAF8FF]/80">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-clash text-xl font-semibold text-[#FAF8FF] mb-3 group-hover:text-[#F59E0B] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-[#FAF8FF]/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#FAF8FF]/5 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-[#FAF8FF]/40">
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#FAF8FF]/70 group-hover:text-[#7C3AED] transition-colors"
                  >
                    Selengkapnya{" "}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 border border-dashed border-[#7C3AED]/20 rounded-3xl bg-[#0F0A1E]/30">
              <p className="text-[#FAF8FF]/40 text-base">
                Belum ada rilis berita atau tips di kategori ini, bro.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
