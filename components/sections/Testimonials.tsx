"use client";
import React from "react";
import Link from "next/link"; // 1. Impor Link dari Next.js
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button, SectionLabel, SectionTitle } from "../ui/CustomComponents";

export default function Testimonials() {
  return (
    <section className="py-24 relative border-t border-white/5 bg-[#0F0A1E]">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <SectionLabel>Kata mereka</SectionLabel>
        <SectionTitle>Vendor yang udah upgrade sistem ordernya.</SectionTitle>

        <div className="grid md:grid-cols-2 gap-6 mt-16 text-left max-w-4xl mx-auto">
          {[
            {
              name: "Andi R.",
              role: "MUA",
              quote:
                "Gila, semenjak pakai Emoon klien jadi jarang banyak nanya karena pricelist & T&C udah jelas di form. Tinggal trf aja.",
            },
            {
              name: "Saras",
              role: "Studio Owner",
              quote:
                "Dulu rekap manual di excel, sering kelewat. Sekarang tiap order masuk langsung ternotif. Branding formnya juga premium banget!",
            },
          ].map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border border-[#7C3AED]/10 bg-[#0F0A1E]/60 backdrop-blur-md"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="text-[#F59E0B] fill-[#F59E0B]"
                  />
                ))}
              </div>
              <p className="text-lg text-[#FAF8FF]/80 leading-relaxed mb-8 italic">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-[#F59E0B]/10 border border-[#7C3AED]/20 flex items-center justify-center font-clash text-xs font-semibold text-[#FAF8FF]">
                  {testi.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-medium text-[#FAF8FF]">{testi.name}</div>
                  <div className="text-sm text-[#FAF8FF]/50">{testi.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Bungkus Button dengan Link ke routing /testimoni */}
        <div className="mt-12">
          <Link href="/testimoni">
            <Button
              variant="secondary"
              className="border-[#FAF8FF]/20 text-[#FAF8FF] hover:bg-[#FAF8FF]/10"
            >
              Baca Semua Testimoni
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
