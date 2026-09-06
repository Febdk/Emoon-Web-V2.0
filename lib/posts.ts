export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  accent: string;
  author: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "kesalahan-fatal-fotografer-wedding-kelola-booking",
    title:
      "5 Kesalahan Fatal Fotografer Wedding Saat Menerima Booking Klien (Dan Cara Mengatasinya)",
    description:
      "Sering pusing masalah DP hangus, reschedule mendadak, atau rekap jadwal berantakan? Simak 5 kesalahan operasional fotografer wedding dan solusi otomatisasi digitalnya.",
    date: "September 5, 2026",
    readTime: "5 min read",
    category: "Tips Vendor",
    featured: true,
    accent: "from-[#7C3AED] via-[#EC4899] to-[#F59E0B]",
    author: "Emoon Advisory Team",
  },
  {
    slug: "format-wa-manual-bikin-vendor-mua-rugi-besar",
    title:
      "4 Kerugian Fatal Jika Vendor MUA Masih Pakai Format Text WhatsApp Manual untuk Booking",
    description:
      "Terlalu sering melayani chat tanya-tanya berujung 'hit and run'? Ini alasan format pesanan teks manual bikin bisnis MUA kamu sulit berkembang dan kehilangan klien premium.",
    date: "Juni 28, 2026",
    readTime: "4 min read",
    category: "Tips Vendor",
    featured: false,
    accent: "from-[#EC4899] to-[#F59E0B]",
    author: "Emoon Core Team",
  },
  {
    slug: "strategi-form-order-wa-vendor-kreatif",
    title:
      "Strategi Transformasi Alur Kerja: Mengubah Chat Manual Menjadi Form Order Otomatis Terintegrasi untuk Vendor Kreatif",
    description:
      "Pelajari bagaimana ekosistem Emoon Store membantu MUA, studio, dan fotografer mengeliminasi ghosting, mengotomatisasi rekap Google Spreadsheet, serta mengunci komitmen klien lewat sistem T&C.",
    date: "Juni 24, 2026",
    readTime: "12 min read",
    category: "Tips Vendor",
    featured: false,
    accent: "from-[#3D3B8E] to-[#FFD700]",
    author: "Feby @ Emoon Dev",
  },
  {
    slug: "automasi-sangat-penting-untuk-vendor-kreatif",
    title: "Mengapa Automasi Form Booking adalah Kunci...",
    description:
      "Mengatur alur Down Payment (DP) yang terikat dengan sistem konfirmasi aturan T&C tertulis di form digital terbukti meminimalisir pembatalan mendadak hingga 95%.",
    date: "Juni 12, 2026",
    readTime: "10 min read",
    category: "Tips Vendor",
    featured: false,
    accent: "from-[#7C3AED] to-[#F59E0B]",
    author: "Emoon Core Team",
  },
  {
    slug: "arsitektur-keamanan-data-emoon",
    title:
      "Behind the Build: Bagaimana Emoon Mengamankan Data Formulir Klien Anda",
    description:
      "Kepercayaan klien adalah segalanya. Bedah arsitektur backend kami dalam menangani enkripsi data pemesanan, invoice, serta privasi transaksi para vendor industri kreatif.",
    date: "Mei 28, 2026",
    readTime: "7 min read",
    category: "Behind the Build",
    featured: false,
    accent: "from-[#7C3AED] to-[#7C3AED]/45",
    author: "Feby @ Emoon Dev",
  },
  {
    slug: "update-fitur-v1-2-whatsapp-invoice",
    title:
      "Update Emoon v1.2: Integrasi Invoice Otomatis Langsung ke WhatsApp Klien",
    description:
      "Kini sistem form Emoon resmi mendukung pengiriman struk DP, pelunasan, serta link terms & conditions langsung secara otomatis tanpa perlu intervensi admin.",
    date: "Mei 15, 2026",
    readTime: "3 min read",
    category: "Update Emoon",
    featured: false,
    accent: "from-[#F59E0B] to-[#D97706]",
    author: "Emoon Product Team",
  },
  {
    slug: "tips-makeup-artist-handling-client",
    title:
      "Strategi MUA Mengurangi Kerugian Akibat Klien Cancel Jadwal Sepihak",
    description:
      "Mengatur alur Down Payment (DP) yang terikat dengan sistem konfirmasi aturan T&C tertulis di form digital terbukti meminimalisir pembatalan mendadak hingga 95%.",
    date: "April 20, 2026",
    readTime: "4 min read",
    category: "Tips Vendor",
    featured: false,
    accent: "from-[#D97706] to-[#7C3AED]",
    author: "Emoon Business Advisory",
  },
];

/**
 * Mendapatkan daftar semua slug artikel blog secara dinamis untuk sitemap & routing.
 * Di masa mendatang (CMS / DB API), fungsi ini dapat diganti menjadi async fetch ke backend.
 */
export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

export function getAllBlogPosts(): BlogPostMeta[] {
  return BLOG_POSTS;
}

export function getBlogPostMetaBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
