import { Link, useParams, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import AmountBadge from "../components/AmountBadge";
import { transactions } from "../data/transactions";
import { formatJPY } from "../utils/format";

export default function TransactionDetailPage() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const monthKey = params.get("month") ?? "";

  const tx = transactions.find((t) => t.id === id);
  if (!tx) {
    return (
      <Layout>
        <p>該当データが見つかりませんでした。</p>
        <Link to={`/transactions?month=${monthKey}`}>一覧に戻る</Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2>取引詳細</h2>
      <dl>
        <dt>日付</dt>
        <dd>{tx.date}</dd>
        <dt>種別</dt>
        <dd>{tx.type === "income" ? "入金" : "出金"}</dd>
        <dt>カテゴリ</dt>
        <dd>{tx.category}</dd>
        <dt>内容</dt>
        <dd>{tx.description}</dd>
        <dt>金額</dt>
        <dd>
          <AmountBadge type={tx.type} amount={tx.amount} />
        </dd>
        {tx.account && (
          <>
            <dt>口座</dt>
            <dd>{tx.account}</dd>
          </>
        )}
        {tx.notes && (
          <>
            <dt>メモ</dt>
            <dd>{tx.notes}</dd>
          </>
        )}
      </dl>

      <div style={{ marginTop: 16 }}>
        <Link to={`/transactions?month=${monthKey}`}>一覧に戻る</Link>
      </div>
    </Layout>
  );
}
