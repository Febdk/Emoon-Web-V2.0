"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/CustomComponents";

export default function Hero() {
  // Setup untuk posisi kursor (Desktop)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Efek spring biar gerakan glow super smooth
  const springConfig = { damping: 40, stiffness: 200, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek perangkat touch/mobile & iOS
    const checkMobile = () => {
      const isTouch =
        window.matchMedia("(pointer: coarse)").matches ||
        /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
      setIsMobile(isTouch);
    };

    checkMobile();

    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        // 450px didapat dari setengah lebar w-[900px] agar kursor pas di tengah bola glow
        mouseX.set(clientX - 450);
        mouseY.set(clientY - 450);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile, mouseX, mouseY]);

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-[#0F0A1E] text-[#FAF8FF]">
      {/* 1. MESH & BACKGROUND PATTERN (Biar gak hitam/gelap polos) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(124,58,237,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FAF8FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* 2. INTERACTIVE / AUTO GLOW EFFECTS */}
      {isMobile ? (
        <>
          {/* Versi Mobile / iOS: Animasi Auto Floating */}
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 40, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[110px] pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -20, 30, 0],
              y: [0, 30, -40, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F59E0B]/15 rounded-full blur-[100px] pointer-events-none"
          />
        </>
      ) : (
        <>
          {/* Versi Desktop: Mengikuti Kursor */}
          <motion.div
            style={{
              x: glowX,
              y: glowY,
            }}
            className="absolute top-0 left-0 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18)_0%,rgba(245,158,11,0.08)_50%,transparent_100%)] rounded-full blur-[80px] pointer-events-none will-change-transform"
          />
          {/* Ambient Glow Statis (Pojok Kiri Atas & Kanan Bawah) */}
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#D97706]/5 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}

      {/* 3. HERO CONTENT */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge dengan border semi-transparan dan text warna Gold */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/20 bg-[#0F0A1E]/60 backdrop-blur-md text-sm font-medium text-[#D97706] mb-8 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
            Bisnis Kamu Layak Punya Sistem yang Lebih Baik
          </div>

          {/* Heading utama menggunakan warna Light (#FAF8FF) */}
          <h1 className="font-clash text-5xl md:text-7xl lg:text-[80px] font-semibold leading-[1.05] tracking-tight mb-8 text-[#FAF8FF]">
            Standar Baru Cara <br className="hidden md:block" /> Vendor{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#F59E0B] to-[#D97706]">
              Terima Order
            </span>
          </h1>

          {/* Sub-headline pakai opacity 70% dari warna Light */}
          <p className="text-lg md:text-xl text-[#FAF8FF]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Emoon bantu fotografer, MUA, dan studio kreatif punya sistem
            pemesanan digital yang rapi, branded, dan profesional — tanpa ribet
            setup sendiri.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing">
              <Button
                icon={<ArrowRight size={18} />}
                className="bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-[#FAF8FF]"
              >
                Mulai Sekarang
              </Button>
            </Link>
            <a href="#showcase">
              <Button
                variant="secondary"
                className="border-[#FAF8FF]/20 text-[#FAF8FF] hover:bg-[#FAF8FF]/10"
              >
                Lihat Contoh Form
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
