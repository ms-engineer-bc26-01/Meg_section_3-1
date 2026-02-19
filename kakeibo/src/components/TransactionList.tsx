import type { Transaction } from "../types";
import TransactionRow from "./TransactionRow";

type Props = { transactions: Transaction[] };

export default function TransactionList({ transactions }: Props) {
  if (transactions.length === 0) return <p>この月の入出金はありません。</p>;

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
          <th style={{ textAlign: "left", padding: "8px 4px" }}>日付</th>
          <th style={{ textAlign: "left", padding: "8px 4px" }}>カテゴリ</th>
          <th style={{ textAlign: "left", padding: "8px 4px" }}>内容</th>
          <th style={{ textAlign: "left", padding: "8px 4px" }}>金額</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {transactions
          .slice()
          .sort((a, b) => a.date.localeCompare(b.date))
          .map((tx) => (
            <TransactionRow key={tx.id} tx={tx} />
          ))}
      </tbody>
    </table>
  );
}
