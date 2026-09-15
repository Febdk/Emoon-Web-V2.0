"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, ShieldAlert, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Password admin salah!");
      }
    } catch {
      setError("Terjadi kesalahan jaringan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0A1E] text-[#FAF8FF] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md glass-card rounded-3xl p-8 border border-[#7C3AED]/20 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <Image
            src="/icone-emoon.png"
            alt="Emoon Logo"
            width={56}
            height={56}
            className="w-14 h-14 rounded-2xl mx-auto mb-4 border border-[#7C3AED]/30 shadow-[0_0_20px_rgba(124,58,237,0.3)] object-cover"
          />
          <h1 className="font-clash text-2xl font-bold text-[#FAF8FF]">
            Admin Control Center
          </h1>
          <p className="text-xs text-[#FAF8FF]/50 mt-1">
            Masukkan password internal Emoon untuk melanjutkan.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-3 text-rose-400 text-xs">
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#FAF8FF]/60 mb-2">
              Password Admin
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-[#FAF8FF] placeholder:text-white/20 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] text-sm transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] hover:opacity-95 text-white font-medium text-xs rounded-2xl flex items-center justify-center gap-2 transition disabled:opacity-50 shadow-[0_0_25px_rgba(124,58,237,0.35)]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Memverifikasi...
              </>
            ) : (
              <>
                Masuk Dashboard
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
