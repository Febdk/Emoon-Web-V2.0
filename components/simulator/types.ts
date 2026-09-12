// ============================================================================
// EMOON FORM SIMULATOR - TYPES & CONSTANTS
// Penanda: Definisikan tipe data state, opsi profil bisnis, fitur, dan preset warna
// ============================================================================

export type BusinessProfil =
  | "Fotografer Wedding"
  | "MUA"
  | "Videografer"
  | "Studio Foto"
  | "Lainnya";

export interface FiturOption {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface SimulatorState {
  step: 1 | 2 | 3 | 4;
  profil: BusinessProfil;
  fitur: string[];
  namaBisnis: string;
  warna: string; // Hex color string
}

// Opsi Profil Bisnis di Step 1
export const PROFIL_OPTIONS: {
  id: BusinessProfil;
  label: string;
  description: string;
  icon: string;
  defaultFitur: string[]; // Smart presets otomatis untuk tiap profil
}[] = [
  {
    id: "Fotografer Wedding",
    label: "Fotografer Wedding",
    description: "Sistem order booking tanggal, paket liputan, & DP invoice WA",
    icon: "Camera",
    defaultFitur: ["form_order", "notif_wa", "multi_paket", "tc"],
  },
  {
    id: "MUA",
    label: "MUA (Makeup Artist)",
    description:
      "Formulir booking riasan pengantin, retouch, & aturan cancellation T&C",
    icon: "Sparkles",
    defaultFitur: ["form_order", "notif_wa", "pricelist", "tc"],
  },
  {
    id: "Videografer",
    label: "Videografer / Cinema",
    description: "Booking jadwal shoot, daftar add-on drone & cinematic reel",
    icon: "Video",
    defaultFitur: ["form_order", "notif_wa", "multi_paket", "custom_branding"],
  },
  {
    id: "Studio Foto",
    label: "Studio Foto",
    description:
      "Formulir slot jam studio, tema dekorasi, & otomatisasi recap Sheet",
    icon: "Building",
    defaultFitur: ["form_order", "notif_wa", "google_sheet", "multi_paket"],
  },
  {
    id: "Lainnya",
    label: "Vendor Kreatif Lainnya",
    description:
      "Kustomisasi formulir order sesuai kebutuhan bisnis kreatif kamu",
    icon: "Layers",
    defaultFitur: ["form_order", "notif_wa"],
  },
];

// Opsi Fitur Form di Step 2
export const FITUR_OPTIONS: FiturOption[] = [
  {
    id: "form_order",
    name: "Form Order Digital",
    description: "Input nama, tanggal acara, lokasi, & detail pesanan klien",
    iconName: "FileText",
  },
  {
    id: "notif_wa",
    name: "Notifikasi WA Otomatis",
    description: "Kirim rincian invoice & kuitansi DP langsung ke WhatsApp",
    iconName: "MessageSquare",
  },
  {
    id: "pricelist",
    name: "Katalog Pricelist",
    description: "Tampilkan foto & rincian paket layanan langsung di form",
    iconName: "LayoutGrid",
  },
  {
    id: "custom_branding",
    name: "Custom Branding & Logo",
    description: "Pasang logo studio & skema warna sesuai identitas brand",
    iconName: "Palette",
  },
  {
    id: "google_sheet",
    name: "Auto Sheet Sync",
    description: "Otomatisasi rekap data orderan ke Google Spreadsheet",
    iconName: "Table",
  },
  {
    id: "tc",
    name: "Syarat & Ketentuan (T&C)",
    description: "Kotak persetujuan aturan DP hangus & reschedule hukum",
    iconName: "CheckSquare",
  },
  {
    id: "multi_paket",
    name: "Multi-Paket & Add-on",
    description:
      "Pilihan variasi paket & item tambahan dengan kalkulator total",
    iconName: "Sliders",
  },
];

// Opsi Preset Warna Utama Form di Step 3
export const COLOR_PRESETS = [
  { name: "Royal Purple", hex: "#7C3AED" },
  { name: "Amber Gold", hex: "#F59E0B" },
  { name: "Rose Pink", hex: "#EC4899" },
  { name: "Emerald Green", hex: "#10B981" },
  { name: "Ocean Blue", hex: "#3B82F6" },
];
