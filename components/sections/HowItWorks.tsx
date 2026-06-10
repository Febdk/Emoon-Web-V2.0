"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionLabel, SectionTitle } from "../ui/CustomComponents";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Ceritain Kebutuhanmu",
      desc: "Isi form singkat soal bisnis dan kebutuhan spesifik sistem yang kamu mau.",
    },
    {
      num: "02",
      title: "Gua Bangun Sistemnya",
      desc: "Emoon buatkan form order digital eksklusif yang sesuai branding dan alur bisnis kamu.",
    },
    {
      num: "03",
      title: "Langsung Pakai",
      desc: "Satu link, kamu bagikan ke klien. Order masuk, data rapi, bisnis naik kelas.",
    },
  ];

  return (
    <section className="py-24 relative bg-white/2 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Prosesnya simpel</SectionLabel>
            <SectionTitle>
              3 Langkah,
              <br />
              Sistem Kamu Siap.
            </SectionTitle>
            <p className="text-white/60 text-lg max-w-md">
              Tinggalkan setup teknis yang bikin pusing. Fokus di karya kamu,
              biar urusan form order gua yang beresin.
            </p>
          </div>

          <div className="space-y-8 relative">
            <div className="absolute left-7 top-4 bottom-4 w-px bg-white/10 hidden md:block" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex gap-6 md:gap-8 items-start"
              >
                <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-[#0F0A1E] border border-white/20 flex items-center justify-center font-clash font-medium text-xl text-[#F59E0B] shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  {step.num}
                </div>
                <div className="pt-3">
                  <h3 className="font-clash text-2xl font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
