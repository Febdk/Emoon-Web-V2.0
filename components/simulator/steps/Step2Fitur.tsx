"use client";
// ============================================================================
// EMOON FORM SIMULATOR - STEP 2: PILIH FITUR FORM
// Penanda: Komponen multi-select toggle chip untuk memilih fitur-fitur form
// ============================================================================

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  MessageSquare,
  LayoutGrid,
  Palette,
  Table,
  CheckSquare,
  Sliders,
  Check,
} from "lucide-react";
import { SimulatorState, FITUR_OPTIONS } from "../types";

interface Step2FiturProps {
  state: SimulatorState;
  onToggleFitur: (fiturId: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  FileText: <FileText size={18} />,
  MessageSquare: <MessageSquare size={18} />,
  LayoutGrid: <LayoutGrid size={18} />,
  Palette: <Palette size={18} />,
  Table: <Table size={18} />,
  CheckSquare: <CheckSquare size={18} />,
  Sliders: <Sliders size={18} />,
};

export default function Step2Fitur({ state, onToggleFitur }: Step2FiturProps) {
  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B] px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20">
          Langkah 2 dari 4
        </span>
        <h2 className="font-clash text-2xl md:text-3xl font-semibold text-[#FAF8FF] mt-3">
          Pilih Fitur Form yang Diinginkan
        </h2>
        <p className="text-sm text-[#FAF8FF]/60 mt-1">
          Klik chip di bawah untuk menambah/mengurangi fitur. Tampilan HP di
          samping akan{" "}
          <strong className="text-[#F59E0B]">
            langsung berubah secara real-time
          </strong>
          !
        </p>
      </div>

      {/* CHIPS TOGGLE MULTI-SELECT FITUR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {FITUR_OPTIONS.map((item) => {
          const isSelected = state.fitur.includes(item.id);
          return (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => onToggleFitur(item.id)}
              className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all duration-300 relative ${
                isSelected
                  ? "bg-[#7C3AED]/20 border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.25)] text-[#FAF8FF]"
                  : "bg-[#0F0A1E]/50 border-[#7C3AED]/15 hover:border-[#7C3AED]/30 text-[#FAF8FF]/60 hover:text-[#FAF8FF]"
              }`}
            >
              <div
                className={`p-2 rounded-xl flex-shrink-0 transition-colors ${
                  isSelected
                    ? "bg-[#7C3AED] text-white"
                    : "bg-[#1F1934] text-[#FAF8FF]/40"
                }`}
              >
                {ICON_MAP[item.iconName]}
              </div>

              <div className="flex-1 pr-6">
                <div className="flex items-center gap-2">
                  <h4 className="font-clash font-semibold text-sm text-[#FAF8FF]">
                    {item.name}
                  </h4>
                </div>
                <p className="text-[11px] text-[#FAF8FF]/50 mt-0.5 leading-snug">
                  {item.description}
                </p>
              </div>

              <div
                className={`absolute top-3.5 right-3.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                    : "border-[#FAF8FF]/20"
                }`}
              >
                {isSelected && <Check size={10} />}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
