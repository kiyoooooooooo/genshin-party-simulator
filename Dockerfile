# ステージ1: Node.jsアプリケーションのビルド
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ステージ2: NGINXのセットアップ
FROM nginx:1.27-alpine
# Node.jsアプリの静的ファイル(public)を、NGINXの公開フォルダにコピー
COPY --from=builder /app/public /usr/share/nginx/html
# Node.jsのサーバーファイルもコピー（今回は直接は使わないが、念のため）
COPY --from=builder /app /app
# NGINXの設定ファイルをコピー
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 起動スクリプトをコピー
COPY start.sh /
RUN chmod +x /start.sh

# 起動コマンド
CMD ["/start.sh"]