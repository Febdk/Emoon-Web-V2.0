"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navHref = (hash: string) => (isHome ? hash : `/${hash}`);

  // Menu Items Configuration (Sentralisasi)
  const NAV_ITEMS = [
    { name: "Fitur", href: "#features", isHash: true },
    { name: "Cara Kerja", href: "#how-it-works", isHash: true },
    { name: "Showcase", href: "#showcase", isHash: true },
    { name: "Testimoni", href: "#testimonials", isHash: true },
    { name: "Blog", href: "/blog", isHash: false },
  ];

  // Varian animasi untuk list item di mobile menu (Staggered effect)
  const menuVariants = {
    opened: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    opened: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#0F0A1E]/75 backdrop-blur-xl border-b border-[#7C3AED]/15 shadow-[0_4px_30px_rgba(15,10,30,0.4)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-50 group">
          <Image
            src="/e-moon-logo.png"
            alt="emoon logo"
            width={120}
            height={120}
            className="w-12 h-12 rounded-xl object-cover border border-[#7C3AED]/20 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#FAF8FF]/70">
          {NAV_ITEMS.map((item) =>
            item.isHash ? (
              <a
                key={item.name}
                href={navHref(item.href)}
                className="relative href-link transition-colors hover:text-[#FAF8FF] group py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="relative href-link transition-colors hover:text-[#FAF8FF] group py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ),
          )}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-[#7C3AED] text-[#FAF8FF] hover:bg-[#6D28D9] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all duration-300 border border-[#7C3AED]/50"
          >
            Request Quote
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Unik & Keren Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] relative z-50 focus:outline-none bg-[#7C3AED]/10 rounded-full border border-[#7C3AED]/20"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-5 h-[2px] bg-[#FAF8FF] rounded-full origin-center"
          />
          <motion.div
            animate={
              isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.2 }}
            className="w-5 h-[2px] bg-[#F59E0B] rounded-full origin-center"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-5 h-[2px] bg-[#FAF8FF] rounded-full origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-x-0 top-0 pt-28 pb-10 px-8 bg-[#0F0A1E]/98 backdrop-blur-2xl border-b border-[#7C3AED]/20 flex flex-col gap-5 md:hidden z-40 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Background Accent Mesh inside Mobile Menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-[60px] pointer-events-none -z-10" />

            {/* FIX: Sekarang mapping menggunakan NAV_ITEMS, bukan array string lama */}
            {NAV_ITEMS.map((item) =>
              item.isHash ? (
                <motion.a
                  variants={itemVariants}
                  key={item.name}
                  href={navHref(item.href)}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#FAF8FF]/80 hover:text-[#FAF8FF] border-b border-[#FAF8FF]/5 pb-2 transition-colors flex justify-between items-center group"
                >
                  {item.name}
                  <ArrowRight
                    size={16}
                    className="text-[#F59E0B] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </motion.a>
              ) : (
                <motion.div variants={itemVariants} key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-[#FAF8FF]/80 hover:text-[#FAF8FF] border-b border-[#FAF8FF]/5 pb-2 transition-colors flex justify-between items-center group"
                  >
                    {item.name}
                    <ArrowRight
                      size={16}
                      className="text-[#F59E0B] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </Link>
                </motion.div>
              ),
            )}

            <motion.div variants={itemVariants} className="pt-4">
              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full rounded-full px-5 py-3 text-base font-medium bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] text-[#FAF8FF] shadow-[0_4px_15px_rgba(124,58,237,0.3)] hover:opacity-90 transition-opacity"
              >
                Request Quote
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
