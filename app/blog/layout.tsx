import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Newsroom — Emoon",
  description:
    "Dapatkan tips optimasi bisnis vendor, dokumentasi pengembangan produk, serta update rilis sistem booking otomatis Emoon.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
