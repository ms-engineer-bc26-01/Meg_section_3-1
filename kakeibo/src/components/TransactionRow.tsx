import { Link, useSearchParams } from "react-router-dom";
import type { Transaction } from "../types";
import AmountBadge from "./AmountBadge";

type Props = { tx: Transaction };

export default function TransactionRow({ tx }: Props) {
  const [params] = useSearchParams(); // 月選択を詳細→戻るで保持
  const monthKey = params.get("month") ?? "";

  return (
    <tr>
      <td>{tx.date}</td>
      <td>{tx.category}</td>
      <td>{tx.description}</td>
      <td>
        <AmountBadge type={tx.type} amount={tx.amount} />
      </td>
      <td>
        <Link to={`/transactions/${tx.id}?month=${monthKey}`}>詳細</Link>
      </td>
    </tr>
  );
}
