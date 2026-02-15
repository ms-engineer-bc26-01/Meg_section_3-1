// src/types.ts

export type TxType = "income" | "expense";

export interface Transaction {
  id: string;
  date: string;
  type: TxType;
  category: string;
  description: string;
  amount: number;
  account?: string;
  notes?: string;
}
