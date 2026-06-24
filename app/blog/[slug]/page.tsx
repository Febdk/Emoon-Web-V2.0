"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Data Konten Lokal Lengkap dengan Isi Artikel Terbaru
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

    "strategi-form-order-wa-vendor-kreatif": {
    title: "Strategi Transformasi Alur Kerja: Mengubah Chat Manual Menjadi Form Order Otomatis Terintegrasi untuk Vendor Kreatif",
    date: "Juni 24, 2026",
    readTime: "12 min read",
    category: "Tips Vendor",
    author: "Feby @ Emoon Dev",
    content: (
      <div className="space-y-6 text-zinc-300 text-sm leading-relaxed text-left">
        <p>
          Dalam industri jasa komersial dan kreatif—seperti *Make-Up Artist* (MUA), pengelola Studio Foto, hingga Fotografer Pernikahan—efisiensi operasional pra-penjualan sering kali menjadi penentu utama kesehatan bisnis. Masalah klasik yang kerap dihadapi oleh manajemen, termasuk tim di bawah naungan <span className="text-white font-semibold">@permata.foto</span>, adalah tingginya volume obrolan WhatsApp yang masuk hanya untuk menanyakan daftar harga (*pricelist*) namun berakhir tanpa kejelasan (*ghosting*).
        </p>
        <p>
          Melayani calon klien secara manual dengan mengetik ulang teks format pesanan satu per satu tidak hanya menguras energi, tetapi juga membuka celah besar terjadinya kesalahan manusia (*human error*), seperti salah mencatat tanggal acara atau terjadi *double-booking* jadwal slot studio.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-3 text-left">
          1. Hambatan Psikologis Format Teks Manual pada Calon Klien
        </h3>
        <p>
          Ketika seorang vendor menyuruh calon pembeli mengisi format order berbasis teks ketikan biasa (misalnya: *Nama/Tanggal/Paket/Lokasi*), Anda sebenarnya sedang memberikan beban kerja kognitif tambahan kepada mereka. Klien harus menyalin teks, menghapus bagian yang tidak perlu, dan mengetik ulang secara manual. Di era digital saat ini, gesekan kecil (*friction*) seperti ini bisa menurunkan minat beli hingga 40%.
        </p>
        <p>
          Sebaliknya, pemanfaatan **Formulir Order Kustom Berbasis Web** memberikan impresi yang jauh lebih profesional. Klien disuguhkan antarmuka yang bersih untuk memilih tanggal lewat kalender interaktif, memilih paket layanan, dan melihat kalkulasi total biaya secara instan sebelum mengirimkan pesanan.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-3 text-left">
          2. Mengunci Komitmen Transaksi Melalui Integrasi T&C (Terms & Conditions)
        </h3>
        <p>
          Salah satu fitur krusial yang diimplementasikan dalam ekosistem <span className="text-white font-semibold">Emoon Store</span> adalah integrasi persetujuan aturan tertulis secara digital. Mengatur alur pemesanan atau *Down Payment* (DP) yang mewajibkan pengguna mencentang kotak konfirmasi syarat dan ketentuan (T&C) terbukti efektif meminimalisir pembatalan sepihak secara mendadak.
        </p>
        <p>
          Dengan memaksa klien menyetujui aturan regulasi vendor—misalnya mengenai kebijakan hangusnya DP jika terjadi pembatalan sepihak—sebelum formulir dapat di-submit, Anda memindahkan kekuatan hukum dari sekadar obrolan chat informal menjadi sebuah kesepakatan bisnis yang sah di awal transaksi.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-3 text-left">
          3. Arsitektur Sinkronisasi Otomatis: WhatsApp API & Google Spreadsheet
        </h3>
        <p>
          Sistem automasi yang dirancang oleh Emoon Store bekerja dengan memanfaatkan protokol jembatan data yang aman. Begitu pembeli menekan tombol kirim di formulir web, dua proses komputasi terjadi secara simultan:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-zinc-400">
          <li>
            <strong className="text-zinc-200">Penerusan Data ke WhatsApp API:</strong> Sistem mengonversi input formulir menjadi pesan teks terstruktur yang rapi, yang langsung dikirimkan ke WhatsApp milik vendor sebagai notifikasi pesanan utama.
          </li>
          <li>
            <strong className="text-zinc-200">Sinkronisasi Google Spreadsheet:</strong> Melalui skrip integrasi <span className="text-white">Google Apps Script</span>, data mentah pesanan secara otomatis masuk ke lembar kerja Google Spreadsheet pribadi Anda sebagai basis data cadangan (*backup*) secara real-time.
          </li>
        </ul>
        <p>
          Ini berarti tim administrasi atau pemilik studio tidak perlu lagi melakukan rekap data manual di akhir bulan, karena semua rekaman transaksi sudah tersusun rapi di lembar kerja komputasi awan Anda.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-3 text-left">
          4. Keuntungan Investasi: Skema One-Time Payment tanpa Biaya Langganan
        </h3>
        <p>
          Berbeda dengan platform pembangun web SaaS pada umumnya yang menerapkan biaya sewa sistem bulanan, layanan pembuatan Smart Order Form dari Emoon Store mengadopsi prinsip <span className="text-white font-semibold">Sekali Bayar (One-Time Payment)</span>. Vendor mendapatkan kepemilikan sistem formulir kustom dengan penjenamaan (*custom branding*) penuh tanpa perlu mencemaskan biaya perpanjangan server yang membebani margin keuntungan bulanan bisnis kreatif Anda.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-3 text-left">
          Kesimpulan: Saatnya Naik Kelas Menuju Ekosistem Digital
        </h3>
        <p>
          Mengurangi pekerjaan repetitif adalah langkah awal untuk menaikkan skala (*scale-up*) bisnis vendor kreatif Anda. Dengan mengotomatisasikan alur masuknya pesanan, Anda bisa menghemat waktu operasional hingga puluhan jam setiap minggunya. Waktu luang tersebut dapat Anda alokasikan kembali untuk fokus pada peningkatan kualitas karya foto, portofolio riasan MUA, maupun strategi pemasaran makro bisnis Anda.
        </p>
      </div>
    ),
  },

  "automasi-sangat-penting-untuk-vendor-kreatif": {
    title:
      "5 Alasan Kenapa Amankan Slot Booking Pakai Excel Bikin Fotografer Kehilangan Klien",
    date: "Juni 12, 2026",
    readTime: "3 min read",
    category: "Tips Vendor",
    author: "Emoon Core Team",
    content: (
      <>
        <p>
          Dalam industri jasa kreatif seperti fotografi, manajemen jadwal (
          <em>booking slot</em>) adalah urat nadi bisnis. Namun, fakta di
          lapangan menunjukkan masih banyak fotografer, <em>Makeup Artist</em>{" "}
          (MUA), hingga pengelola studio kasual yang mengandalkan Google Sheets
          atau Microsoft Excel secara manual untuk mencatat pesanan klien yang
          masuk dari WhatsApp.
        </p>
        <p>
          Meskipun terlihat praktis di awal, mengelola <em>booking form</em>{" "}
          secara manual lewat spreadsheet menyimpan bom waktu yang bisa merusak{" "}
          <em>brand image</em> dan membuat calon klien potensial kabur ke
          kompetitor. Berikut adalah 5 alasan utamanya:
        </p>

        <h3>1. Respons Super Lambat (Klien Gak Suka Menunggu)</h3>
        <p>
          Saat calon klien bertanya{" "}
          <em>"Kak, tanggal 25 Juni besok kosong?"</em> melalui WhatsApp, kamu
          harus membuka laptop, mencari file Excel, dan mengecek baris jadwal
          secara manual. Di era digital serba instan ini, menunggu 10 menit saja
          sudah cukup membuat klien beralih mem-text studio sebelah yang punya
          sistem <em>booking</em> otomatis.
        </p>

        <h3>2. Risiko Jadwal Bentrok (Double Booking)</h3>
        <p>
          Human error adalah musuh terbesar input manual. Cukup dengan sekali
          lupa mencatat atau salah mengetik tanggal di Excel, kamu bisa
          mendapati dua klien berbeda datang di jam dan studio yang sama.
          Dampaknya? Reputasi profesional yang kamu bangun bertahun-tahun bisa
          hancur dalam sekejap karena ulasan buruk pelanggan.
        </p>

        <h3>3. Alur Pembayaran DP yang Semrawut</h3>
        <p>
          Menggunakan Excel berarti kamu harus mengecek mutasi rekening bank
          secara berkala untuk memastikan apakah DP (<em>Down Payment</em>)
          sudah masuk atau belum, lalu mengubah statusnya menjadi "LUNAS" secara
          manual. Jika kamu sedang menghandle <em>photoshoot</em> di lapangan,
          proses administrasi seperti ini pasti akan terbengkalai.
        </p>

        <h3>4. Tampilan Kurang Profesional</h3>
        <p>
          Mengirimkan <em>screenshot</em> tabel Excel atau menyuruh klien
          mengisi teks format orderan yang panjang di WhatsApp terasa sangat
          kuno. Klien premium yang berani membayar mahal cenderung
          mengekspektasikan pengalaman pemesanan yang bersih, bermerek (
          <em>branded</em>), dan modern.
        </p>

        <h3>5. Kehilangan Potensi Data Berharga</h3>
        <p>
          Data klien di Excel sering kali menumpuk begitu saja tanpa struktur
          yang jelas. Kamu akan kesulitan melihat statistik performa bisnismu
          sendiri—seperti paket foto apa yang paling laris, atau kapan
          bulan-bulan paling ramai orderan.
        </p>

        {/* Highlight Call-to-Action styled Box */}
        <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-[#7C3AED]/15 to-[#F59E0B]/5 border border-[#7C3AED]/20">
          <h4 className="text-lg font-semibold text-[#F59E0B] font-clash mb-2">
            Solusinya? Upgrade ke Sistem Eform Digital Otomatis
          </h4>
          <p className="text-sm leading-relaxed text-[#FAF8FF]/70">
            Kabar baiknya, kamu tidak perlu lagi pusing mengurusi kekacauan
            spreadsheet manual ini. <strong>Emoon (eformku.id)</strong> hadir
            sebagai standar baru cara vendor kreatif menerima order. Dengan
            Emoon, kamu bisa memiliki halaman formulir order digital yang
            instan, branded, terintegrasi otomatis dengan WhatsApp invoice,
            serta dashboard manajemen slot yang otomatis mengunci tanggal
            pasca-pembayaran.
          </p>
        </div>
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
