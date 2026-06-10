"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // 1. Impor komponen Image
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F0A1E]"
        >
          {/* Ambient Glow */}
          <div className="absolute w-[300px] h-[300px] bg-[#7C3AED]/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6 z-10">
            {/* 2. LOGO EMON DENGAN ANIMASI PULSING & ROTATE HALUS */}
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.98, 1, 0.98],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Image
                src="/icone-emoon.png" // Memakai file logo yang sama dengan Navbar
                alt="Emoon Preloader Logo"
                width={100}
                height={100}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border border-[#7C3AED]/30 shadow-[0_0_30px_rgba(124,58,237,0.2)]"
                priority // Memaksa browser memuat logo ini lebih cepat dibanding aset lain
              />
            </motion.div>

            {/* Progress Bar Minimalis */}
            <div className="w-32 h-[2px] bg-[#FAF8FF]/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#7C3AED] to-[#F59E0B]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
