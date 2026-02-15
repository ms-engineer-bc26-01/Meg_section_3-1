FROM node:20-alpine

WORKDIR /app

# 依存関係だけ先にコピー（キャッシュも効く）
COPY package*.json ./

# 依存をインストール
RUN npm ci

# アプリ本体をコピー
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]