import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Preloader from "@/components/ui/Preloader";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  themeColor: "#0F0A1E",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://emoon.eformku.id"),
  title: {
    default: "Emoon | Standar Baru Form Order Digital",
    template: "%s | Emoon",
  },
  description:
    "Emoon bantu fotografer, MUA, dan studio kreatif punya sistem pemesanan digital yang rapi, branded, dan profesional.",
  keywords: [
    "Emoon",
    "form order digital",
    "form booking fotografer",
    "form order MUA",
    "sistem pemesanan vendor kreatif",
    "aplikasi booking studio foto",
    "eformku",
  ],
  authors: [{ name: "Emoon Team" }],
  creator: "Emoon",
  publisher: "Emoon",
  alternates: {
    canonical: "https://emoon.eformku.id",
  },
  openGraph: {
    title: "Emoon | Standar Baru Form Order Digital",
    description:
      "Emoon bantu fotografer, MUA, dan studio kreatif punya sistem pemesanan digital yang rapi, branded, dan profesional.",
    url: "https://emoon.eformku.id",
    siteName: "Emoon Digital",
    images: [
      {
        url: "https://emoon.eformku.id/icone-emoon.png",
        width: 800,
        height: 800,
        alt: "Emoon Logo Branding",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emoon | Standar Baru Form Order Digital",
    description:
      "Emoon bantu fotografer, MUA, dan studio kreatif punya sistem pemesanan digital yang rapi, branded, dan profesional.",
    images: ["https://emoon.eformku.id/icone-emoon.png"],
  },
  verification: {
    google: "nyDe2TgpHwi_iMAHSc2CA0K9dv7UEnM_SWFrB3lP8d8",
  },
  icons: {
    icon: "/icone-emoon.png",
    shortcut: "/icone-emoon.png",
    apple: "/icone-emoon.png",
  },
};

// JSON-LD Structured Data Schema untuk Rich Snippet Google
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Emoon Digital",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
      },
      "description":
        "Sistem formulir pemesanan digital khusus fotografer, MUA, dan studio kreatif dengan integrasi WhatsApp otomatis dan Terms & Conditions.",
      "url": "https://emoon.eformku.id",
      "image": "https://emoon.eformku.id/icone-emoon.png",
      "creator": {
        "@type": "Organization",
        "name": "Emoon Digital",
        "url": "https://emoon.eformku.id",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Apa itu Emoon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Emoon adalah platform sistem pemesanan digital khusus vendor kreatif seperti fotografer, MUA, dan studio foto untuk mengotomatiskan booking, konfirmasi WhatsApp, dan rekap order.",
          },
        },
        {
          "@type": "Question",
          "name": "Apakah Emoon terintegrasi dengan WhatsApp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Ya, Emoon dilengkapi notifikasi dan auto-text WhatsApp otomatis untuk konfirmasi booking, bukti DP, dan pengiriman invoice.",
          },
        },
        {
          "@type": "Question",
          "name": "Siapa saja yang cocok menggunakan Emoon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Emoon sangat cocok digunakan oleh Wedding Photographer, Makeup Artist (MUA), Studio Foto, Videografer, dan Freelancer Industri Kreatif.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Preconnect: percepat DNS lookup ke Fontshare CDN */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        {/* Preload: hindari render-blocking untuk Clash Display */}
        <link
          rel="preload"
          as="style"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        {/* Inject JSON-LD Schema Markup ke Head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* variable meng-expose --font-jakarta ke seluruh DOM */}
      <body className={`${plusJakartaSans.variable} font-sans relative min-h-screen`}>
        {/* PRELOADER GLOBAL */}
        <Preloader />

        {/* Global Ambient Glow */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#7C3AED]/10 blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#F59E0B]/5 blur-[150px] mix-blend-screen" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>

      <GoogleAnalytics gaId="G-Z61RV4WW3S" />
    </html>
  );
}
