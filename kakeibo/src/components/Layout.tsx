import React from "react";
import { Link } from "react-router-dom";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "16px" }}>
      <header style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <h1 style={{ margin: "8px 0" }}>家計簿</h1>
        <nav style={{ marginLeft: "auto" }}>
          <Link to="/transactions">入出金履歴</Link>
        </nav>
      </header>
      <hr />
      <main style={{ outline: "1px solid #f00" }}>{children}</main>
    </div>
  );
}
