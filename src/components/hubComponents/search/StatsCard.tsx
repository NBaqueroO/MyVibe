interface Props {
  label: string;
  value: string;
  change?: string;
}

export default function StatsCard({ label, value, change }: Props) {
  return (
    <div className="stats-card">
      <div className="value">{value}</div>
      <div className="label">{label}</div>

      {change && <div className="change">{change}</div>}
    </div>
  );
}