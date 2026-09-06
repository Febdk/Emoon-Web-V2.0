"use client";

import React, { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Gagal menyalin link: ", err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 rounded-full bg-[#FAF8FF]/5 hover:bg-[#FAF8FF]/10 text-[#FAF8FF]/60 hover:text-[#FAF8FF] transition-colors relative flex items-center gap-1.5 text-xs"
      title="Salin Link Artikel"
    >
      {copied ? (
        <>
          <Check size={16} className="text-emerald-400" />
          <span className="text-emerald-400 font-medium pr-1">Tersalin!</span>
        </>
      ) : (
        <Share2 size={16} />
      )}
    </button>
  );
}
