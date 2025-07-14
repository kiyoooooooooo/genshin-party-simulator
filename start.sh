#!/bin/sh

# Node.jsサーバーをバックグラウンドで起動
# /appフォルダに移動して、そこにあるserver.jsを起動
cd /app && node server.js &

# NGINXをフォアグラウンドで起動
# これでコンテナが終了しないようにする
nginx -g 'daemon off;'