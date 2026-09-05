import React from "react";
import Image from "next/image";
import { getBlogPostMetaBySlug, BlogPostMeta } from "@/lib/posts";

export interface BlogPostFullDetail extends BlogPostMeta {
  content: React.ReactNode;
}

const BLOG_CONTENT_DATABASE: Record<string, React.ReactNode> = {
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
