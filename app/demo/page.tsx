import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // Tambahan import untuk Image
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Demo & Showcase — Emoon",
  description:
    "Lihat semua form order digital yang sudah live dan dipakai vendor kreatif bersama Emoon.",
};

// ─────────────────────────────────────────────
// DATA — sinkron dengan Showcase.tsx
// ─────────────────────────────────────────────
const CLIENTS = [
  {
    id: "permata-foto",
    name: "Permata Foto",
    category: "Wedding Photographer",
    location: "Solo Raya",
    description:
      "Sistem pemesanan digital lengkap dengan pilihan paket, T&C, dan notifikasi WA otomatis. Permata Foto adalah klien pertama Emoon yang sekarang sudah full digital dalam menerima order.",
    formUrl: "https://eformku.id/permata-foto-booking",
    image: "/showcase/permata-thumbnail.png", // Jalur gambar di folder public
    accent: "#7C3AED",
    isLive: true,
  },

  {
    id: "berlin-makeup",
    name: "Berlin Makeup",
    category: "MUA",
    location: "Solo Raya",
    description:
      "Sistem pemesanan digital lengkap dengan pilihan paket yang multi pilihan. Berlin Makeup adalah vendor MUA pertama yang mengunakan Emoon, yang sekarang sudah merasakan perbedaannya dalam memanajemen klien.",
    formUrl: "https://eformku.id/berlinmakeup-booking-online",
    image: "/showcase/berlin-thumbnail.png", // Jalur gambar di folder public
    accent: "#7C3AED",
    isLive: true,
  },
];

function ClientCard({
  client,
  index,
}: {
  client: (typeof CLIENTS)[0];
  index: number;
}) {
  return (
    <a
      href={client.formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass-card rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-[0_0_40px_rgba(124,58,237,0.12)] transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail Gambar Form */}
      <div className="h-52 relative overflow-hidden shrink-0 bg-neutral-950 border-b border-white/5">
        <Image
          src={client.image}
          alt={`Preview form ${client.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority={index < 3}
        />
        {/* Overlay gradasi gelap transparan agar teks 'Live' tetap kontras */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {client.isLive && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <div
          className="text-xs font-semibold mb-2 uppercase tracking-wider"
          style={{ color: client.accent }}
        >
          {client.category} · {client.location}
        </div>
        <h3 className="font-clash text-xl font-medium text-white mb-3">
          {client.name}
        </h3>
        <p className="text-sm text-white/45 leading-relaxed mb-6 flex-1">
          {client.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors duration-200 mt-auto">
          <ExternalLink size={14} />
          Lihat Form Langsung
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </a>
  );
}

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-24">
        {/* Ambient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 width: 700px; height: 500px; rounded-full bg-[#7C3AED]/10 blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10 group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Kembali ke beranda
          </Link>

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[#F59E0B] mb-6">
              ✦ Semua form di bawah ini live & aktif dipakai
            </div>
            <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-white mb-5">
              Showcase{" "}
              <span
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #7c3aed, #f59e0b)",
                }}
              >
                Klien Emoon
              </span>
            </h1>
            <p className="text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
              Bukan mockup. Ini form order digital yang beneran dipakai vendor
              kreatif — bisa lo lihat dan coba langsung.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {[
              { num: CLIENTS.length.toString(), label: "Klien aktif" },
              { num: "100%", label: "Form live & aktif" },
              { num: "WA", label: "Notifikasi otomatis" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl px-8 py-4 text-center min-w-[120px]"
              >
                <div className="font-clash text-3xl font-semibold text-white mb-1">
                  {stat.num}
                </div>
                <div className="text-xs text-white/40 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Grid */}
          {CLIENTS.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLIENTS.map((client, i) => (
                <ClientCard key={client.id} client={client} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-white/30">
              <p className="font-clash text-2xl mb-3">Belum ada showcase</p>
              <p className="text-sm">Data klien akan muncul di sini.</p>
            </div>
          )}

          {/* CTA bottom */}
          <div className="mt-20 text-center glass-card rounded-3xl p-12">
            <h2 className="font-clash text-3xl font-semibold text-white mb-4">
              Mau form kamu ada di sini?
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Ceritain kebutuhan bisnismu, gua buatkan form yang sesuai brand
              dan langsung bisa dipakai.
            </p>
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7C3AED] text-white font-medium hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300"
            >
              Request Quote Sekarang
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
