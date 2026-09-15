import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0F0A1E] text-[#FAF8FF] flex relative overflow-hidden font-sans">
      {/* Global Ambient Glow Emoon */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7C3AED]/10 blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#F59E0B]/5 blur-[140px] mix-blend-screen" />
      </div>

      {/* Sidebar Navigasi */}
      <AdminSidebar />

      {/* Area Konten Utama */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto max-h-screen relative z-10">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
