import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Palette, ShieldCheck, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RequestQuoteForm from "@/components/sections/RequestQuoteForm";

export const metadata: Metadata = {
  title: "Rincian Invoice & Kalkulator Harga — Emoon",
  description:
    "Hitung estimasi total biaya sistem e-form booking digital bisnis kreatif kamu secara instan dan transparan.",
  alternates: {
    canonical: "https://emoon.eformku.id/pricing",
  },
  openGraph: {
    title: "Rincian Invoice & Kalkulator Harga — Emoon",
    description:
      "Hitung estimasi total biaya sistem e-form booking digital bisnis kreatif kamu secara instan dan transparan.",
    url: "https://emoon.eformku.id/pricing",
  },
};

const TRUST_ITEMS = [
  { icon: <Clock size={14} className="text-[#F59E0B]" />, text: "Respon dalam 1×24 jam" },
  { icon: <Palette size={14} className="text-[#7C3AED]" />, text: "Fully custom sesuai brand" },
  { icon: <ShieldCheck size={14} className="text-[#10B981]" />, text: "Data kamu aman & private" },
  { icon: <MessageCircle size={14} className="text-[#EC4899]" />, text: "Konsultasi gratis dulu" },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
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

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[#F59E0B] mb-6">
              ✦ Transparan & Tanpa Biaya Sewa Bulanan
            </div>
            <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-white mb-5">
              Rincian Invoice &{" "}
              <span
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #7c3aed, #f59e0b)",
                }}
              >
                Kalkulator Harga
              </span>
            </h1>
            <p className="text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
              Lihat rincian invoice dan kalkulasi estimasi total biaya e-form kamu secara otomatis. Klik satu tombol untuk terhubung langsung ke WhatsApp Emoon.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-white/60"
              >
                <span>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <RequestQuoteForm />

          <p className="text-center text-sm text-white/25 mt-10">
            Sudah ada klien yang pakai Emoon?{" "}
            <Link
              href="/#showcase"
              className="text-white/40 underline underline-offset-4 hover:text-white/60 transition-colors"
            >
              Lihat showcase
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
