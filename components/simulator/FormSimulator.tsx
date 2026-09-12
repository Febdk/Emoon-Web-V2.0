"use client";
// ============================================================================
// EMOON FORM SIMULATOR - MAIN PARENT CONTAINER
// Penanda: Container utama penampung state 4 step, stepper progress bar,
// navigasi melayang responsif mobile/desktop, dan live smartphone preview.
// ============================================================================

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Smartphone,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { SimulatorState, BusinessProfil, PROFIL_OPTIONS } from "./types";
import Step1Profil from "./steps/Step1Profil";
import Step2Fitur from "./steps/Step2Fitur";
import Step3Preview from "./steps/Step3Preview";
import Step4Summary from "./steps/Step4Summary";
import MockFormCard from "./MockFormCard";

export default function FormSimulator() {
  // 1. STATE KONTROL UTAMA SIMULATOR
  const [state, setState] = useState<SimulatorState>({
    step: 1,
    profil: "Fotografer Wedding",
    fitur: PROFIL_OPTIONS[0].defaultFitur,
    namaBisnis: "Permata Photography",
    warna: "#7C3AED",
  });

  // Mode Tampilan khusus Mobile (Edit vs Preview HP)
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");

  // 2. HANDLER NAVIGASI STEPPER
  const nextStep = () => {
    if (state.step < 4) {
      setState((prev) => ({
        ...prev,
        step: (prev.step + 1) as SimulatorState["step"],
      }));
    }
  };

  const prevStep = () => {
    if (state.step > 1) {
      setState((prev) => ({
        ...prev,
        step: (prev.step - 1) as SimulatorState["step"],
      }));
    }
  };

  const resetSimulator = () => {
    setState({
      step: 1,
      profil: "Fotografer Wedding",
      fitur: PROFIL_OPTIONS[0].defaultFitur,
      namaBisnis: "Permata Photography",
      warna: "#7C3AED",
    });
    setMobileTab("edit");
  };

  // 3. HANDLER PERUBAHAN DATA STATE
  const handleProfilChange = (
    profil: BusinessProfil,
    defaultFitur: string[],
  ) => {
    setState((prev) => ({
      ...prev,
      profil,
      fitur: defaultFitur, // Apply smart preset features
    }));
  };

  const handleToggleFitur = (fiturId: string) => {
    setState((prev) => {
      const exists = prev.fitur.includes(fiturId);
      const newFitur = exists
        ? prev.fitur.filter((id) => id !== fiturId)
        : [...prev.fitur, fiturId];
      return { ...prev, fitur: newFitur };
    });
  };

  const handleNamaBisnisChange = (namaBisnis: string) => {
    setState((prev) => ({ ...prev, namaBisnis }));
  };

  const handleWarnaChange = (warna: string) => {
    setState((prev) => ({ ...prev, warna }));
  };

  // Persentase Progress Bar
  const progressPercent = (state.step / 4) * 100;

  return (
    <div className="w-full max-w-6xl mx-auto my-12 px-4 sm:px-6">
      {/* HEADER SECTION SIMULATOR */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-xs font-semibold text-[#F59E0B] mb-3 shadow-[0_0_20px_rgba(124,58,237,0.15)]">
          <Sparkles size={14} /> Interactive Live Form Builder
        </div>
        <h2 className="font-clash text-3xl md:text-5xl font-semibold text-[#FAF8FF] tracking-tight">
          Coba Rancang <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F59E0B]">
            E-Form Impian Kamu
          </span>
        </h2>
        <p className="text-sm md:text-base text-[#FAF8FF]/60 mt-3 leading-relaxed">
          Simulasikan tampilan formulir booking digital milikmu sendiri dalam 4
          langkah instan. Tampilan HP akan berubah secara live!
        </p>
      </div>

      {/* MOBILE TOGGLE TAB (TAMPIL HANYA DI HP / SCREEN KECIL) */}
      <div className="flex md:hidden items-center justify-center p-1 bg-[#150F2A] border border-[#7C3AED]/20 rounded-2xl mb-6 max-w-xs mx-auto">
        <button
          onClick={() => setMobileTab("edit")}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            mobileTab === "edit"
              ? "bg-[#7C3AED] text-white shadow-md"
              : "text-[#FAF8FF]/50 hover:text-[#FAF8FF]"
          }`}
        >
          <SlidersHorizontal size={13} /> Edit Simulator
        </button>
        <button
          onClick={() => setMobileTab("preview")}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            mobileTab === "preview"
              ? "bg-[#7C3AED] text-white shadow-md"
              : "text-[#FAF8FF]/50 hover:text-[#FAF8FF]"
          }`}
        >
          <Smartphone size={13} /> Lihat HP Preview
        </button>
      </div>

      {/* PROGRESS BAR STEPPER INDICATOR */}
      <div className="bg-[#150F2A]/80 border border-[#7C3AED]/20 rounded-2xl p-4 mb-8 backdrop-blur-md">
        <div className="flex items-center justify-between text-xs font-medium text-[#FAF8FF]/70 mb-2">
          <span>Langkah {state.step} dari 4</span>
          <span className="text-[#F59E0B] font-clash">
            {progressPercent}% Selesai
          </span>
        </div>
        <div className="w-full h-2 bg-[#0F0A1E] rounded-full overflow-hidden border border-[#FAF8FF]/5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F59E0B]"
            initial={{ width: "25%" }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* MAIN CONTENT GRID (DESKTOP SPLIT 12-COL, MOBILE TOGGLABLE) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
        {/* SISI KIRI (7 KOLOM DESKTOP): PANEL KONTROL STEPPER */}
        <div
          className={`md:col-span-7 bg-[#150F2A]/60 border border-[#7C3AED]/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl ${
            mobileTab === "preview" ? "hidden md:block" : "block"
          }`}
        >
          {/* BACKGROUND AMBIENT GLOW INSIDE PANEL */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#7C3AED]/10 rounded-full blur-[80px] pointer-events-none" />

          {/* RENDER STEP DENGAN ANIMASI ANIMATE PRESENCE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={state.step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {state.step === 1 && (
                <Step1Profil
                  state={state}
                  onChangeProfil={handleProfilChange}
                />
              )}

              {state.step === 2 && (
                <Step2Fitur state={state} onToggleFitur={handleToggleFitur} />
              )}

              {state.step === 3 && (
                <Step3Preview
                  state={state}
                  onChangeNamaBisnis={handleNamaBisnisChange}
                  onChangeWarna={handleWarnaChange}
                />
              )}

              {state.step === 4 && (
                <Step4Summary state={state} onReset={resetSimulator} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* FLOATING NAVIGATION CONTROL (BACK / NEXT BUTTONS) */}
          {state.step < 4 && (
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#FAF8FF]/10">
              <button
                onClick={prevStep}
                disabled={state.step === 1}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium transition-all ${
                  state.step === 1
                    ? "opacity-30 cursor-not-allowed text-[#FAF8FF]/40 bg-[#0F0A1E]"
                    : "bg-[#1F1934] hover:bg-[#2A2345] text-[#FAF8FF] border border-[#7C3AED]/20"
                }`}
              >
                <ArrowLeft size={14} /> Kembali
              </button>

              <button
                onClick={nextStep}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Lanjut Ke Step {state.step + 1}
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* SISI KANAN (5 KOLOM DESKTOP): MOCKUP HP PREVIEW LIVE */}
        <div
          className={`md:col-span-5 md:sticky md:top-28 transition-all ${
            mobileTab === "edit" ? "hidden md:block" : "block"
          }`}
        >
          <div className="text-center mb-3 hidden md:block">
            <span className="text-[11px] text-[#FAF8FF]/60 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
              <Smartphone size={13} className="text-[#F59E0B]" /> Live Phone Preview
            </span>
          </div>

          {/* HP CARD COMPONENT */}
          <MockFormCard state={state} />

          {/* QUICK BACK TO EDIT BUTTON ON MOBILE PREVIEW MODE */}
          {mobileTab === "preview" && (
            <div className="mt-4 text-center md:hidden">
              <button
                onClick={() => setMobileTab("edit")}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#7C3AED] text-white text-xs font-semibold shadow-lg active:scale-95 transition-transform"
              >
                <SlidersHorizontal size={13} /> Kembali ke Mode Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
