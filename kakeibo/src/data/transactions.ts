import type { Transaction } from "../types";

export const transactions: Transaction[] = [
  // 2026-01
  {
    id: "t-001",
    date: "2026-01-05",
    type: "income",
    category: "給与",
    description: "1月給与",
    amount: 280000,
    account: "三井住友",
  },
  {
    id: "t-002",
    date: "2026-01-07",
    type: "expense",
    category: "食費",
    description: "スーパー",
    amount: 5200,
  },
  {
    id: "t-003",
    date: "2026-01-10",
    type: "expense",
    category: "光熱費",
    description: "電気代",
    amount: 8400,
  },
  {
    id: "t-004",
    date: "2026-01-15",
    type: "expense",
    category: "交通",
    description: "ICチャージ",
    amount: 3000,
  },

  // 2026-02
  {
    id: "t-101",
    date: "2026-02-01",
    type: "income",
    category: "副収入",
    description: "フリーランス",
    amount: 45000,
  },
  {
    id: "t-102",
    date: "2026-02-03",
    type: "expense",
    category: "食費",
    description: "外食",
    amount: 1200,
  },
  {
    id: "t-103",
    date: "2026-02-05",
    type: "expense",
    category: "日用品",
    description: "ドラッグストア",
    amount: 1800,
  },
  {
    id: "t-104",
    date: "2026-02-11",
    type: "income",
    category: "給与",
    description: "2月給与",
    amount: 280000,
  },
  {
    id: "t-105",
    date: "2026-02-12",
    type: "expense",
    category: "通信",
    description: "携帯代",
    amount: 6900,
  },
];
