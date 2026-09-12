"use client";
// ============================================================================
// EMOON FORM SIMULATOR - STEP 4: REKAP & CTA KE PRICING
// Penanda: Halaman rangkuman pilihan simulator & tombol CTA deep-link ke /pricing
// ============================================================================

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { SimulatorState, FITUR_OPTIONS } from "../types";

interface Step4SummaryProps {
  state: SimulatorState;
  onReset: () => void;
}

export default function Step4Summary({ state, onReset }: Step4SummaryProps) {
  const { profil, fitur, namaBisnis, warna } = state;

  // Nama fitur yang dipilih untuk ditampilkan di rekap
  const selectedFeatureNames = FITUR_OPTIONS.filter((f) =>
    fitur.includes(f.id),
  ).map((f) => f.name);

  // Buat query parameters untuk diarahkan ke /pricing
  const queryParams = new URLSearchParams({
    profil: profil,
    fitur: fitur.join(","),
    nama: namaBisnis || profil,
  }).toString();

  const pricingHref = `/pricing?${queryParams}`;

  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#10B981] px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center gap-1.5 w-max mb-3">
          <CheckCircle2 size={13} /> Form Simulator Selesai
        </span>
        <h2 className="font-clash text-2xl md:text-4xl font-semibold text-[#FAF8FF]">
          Simulasi Form{" "}
          <span style={{ color: warna }}>{namaBisnis || profil}</span> Siap
          Diluncurkan!
        </h2>
        <p className="text-sm text-[#FAF8FF]/60 mt-1">
          Berikut adalah rangkuman e-form kustom yang baru saja kamu rancang.
        </p>
      </div>

      {/* SUMMARY CARD REKAP */}
      <div className="p-6 rounded-3xl bg-[#0F0A1E]/80 border border-[#7C3AED]/30 backdrop-blur-md space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-[#FAF8FF]/10 pb-4">
          <div>
            <div className="text-xs text-[#FAF8FF]/40">
              Profil Bisnis Vendor:
            </div>
            <div className="font-clash font-semibold text-lg text-[#FAF8FF]">
              {profil}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-[#FAF8FF]/40">Nama Brand:</div>
            <div className="font-clash font-semibold text-base text-[#F59E0B]">
              {namaBisnis || "Belum diisi"}
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs text-[#FAF8FF]/40 mb-2">
            Fitur yang Terpasang ({fitur.length}):
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedFeatureNames.map((name) => (
              <span
                key={name}
                className="text-xs px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#FAF8FF]/90 font-medium"
              >
                ✓ {name}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-[#FAF8FF]/10 flex items-center justify-between text-xs text-[#FAF8FF]/50">
          <span className="flex items-center gap-1">
            <ShieldCheck size={14} className="text-[#10B981]" /> 100% Brand
            Ownership (Tanpa Sewa Bulanan)
          </span>
          <span className="text-[#F59E0B] font-semibold">One-Time Payment</span>
        </div>
      </div>

      {/* ACTION BUTTONS (CTA TO PRICING & RESET) */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <Link
          href={pricingHref}
          className="w-full sm:flex-1 py-3.5 px-6 rounded-full font-medium text-sm bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F59E0B] text-white shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center"
        >
          <Sparkles size={16} /> Pesan Sistem Form Seperti Ini Now
          <ArrowRight size={16} />
        </Link>

        <button
          onClick={onReset}
          className="w-full sm:w-auto py-3.5 px-5 rounded-full font-medium text-xs bg-[#1F1934] border border-[#7C3AED]/30 text-[#FAF8FF]/70 hover:text-[#FAF8FF] hover:bg-[#2A2345] transition-all flex items-center justify-center gap-1.5"
        >
          <RotateCcw size={14} /> Coba Ulang Simulator
        </button>
      </div>
    </div>
  );
}
