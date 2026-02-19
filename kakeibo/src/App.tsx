import { Routes, Route, Navigate } from "react-router-dom";
import TransactionsPage from "./pages/TransactionsPage";
import TransactionDetailPage from "./pages/TransactionDetailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/transactions" replace />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/transactions/:id" element={<TransactionDetailPage />} />
      <Route path="*" element={<Navigate to="/transactions" replace />} />
    </Routes>
  );
}
