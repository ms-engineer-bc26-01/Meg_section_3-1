import type { Transaction } from "../types";
import { toMonthKey } from "./format";

export const filterByMonth = (txs: Transaction[], monthKey: string) =>
  txs.filter((t) => toMonthKey(t.date) === monthKey);

export const getAllMonthsDesc = (txs: Transaction[]) => {
  const set = new Set(txs.map((t) => toMonthKey(t.date)));
  return [...set].sort().reverse(); // 新しい月から
};

export const calcMonthly = (txs: Transaction[]) => {
  const income = txs
    .filter((t) => t.type === "income")
    .reduce((s, t) => s + t.amount, 0);
  const expense = txs
    .filter((t) => t.type === "expense")
    .reduce((s, t) => s + t.amount, 0);
  return { income, expense, diff: income - expense };
};
``;
