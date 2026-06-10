import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RequestQuoteForm from "@/components/sections/RequestQuoteForm";

export const metadata: Metadata = {
  title: "Request Quote — Emoon",
  description:
    "Ceritain kebutuhan bisnismu, Emoon valuasi dan buatkan sistem order digital yang tepat sesuai brand kamu.",
};

const TRUST_ITEMS = [
  { icon: "⚡", text: "Respon dalam 1×24 jam" },
  { icon: "🎨", text: "Fully custom sesuai brand" },
  { icon: "🔒", text: "Data kamu aman & private" },
  { icon: "💬", text: "Konsultasi gratis dulu" },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-3xl relative z-10">
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
              ✦ Bukan tarif pukul rata — sesuai kebutuhanmu
            </div>
            <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-white mb-5">
              Ceritain{" "}
              <span
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #7c3aed, #f59e0b)",
                }}
              >
                kebutuhanmu
              </span>
            </h1>
            <p className="text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
              Isi form di bawah, gua valuasi dulu kebutuhan spesifik bisnismu,
              baru kasih penawaran yang tepat sasaran.
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
