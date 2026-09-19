"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  MessageSquareQuote,
  LogOut,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sembunyikan layout admin jika sedang di halaman login
  if (pathname === "/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Submissions", href: "/admin/submissions", icon: Inbox },
    {
      name: "Testimonials",
      href: "/admin/testimonials",
      icon: MessageSquareQuote,
    },
  ];

  return (
    <div className="min-h-screen bg-[#07040D] text-white flex flex-col md:flex-row antialiased selection:bg-[#7C3AED] selection:text-white">
      {/* HEADER MOBILE (Hanya Tampil di HP) */}
      <header className="md:hidden flex items-center justify-between px-4 py-3.5 bg-[#0F0A1E]/90 border-b border-white/10 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-[#7C3AED] to-[#F59E0B] flex items-center justify-center font-bold text-white text-sm">
            E
          </div>
          <span className="font-clash font-bold text-base text-white tracking-wide">
            EMOON{" "}
            <span className="text-xs font-normal text-[#F59E0B]">Admin</span>
          </span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* OVERLAY BACKGROUND MOBILE */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR NAVIGATION (DRAWER DI MOBILE, FIXED DI DESKTOP) */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-[#0F0A1E]/95 md:bg-[#0F0A1E]/80 border-r border-white/10 p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* Logo (Desktop) */}
          <div className="hidden md:flex items-center gap-3 px-2">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 flex items-center justify-center bg-white/5 border border-white/10">
              <Image
                src="/icone-emoon.webp" // Ubah sesuai nama file di folder public/ (misal: /logo.svg)
                alt="Emoon Logo"
                width={36}
                height={36}
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              <h1 className="font-clash font-bold text-lg leading-none text-white">
                EMOON
              </h1>
              <span className="text-[10px] text-white/50 tracking-wider uppercase font-semibold">
                Dashboard Panel
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Bottom */}
        <div className="space-y-3 pt-6 border-t border-white/10">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-white/50 flex items-center gap-2">
            <Sparkles size={14} className="text-[#F59E0B] shrink-0" />
            <span className="truncate">System status: Normal</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all cursor-pointer"
          >
            <LogOut size={18} />
            Keluar Session
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
