import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FormSimulator from "@/components/simulator/FormSimulator";

// ============================================================================
// EMOON DEDICATED SIMULATOR PAGE (/simulator)
// Penanda: Halaman mandiri khusus Interactive E-Form Simulator Builder
// ============================================================================

export const metadata: Metadata = {
  title: "Simulasikan E-Form Kamu — Emoon",
  description:
    "Coba rancang tampilan e-form booking digital sesuai identitas brand kamu dalam 4 langkah instan.",
  alternates: {
    canonical: "https://emoon.eformku.id/simulator",
  },
  openGraph: {
    title: "Simulasikan E-Form Kamu — Emoon",
    description:
      "Coba rancang tampilan e-form booking digital sesuai identitas brand kamu dalam 4 langkah instan.",
    url: "https://emoon.eformku.id/simulator",
  },
};

export default function SimulatorPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-24">
        {/* BACKGROUND AMBIENT GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#7C3AED]/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* TOMBOL KEMBALI KE BERANDA */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-6 group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Kembali ke beranda
          </Link>

          {/* FORM SIMULATOR COMPONENT */}
          <FormSimulator />
        </div>
      </main>
      <Footer />
    </>
  );
}
