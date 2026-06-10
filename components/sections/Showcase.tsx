"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionLabel, SectionTitle } from "../ui/CustomComponents";

// ─────────────────────────────────────────────
// DATA KLIEN — tambah entry baru di sini
// ─────────────────────────────────────────────
interface Client {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  formUrl: string;
  image: string; // <-- Wajib diisi dengan path gambar (di folder public)
  accent: string;
  isLive: boolean;
}

const CLIENTS: Client[] = [
  {
    id: "permata-foto",
    name: "Permata Foto",
    category: "Wedding Photographer",
    location: "Solo Raya",
    description:
      "Sistem pemesanan digital lengkap dengan pilihan paket, T&C, dan notifikasi WA otomatis.",
    formUrl: "https://eformku.id/permata-foto-booking",
    image: "/showcase/permata-thumbnail.png",
    accent: "#7C3AED",
    isLive: true,
  },

  {
    id: "berlin-makeup",
    name: "Berlin Makeup",
    category: "MUA",
    location: "Solo Raya",
    description:
      "Sistem pemesanan digital lengkap dengan pilihan paket yang multi pilihan, data clien dan terkoneksi dengan kalander.",
    formUrl: "https://eformku.id/berlinmakeup-booking-online",
    image: "/showcase/berlin-thumbnail.png",
    accent: "#7C3AED",
    isLive: true,
  },
];

const GRID_SIZE = 3;

// ─────────────────────────────────────────────
// CARD
// ─────────────────────────────────────────────
function ClientCard({ client, index }: { client: Client; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={client.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block glass-card rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-[0_0_40px_rgba(124,58,237,0.12)] transition-all duration-300 flex flex-col h-full"
      >
        {/* Thumbnail Gambar Form (Disamakan dengan Halaman Demo) */}
        <div className="h-52 relative overflow-hidden shrink-0 bg-neutral-950 border-b border-white/5">
          <Image
            src={client.image}
            alt={`Preview form ${client.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            priority={index < 2}
          />
          {/* Overlay gradasi samar agar badge 'Live' tetap kontras */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {client.isLive && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80 z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-6 flex flex-col flex-1">
          <div
            className="text-xs font-semibold mb-2 uppercase tracking-wider"
            style={{ color: client.accent }}
          >
            {client.category} · {client.location}
          </div>
          <h3 className="font-clash text-xl font-medium text-white mb-2">
            {client.name}
          </h3>
          <p className="text-sm text-white/45 leading-relaxed mb-6 flex-1">
            {client.description}
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors duration-200 mt-auto">
            <ExternalLink size={14} />
            Lihat Form Langsung
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function EmptySlot({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href="/pricing"
        className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#7C3AED]/5 h-full"
        style={{ border: "1px dashed rgba(255,255,255,0.1)" }}
      >
        <div className="h-52 flex items-center justify-center shrink-0 border-b border-white/5">
          <div className="text-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors group-hover:border-[#7C3AED]/40"
              style={{ border: "1px dashed rgba(255,255,255,0.15)" }}
            >
              <span className="text-white/20 text-2xl group-hover:text-[#7C3AED]/60 transition-colors">
                +
              </span>
            </div>
            <span className="text-white/20 text-xs tracking-widest uppercase group-hover:text-white/40 transition-colors">
              Slot Tersedia
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold mb-2 uppercase tracking-wider text-white/20 group-hover:text-[#7C3AED]/60 transition-colors">
            Bisnis kamu?
          </div>
          <h3 className="font-clash text-xl font-medium text-white/25 mb-2 group-hover:text-white/50 transition-colors">
            Mau jadi bagian ini?
          </h3>
          <p className="text-sm text-white/20 leading-relaxed mb-5 group-hover:text-white/35 transition-colors">
            Jadikan bisnismu bagian dari showcase Emoon.
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-white/20 group-hover:text-[#7C3AED]/80 transition-colors">
            Request Quote
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────
export default function Showcase() {
  const emptySlots = Math.max(0, GRID_SIZE - CLIENTS.length);

  return (
    <section id="showcase" className="py-24 relative section-with-ambient">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <SectionLabel>Hasil nyata</SectionLabel>
        <SectionTitle className="max-w-2xl mx-auto">
          Form yang udah dipakai vendor-vendor ini.
        </SectionTitle>
        <p className="text-white/50 max-w-lg mx-auto -mt-2 mb-16 leading-relaxed">
          Bukan mockup — ini form live yang beneran dipakai klien Emoon
          sehari-hari.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-stretch">
          {CLIENTS.map((client, i) => (
            <ClientCard key={client.id} client={client} index={i} />
          ))}
          {Array.from({ length: emptySlots }).map((_, i) => (
            <EmptySlot key={"empty-" + i} index={CLIENTS.length + i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/60 text-sm font-medium hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Lihat Semua Contoh Form
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
