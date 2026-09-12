"use client";
// ============================================================================
// EMOON FORM SIMULATOR - STEP 3: KUSTOMISASI BRANDING & NAMA BISNIS
// Penanda: Panel pengubahan Nama Vendor & Skema Warna Utama Form
// ============================================================================

import React from "react";
import { COLOR_PRESETS, SimulatorState } from "../types";
import { Type, Palette } from "lucide-react";

interface Step3PreviewProps {
  state: SimulatorState;
  onChangeNamaBisnis: (nama: string) => void;
  onChangeWarna: (hex: string) => void;
}

export default function Step3Preview({
  state,
  onChangeNamaBisnis,
  onChangeWarna,
}: Step3PreviewProps) {
  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B] px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20">
          Langkah 3 dari 4
        </span>
        <h2 className="font-clash text-2xl md:text-3xl font-semibold text-[#FAF8FF] mt-3">
          Kustomisasi Branding Form Kamu
        </h2>
        <p className="text-sm text-[#FAF8FF]/60 mt-1">
          Ketik nama studio/bisnis kamu dan pilih skema warna utama untuk
          melihat tampilan identitas brand milikmu.
        </p>
      </div>

      {/* INPUT NAMA BISNIS VENDOR */}
      <div className="p-5 rounded-2xl bg-[#0F0A1E]/60 border border-[#7C3AED]/20 space-y-3">
        <label className="text-xs font-semibold text-[#FAF8FF] flex items-center gap-2">
          <Type size={16} className="text-[#F59E0B]" /> Nama Studio / Brand
          Vendor Kamu:
        </label>
        <input
          type="text"
          value={state.namaBisnis}
          onChange={(e) => onChangeNamaBisnis(e.target.value)}
          placeholder="Contoh: Permata Foto / Glow MUA"
          className="w-full text-sm px-4 py-3 rounded-xl bg-[#18122B] border border-[#7C3AED]/30 text-[#FAF8FF] placeholder:text-[#FAF8FF]/30 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
        />
        <p className="text-[11px] text-[#FAF8FF]/40">
          Nama ini akan ditampilkan sebagai header utama di halaman formulir
          e-form kamu.
        </p>
      </div>

      {/* COLOR PICKER (PRESET & CUSTOM) */}
      <div className="p-5 rounded-2xl bg-[#0F0A1E]/60 border border-[#7C3AED]/20 space-y-3">
        <label className="text-xs font-semibold text-[#FAF8FF] flex items-center gap-2">
          <Palette size={16} className="text-[#7C3AED]" /> Pilih Skema Warna
          Aksen Form:
        </label>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {COLOR_PRESETS.map((preset) => {
            const isSelected =
              state.warna.toLowerCase() === preset.hex.toLowerCase();
            return (
              <button
                key={preset.hex}
                onClick={() => onChangeWarna(preset.hex)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-[#7C3AED]/20 border-[#7C3AED] text-[#FAF8FF] shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                    : "bg-[#18122B] border-[#FAF8FF]/10 text-[#FAF8FF]/60 hover:border-[#FAF8FF]/30"
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                  style={{ backgroundColor: preset.hex }}
                />
                {preset.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
