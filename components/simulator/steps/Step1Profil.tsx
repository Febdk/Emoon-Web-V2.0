"use client";
// ============================================================================
// EMOON FORM SIMULATOR - STEP 1: PILIH PROFIL BISNIS
// Penanda: Komponen pemilihan jenis bisnis vendor dengan smart presets
// ============================================================================

import React from "react";
import { motion } from "framer-motion";
import { Camera, Sparkles, Clapperboard, Building2, Palette, Check } from "lucide-react";
import { SimulatorState, PROFIL_OPTIONS, BusinessProfil } from "../types";

interface Step1ProfilProps {
  state: SimulatorState;
  onChangeProfil: (profil: BusinessProfil, defaultFitur: string[]) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Camera: <Camera size={22} />,
  Sparkles: <Sparkles size={22} />,
  Clapperboard: <Clapperboard size={22} />,
  Building2: <Building2 size={22} />,
  Palette: <Palette size={22} />,
};

export default function Step1Profil({
  state,
  onChangeProfil,
}: Step1ProfilProps) {
  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B] px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20">
          Langkah 1 dari 4
        </span>
        <h2 className="font-clash text-2xl md:text-3xl font-semibold text-[#FAF8FF] mt-3">
          Apa Jenis Bisnis Kreatif Kamu?
        </h2>
        <p className="text-sm text-[#FAF8FF]/60 mt-1">
          Pilih profil bisnis kamu agar Emoon bisa menyesuaikan template &
          rekomendasi fitur form terbaik.
        </p>
      </div>

      {/* GRID KARTU PROFIL BISNIS (RESPONSIVE 2-COL / 1-COL MOBILE) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
        {PROFIL_OPTIONS.map((item) => {
          const isSelected = state.profil === item.id;
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChangeProfil(item.id, item.defaultFitur)}
              className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all duration-300 relative overflow-hidden ${
                isSelected
                  ? "bg-[#7C3AED]/20 border-[#7C3AED] shadow-[0_0_25px_rgba(124,58,237,0.3)] text-[#FAF8FF]"
                  : "bg-[#0F0A1E]/60 border-[#7C3AED]/15 hover:border-[#7C3AED]/40 text-[#FAF8FF]/70 hover:text-[#FAF8FF]"
              }`}
            >
              {/* CHECKMARK INDICATOR */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#7C3AED] text-white flex items-center justify-center">
                  <Check size={12} />
                </div>
              )}

              <div
                className={`p-2.5 rounded-xl border flex-shrink-0 transition-colors ${
                  isSelected
                    ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                    : "bg-[#1F1934] border-[#7C3AED]/20 text-[#F59E0B]"
                }`}
              >
                {ICON_MAP[item.icon]}
              </div>

              <div>
                <h3 className="font-clash font-semibold text-base text-[#FAF8FF]">
                  {item.label}
                </h3>
                <p className="text-xs text-[#FAF8FF]/50 mt-1 leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
