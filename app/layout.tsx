import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Preloader from "@/components/ui/Preloader"; // Sesuaikan dengan path folder tempat kamu menaruh file Preloader tadi

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emoon | Standar Baru Form Order Digital",
  description:
    "Emoon bantu fotografer, MUA, dan studio kreatif punya sistem pemesanan digital yang rapi, branded, dan profesional.",
  verification: {
    google: "nyDe2TgpHwi_iMAHSc2CA0K9dv7UEnM_SWFrB3lP8d8",
  },
  // TEPAT DI SINI: Mengganti icon tab bar browser (Favicon)
  icons: {
    icon: "/icone-emoon.png", // Mengarah ke folder public/e-moon-Icone.png
    shortcut: "/icone-emoon.png", // Backup untuk beberapa tipe browser lama
    apple: "/icone-emoon.png", // Untuk icon pas user "Add to Home Screen" di iOS/Safari
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* 1. Amankan font eksternal di sini agar terhindar dari error @import CSS */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body className={`${plusJakartaSans.className} relative min-h-screen`}>
        {/* AKTIFKAN PRELOADER GLOBAL */}
        <Preloader />

        {/* Global Ambient Glow biar warna nggak "mati" */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#7C3AED]/10 blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#F59E0B]/5 blur-[150px] mix-blend-screen" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
