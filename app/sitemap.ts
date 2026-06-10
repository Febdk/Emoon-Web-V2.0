import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://emoon.eformku.id";

  // Daftar halaman statis utama di Emoon Web V2.0
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimoni`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Array slug dari database artikel blog lokal kamu
  const blogSlugs = [
    "automasi-form-booking-fotografer",
    "arsitektur-keamanan-data-emoon",
    "update-fitur-v1-2-whatsapp-invoice",
    "tips-makeup-artist-handling-client",
  ];

  // Generate sitemap untuk tiap detail artikel blog secara otomatis
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(), // Idealnya pakai tanggal rilis/update artikel asli
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
