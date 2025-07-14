#!/bin/sh

# Node.jsサーバーをバックグラウンドで起動
cd /app && node server.js &

# NGINXをフォアグラウンドで起動
nginx -g 'daemon off;'