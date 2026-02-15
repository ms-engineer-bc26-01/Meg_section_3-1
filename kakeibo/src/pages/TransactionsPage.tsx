import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import MonthlySummary from "../components/MonthlySummary";
import TransactionList from "../components/TransactionList";
import { transactions } from "../data/transactions";
import { filterByMonth, getAllMonthsDesc } from "../utils/aggregate";

export default function TransactionsPage() {
  const allMonths = useMemo(() => getAllMonthsDesc(transactions), []);
  const [params, setParams] = useSearchParams();
  const selected = params.get("month") ?? allMonths[0] ?? "";

  const monthTxs = useMemo(
    () => filterByMonth(transactions, selected),
    [selected],
  );

  const onChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParams({ month: e.target.value });
  };

  return (
    <Layout>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 8,
        }}
      >
        <label htmlFor="month">月選択:</label>
        <select id="month" value={selected} onChange={onChangeMonth}>
          {allMonths.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </section>

      <MonthlySummary monthKey={selected} transactions={monthTxs} />
      <TransactionList transactions={monthTxs} />
    </Layout>
  );
}
