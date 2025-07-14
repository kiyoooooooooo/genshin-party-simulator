const express = require('express');
const path = 'path';

const app = express();
// Renderが指定するポート、なければローカル用の3000番
const port = process.env.PORT || 3000;

// 'public'フォルダ（HTML, CSS, JS）をルートとして提供
app.use(express.static('public'));

// 'uploads'フォルダ内の画像にもアクセスできるように提供
app.use('/uploads', express.static('uploads'));

// サーバーを起動
app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});