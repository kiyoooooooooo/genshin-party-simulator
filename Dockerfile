# ステージ1: Node.jsアプリの準備
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ステージ2: NGINXのセットアップ
FROM nginx:1.27-alpine

# NGINXの設定ファイルをコピー
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Node.jsアプリの静的ファイル(publicとuploads)をNGINXの公開フォルダにコピー
COPY --from=0 /app/public /usr/share/nginx/html
COPY --from=0 /app/uploads /usr/share/nginx/html/uploads

# Node.jsサーバー自体もコンテナ内に配置
COPY --from=0 /app /app

# 起動スクリプトをコピーして実行権限を付与
COPY start.sh /
RUN chmod +x /start.sh

# コンテナ起動時に実行するコマンド
CMD ["/start.sh"]