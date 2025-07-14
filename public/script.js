document.addEventListener('DOMContentLoaded', () => {
    // このファイルに直接書かれている初期キャラクターデータ
    const hardcodedCharacters = [
        { id: 'hutao', name: '胡桃', element: '炎', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Hutao.png' },
        { id: 'bennett', name: 'ベネット', element: '炎', weapon: '片手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Bennett.png' },
        { id: 'xiangling', name: '香菱', element: '炎', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Xiangling.png' },
        { id: 'diluc', name: 'ディルック', element: '炎', weapon: '両手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Diluc.png' },
        { id: 'dehya', name: 'ディシア', element: '炎', weapon: '両手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Dehya.png' },
        { id: 'chevreuse', name: 'シュヴルーズ', element: '炎', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Chevreuse.png' },
        { id: 'gaming', name: '嘉明', element: '炎', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Gaming.png' },
        { id: 'arlecchino', name: 'アルレッキーノ', element: '炎', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Arlecchino.png' },
        { id: 'thoma', name: 'トーマ', element: '炎', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Tohma.png' },
        { id: 'xinyan', name: '辛炎', element: '炎', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Xinyan.png' },
        { id: 'klee', name: 'クレー', element: '炎', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Klee.png' },
        { id: 'lyney', name: 'リネ', element: '炎', weapon: '弓', rarity: 5, imageUrl: '/uploads/1752496038055.png' },
        { id: 'amber', name: 'アンバー', element: '炎', weapon: '弓', rarity: 4, imageUrl: '/uploads/1752496104429.png' },
        { id: 'yoimiya', name: '宵宮', element: '炎', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Yoimiya.png' },
        { id: 'Mavuika', name: 'マーヴィカ', element: '炎', weapon: '両手剣', rarity: 5, imageUrl: '/uploads/1752496158070.png' },
        { id: 'yelan', name: '夜蘭', element: '水', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Yelan.png' },
        { id: 'xingqiu', name: '行秋', element: '水', weapon: '片手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Xingqiu.png' },
        { id: 'furina', name: 'フリーナ', element: '水', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Furina.png' },
        { id: 'mualani', name: 'ムアラニ', element: '水', weapon: '法器', rarity: 5, imageUrl: '/uploads/1752496239510.png' },
        { id: 'zhongli', name: '鍾離', element: '岩', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Zhongli.png' },
        { id: 'noelle', name: 'ノエル', element: '岩', weapon: '両手剣', rarity: 4, imageUrl: '/uploads/1752496383387.png' },
        { id: 'kazuha', name: '楓原万葉', element: '風', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Kazuha.png' },
        { id: 'fischl', name: 'フィッシュル', element: '雷', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Fischl.png' },
        { id: 'raiden', name: '雷電将軍', element: '雷', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Shougun.png' },
        { id: 'ganyu', name: '甘雨', element: '氷', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Ganyu.png' },
        { id: 'ayaka', name: '神里綾華', element: '氷', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Ayaka.png' },
        { id: 'nahida', name: 'ナヒーダ', element: '草', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Nahida.png' },
        { id: 'traveler', name: '旅人', element: '複数', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png' },
    ];

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

    // --- DOM要素の取得 ---
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

    // --- 初期化処理 ---
    async function initializeApp() {
        const serverCharacters = await fetchCharacters();
        const serverCharIds = new Set(serverCharacters.map(c => c.id));
        allCharacters = [
            ...serverCharacters,
            ...hardcodedCharacters.filter(c => !serverCharIds.has(c.id))
        ];
        renderCharacters();
        loadParty();
    }

    // --- API通信 ---
    async function fetchCharacters() {
        try {
            const response = await fetch('/api/characters');
            if (!response.ok) return [];
            return await response.json();
        } catch (error) {
            console.error('キャラクターの読み込みに失敗:', error);
            return [];
        }
    }

    async function deleteCharacter(id, name) {
        if (confirm(`「${name}」を本当に削除しますか？`)) {
            try {
                const response = await fetch(`/api/characters/${id}`, { method: 'DELETE' });
                if (response.ok) {
                    alert('キャラクターを削除しました。');
                    await initializeApp();
                } else {
                    throw new Error('削除に失敗しました。');
                }
            } catch (error) {
                alert(error.message);
            }
        }
    }

    // --- 描画処理 ---
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
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation();
                deleteCharacter(char.id, char.name);
            });

            container.appendChild(img);
            if (!isNaN(parseInt(char.id, 10))) {
                container.appendChild(deleteButton);
            }
            characterListDiv.appendChild(container);
        });
    }

    // --- イベントリスナー ---
    uploadButton.addEventListener('click', async () => {
        const file = imageUploader.files[0];
        if (!file) { uploadStatus.textContent = 'ファイルが選択されていません。'; return; }
        const formData = new FormData();
        formData.append('imageFile', file);
        try {
            uploadStatus.textContent = 'アップロード中...';
            const response = await fetch('/upload', { method: 'POST', body: formData });
            const result = await response.json();
            if (response.ok) {
                uploadStatus.textContent = 'アップロード成功！';
                hiddenImageUrl.value = result.filePath;
            } else { throw new Error(result.error); }
        } catch (error) {
            uploadStatus.textContent = `エラー: ${error.message}`;
        }
    });

    addForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const newCharacterData = {
            name: document.getElementById('char-name').value,
            element: document.getElementById('char-element').value,
            weapon: document.getElementById('char-weapon').value,
            rarity: document.getElementById('char-rarity').value,
            imageUrl: hiddenImageUrl.value
        };
        if (!newCharacterData.imageUrl) { alert('画像をアップロードしてください。'); return; }
        try {
            const response = await fetch('/api/characters', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCharacterData)
            });
            if (response.ok) {
                alert('キャラクターが追加されました！');
                addForm.reset();
                uploadStatus.textContent = '';
                hiddenImageUrl.value = '';
                await initializeApp();
            } else { throw new Error('キャラクターの追加に失敗しました。'); }
        } catch (error) {
            alert(error.message);
        }
    });

    function filterCharacters() {
        const searchText = searchBar.value.toLowerCase();
        const selectedElement = elementFilter.value;
        const selectedWeapon = weaponFilter.value;
        const filtered = allCharacters.filter(char => {
            const matchesSearch = char.name.toLowerCase().includes(searchText);
            const matchesElement = selectedElement === 'all' || char.element === selectedElement;
            const matchesWeapon = selectedWeapon === 'all' || char.weapon === selectedWeapon;
            return matchesSearch && matchesElement && matchesWeapon;
        });
        renderCharacters(filtered);
    }
    searchBar.addEventListener('input', filterCharacters);
    elementFilter.addEventListener('change', filterCharacters);
    weaponFilter.addEventListener('change', filterCharacters);

    clearPartyButton.addEventListener('click', () => {
        currentParty = [];
        repopulatePartySlots();
        saveParty();
    });

    function addCharacterToParty(char) {
        if (currentParty.length >= 4 || currentParty.some(pChar => pChar.id === char.id)) return;
        currentParty.push({ ...char, selectedWeapon: '', selectedArtifacts: ['', ''] });
        repopulatePartySlots();
        saveParty();
    }

    function removeCharacterFromParty(charId) {
        currentParty = currentParty.filter(pChar => pChar.id !== charId);
        repopulatePartySlots();
        saveParty();
    }

    function repopulatePartySlots() {
        partySlots.forEach((slot, index) => {
            const characterDisplay = slot.querySelector('.character-display');
            const weaponSelect = slot.querySelector('.weapon-select');
            const artifactSetSelects = slot.querySelectorAll('.artifact-set-select');
            
            characterDisplay.innerHTML = '';
            weaponSelect.innerHTML = '<option value="">武器を選択</option>';
            artifactSetSelects[0].innerHTML = '<option value="">聖遺物セット1</option>';
            artifactSetSelects[1].innerHTML = '<option value="">聖遺物セット2</option>';
            
            const pChar = currentParty[index];
            if (pChar) {
                const img = document.createElement('img');
                img.src = pChar.imageUrl;
                img.alt = pChar.name;
                img.classList.add('party-character-icon');
                img.addEventListener('click', () => removeCharacterFromParty(pChar.id));
                characterDisplay.appendChild(img);

                populateWeaponSelect(weaponSelect, pChar.weapon);
                populateArtifactSetSelects(artifactSetSelects);
                
                weaponSelect.value = pChar.selectedWeapon || '';
                artifactSetSelects[0].value = pChar.selectedArtifacts[0] || '';
                artifactSetSelects[1].value = pChar.selectedArtifacts[1] || '';

                const newWeaponSelect = weaponSelect.cloneNode(true);
                weaponSelect.parentNode.replaceChild(newWeaponSelect, weaponSelect);
                newWeaponSelect.value = pChar.selectedWeapon || '';
                newWeaponSelect.addEventListener('change', () => updateCharacterEquipment(pChar.id, 'weapon', newWeaponSelect.value));

                const newArtifactSetSelect1 = artifactSetSelects[0].cloneNode(true);
                artifactSetSelects[0].parentNode.replaceChild(newArtifactSetSelect1, artifactSetSelects[0]);
                newArtifactSetSelect1.value = pChar.selectedArtifacts[0] || '';
                newArtifactSetSelect1.addEventListener('change', () => updateCharacterEquipment(pChar.id, 'artifact1', newArtifactSetSelect1.value));

                const newArtifactSetSelect2 = artifactSetSelects[1].cloneNode(true);
                artifactSetSelects[1].parentNode.replaceChild(newArtifactSetSelect2, artifactSetSelects[1]);
                newArtifactSetSelect2.value = pChar.selectedArtifacts[1] || '';
                newArtifactSetSelect2.addEventListener('change', () => updateCharacterEquipment(pChar.id, 'artifact2', newArtifactSetSelect2.value));
            }
        });
    }

    function populateWeaponSelect(selectElement, charWeaponType) {
        if (weapons[charWeaponType]) {
            weapons[charWeaponType].forEach(weapon => {
                const option = document.createElement('option');
                option.value = weapon;
                option.textContent = weapon;
                selectElement.appendChild(option);
            });
        }
    }

    function populateArtifactSetSelects(selectElements) {
        selectElements.forEach((selectElement, index) => {
            selectElement.innerHTML = `<option value="">聖遺物セット${index + 1}</option>`;
            artifactSets.forEach(set => {
                const option = document.createElement('option');
                option.value = set;
                option.textContent = set;
                selectElement.appendChild(option);
            });
        });
    }

    function updateCharacterEquipment(charId, type, value) {
        const charInParty = currentParty.find(pChar => pChar.id === charId);
        if (charInParty) {
            if (type === 'weapon') charInParty.selectedWeapon = value;
            else if (type === 'artifact1') charInParty.selectedArtifacts[0] = value;
            else if (type === 'artifact2') charInParty.selectedArtifacts[1] = value;
            saveParty();
        }
    }

    function saveParty() {
        localStorage.setItem('genshinParty', JSON.stringify(currentParty));
    }

    function loadParty() {
        const savedParty = localStorage.getItem('genshinParty');
        if (savedParty) {
            currentParty = JSON.parse(savedParty);
            repopulatePartySlots();
        }
    }

    initializeApp();
});