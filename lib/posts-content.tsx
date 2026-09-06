import React from "react";
import Image from "next/image";
import { getBlogPostMetaBySlug, BlogPostMeta } from "@/lib/posts";

export interface BlogPostFullDetail extends BlogPostMeta {
  content: React.ReactNode;
}

const BLOG_CONTENT_DATABASE: Record<string, React.ReactNode> = {
  "kesalahan-fatal-fotografer-wedding-kelola-booking": (
    <>
      <p>
        Industri pernikahan adalah salah satu bisnis paling potensial sekaligus bernilai tinggi bagi seorang <em>wedding photographer</em>. Namun, di balik keindahan dokumentasi momen bahagia klien, terdapat urusan operasional pra-acara yang sangat kompleks: mengelola puluhan tanggal booking, mencatat Down Payment (DP), hingga mengirimkan struk konfirmasi.
      </p>

      <div className="my-8 overflow-hidden rounded-2xl border border-[#FAF8FF]/10 bg-[#12101C]">
        <div className="relative w-full h-[320px]">
          <Image
            src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop"
            alt="Wedding photographer shooting a couple"
            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            fill
            unoptimized
          />
        </div>
        <span className="block p-3 text-center text-xs text-[#FAF8FF]/50 italic border-t border-[#FAF8FF]/5">
          Foto dokumentasi tim fotografi di lokasi acara wedding
        </span>
      </div>

      <p>
        Banyak fotografer berbakat gagal berkembang bukan karena kualitas fotonya jelek, melainkan karena manajemen pemesanannya semrawut. Berikut 5 kesalahan fatal yang sering terjadi:
      </p>

      <h3>1. Mengunci Tanggal Tanpa Bukti Konfirmasi DP Resmi</h3>
      <p>
        Hanya berpegangan pada pesan singkat WhatsApp seperti <em>&quot;Kak, aku kunci tanggal 15 ya&quot;</em> tanpa menerbitkan invoice digital yang sah berisiko tinggi. Klien sering menganggap pesanan belum terikat resmi dan bisa beralih ke vendor lain secara sepihak.
      </p>

      <h3>2. Miskomunikasi Mengenai Hak Cipta & Ketentuan Reschedule</h3>
      <p>
        Ketika terjadi perubahan tanggal pernikahan karena alasan darurat, tidak sedikit klien yang menuntut pengembalian DP 100%. Tanpa klausul Terms & Conditions (T&C) tertulis yang disetujui klien saat mengisi form order, posisi hukum vendor menjadi sangat lemah.
      </p>

      <h3>3. Rekap Jadwal Manual yang Berisiko Double Booking</h3>
      <p>
        Menuliskan bookingan di buku catatan atau aplikasi HP tanpa sinkronisasi real-time rawan menyebabkan bentrok jadwal antar tim videografer dan fotografer utama.
      </p>

      <h3>4. Menunda Pengiriman Struk / Invoice Pembayaran</h3>
      <p>
        Klien yang telah mentransfer DP puluhan juta rupiah membutuhkan kepastian instan. Menunda pengiriman kuitansi bukti bayar hingga berhari-hari dapat merusak tingkat kepercayaan mereka terhadap brand kamu.
      </p>

      <h3>5. Alur Pemesanan yang Kurang Modern</h3>
      <p>
        Klien pasangan muda Gen-Z & Milenial berekspektasi tinggi terhadap pengalaman digital. Formulir order yang modern, terstruktur, dan estetik langsung membedakan fotografer profesional dari fotografer biasa.
      </p>

      <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-[#7C3AED]/20 via-[#EC4899]/15 to-[#F59E0B]/10 border border-[#7C3AED]/30 shadow-[0_0_30px_rgba(124,58,237,0.15)]">
        <h4 className="text-xl font-semibold text-[#F59E0B] font-clash mb-3">
          Otomatiskan Alur Pemesanan Fotografi Kamu Bersama Emoon
        </h4>
        <p className="text-sm leading-relaxed text-[#FAF8FF]/80">
          Dengan platform <strong>Emoon (emoon.eformku.id)</strong>, fotografer dapat memiliki link form booking digital khusus yang terintegrasi langsung dengan konfirmasi WhatsApp otomatis, kalkulasi invoice instan, serta integrasi persetujuan aturan T&C digital. Bisnis lebih rapi, tim lebih fokus berkarya!
        </p>
      </div>
    </>
  ),

  "format-wa-manual-bikin-vendor-mua-rugi-besar": (
    <>
      <p>
        Bagi seorang <em>Makeup Artist</em> (MUA), waktu adalah aset yang sangat
        berharga. Di tengah padatnya jadwal <em>retouch</em> subuh, memilih
        produk kosmetik terbaik, hingga mengikuti tren riasan terbaru, aspek
        administrasi sering kali menjadi hal yang paling melelahkan. Apalagi jika
        bisnis MUA kamu masih mengandalkan format teks manual via WhatsApp untuk
        mendata bookingan dari klien.
      </p>

      {/* Gambar Ilustrasi Utama */}
      <div className="my-8 overflow-hidden rounded-2xl border border-[#FAF8FF]/10 bg-[#12101C]">
        <div className="relative w-full h-[350px]">
          <Image
            src="https://images.pexels.com/photos/13933220/pexels-photo-13933220.jpeg"
            alt="MUA professional makeup session"
            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            fill
            unoptimized
          />
        </div>
        <span className="block p-3 text-center text-xs text-[#FAF8FF]/50 italic border-t border-[#FAF8FF]/5">
          sumber: Pexels.com (Foto oleh Ketut Subiyanto)
        </span>
      </div>

      <p>
        Mengirimkan format panjang seperti{" "}
        <em>&quot;Nama:, Tanggal Acara:, Jenis Makeup:, Alamat Lokasi:&quot;</em>
        mungkin terasa normal di awal merintis karier. Namun, seiring
        meningkatnya <em>brand value</em> dan jumlah portofolio kamu, kebiasaan
        ini perlahan bisa menjadi lubang kerugian tersembunyi yang menahan
        bisnismu untuk naik kelas. Berikut adalah 4 kerugian fatalnya:
      </p>

      <h3>1. Fenomena &quot;Hit and Run&quot; yang Menguras Energi</h3>
      <p>
        Berapa banyak waktu yang kamu habiskan dalam sehari hanya untuk melayani
        calon klien yang bertanya{" "}
        <em>&quot;Kak, tanggal 10 Oktober slot Wedding-nya masih kosong?&quot;</em>.
        Kamu meluangkan waktu mengecek jadwal, mengirimkan format order, namun
        setelah mereka mengisi teks tersebut, tiba-tiba mereka menghilang tanpa
        kabar (<em>hit and run</em>). Format teks manual tidak memberikan rasa
        urgensi atau ikatan komitmen psikologis apa pun kepada calon pengantin.
      </p>

      <h3>2. Miskomunikasi Detail Riasan dan Alamat Acara</h3>
      <p>
        Saat teks format pesanan bertumpuk di ruang obrolan WhatsApp, informasi
        penting rawan terselip. Klien sering kali salah mengetik jam acara,
        lupa menyebutkan jumlah keluarga yang ikut di-makeup, atau mengirimkan
        titik lokasi (share location) yang tidak akurat.
      </p>

      <div className="my-8 overflow-hidden rounded-2xl border border-[#FAF8FF]/10 bg-[#12101C]">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
          alt="Makeup brushes and cosmetics tools"
          className="w-full h-[250px] object-cover opacity-80"
        />
      </div>

      <h3>3. Kesulitan Memvalidasi DP (Down Payment) Secara Cepat</h3>
      <p>
        Sistem manual memaksa kamu untuk menjadi MUA sekaligus akuntan dadakan.
        Kamu harus terus menerus meminta foto resi bukti transfer,
        mencocokkannya dengan mutasi rekening m-banking, dan mengonfirmasinya
        satu per satu secara berkala.
      </p>

      <h3>4. Kehilangan Daya Tarik di Mata Klien Premium</h3>
      <p>
        Calon pengantin modern (khususnya Gen Z dan Milenial) sangat menyukai
        segala sesuatu yang praktis, cepat, dan estetik. Mengajak mereka bertukar
        teks panjang yang membingungkan terkesan kurang profesional.
      </p>

      <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-[#EC4899]/15 to-[#F59E0B]/5 border border-[#EC4899]/20">
        <h4 className="text-lg font-semibold text-[#EC4899] font-clash mb-2">
          Saatnya MUA Naik Kelas: Ganti Teks WA dengan E-Form Instan Emoon
        </h4>
        <p className="text-sm leading-relaxed text-[#FAF8FF]/70">
          Sudah saatnya kamu fokus 100% pada seni merias wajah dan menyerahkan
          urusan administrasi kepada sistem. Dengan{" "}
          <strong>Emoon (emoon.eformku.id)</strong>, kamu bisa membuat link
          formulir booking digital khusus MUA yang cantik, memajang katalog
          paket riasan, serta mengintegrasikan sistem otomatisasi pesan.
        </p>
      </div>
    </>
  ),

  "strategi-form-order-wa-vendor-kreatif": (
    <div className="space-y-6 text-zinc-300 text-sm leading-relaxed text-left">
      <p>
        Dalam industri jasa komersial dan kreatif—seperti *Make-Up Artist*
        (MUA), pengelola Studio Foto, hingga Fotografer Pernikahan—efisiensi
        operasional pra-penjualan sering kali menjadi penentu utama kesehatan
        bisnis.
      </p>
      <h3 className="text-xl font-bold text-white mt-8 mb-3 text-left">
        1. Hambatan Psikologis Format Teks Manual pada Calon Klien
      </h3>
      <p>
        Ketika seorang vendor menyuruh calon pembeli mengisi format order
        berbasis teks ketikan biasa, Anda sebenarnya sedang memberikan beban kerja
        kognitif tambahan kepada mereka.
      </p>
      <h3 className="text-xl font-bold text-white mt-8 mb-3 text-left">
        2. Mengunci Komitmen Transaksi Melalui Integrasi T&C
      </h3>
      <p>
        Salah satu fitur krusial yang diimplementasikan dalam ekosistem Emoon
        Store adalah integrasi persetujuan aturan tertulis secara digital.
      </p>
    </div>
  ),

  "automasi-sangat-penting-untuk-vendor-kreatif": (
    <>
      <p>
        Dalam industri jasa kreatif seperti fotografi, manajemen jadwal adalah
        urat nadi bisnis.
      </p>
      <h3>1. Respons Super Lambat (Klien Gak Suka Menunggu)</h3>
      <p>
        Saat calon klien bertanya mengenai ketersediaan jadwal, kamu harus mengecek
        secara manual yang memakan waktu.
      </p>
    </>
  ),

  "arsitektur-keamanan-data-emoon": (
    <>
      <p>
        Kepercayaan adalah komoditas paling berharga dalam industri komersial.
      </p>
      <h3>Enkripsi End-to-End pada Data Formulir</h3>
      <p>
        Setiap input yang masuk melalui domain `eformku.id` diproses menggunakan
        enkripsi TLS ketat.
      </p>
    </>
  ),

  "update-fitur-v1-2-whatsapp-invoice": (
    <>
      <p>
        Kami mendengarkan masukan Anda! Pada pembaruan versi 1.2 ini, core engine
        Emoon secara resmi diintegrasikan dengan penyedia gateway WhatsApp otomatis.
      </p>
    </>
  ),

  "tips-makeup-artist-handling-client": (
    <>
      <p>
        Pembatalan sepihak (booking cancellation) dari klien seringkali membuat
        jadwal MUA berantakan.
      </p>
      <h3>Kekuatan Hukum T&C Digital</h3>
      <p>
        Melalui form Emoon, Anda bisa mewajibkan klausa centang persetujuan aturan
        hangusnya uang muka (DP) jika pembatalan dilakukan H-7 acara.
      </p>
    </>
  ),
};

export function getBlogPostFullDetail(slug: string): BlogPostFullDetail | null {
  const meta = getBlogPostMetaBySlug(slug);
  if (!meta) return null;

  const content = BLOG_CONTENT_DATABASE[slug] || (
    <p>Konten artikel sedang dalam pembaruan.</p>
  );

  return {
    ...meta,
    content,
  };
}
