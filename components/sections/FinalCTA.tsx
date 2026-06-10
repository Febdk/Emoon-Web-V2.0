"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/CustomComponents";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#7C3AED]/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#7C3AED]/20 via-[#0F0A1E]/0 to-[#0F0A1E]/0" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-clash text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
            Siap punya sistem order <br /> yang{" "}
            <span className="italic font-light text-[#F59E0B]">
              lebih profesional?
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
            Ceritain kebutuhan bisnis kamu, gua bantu wujudkan sistem yang
            tepat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/pricing">
              <Button icon={<ArrowRight size={18} />}>Mulai Sekarang</Button>
            </Link>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Ada pertanyaan?</span>
              <a
                href="https://wa.me/6281234567890"
                className="text-white hover:text-[#F59E0B] underline underline-offset-4 transition-colors"
              >
                Chat di WA
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
