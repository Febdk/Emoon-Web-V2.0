"use client";
// ============================================================================
// EMOON FORM SIMULATOR - MOCKUP SMARTPHONE PREVIEW (RESPONSIVE CARD)
// Penanda: Komponen Frame HP Interaktif yang merender form live sesuai state
// ============================================================================

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  CheckCircle2,
  Send,
  ShieldCheck,
  Sparkles,
  Wifi,
  Battery,
  ShieldAlert,
} from "lucide-react";
import { SimulatorState } from "./types";

interface MockFormCardProps {
  state: SimulatorState;
  compact?: boolean;
}

export default function MockFormCard({
  state,
  compact = false,
}: MockFormCardProps) {
  const { profil, fitur, namaBisnis, warna } = state;

  const hasFeature = (id: string) => fitur.includes(id);

  return (
    <div className="relative mx-auto w-full max-w-[360px] group transition-all duration-300">
      {/* GLOW ACCENT BACKGROUND AROUND PHONE */}
      <div
        className="absolute -inset-2 rounded-[44px] opacity-40 blur-2xl transition-all duration-500 group-hover:opacity-75"
        style={{ backgroundColor: warna }}
      />

      {/* SMARTPHONE FRAME CONTAINER */}
      <div className="relative bg-[#0F0A1E] border-[7px] border-[#221B38] rounded-[42px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden text-[#FAF8FF] font-sans">
        {/* GLOSS REFLECTION OVERLAY */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/[0.07] via-transparent to-transparent pointer-events-none z-30" />

        {/* TOP SMARTPHONE NOTCH & STATUS BAR (IPHONE STYLE) */}
        <div className="bg-[#150F2A] px-6 pt-3.5 pb-2.5 flex items-center justify-between text-[11px] text-[#FAF8FF]/70 border-b border-[#FAF8FF]/5 select-none relative z-20">
          <span className="font-semibold text-[10px] tracking-tight">09:41</span>
          
          {/* Dynamic Island Notch with camera lens dot */}
          <div className="w-20 h-4 bg-[#000000] rounded-full mx-auto shadow-inner flex items-center justify-end pr-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1E] border border-[#2C2C2E]" />
          </div>

          <div className="flex items-center gap-1.5">
            <Wifi size={11} />
            <Battery size={13} className="text-[#10B981]" />
          </div>
        </div>

        {/* MOCKUP HEADER BRANDING */}
        <div className="p-5 border-b border-[#FAF8FF]/10 text-center relative overflow-hidden bg-gradient-to-b from-[#1A1336] to-[#0F0A1E]">
          {/* Custom Branding Header */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-clash font-bold text-xl shadow-lg mb-2 transition-colors duration-300 ring-2 ring-white/10"
              style={{ backgroundColor: warna }}
            >
              {namaBisnis ? namaBisnis.charAt(0).toUpperCase() : "E"}
            </div>
            <h3 className="font-clash font-semibold text-lg tracking-tight text-[#FAF8FF]">
              {namaBisnis || "Nama Vendor Kamu"}
            </h3>
            <span className="text-[11px] text-[#FAF8FF]/60 flex items-center gap-1 mt-0.5 font-medium">
              <Sparkles size={10} style={{ color: warna }} /> Form Order Digital • {profil}
            </span>
          </div>
        </div>

        {/* DYNAMIC FORM BODY */}
        <div className="p-5 space-y-4 max-h-[460px] overflow-y-auto custom-scrollbar text-left relative z-10">
          {/* INPUT NAMA KLIEN */}
          <div className="space-y-1">
            <label className="text-[11px] font-medium text-[#FAF8FF]/80 flex items-center gap-1">
              <User size={11} style={{ color: warna }} /> Nama Lengkap Klien *
            </label>
            <input
              type="text"
              readOnly
              placeholder="Contoh: Anisa Rahma"
              className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#18122B] border border-[#FAF8FF]/10 text-[#FAF8FF]/70 placeholder:text-[#FAF8FF]/20 focus:outline-none"
            />
          </div>

          {/* INPUT TANGGAL ACARA */}
          <div className="space-y-1">
            <label className="text-[11px] font-medium text-[#FAF8FF]/80 flex items-center gap-1">
              <Calendar size={11} style={{ color: warna }} /> Tanggal Acara / Sesi *
            </label>
            <div className="relative">
              <input
                type="text"
                readOnly
                placeholder="Pilih Tanggal Acara"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#18122B] border border-[#FAF8FF]/10 text-[#FAF8FF]/70 placeholder:text-[#FAF8FF]/20 focus:outline-none"
              />
              <Calendar
                size={13}
                className="absolute right-3.5 top-3 text-[#FAF8FF]/40"
              />
            </div>
          </div>

          {/* DYNAMIC FIELD: PRICELIST KATALOG */}
          <AnimatePresence>
            {hasFeature("pricelist") && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1.5 pt-1"
              >
                <label className="text-[11px] font-medium text-[#FAF8FF]/80 flex items-center justify-between">
                  <span>Katalog Paket Layanan</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F59E0B]/15 text-[#F59E0B] font-medium">
                    Fitur Pricelist
                  </span>
                </label>
                <div className="p-2.5 rounded-xl bg-[#18122B] border border-[#FAF8FF]/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#271E44] flex items-center justify-center text-sm font-bold text-[#FAF8FF]/90">
                    📸
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[#FAF8FF]">
                      Paket Premium Wedding
                    </div>
                    <div className="text-[10px] text-[#FAF8FF]/50">
                      Full day coverage + Album Excl.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DYNAMIC FIELD: MULTI PAKET */}
          <AnimatePresence>
            {hasFeature("multi_paket") && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1.5 pt-1"
              >
                <label className="text-[11px] font-medium text-[#FAF8FF]/80 flex items-center justify-between">
                  <span>Pilihan Paket & Add-on</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#7C3AED]/25 text-[#FAF8FF] font-medium">
                    Multi-Paket
                  </span>
                </label>
                <select
                  disabled
                  className="w-full text-xs px-3 py-2 rounded-xl bg-[#18122B] border border-[#FAF8FF]/10 text-[#FAF8FF]/80"
                >
                  <option>Paket Akad & Resepsi (Best Seller)</option>
                  <option>Paket Prewedding Outdoor</option>
                </select>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DYNAMIC FIELD: SYARAT & KETENTUAN (T&C) */}
          <AnimatePresence>
            {hasFeature("tc") && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-3 rounded-xl bg-[#18122B] border border-[#7C3AED]/25 space-y-1.5"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#F59E0B]">
                  <ShieldCheck size={13} /> Aturan DP & Reschedule (T&C)
                </div>
                <p className="text-[10px] text-[#FAF8FF]/70 leading-relaxed">
                  DP minimal 30% bersifat mengunci tanggal. Pembatalan H-7 acara DP tidak dapat dikembalikan.
                </p>
                <div className="flex items-center gap-1.5 pt-1 text-[10px] text-[#FAF8FF]/90 font-medium">
                  <CheckCircle2 size={12} style={{ color: warna }} /> Klien menyetujui syarat & ketentuan
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DYNAMIC FIELD: AUTO SHEET SYNC BADGE */}
          <AnimatePresence>
            {hasFeature("google_sheet") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-2 rounded-xl bg-[#10B981]/10 border border-[#10B981]/25 flex items-center justify-between text-[10px] text-[#10B981] font-medium"
              >
                <span>📊 Auto-Sync to Google Spreadsheet</span>
                <span className="font-bold">Active</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DYNAMIC FIELD: WA NOTIFICATION FOOTER */}
          <AnimatePresence>
            {hasFeature("notif_wa") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[10px] text-center text-[#FAF8FF]/50 flex items-center justify-center gap-1 pt-1 font-medium"
              >
                <Send size={10} className="text-[#25D366]" /> Rincian invoice & DP akan terkirim ke WhatsApp
              </motion.div>
            )}
          </AnimatePresence>

          {/* MOCK SUBMIT BUTTON */}
          <button
            disabled
            className="w-full py-2.5 rounded-xl font-medium text-xs text-white shadow-lg flex items-center justify-center gap-1.5 transition-all duration-300 opacity-95 cursor-not-allowed mt-2"
            style={{ backgroundColor: warna }}
          >
            Kirim Booking Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
