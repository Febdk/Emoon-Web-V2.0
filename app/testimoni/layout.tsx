import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimoni Klien & Cerita Sukses Vendor — Emoon",
  description:
    "Dengarkan ulasan jujur dari para fotografer, MUA, dan pemilik studio kreatif yang sudah memotong alur pemesanan manual menggunakan Emoon.",
  alternates: {
    canonical: "https://emoon.eformku.id/testimoni",
  },
  openGraph: {
    title: "Testimoni Klien & Cerita Sukses Vendor — Emoon",
    description:
      "Dengarkan ulasan jujur dari para fotografer, MUA, dan pemilik studio kreatif yang sudah memotong alur pemesanan manual menggunakan Emoon.",
    url: "https://emoon.eformku.id/testimoni",
  },
};

export default function TestimoniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
