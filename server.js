const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// ファイルの保存場所と名前を設定
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 'uploads'フォルダに保存
  },
  filename: function (req, file, cb) {
    // ファイル名の重複を避けるため、名前にタイムスタンプを付けます
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// 'public'フォルダを、Webサイトのルートとして設定
app.use(express.static('public'));
// '/uploads'というURLで、'uploads'フォルダ内の画像にアクセスできるように設定
app.use('/uploads', express.static('uploads'));

// '/upload'というアドレスで、ファイルのアップロードを受け付ける設定
app.post('/upload', upload.single('imageFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'ファイルが選択されていません' });
  }
  // 成功したら、アップロードされたファイルのURLパスを返す
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

// サーバーを起動
app.listen(port, () => {
  console.log(`サーバーが起動しました。 http://localhost:${port} でアクセスできます。`);
});