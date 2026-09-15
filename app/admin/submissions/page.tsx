import SubmissionsTable from "@/components/admin/SubmissionsTable";

export default function AdminSubmissionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Form Submissions</h1>
        <p className="text-sm text-slate-400 mt-1">
          Daftar seluruh calon klien yang mengisi formulir pemesanan di web
          Emoon.
        </p>
      </div>

      <SubmissionsTable />
    </div>
  );
}
