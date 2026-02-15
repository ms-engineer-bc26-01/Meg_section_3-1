import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Docker 環境でのファイル監視と HMR を安定させる
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 0.0.0.0
    port: 5173,
    strictPort: true,
    watch: { usePolling: true }, // コンテナ越しの監視
    hmr: {
      clientPort: 5173, // ブラウザが接続するポート
      // host: 'localhost' // WSL/リモート条件に応じて必要なら指定
    },
  },
});
