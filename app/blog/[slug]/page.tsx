"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Data Konten MDX Lokal Lengkap dengan Isi Artikelnya (Content Body)
const BLOG_DATABASE: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    category: string;
    author: string;
    content: React.ReactNode;
  }
> = {
  "automasi-form-booking-fotografer": {
    title:
      "Mengapa Automasi Form Booking adalah Kunci Skala Bisnis Studio Fotografi",
    date: "Juni 10, 2026", // Bisa disesuaikan dengan tanggal rilis aslimu
    readTime: "5 min read",
    category: "Tips Vendor",
    author: "Emoon Core Team",
    content: (
      <>
        <p>
          Di era digital saat ini, kecepatan merespons klien adalah segalanya.
          Seringkali, pemilik studio foto atau fotografer lepas (freelancer)
          kehilangan momentum transaksi karena terlalu lama membalas chat
          WhatsApp hanya untuk mengirimkan daftar harga (pricelist) atau
          mengecek ketersediaan jadwal slot kosong.
        </p>

        <h3>Masalah Klasik: Biokrasi Chat Manual</h3>
        <p>
          Bayangkan skenario ini: Klien nge-chat jam 10 malam, admin baru balas
          jam 8 pagi. Saat dibalas, klien sudah kehilangan minat atau bahkan
          sudah beralih ke vendor kompetitor yang merespons lebih cepat. Proses
          manual seperti mengetik ulang aturan *Terms & Conditions (T&C)* juga
          memperbesar risiko salah paham.
        </p>

        <h3>Solusi Otomatisasi Terintegrasi</h3>
        <p>
          Dengan memindahkan alur pemesanan ke formulir digital Emoon, seluruh
          proses birokrasi dipotong secara radikal. Klien bisa langsung melihat
          slot kalender yang tersedia secara *real-time*, memilih paket, dan
          menyetujui aturan DP/pembatalan langsung di satu tempat tanpa
          intervensi manual dari Anda.
        </p>
      </>
    ),
  },
  "arsitektur-keamanan-data-emoon": {
    title:
      "Behind the Build: Bagaimana Emoon Mengamankan Data Formulir Klien Anda",
    date: "Mei 28, 2026",
    readTime: "7 min read",
    category: "Behind the Build",
    author: "Feby @ Emoon Dev",
    content: (
      <>
        <p>
          Kepercayaan adalah komoditas paling berharga dalam industri komersial.
          Ketika klien memasukkan data pribadi, nomor WhatsApp, hingga bukti
          transfer ke form digital Anda, platform pembangunnya harus memiliki
          benteng keamanan yang kokoh.
        </p>
        <h3>Enkripsi End-to-End pada Data Formulir</h3>
        <p>
          Setiap input yang masuk melalui domain `eformku.id` diproses
          menggunakan enkripsi TLS ketat sebelum disimpan ke dalam arsitektur
          database. Ini memastikan pihak luar tidak bisa menyadap data pemesanan
          vendor.
        </p>
      </>
    ),
  },
  "update-fitur-v1-2-whatsapp-invoice": {
    title:
      "Update Emoon v1.2: Integrasi Invoice Otomatis Langsung ke WhatsApp Klien",
    date: "Mei 15, 2026",
    readTime: "3 min read",
    category: "Update Emoon",
    author: "Emoon Product Team",
    content: (
      <>
        <p>
          Kami mendengarkan masukan Anda! Pada pembaruan versi 1.2 ini, core
          engine Emoon secara resmi diintegrasikan dengan penyedia gateway
          WhatsApp otomatis.
        </p>
        <h3>Bagaimana Cara Kerjanya?</h3>
        <p>
          Begitu formulir order disubmit oleh calon pengantin atau klien studio
          Anda, sistem di latar belakang (via workflow automation) akan langsung
          menembakkan dokumen invoice digital terformat rapi ke WhatsApp mereka
          saat itu juga.
        </p>
      </>
    ),
  },
  "tips-makeup-artist-handling-client": {
    title:
      "Strategi MUA Mengurangi Kerugian Akibat Klien Cancel Jadwal Sepihak",
    date: "April 20, 2026",
    readTime: "4 min read",
    category: "Tips Vendor",
    author: "Emoon Business Advisory",
    content: (
      <>
        <p>
          Pembatalan sepihak (booking cancellation) dari klien seringkali
          membuat jadwal MUA berantakan dan merugikan secara finansial karena
          slot tersebut harusnya bisa diisi oleh klien lain.
        </p>
        <h3>Kekuatan Hukum T&C Digital</h3>
        <p>
          Melalui form Emoon, Anda bisa mewajibkan klausa centang persetujuan
          aturan hangusnya uang muka (DP) jika pembatalan dilakukan H-7 acara.
          Sistem dokumentasi digital ini menjadi bukti kuat yang profesional.
        </p>
      </>
    ),
  },
};

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  // Mengambil artikel berdasarkan slug di URL
  const post = BLOG_DATABASE[slug];

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
        <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#FAF8FF_1px,transparent_1px)] [background-size:24px 24px] pointer-events-none" />
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
