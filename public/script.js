document.addEventListener('DOMContentLoaded', () => {
    // このファイルに直接書かれている初期キャラクターデータ
    let allCharacters = [];
    let currentParty = [];

    const weapons = {
        '片手剣': ['天空の刃', '岩峰を巡る歌', '斬山の刃', '有楽御簾切', '波乱月白経津', '磐岩結緑', '聖顕の鍵', '萃光の裁葉', '蒼古なる自由への誓い', '蒼耀', '赦罪', '霧切の廻光', '静水流転の輝き', '風鷹剣', 'シナバースピンドル', '厄水の災い', 'ストロング・ボーン', 'エズピツァルの笛', '水仙十字の剣', '船渠剣', 'サーンドルの渡し守', '狼牙', '海淵のフィナーレ', '東花坊時雨', 'サイフォスの月明かり', '原木刀', '籠釣瓶一心', '西風剣', '天目影打', 'ダークアレイの閃光', '腐植の剣', '降臨の剣', '黒剣', '黒岩の長剣', '鉄蜂の刺し', '斬岩・試作', '旧貴族長剣', '匣中龍吟', '祭礼の剣', '笛の剣', '冷刃', '黎明の神剣', '飛天御剣', '暗鉄剣', '旅道の剣', 'チ虎魚の刀'],
        '両手剣': ['千烈の日輪', '山の王の長牙', '裁断', '葦海の標', '赤角石塵滅砕', '松韻の響く頃', '無工の剣', '天空の傲', '狼の末路', '実りの鉤鉈', 'アースシェイカー', 'スーパーアルティメット覇王魔剣', '携帯型チェーンソー', '話死合い棒', 'タイダル・シャドー', '鉄彩の花', 'マカイラの水色', '森林のレガリア', '惡王丸', '銜玉の海皇', '桂木斬長正', '千岩古剣', '雪葬の星銀', '螭龍の剣', '黒岩の斬刀', '白影の剣', '古華・試作', '旧貴族大剣', '雨裁', '祭礼の大剣', '鐘の剣', '西風大剣', '鉄影段平', '龍血を浴びた剣', '理屈責め', '飛天大御剣', '白鉄の大剣'],
        '長柄武器': ['和璞鳶', '天空の脊', '破天の槍', '護摩の杖', '草薙の稲光', '息災', '赤砂の杖', '赤月のシルエット', 'ルミドゥースの挽歌', '香りのシンフォニスト', '漁獲', '玉響停の御噺', '鎮山の釘', '虹の行方', '砂中の賢者達の問答', 'プロスペクタードリル', 'フィヨルドの歌', '正義の報酬', '風信の矛', 'ムーンピアサー', '斬波のひれ長', '匣中滅龍', '喜多院十文字槍', '千岩長槍', 'ドラゴンスピア', '旧貴族猟槍', '死闘の槍', '黒岩の突槍', '流月の針', '星鎌・試作', '西風長槍', '黒纓槍', '鉾槍', '白纓槍'],
        '弓': ['天空の翼', 'アモスの弓', '終焉を嘆く詩', '飛雷の鳴弦', '冬極の白星', '若水', '狩人の道', '始まりの大魔術', '白雨心弦', '星鷲の紅き羽', 'プレデター', '冷寂の音', '花飾りの羽', 'チェーンブレイカー', '築雲', 'レンジゲージ', '烈日の後嗣', '静寂の唄', 'トキの嘴', '王の近侍', '竭沢', '落霞', '曚雲の月', '西風猟弓', '破魔の弓', '幽夜のワルツ', '風花の頌歌', 'ダークアレイの狩人', '蒼翠の狩猟弓', '黒岩の戦弓', 'リングボウ', '澹月・試作', '旧貴族長弓', '弓蔵', '祭礼の弓', '絶弦', '鴉羽の弓', 'シャープシューターの誓い', '弾弓', '文使い', 'リカーブボウ'],
        '法器': ['天空の巻', '四風原典', '浮世の錠', '不滅の月華', '神楽の真意', '千夜に浮かぶ夢', 'トゥライトゥーラの記憶', '碧落の瓏', '凛流の監視者', '久遠流転の大典', '鶴鳴の余韻', 'サーフィンタイム', '祭星者の眺め', '寝正月の初晴', 'ヴィヴィッド・ハート', 'ドドコの物語', '波乗りの旋回', '蒼紋の角杯', 'ヤシュチェの環', '果てなき紺碧の唄', '古祠の瓏', '純水流華', '彷徨える星', '満悦の実', '誓いの明瞳', '白辰の輪', '西風秘典', 'ダークアレイの酒と詩', '冬忍びの実', '黒岩の緋玉', '万国諸海の図譜', '金珀・試作', '匣中日月', '旧貴族秘法録', '昭心', '祭礼の断片', '流浪楽章', '魔導緒論', '龍殺しの英傑譚', '翡玉法珠', '特級の宝玉', '異世界旅行記']
    };
    const artifactSets = ['なし', '深廊の終曲','長き夜の誓い','灰燼の都に立つ英雄の絵巻', '黒曜の秘典','遂げられなかった想い','諧律奇想の断章', '残響の森で囁かれる夜話','在りし日の歌','黄金の劇団', 'ファントムハンター','花海甘露の光','水仙の夢', '楽園の絶花','砂上の楼閣の史話','金メッキの夢', '深林の記憶','来歆の余響','辰砂往生録','海染硨磲', '華館夢醒形骸記','追憶のしめ縄','絶縁の旗印', '蒼白の炎','千岩牢固','氷風を彷徨う勇士','沈淪の心', '逆飛びの流星','悠久の磐岩','血染めの騎士道', '旧貴族のしつけ','燃え盛る炎の魔女','雷のような怒り', '翠緑の影','剣闘士のフィナーレ','愛される少女', '烈火を渡る賢者','雷を鎮める尊者','大地を流浪する楽団','教官'];

    // DOM要素の取得
    const characterListDiv = document.getElementById('character-list');
    const partySlots = document.querySelectorAll('.party-slot');
    const clearPartyButton = document.getElementById('clear-party');
    const searchBar = document.getElementById('search-bar');
    const elementFilter = document.getElementById('element-filter');
    const weaponFilter = document.getElementById('weapon-filter');
    const addForm = document.getElementById('add-character-form');
    const imageUploader = document.getElementById('imageUploader');
    const uploadButton = document.getElementById('uploadButton');
    const uploadStatus = document.getElementById('uploadStatus');
    const hiddenImageUrl = document.getElementById('char-image-url');

    // 初期化処理
    async function initializeApp() {
        await fetchCharacters();
        renderCharacters();
        loadParty();
    }

    // API通信でキャラクター一覧を取得
    async function fetchCharacters() {
        try {
            const response = await fetch('/api/characters');
            allCharacters = await response.json();
        } catch (error) {
            console.error('キャラクターの読み込みに失敗:', error);
        }
    }

    // 描画処理
    function renderCharacters(filteredCharacters = allCharacters) {
        characterListDiv.innerHTML = '';
        filteredCharacters.forEach(char => {
            const container = document.createElement('div');
            container.classList.add('character-item-container');
            const img = document.createElement('img');
            img.src = char.imageUrl;
            img.alt = char.name;
            img.classList.add('character-icon');
            img.dataset.id = char.id;
            img.addEventListener('click', () => addCharacterToParty(char));
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '×';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteCharacter(char.id, char.name);
            });
            container.appendChild(img);
            container.appendChild(deleteButton);
            characterListDiv.appendChild(container);
        });
    }

    // キャラクター削除
    async function deleteCharacter(id, name) {
        if (confirm(`「${name}」を本当に削除しますか？`)) {
            const response = await fetch(`/api/characters/${id}`, { method: 'DELETE' });
            if (response.ok) {
                alert('キャラクターを削除しました。');
                await initializeApp();
            } else {
                alert('削除に失敗しました。');
            }
        }
    }

    // 画像アップロードのイベントリスナー
    uploadButton.addEventListener('click', async () => { /* ...（変更なし）... */ });

    // キャラクター追加フォームのイベントリスナー
    addForm.addEventListener('submit', async (event) => { /* ...（変更なし）... */ });
    
    // フィルターのイベントリスナー
    function filterCharacters() {
        const searchText = searchBar.value.toLowerCase();
        const selectedElement = elementFilter.value;
        const selectedWeapon = weaponFilter.value;
        const filtered = allCharacters.filter(char => 
            (char.name.toLowerCase().includes(searchText)) &&
            (selectedElement === 'all' || char.element === selectedElement) &&
            (selectedWeapon === 'all' || char.weapon === selectedWeapon)
        );
        renderCharacters(filtered);
    }
    searchBar.addEventListener('input', filterCharacters);
    elementFilter.addEventListener('change', filterCharacters);
    weaponFilter.addEventListener('change', filterCharacters);

    // パーティ関連の関数
    clearPartyButton.addEventListener('click', () => { /* ...（変更なし）... */ });
    function addCharacterToParty(char) { /* ...（変更なし）... */ }
    function removeCharacterFromParty(charId) { /* ...（変更なし）... */ }
    function repopulatePartySlots() { /* ...（変更なし、ただし中身は完全なもの）... */ }
    function populateWeaponSelect(selectElement, charWeaponType) { /* ...（変更なし）... */ }
    function populateArtifactSetSelects(selectElements) { /* ...（変更なし）... */ }
    function updateCharacterEquipment(charId, type, value) { /* ...（変更なし）... */ }
    function saveParty() { /* ...（変更なし）... */ }
    function loadParty() { /* ...（変更なし）... */ }

    // アプリケーション起動
    initializeApp();
});