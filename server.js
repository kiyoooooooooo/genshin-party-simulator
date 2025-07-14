const express = require('express');
const multer = require('multer');
const path = 'path';
const fs = require('fs'); // ファイルを読み書きするためのモジュールを追加

const app = express();
const port = 3000;

// JSON形式のデータを正しく受け取るための設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静的ファイルの提供設定
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// --- データベースの代わり ---
// キャラクターデータを保存するJSONファイルのパス
const DB_PATH = './character_db.json';

// JSONファイルからキャラクターデータを読み込む関数
const readCharacters = () => {
    if (!fs.existsSync(DB_PATH)) {
        return []; // ファイルがなければ空の配列を返す
    }
    const data = fs.readFileSync(DB_PATH);
    return JSON.parse(data);
};

// キャラクターデータをJSONファイルに書き込む関数
const writeCharacters = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};
// -------------------------

// 1. キャラクター一覧を取得するAPI
app.get('/api/characters', (req, res) => {
    const characters = readCharacters();
    res.json(characters);
});

// 2. 新しいキャラクターを追加するAPI
app.post('/api/characters', (req, res) => {
    const characters = readCharacters();
    const newCharacter = {
        id: Date.now().toString(), // IDを自動生成
        name: req.body.name,
        element: req.body.element,
        weapon: req.body.weapon,
        rarity: parseInt(req.body.rarity, 10),
        imageUrl: req.body.imageUrl
    };
    characters.push(newCharacter);
    writeCharacters(characters);
    res.status(201).json(newCharacter); // 成功したことを伝える
});

// 3. 画像アップロード用のAPI (変更なし)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('imageFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'ファイルが選択されていません' });
  }
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

// サーバーを起動
app.listen(port, () => {
  console.log(`サーバー起動中: http://localhost:${port}`);
});