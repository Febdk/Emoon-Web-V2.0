"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, CalendarX } from "lucide-react";
import { SectionLabel, SectionTitle } from "../ui/CustomComponents";

export default function Problem() {
  const painPoints = [
    {
      icon: <MessageSquare size={24} className="text-[#F59E0B]" />,
      title: "Chat WA penuh order masuk",
      desc: "tapi datanya susah dilacak dan sering ketumpuk chat lain.",
    },
    {
      icon: <FileText size={24} className="text-[#F59E0B]" />,
      title: "Pricelist dikirim manual",
      desc: "tiap ada yang nanya harga, harus kirim PDF berulang kali.",
    },
    {
      icon: <CalendarX size={24} className="text-[#F59E0B]" />,
      title: "Booking bentrok",
      desc: "karena nggak ada sistem pencatatan tanggal yang jelas dan otomatis.",
    },
  ];

  return (
    <section className="py-24 relative border-t border-white/5 bg-linear-to-b from-transparent to-white/2">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Masih gini?</SectionLabel>
          <SectionTitle>
            Order lewat DM, konfirmasi manual, data klien nyebar di mana-mana.
          </SectionTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#7C3AED]/0 to-[#7C3AED]/0 group-hover:from-[#7C3AED]/10 transition-colors duration-500" />

              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                {point.icon}
              </div>
              <h3 className="font-clash text-xl font-medium text-white mb-3">
                {point.title}
              </h3>
              <p className="text-white/50 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-clash text-white/80">
            Kamu nggak butuh sistem yang rumit.
            <br />
            <span className="text-white font-medium">
              Kamu butuh sistem yang tepat.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
