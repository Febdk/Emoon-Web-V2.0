import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  description: string;
  icon: LucideIcon;
  color?: "purple" | "amber" | "emerald" | "rose";
}

export default function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  color = "purple",
}: StatsCardProps) {
  const colorMap = {
    purple: "bg-[#7C3AED]/15 border-[#7C3AED]/30 text-[#7C3AED]",
    amber: "bg-[#F59E0B]/15 border-[#F59E0B]/30 text-[#F59E0B]",
    emerald: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    rose: "bg-rose-500/15 border-rose-500/30 text-rose-400",
  };

  return (
    <div className="glass-card rounded-3xl p-5 border border-white/10 flex items-start justify-between relative overflow-hidden shadow-xl">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#FAF8FF]/50">
          {title}
        </p>
        <h3 className="font-clash text-3xl font-bold text-[#FAF8FF] mt-1">
          {value}
        </h3>
        <p className="text-[11px] text-[#FAF8FF]/40 mt-1.5">{description}</p>
      </div>
      <div className={`p-3 rounded-2xl border ${colorMap[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
}
