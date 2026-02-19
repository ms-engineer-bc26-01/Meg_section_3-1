import type { Transaction } from "../types";
import { calcMonthly } from "../utils/aggregate";
import { formatJPY } from "../utils/format";

type Props = { monthKey: string; transactions: Transaction[] };

export default function MonthlySummary({ monthKey, transactions }: Props) {
  const { income, expense, diff } = calcMonthly(transactions);
  return (
    <section aria-label="月間サマリ" style={{ margin: "12px 0" }}>
      <h2 style={{ marginBottom: 8 }}>月間サマリ（{monthKey}）</h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <SummaryCard
          label="入金合計"
          value={formatJPY(income)}
          color="#0A8754"
        />
        <SummaryCard
          label="出金合計"
          value={formatJPY(expense)}
          color="#C0392B"
        />
        <SummaryCard
          label="差額"
          value={formatJPY(diff)}
          color={diff >= 0 ? "#0A8754" : "#C0392B"}
        />
      </div>
    </section>
  );
}

function SummaryCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      style={{
        border: `1px solid ${color}`,
        borderRadius: 8,
        padding: 12,
        minWidth: 180,
      }}
    >
      <div style={{ color }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700 }}>{value}</div>
    </div>
  );
}
