document.addEventListener('DOMContentLoaded', () => {
    // 炎元素 (Pyro)
    const pyroCharacters = [
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
    ];

    // 水元素 (Hydro)
    const hydroCharacters = [
        { id: 'yelan', name: '夜蘭', element: '水', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Yelan.png' },
        { id: 'xingqiu', name: '行秋', element: '水', weapon: '片手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Xingqiu.png' },
        { id: 'furina', name: 'フリーナ', element: '水', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Furina.png' },
        { id: 'mona', name: 'モナ', element: '水', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Mona.png' },
        { id: 'nilou', name: 'ニィロウ', element: '水', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Nilou.png' },
        { id: 'neuvillette', name: 'ヌヴィレット', element: '水', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Neuvillette.png' },
        { id: 'sigewinne', name: 'シグウィン', element: '水', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Sigewinne.png' },
        { id: 'kokomi', name: '珊瑚宮心海', element: '水', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Kokomi.png' },
        { id: 'child_tartaglia', name: 'タルタリヤ', element: '水', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Tartaglia.png' },
        { id: 'barbara', name: 'バーバラ', element: '水', weapon: '法器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Barbara.png' },
        { id: 'ayato', name: '神里綾人', element: '水', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Ayato.png' },
        { id: 'candace', name: 'キャンディス', element: '水', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Candace.png' },
        { id: 'mualani', name: 'ムアラニ', element: '水', weapon: '法器', rarity: 5, imageUrl: '/uploads/1752496239510.png' },
        { id: 'dahlia', name: 'ダリア', element: '水', weapon: '片手剣', rarity: 4, imageUrl: '/uploads/1752496306518.png' },
    ];

    // 岩元素 (Geo)
    const geoCharacters = [
        { id: 'zhongli', name: '鍾離', element: '岩', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Zhongli.png' },
        { id: 'albedo', name: 'アルベド', element: '岩', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Albedo.png' },
        { id: 'chiori', name: '千織', element: '岩', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Chiori.png' },
        { id: 'gorou', name: 'ゴロー', element: '岩', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Gorou.png' },
        { id: 'itto', name: '荒瀧一斗', element: '岩', 'weapon': '両手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Itto.png' },
        { id: 'yunjin', name: '雲菫', element: '岩', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Yunjin.png' },
        { id: 'noelle', name: 'ノエル', element: '岩', weapon: '両手剣', rarity: 4, imageUrl: '/uploads/1752496383387.png' },
        { id: 'ningguang', name: '凝光', element: '岩', weapon: '法器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Ningguang.png' },
        { id: 'navia', name: 'ナヴィア', element: '岩', weapon: '両手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Navia.png' },
        { id: 'kachina', name: 'カチーナ', element: '岩', weapon: '長柄武器', rarity: 4, imageUrl: '/uploads/1752496440588.png' },
        { id: 'xilonen', name: 'シロネン', element: '岩', weapon: '片手剣', rarity: 4, imageUrl: '/uploads/1752496504242.png' },
    ];

    // 風元素 (Anemo)
    const anemoCharacters = [
        { id: 'kazuha', name: '楓原万葉', element: '風', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Kazuha.png' },
        { id: 'wanderer', name: '放浪者', element: '風', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Wanderer.png' },
        { id: 'xianyun', name: '閑雲', element: '風', weapon: '法器', rarity: 5, imageUrl: '/uploads/1752496573731.png' },
        { id: 'jean', name: 'ジン', element: '風', weapon: '片手剣', rarity: 5, imageUrl: '/uploads/1752496631664.png' },
        { id: 'faruzan', name: 'ファルザン', element: '風', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Faruzan.png' },
        { id: 'sayu', name: '早柚', element: '風', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Sayu.png' },
        { id: 'sucrose', name: 'スクロース', element: '風', weapon: '法器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Sucrose.png' },
        { id: 'venti', name: 'ウェンティ', element: '風', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Venti.png' },
        { id: 'shikanoin_heizou', name: '鹿野院平蔵', element: '風', weapon: '法器', rarity: 4, imageUrl: '/uploads/1752496692529.png' },
        { id: 'lynette', name: 'リネット', element: '風', weapon: '片手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Linette.png' },
        { id: 'xiao', name: '魈', element: '風', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Xiao.png' },
        { id: 'chasca', name: 'チャスカ', element: '風', weapon: '弓', rarity: 5, imageUrl: '/uploads/1752496760277.png' },
        { id: 'yumemitsuki_mizuki', name: '夢見月瑞希', element: '風', weapon: '法器', rarity: 4, imageUrl: '/uploads/1752496835372.png' },
        { id: 'lanyan', name: '藍魂', element: '風', weapon: '法器', rarity: 4, imageUrl: '/uploads/1752496900446.png' },
        { id: 'ifa', name: 'イファ', element: '風', weapon: '法器', rarity: 4, imageUrl: '/uploads/1752496958076.png' },
    ];

    // 雷元素 (Electro)
    const electroCharacters = [
        { id: 'fischl', name: 'フィッシュル', element: '雷', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Fischl.png' },
        { id: 'raiden', name: '雷電将軍', element: '雷', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Shougun.png' },
        { id: 'keqing', name: '刻晴', element: '雷', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Keqing.png' },
        { id: 'cyno', name: 'セノ', element: '雷', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Cyno.png' },
        { id: 'kuki', name: '久岐忍', element: '雷', weapon: '片手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Shinobu.png' },
        { id: 'dori', name: 'ドリー', element: '雷', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Dori.png' },
        { id: 'clorinde', name: 'クロリンデ', element: '雷', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Clorinde.png' },
        { id: 'sethos', name: 'セトス', element: '雷', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Sethos.png' },
        { id: 'yae_miko', name: '八重神子', element: '雷', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Yae.png' },
        { id: 'kujou_sara', name: '九条裟羅', element: '雷', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Sara.png' },
        { id: 'razor', name: 'レザー', element: '雷', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Razor.png' },
        { id: 'lisa', name: 'リサ', element: '雷', weapon: '法器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Lisa.png' },
        { id: 'beidou', name: '北斗', element: '雷', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Beidou.png' },
        { id: 'iansan', name: 'イアンサ', element: '雷', weapon: '長柄武器', rarity: 4, imageUrl: '/uploads/1752497038755.png' },
        { id: 'varesa', name: 'ヴァレサ', element: '雷', weapon: '法器', rarity: 4, imageUrl: '/uploads/1752497093365.png' },
        { id: 'ororon', name: 'オロルン', element: '雷', weapon: '弓', rarity: 4, imageUrl: '/uploads/1752497145033.png' },
    ];

    // 氷元素 (Cryo)
    const cryoCharacters = [
        { id: 'ganyu', name: '甘雨', element: '氷', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Ganyu.png' },
        { id: 'ayaka', name: '神里綾華', element: '氷', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Ayaka.png' },
        { id: 'qiqi', name: '七七', element: '氷', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Qiqi.png' },
        { id: 'wriothesley', name: 'リオセスリ', element: '氷', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Wriothesley.png' },
        { id: 'layla', name: 'レイラ', element: '氷', weapon: '片手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Layla.png' },
        { id: 'shenhe', name: '申鶴', element: '氷', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Shenhe.png' },
        { id: 'aloy', name: 'アーロイ', element: '氷', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Aloy.png' },
        { id: 'chongyun', name: '重雲', element: '氷', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Chongyun.png' },
        { id: 'kaeya', name: 'ガイア', element: '氷', weapon: '片手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Kaeya.png' },
        { id: 'diona', name: 'ディオナ', element: '氷', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Diona.png' },
        { id: 'rosaria', name: 'ロサリア', element: '氷', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Rosaria.png' },
        { id: 'eula', name: 'エウルア', element: '氷', weapon: '両手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Eula.png' },
        { id: 'freminet', name: 'フレミネ', element: '氷', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Freminet.png' },
        { id: 'charlotte', name: 'シャルロット', element: '氷', weapon: '法器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Charlotte.png' },
        { id: 'mika', name: 'ミカ', element: '氷', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Mika.png' },
        { id: 'skirk', name: 'スカーク', element: '氷', weapon: '片手剣', rarity: 5, imageUrl: '/uploads/1752497211180.png' },
        { id: 'escoffier', name: 'スコフィエ', element: '氷', weapon: '長柄武器', rarity: 4, imageUrl: '/uploads/1752497265649.png' },
        { id: 'Citlali', name: 'シトラリ', element: '氷', weapon: '法器', rarity: 4, imageUrl: '/uploads/1752497330547.png' },
    ];

    // 草元素 (Dendro)
    const dendroCharacters = [
        { id: 'nahida', name: 'ナヒーダ', element: '草', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Nahida.png' },
        { id: 'alhaitham', name: 'アルハイゼン', element: '草', weapon: '片手剣', rarity: 5, imageUrl: '/uploads/1752495562675.png' },
        { id: 'baizhu', name: '白朮', element: '草', weapon: '法器', rarity: 5, imageUrl: '/uploads/1752495790027.png' },
        { id: 'kirara', name: '綺良々', element: '草', weapon: '片手剣', rarity: 4, imageUrl: '/uploads/1752495892579.png' },
        { id: 'collei', name: 'コレイ', element: '草', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Collei.png' },
        { id: 'yaoyao', name: 'ヨォーヨ', element: '草', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Yaoyao.png' },
        { id: 'kaveh', name: 'カーヴェ', element: '草', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Kaveh.png' },
        { id: 'emilie', name: 'エミリエ', element: '草', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Emilie.png' },
        { id: 'tighnari', name: 'ティナリ', element: '草', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Tighnari.png' },
        { id: 'kinich', name: 'キィニチ', element: '草', weapon: '両手剣', rarity: 4, imageUrl: '/uploads/1752495955900.png' },
    ];

    const travelerCharacter = [
        { id: 'traveler', name: '旅人', element: '複数', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png' },
    ];

    const allCharacters = [
        ...pyroCharacters,
        ...hydroCharacters,
        ...geoCharacters,
        ...anemoCharacters,
        ...electroCharacters,
        ...cryoCharacters,
        ...dendroCharacters,
        ...travelerCharacter
    ];

    const weapons = {
        '片手剣': [
            // ★5
            '天空の刃', '岩峰を巡る歌', '斬山の刃', '有楽御簾切', '波乱月白経津', '磐岩結緑', '聖顕の鍵', '萃光の裁葉', '蒼古なる自由への誓い', '蒼耀', '赦罪', '霧切の廻光', '静水流転の輝き', '風鷹剣',
            // ★4
            'シナバースピンドル', '厄水の災い', 'ストロング・ボーン', 'エズピツァルの笛', '水仙十字の剣', '船渠剣', 'サーンドルの渡し守', '狼牙', '海淵のフィナーレ', '東花坊時雨', 'サイフォスの月明かり', '原木刀', '籠釣瓶一心', '西風剣', '天目影打', 'ダークアレイの閃光', '腐植の剣', '降臨の剣', '黒剣', '黒岩の長剣', '鉄蜂の刺し', '斬岩・試作', '旧貴族長剣', '匣中龍吟', '祭礼の剣', '笛の剣',
            // ★3
            '冷刃', '黎明の神剣', '飛天御剣', '暗鉄剣', '旅道の剣', 'チ虎魚の刀'
        ],
        '両手剣': [
            // ★5
            '千烈の日輪', '山の王の長牙', '裁断', '葦海の標', '赤角石塵滅砕', '松韻の響く頃', '無工の剣', '天空の傲', '狼の末路',
            // ★4
            '実りの鉤鉈', 'アースシェイカー', 'スーパーアルティメット覇王魔剣', '携帯型チェーンソー', '話死合い棒', 'タイダル・シャドー', '鉄彩の花', 'マカイラの水色', '森林のレガリア', '惡王丸', '銜玉の海皇', '桂木斬長正', '千岩古剣', '雪葬の星銀', '螭龍の剣', '黒岩の斬刀', '白影の剣', '古華・試作', '旧貴族大剣', '雨裁', '祭礼の大剣', '鐘の剣', '西風大剣',
            // ★3
            '鉄影段平', '龍血を浴びた剣', '理屈責め', '飛天大御剣', '白鉄の大剣'
        ],
        '長柄武器': [
            // ★5
            '和璞鳶', '天空の脊', '破天の槍', '護摩の杖', '草薙の稲光', '息災', '赤砂の杖', '赤月のシルエット', 'ルミドゥースの挽歌', '香りのシンフォニスト',
            // ★4
            '漁獲', '玉響停の御噺', '鎮山の釘', '虹の行方', '砂中の賢者達の問答', 'プロスペクタードリル', 'フィヨルドの歌', '正義の報酬', '風信の矛', 'ムーンピアサー', '斬波のひれ長', '匣中滅龍', '喜多院十文字槍', '千岩長槍', 'ドラゴンスピア', '旧貴族猟槍', '死闘の槍', '黒岩の突槍', '流月の針', '星鎌・試作', '西風長槍',
            // ★3
            '黒纓槍', '鉾槍', '白纓槍'
        ],
        '弓': [
            // ★5
            '天空の翼', 'アモスの弓', '終焉を嘆く詩', '飛雷の鳴弦', '冬極の白星', '若水', '狩人の道', '始まりの大魔術', '白雨心弦', '星鷲の紅き羽',
            // ★4
            'プレデター', '冷寂の音', '花飾りの羽', 'チェーンブレイカー', '築雲', 'レンジゲージ', '烈日の後嗣', '静寂の唄', 'トキの嘴', '王の近侍', '竭沢', '落霞', '曚雲の月', '西風猟弓', '破魔の弓', '幽夜のワルツ', '風花の頌歌', 'ダークアレイの狩人', '蒼翠の狩猟弓', '黒岩の戦弓', 'リングボウ', '澹月・試作', '旧貴族長弓', '弓蔵', '祭礼の弓', '絶弦',
            // ★3
            '鴉羽の弓', 'シャープシューターの誓い', '弾弓', '文使い', 'リカーブボウ'
        ],
        '法器': [
            // ★5
            '天空の巻', '四風原典', '浮世の錠', '不滅の月華', '神楽の真意', '千夜に浮かぶ夢', 'トゥライトゥーラの記憶', '碧落の瓏', '凛流の監視者', '久遠流転の大典', '鶴鳴の余韻', 'サーフィンタイム', '祭星者の眺め', '寝正月の初晴', 'ヴィヴィッド・ハート',
            // ★4
            'ドドコの物語', '波乗りの旋回', '蒼紋の角杯', 'ヤシュチェの環', '果てなき紺碧の唄', '古祠の瓏', '純水流華', '彷徨える星', '満悦の実', '誓いの明瞳', '白辰の輪', '西風秘典', 'ダークアレイの酒と詩', '冬忍びの実', '黒岩の緋玉', '万国諸海の図譜', '金珀・試作', '匣中日月', '旧貴族秘法録', '昭心', '祭礼の断片', '流浪楽章',
            // ★3
            '魔導緒論', '龍殺しの英傑譚', '翡玉法珠', '特級の宝玉', '異世界旅行記'
        ]
    };

    const artifactSets = [
       'なし',
        '深廊の終曲','長き夜の誓い','灰燼の都に立つ英雄の絵巻',
        '黒曜の秘典','遂げられなかった想い','諧律奇想の断章',
        '残響の森で囁かれる夜話','在りし日の歌','黄金の劇団',
        'ファントムハンター','花海甘露の光','水仙の夢',
        '楽園の絶花','砂上の楼閣の史話','金メッキの夢',
        '深林の記憶','来歆の余響','辰砂往生録','海染硨磲',
        '華館夢醒形骸記','追憶のしめ縄','絶縁の旗印',
        '蒼白の炎','千岩牢固','氷風を彷徨う勇士','沈淪の心',
        '逆飛びの流星','悠久の磐岩','血染めの騎士道',
        '旧貴族のしつけ','燃え盛る炎の魔女','雷のような怒り',
        '翠緑の影','剣闘士のフィナーレ','愛される少女',
        '烈火を渡る賢者','雷を鎮める尊者','大地を流浪する楽団','教官'
    ];

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
        await fetchCharacters();
        renderCharacters();
        loadParty();
    }

    // --- API通信 ---
    async function fetchCharacters() {
        try {
            const response = await fetch('/api/characters');
            if (!response.ok) throw new Error('サーバーからデータを取得できませんでした。');
            allCharacters = await response.json();
        } catch (error) {
            console.error('キャラクターの読み込みに失敗:', error);
            alert('キャラクターの読み込みに失敗しました。');
        }
    }

    // --- 描画処理 ---
    function renderCharacters(filteredCharacters = allCharacters) {
        characterListDiv.innerHTML = '';
        filteredCharacters.forEach(char => {
            const img = document.createElement('img');
            img.src = char.imageUrl;
            img.alt = char.name;
            img.classList.add('character-icon');
            img.dataset.id = char.id;
            img.addEventListener('click', () => addCharacterToParty(char));
            characterListDiv.appendChild(img);
        });
    }

    // --- イベントリスナー ---

    // 画像アップロード
    uploadButton.addEventListener('click', async () => {
        const file = imageUploader.files[0];
        if (!file) {
            uploadStatus.textContent = 'ファイルが選択されていません。';
            return;
        }
        const formData = new FormData();
        formData.append('imageFile', file);

        try {
            uploadStatus.textContent = 'アップロード中...';
            const response = await fetch('/upload', { method: 'POST', body: formData });
            const result = await response.json();
            if (response.ok) {
                uploadStatus.textContent = 'アップロード成功！';
                hiddenImageUrl.value = result.filePath; // 取得したパスを隠しフィールドに設定
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            uploadStatus.textContent = `エラー: ${error.message}`;
        }
    });

    // キャラクター追加フォーム
    addForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const newCharacterData = {
            name: document.getElementById('char-name').value,
            element: document.getElementById('char-element').value,
            weapon: document.getElementById('char-weapon').value,
            rarity: parseInt(document.getElementById('char-rarity').value, 10),
            imageUrl: hiddenImageUrl.value
        };

        if (!newCharacterData.imageUrl) {
            alert('画像をアップロードしてください。');
            return;
        }

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
                await initializeApp(); // リストを再読み込みして更新
            } else {
                throw new Error('キャラクターの追加に失敗しました。');
            }
        } catch (error) {
            alert(error.message);
        }
    });

    // フィルター機能
    searchBar.addEventListener('input', filterCharacters);
    elementFilter.addEventListener('change', filterCharacters);
    weaponFilter.addEventListener('change', filterCharacters);

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
    
    // --- パーティ編成関連の関数 (以前のものを統合) ---
    clearPartyButton.addEventListener('click', () => {
        currentParty = [];
        repopulatePartySlots();
        saveParty();
    });

    function addCharacterToParty(char) {
        if (currentParty.length >= 4) {
            alert('パーティは最大4人です。');
            return;
        }
        if (currentParty.some(pChar => pChar.id === char.id)) {
            alert(`${char.name} はすでにパーティにいます。`);
            return;
        }

        const emptySlotIndex = currentParty.length;
        currentParty.push({
            ...char,
            selectedWeapon: '',
            selectedArtifacts: ['', '']
        });
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
            
            // 一旦クリア
            characterDisplay.innerHTML = '';
            weaponSelect.innerHTML = '<option value="">武器を選択</option>';
            artifactSetSelects[0].innerHTML = '<option value="">聖遺物セット1</option>';
            artifactSetSelects[1].innerHTML = '<option value="">聖遺物セット2</option>';
            
            const pChar = currentParty[index];

            if (pChar) {
                const charDetails = allCharacters.find(c => c.id === pChar.id);
                if (!charDetails) return;

                const img = document.createElement('img');
                img.src = charDetails.imageUrl;
                img.alt = charDetails.name;
                img.classList.add('party-character-icon');
                img.addEventListener('click', () => removeCharacterFromParty(pChar.id));
                characterDisplay.appendChild(img);

                populateWeaponSelect(weaponSelect, charDetails.weapon);
                populateArtifactSetSelects(artifactSetSelects);
                
                weaponSelect.value = pChar.selectedWeapon;
                artifactSetSelects[0].value = pChar.selectedArtifacts[0];
                artifactSetSelects[1].value = pChar.selectedArtifacts[1];

                // イベントリスナーを再設定
                const newWeaponSelect = weaponSelect.cloneNode(true);
                weaponSelect.parentNode.replaceChild(newWeaponSelect, weaponSelect);
                newWeaponSelect.addEventListener('change', () => updateCharacterEquipment(pChar.id, 'weapon', newWeaponSelect.value));

                const newArtifactSetSelect1 = artifactSetSelects[0].cloneNode(true);
                artifactSetSelects[0].parentNode.replaceChild(newArtifactSetSelect1, artifactSetSelects[0]);
                newArtifactSetSelect1.addEventListener('change', () => updateCharacterEquipment(pChar.id, 'artifact1', newArtifactSetSelect1.value));

                const newArtifactSetSelect2 = artifactSetSelects[1].cloneNode(true);
                artifactSetSelects[1].parentNode.replaceChild(newArtifactSetSelect2, artifactSetSelects[1]);
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
            if (type === 'weapon') {
                charInParty.selectedWeapon = value;
            } else if (type === 'artifact1') {
                charInParty.selectedArtifacts[0] = value;
            } else if (type === 'artifact2') {
                charInParty.selectedArtifacts[1] = value;
            }
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

    // --- アプリケーションの実行 ---
    initializeApp();
});