"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  MessageSquareQuote,
  LogOut,
  ExternalLink,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Form Submissions", href: "/admin/submissions", icon: FileText },
    {
      name: "Testimonial Moderation",
      href: "/admin/testimonials",
      icon: MessageSquareQuote,
    },
  ];

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <aside className="w-64 bg-[#0F0A1E]/80 backdrop-blur-xl border-r border-[#7C3AED]/15 min-h-screen flex flex-col p-5 relative z-20">
      {/* Brand Logo & Header */}
      <div className="pb-6 mb-6 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/icone-emoon.webp"
            alt="Emoon Logo"
            width={36}
            height={36}
            className="w-9 h-9 rounded-xl object-cover border border-[#7C3AED]/30"
          />
          <div>
            <h2 className="font-clash font-bold text-base text-[#FAF8FF]">
              Emoon Admin
            </h2>
            <p className="text-[10px] text-[#F59E0B] font-medium tracking-wider uppercase">
              Control Center
            </p>
          </div>
        </div>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="p-2 text-[#FAF8FF]/50 hover:text-white bg-white/5 rounded-xl border border-white/10 transition"
          title="Buka Landing Page"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Navigasi Links */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-medium transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-[#FAF8FF] shadow-[0_0_20px_rgba(124,58,237,0.35)] border border-[#7C3AED]/50 font-semibold"
                  : "text-[#FAF8FF]/60 hover:text-[#FAF8FF] hover:bg-white/5 border border-transparent"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${isActive ? "text-[#F59E0B]" : "text-[#FAF8FF]/50"}`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="pt-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-medium text-rose-400 hover:bg-rose-500/10 border border-rose-500/10 transition"
        >
          <LogOut className="w-4 h-4" />
          Keluar (Logout)
        </button>
      </div>
    </aside>
  );
}
