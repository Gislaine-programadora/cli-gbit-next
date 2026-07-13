type StatsCardProps = {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
};

export default function StatsCard({
  label,
  value,
  change,
  positive = true,
}: StatsCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
      <p
        className={`mt-1 text-xs font-medium ${
          positive ? "text-emerald-600" : "text-red-600"
        }`}
      >
        {positive ? "▲" : "▼"} {change}
      </p>
    </div>
  );
}