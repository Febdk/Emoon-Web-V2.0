"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { getBlogPostFullDetail } from "@/lib/posts-content";

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  // Mengambil artikel berdasarkan slug di URL secara terpusat
  const post = getBlogPostFullDetail(slug);



  // Jika artikel tidak ditemukan di database lokal
  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#0F0A1E] text-[#FAF8FF] flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-semibold font-clash mb-4">
            Artikel Tidak Ditemukan
          </h1>
          <p className="text-[#FAF8FF]/50 mb-8">
            Maaf, artikel yang kamu cari gak ada atau udah dihapus, bro.
          </p>
          <Link
            href="/blog"
            className="px-6 py-2.5 bg-[#7C3AED] rounded-full text-sm font-medium"
          >
            Kembali ke Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[#0F0A1E] text-[#FAF8FF] pt-32 pb-24 overflow-hidden">
        {/* BACKGROUND EFFECT */}
        <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#FAF8FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          {/* BACK LINK */}
          <div className="mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#FAF8FF]/40 hover:text-[#FAF8FF]/70 transition-colors group"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Kembali ke blog
            </Link>
          </div>

          {/* META DATA ARTIKEL */}
          <div className="flex items-center gap-3 text-xs font-medium mb-6">
            <span className="px-3 py-1 bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#FAF8FF] rounded-md">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-[#FAF8FF]/40">
              <Calendar size={13} /> {post.date}
            </span>
            <span className="flex items-center gap-1 text-[#FAF8FF]/40">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>

          {/* JUDUL UTAMA */}
          <h1 className="font-clash text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-8 text-[#FAF8FF]">
            {post.title}
          </h1>

          {/* AUTHOR INFO */}
          <div className="flex items-center justify-between border-y border-[#FAF8FF]/10 py-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#F59E0B]">
                <User size={16} />
              </div>
              <div>
                <div className="text-sm font-medium text-[#FAF8FF]">
                  {post.author}
                </div>
                <div className="text-xs text-[#FAF8FF]/40">Verified Author</div>
              </div>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link artikel berhasil disalin, bro!");
              }}
              className="p-2 rounded-full bg-[#FAF8FF]/5 hover:bg-[#FAF8FF]/10 text-[#FAF8FF]/60 hover:text-[#FAF8FF] transition-colors"
              title="Salin Link"
            >
              <Share2 size={16} />
            </button>
          </div>

          {/* ISI KONTEN UTAMA (INDUSTRIAL-TYPOGRAPHY STYLE) */}
          <article
            className="prose prose-invert max-w-none text-[#FAF8FF]/80 leading-relaxed space-y-6 text-base md:text-lg
            prose-headings:font-clash prose-headings:font-semibold prose-headings:text-[#FAF8FF]
            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:pt-4
            prose-strong:text-[#F59E0B] prose-strong:font-semibold"
          >
            {post.content}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
