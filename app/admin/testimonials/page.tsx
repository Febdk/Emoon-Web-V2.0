import TestimonialsTable from "@/components/admin/TestimonialsTable";

export default function AdminTestimonialsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Testimonial Moderation
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Setujui atau tolak ulasan dari klien sebelum ditampilkan di halaman
          utama Emoon.
        </p>
      </div>

      <TestimonialsTable />
    </div>
  );
}
