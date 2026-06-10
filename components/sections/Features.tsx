"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  Zap,
  Palette,
  Share2,
  Database,
} from "lucide-react";
import { SectionLabel, SectionTitle } from "../ui/CustomComponents";

export default function Features() {
  const features = [
    {
      icon: <CheckCircle2 size={20} />,
      title: "Form Order Digital",
      desc: "Klien isi sendiri, data langsung rapi. Nggak ada lagi tanya-jawab panjang di WA.",
    },
    {
      icon: <FileText size={20} />,
      title: "Pricelist Terintegrasi",
      desc: "Harga dan paket tampil profesional, sesuai identitas brand kamu.",
    },
    {
      icon: <Zap size={20} />,
      title: "Notifikasi Otomatis",
      desc: "Setiap order masuk langsung tercatat dan bisa kamu follow up seketika.",
    },
    {
      icon: <Palette size={20} />,
      title: "Fully Branded",
      desc: "Nama, warna, logo kamu — bukan template generik.",
    },
    {
      icon: <Share2 size={20} />,
      title: "Mudah Dibagikan",
      desc: "Satu link sakti, siap disebar ke IG, WA, atau bio Linktree kamu.",
    },
    {
      icon: <Database size={20} />,
      title: "Data Tersimpan Rapi",
      desc: "Semua data klien terkumpul rapi di satu tempat, siap diakses kapan saja.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute left-0 top-1/2 w-1/3 h-1/2 bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="max-w-2xl mb-16">
          <SectionLabel>Apa yang kamu dapat</SectionLabel>
          <SectionTitle>
            Semua yang kamu butuhkan, dalam satu form yang branded.
          </SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] mt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
