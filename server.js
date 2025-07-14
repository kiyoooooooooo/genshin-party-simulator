const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

const DB_PATH = './character_db.json';

const readCharacters = () => {
    if (!fs.existsSync(DB_PATH)) return [];
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return data ? JSON.parse(data) : [];
};
const writeCharacters = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

app.get('/api/characters', (req, res) => {
    res.json(readCharacters());
});

app.post('/api/characters', (req, res) => {
    const characters = readCharacters();
    const newCharacter = { id: Date.now().toString(), ...req.body };
    characters.push(newCharacter);
    writeCharacters(characters);
    res.status(201).json(newCharacter);
});

app.delete('/api/characters/:id', (req, res) => {
    let characters = readCharacters();
    const newCharacters = characters.filter(char => char.id !== req.params.id);
    if (characters.length === newCharacters.length) {
        return res.status(404).json({ message: 'キャラクターが見つかりません' });
    }
    writeCharacters(newCharacters);
    res.status(200).json({ message: 'キャラクターが削除されました' });
});

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

app.listen(port, () => {
    console.log(`サーバーがポート${port}で起動しました`);
});