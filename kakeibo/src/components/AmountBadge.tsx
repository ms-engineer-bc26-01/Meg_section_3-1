import type { TxType } from "../types";
import { formatJPY } from "../utils/format";

type Props = { type: TxType; amount: number };

export default function AmountBadge({ type, amount }: Props) {
  const color = type === "income" ? "#0A8754" : "#C0392B";
  const sign = type === "income" ? "+" : "-";
  return (
    <span
      style={{
        color: "white",
        backgroundColor: color,
        borderRadius: 6,
        padding: "2px 8px",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {sign}
      {formatJPY(amount)}
    </span>
  );
}
