document.addEventListener('DOMContentLoaded', () => {
    // 炎元素 (Pyro)
    const pyroCharacters = [
        { id: 'hutao', name: '胡桃', element: '炎', weapon: '長柄武器', rarity: 5, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381962027169218622/latest.png?ex=68496bee&is=68481a6e&hm=f50a4554593bc97a49146f315f02c86012e1b2f979c3fe0e73b9d6ed879ba50a&' },
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
        { id: 'lyney', name: 'リネ', element: '炎', weapon: '弓', rarity: 5, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381962364240531456/250.png?ex=68496c3f&is=68481abf&hm=0e54e6bbe24f99b30bc98df351aa31c4247e8b3cd60eb9f05efba152df730040&' },
        { id: 'amber', name: 'アンバー', element: '炎', weapon: '弓', rarity: 4, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381962769842180096/latest.png?ex=68496c9f&is=68481b1f&hm=f2986c36aff8af94b8d322b3f4c86b0b15a24964373144ae50e3ea00dbd6a252&' },
        { id: 'Yoimiya', name: '宵宮', element: '炎', weapon: '弓', rarity: 5, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381963064286515211/250.png?ex=68496ce6&is=68481b66&hm=fed97b33817d74ff33682e376dc084a1019395cd7ac5fea8e3920e359566e0a4&' },
        { id: 'Mavuika', name: 'マーヴィカ', element: '炎', weapon: '両手剣', rarity: 5, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381963296210686083/250.png?ex=68496d1d&is=68481b9d&hm=f7035dee6513cc84f2b665e67043c0a32b4e9de183d6b29b1b4096e2558bbb80&' },
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
        { id: 'mualani', name: 'ムアラニ', element: '水', weapon: '法器', rarity: 5, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381963757651230780/250.png?ex=68496d8b&is=68481c0b&hm=dce6f99f507e416beda93698441dd125e01839224efdb98bfa4c85c8ab3c87c7&' },
        { id: 'dahlia', name: 'ダリア', element: '水', weapon: '片手剣', rarity: 4, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381945834106650744/image.png?ex=68495cda&is=68480b5a&hm=98449825aae7a7bcf41e3d94d7cf8fd91e5a6baf3b258c3c4c6e3c8786a1b894&' },
    ];

    // 岩元素 (Geo)
    const geoCharacters = [
        { id: 'zhongli', name: '鍾離', element: '岩', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Zhongli.png' },
        { id: 'albedo', name: 'アルベド', element: '岩', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Albedo.png' },
        { id: 'chiori', name: '千織', element: '岩', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Chiori.png' },
        { id: 'gorou', name: 'ゴロー', element: '岩', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Gorou.png' },
        { id: 'itto', name: '荒瀧一斗', element: '岩', 'weapon': '両手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Itto.png' },
        { id: 'yunjin', name: '雲菫', element: '岩', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Yunjin.png' },
        { id: 'noelle', name: 'ノエル', element: '岩', weapon: '両手剣', rarity: 4, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381964322850209873/latest.png?ex=68496e12&is=68481c92&hm=77c5a444b3e9f1ef2203d489ed7b3ae3e7aa34f5e6bcc9f1a77dea1748057c7e&' },
        { id: 'ningguang', name: '凝光', element: '岩', weapon: '法器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Ningguang.png' },
        { id: 'navia', name: 'ナヴィア', element: '岩', weapon: '両手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Navia.png' },
        { id: 'kachina', name: 'カチーナ', element: '岩', weapon: '長柄武器', rarity: 4, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381964590853787719/250.png?ex=68496e52&is=68481cd2&hm=927f1e060c92d746c63ade681cddf78d22839794e6abd135e75036c6fc8b7479&' },
        { id: 'xilonen', name: 'シロネン', element: '岩', weapon: '片手剣', rarity: 4, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381964792549347368/250.png?ex=68496e82&is=68481d02&hm=bffb70147d6f8942bea59fb51ad368e63559d7371399226450c9a1bee7aeb690&' },
    ];

    // 風元素 (Anemo)
    const anemoCharacters = [
        { id: 'kazuha', name: '楓原万葉', element: '風', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Kazuha.png' },
        { id: 'wanderer', name: '放浪者', element: '風', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Wanderer.png' },
        { id: 'xianyun', name: '閑雲', element: '風', weapon: '法器', rarity: 5, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d3/Xianyun_Icon.png/revision/latest?cb=20240131020302' },
        { id: 'jean', name: 'ジン', element: '風', weapon: '片手剣', rarity: 5, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/6/64/Jean_Icon.png/revision/latest?cb=20220602180528' },
        { id: 'faruzan', name: 'ファルザン', element: '風', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Faruzan.png' },
        { id: 'sayu', name: '早柚', element: '風', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Sayu.png' },
        { id: 'sucrose', name: 'スクロース', element: '風', weapon: '法器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Sucrose.png' },
        { id: 'venti', name: 'ウェンティ', element: '風', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Venti.png' },
        { id: 'shikanoin_heizou', name: '鹿野院平蔵', element: '風', weapon: '法器', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/2/20/Shikanoin_Heizou_Icon.png/revision/latest?cb=20240711205453' },
        { id: 'lynette', name: 'リネット', element: '風', weapon: '片手剣', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Lynette_Icon.png/revision/latest?cb=20230816051019' },
        { id: 'xiao', name: '魈', element: '風', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Xiao.png' },
        { id: 'chasca', name: 'チャスカ', element: '風', weapon: '弓', rarity: 5, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/0/03/Chasca_Icon.png/revision/latest?cb=20241120025626' },
        { id: 'yumemitsuki_mizuki', name: '夢見月瑞希', element: '風', weapon: '法器', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Yumemizuki_Mizuki_Icon.png/revision/latest?cb=20250212014631' },
        { id: 'lanyan', name: '藍魂', element: '風', weapon: '法器', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e6/Lan_Yan_Icon.png/revision/latest?cb=20250128195304' },
        { id: 'ifa', name: 'イファ', element: '風', weapon: '法器', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Ifa_Icon.png/revision/latest?cb=20250507052606' },
    ];

    // 雷元素 (Electro)
    const electroCharacters = [
        { id: 'fischl', name: 'フィッシュル', element: '雷', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Fischl.png' },
        { id: 'raiden', name: '雷電将軍', element: '雷', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Shougun.png' },
        { id: 'keqing', name: '刻晴', element: '雷', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Keqing.png' },
        { id: 'cyno', name: 'セノ', element: '雷', weapon: '長柄武器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Cyno.png' },
        { id: 'kuki', name: '久岐忍', element: '雷', weapon: '片手剣', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Kuki_Shinobu_Icon.png/revision/latest?cb=20220605061801' },
        { id: 'dori', name: 'ドリー', element: '雷', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Dori.png' },
        { id: 'clorinde', name: 'クロリンデ', element: '雷', weapon: '片手剣', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Clorinde.png' },
        { id: 'sethos', name: 'セトス', element: '雷', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Sethos.png' },
        { id: 'yae_miko', name: '八重神子', element: '雷', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Yae.png' },
        { id: 'kujou_sara', name: '九条裟羅', element: '雷', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Sara.png' },
        { id: 'razor', name: 'レザー', element: '雷', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Razor.png' },
        { id: 'lisa', name: 'リサ', element: '雷', weapon: '法器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Lisa.png' },
        { id: 'beidou', name: '北斗', element: '雷', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Beidou.png' },
        { id: 'iansan', name: 'イアンサ', element: '雷', weapon: '長柄武器', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/3/38/Iansan_Icon.png/revision/latest?cb=20250326014900' },
        { id: 'varesa', name: 'ヴァレサ', element: '雷', weapon: '法器', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/dd/Varesa_Icon.png/revision/latest?cb=20250326014831' },
        { id: 'ororon', name: 'オロルン', element: '雷', weapon: '弓', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Ororon_Icon.png/revision/latest?cb=20241014100711' },
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
        { id: 'escoffier', name: 'スコフィエ', element: '氷', weapon: '長柄武器', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Escoffier_Icon.png/revision/latest?cb=20250507052556' },
        { id: 'Citlali', name: 'シトラリ', element: '氷', weapon: '法器', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/dd/Citlali_Icon.png/revision/latest?cb=20241130080542' },
        { id: 'charlotte', name: 'シャルロット', element: '氷', weapon: '法器', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Charlotte_Icon.png/revision/latest?cb=20231108030544' },
        { id: 'mika', name: 'ミカ', element: '氷', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Mika.png' },
        { id: 'skirk', name: 'スカーク', element: '氷', weapon: '片手剣', rarity: 5, imageUrl: 'https://cdn.discordapp.com/attachments/978269118119673896/1381943571824902155/UI_AvatarIcon_SkirkNew.png?ex=68495abe&is=6848093e&hm=4261551f0b216f7189e6bc65530b7984c6feb52ef7df6f81a5b99111b02ff49b&' },
    ];

    // 草元素 (Dendro)
    const dendroCharacters = [
        { id: 'nahida', name: 'ナヒーダ', element: '草', weapon: '法器', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Nahida.png' },
        { id: 'alhaitham', name: 'アルハイゼン', element: '草', weapon: '片手剣', rarity: 5, imageUrl: 'https://cdn.discordapp.com/attachments/1377999535644737537/1382202113039532052/250.png?ex=684a4b87&is=6848fa07&hm=14f2b9ddca169f6f1ab550b20bb81dab497f2e25e809ab75d1ef77db48a16846&' },
        { id: 'baizhu', name: '白朮', element: '草', weapon: '法器', rarity: 5, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Baizhu_Icon.png/revision/latest?cb=20231215091730' },
        { id: 'kirara', name: '綺良々', element: '草', weapon: '片手剣', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b6/Kirara_Icon.png/revision/latest?cb=20230718042457' },
        { id: 'collei', name: 'コレイ', element: '草', weapon: '弓', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Collei.png' },
        { id: 'yaoyao', name: 'ヨォーヨ', element: '草', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Yaoyao.png' },
        { id: 'kaveh', name: 'カーヴェ', element: '草', weapon: '両手剣', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Kaveh.png' },
        { id: 'emilie', name: 'エミリエ', element: '草', weapon: '長柄武器', rarity: 4, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Emilie.png' },
        { id: 'tighnari', name: 'ティナリ', element: '草', weapon: '弓', rarity: 5, imageUrl: 'https://enka.network/ui/UI_AvatarIcon_Tighnari.png' },
        { id: 'kinich', name: 'キィニチ', element: '草', weapon: '両手剣', rarity: 4, imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Kinich_Icon.png/revision/latest?cb=20240917123836' },
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
            '斬岩・試作', '西風剣', '磐岩結緑', '蒼古なる自由への誓い', '霧切の廻光', '天目影打', '聖顕の鍵',
            '波乱月白経津', '静水流転の輝き', '狼牙', '船歌', '原木刀', '黒剣', '祭礼の剣', '匣中龍吟',
            '鉄蜂の刺し', 'サイフォスの月明かり', '東花坊時雨', '風鷹剣', '天空の刃', '籠釣瓶一心',
            'シナバースピンドル', '腐植の剣', '斬月の刃', 'ダークアレイの閃光', '降臨の剣', '冷刃', '黎明の神剣',
            '飛天御剣', '旅行剣', '暗鉄剣', 'フォボス', '裁断'
        ],
        '両手剣': [
            '螭龍の剣', '狼の末路', '松韻の響く頃', '天空の傲', '無工の剣', '飛天大御剣', '古華・試作',
            '祭礼の大剣', '西風大剣', '鐘の剣', '白影の剣', '桂木斬長正', '原木大剣', '赤角石塵滅砕',
            '葦海の標', '千岩古剣', '雪葬の星銀', '惡王丸', '貫月矢', '体験用片手剣', '黒岩の斬刀',
            '以理服人', '裁断', '鹹魚', 'ダークアレイの閃光', '白鉄の影', '理屈責め', '話をおとどけ', 'マカイラの水色'
        ],
        '長柄武器': [
            '和璞鳶', '護摩の杖', '草薙の稲光', '破天の槍', '雷電将軍の餅', '貫虹の槊', '千岩長槍',
            '西風長槍', '死闘の槍', '漁獲', '黒纓槍', '喜多院十文字槍', '龍殺しの英傑譚', '息災',
            '赤砂の杖', '風信の矛', '峡湾の歌', '狩人の弓', '星鎌', 'プロトタイプスターダスト',
            'ドラゴンスパイン', '黒岩の突槍', '白暁を捉える彩鳶', 'ムーンピアサー'
        ],
        '弓': [
            'アモスの弓', '若水', '終焉を嘆く詩', '飛雷の鳴弦', '冬極の白星', '狩人の道', '萃光の裁葉',
            '烈日の継承', '霞がくれの刀', '風蝕の自由', '西風猟弓', '祭礼の弓', '絶弦', '弓蔵',
            'ダークアレイの弓', 'リング・ボウ', '翠色の狩人の弓', '幽夜のワルツ', '破魔の弓', '黒岩の弓',
            '王宮の弓', '試作澹月', 'サイフォスの月明かり', '蒼翠の狩人の弓', 'アメノマカケナギ', '水色の羽',
            'トキの嘴', '静寂の歌', '烈日の継承', 'ウルクの弓', 'レンジボウ', '体験用長柄武器', '体験用弓', '体験用両手剣', '体験用方器'
        ],
        '法器': [
            '昭心', '流浪楽章', '祭礼の断片', '万葉の詩', '神楽の真意', '不滅の月華', '浮世の錠',
            '四風原典', 'ドドコの物語', '天空の巻', '碧落の瓏', '千夜に浮かぶ夢', '不変の天地の定常性',
            '果てなき紺碧の唄', '彷徨える星', '冬忍びの徒', '龍殺しの英傑譚', '西風秘典', '金珀・試作',
            '白辰の輪', '満悦の実', 'ツルギの宝具', '黒岩の緋玉', 'ダークアレイの酒と詩', '昭心',
            '星4星5武器', '浮世の流浪人', '西風流記', '魔導緒論', 'ハルシオン', '純水流華'
        ]
    };

    const artifactSets = [
        'なし', '燃え盛る炎の魔女', '旧貴族のしつけ', '氷風を彷徨う勇士', '雷のような怒り', '翠緑の影', '千岩牢固', '蒼白の炎', '絶縁の旗印', '追憶のしめ縄', '華館夢醒形骸記', '海染硨磲', '辰砂往生録', '来歆の余響', '深林の記憶', '金メッキの夢', '砂上の楼閣の史話', '楽園の絶花', '水仙の夢', '花海甘露の光', 'ファントムハンター', '黄金の劇団', '響き渡る謳歌', '残響の森', '劇場の夢', '剣闘士のフィナーレ', '大地を流浪する楽団', '血染めの騎士道', '烈火の泉', '悠久の磐岩', '逆飛びの流星', '愛されし少女', '亡命者', '旅人の心', '勇士の心', '狂戦士', '武人', '教官', '奇跡', '守護の心', '学者', '冒険者', '医者', '幸運', 'ターゲット', '奇跡', '風の恩恵', '水使い', '炎の魔女', '雷を鎮める者', '氷祭りの剣士', '岩を砕く者', '草木の影', '元素共鳴'
    ];

    const characterListDiv = document.getElementById('character-list');
    const partySlotsDiv = document.getElementById('party-slots');
    const partySlots = partySlotsDiv.querySelectorAll('.party-slot');
    const clearPartyButton = document.getElementById('clear-party');
    const searchBar = document.getElementById('search-bar');
    const elementFilter = document.getElementById('element-filter');
    const weaponFilter = document.getElementById('weapon-filter');

    let currentParty = []; // { id: 'charId', weapon: 'weaponName', artifacts: ['set1', 'set2'] } の形式で格納

    function renderCharacters(filteredCharacters = allCharacters) {
        characterListDiv.innerHTML = '';
        filteredCharacters.forEach(char => {
            const img = document.createElement('img');
            img.src = char.imageUrl;
            img.alt = char.name;
            img.classList.add('character-icon');
            img.dataset.id = char.id;
            img.dataset.name = char.name;
            img.dataset.element = char.element;
            img.dataset.weapon = char.weapon; // キャラクターの得意武器種を保存
            img.dataset.rarity = char.rarity;

            img.addEventListener('click', () => {
                addCharacterToParty(char);
            });

            characterListDiv.appendChild(img);
        });
    }

    function addCharacterToParty(char) {
        // キャラクターがすでにパーティにいるか、またはパーティが満員かを確認
        if (currentParty.length < 4 && !currentParty.some(pChar => pChar.id === char.id)) {
            const emptySlotIndex = Array.from(partySlots).findIndex(slot => !slot.querySelector('.party-character-icon'));
            if (emptySlotIndex !== -1) {
                const partySlot = partySlots[emptySlotIndex];
                const characterDisplay = partySlot.querySelector('.character-display');
                const weaponSelect = partySlot.querySelector('.weapon-select');
                const artifactSetSelects = partySlot.querySelectorAll('.artifact-set-select');

                // キャラクターアイコンを追加
                const img = document.createElement('img');
                img.src = char.imageUrl;
                img.alt = char.name;
                img.dataset.id = char.id;
                img.classList.add('party-character-icon');
                characterDisplay.appendChild(img);

                // 装備選択欄を有効化し、オプションを生成
                partySlot.classList.add('active'); // CSSで有効/無効を切り替える場合
                populateWeaponSelect(weaponSelect, char.weapon); // キャラクターの得意武器種を渡す
                populateArtifactSetSelects(artifactSetSelects);

                // 選択肢のイベントリスナー
                weaponSelect.addEventListener('change', () => {
                    updateCharacterEquipment(char.id, 'weapon', weaponSelect.value);
                });
                artifactSetSelects[0].addEventListener('change', () => {
                    updateCharacterEquipment(char.id, 'artifact1', artifactSetSelects[0].value);
                });
                artifactSetSelects[1].addEventListener('change', () => {
                    updateCharacterEquipment(char.id, 'artifact2', artifactSetSelects[1].value);
                });

                // パーティデータにキャラクターを追加
                currentParty.push({
                    id: char.id,
                    name: char.name,
                    element: char.element,
                    weapon: char.weapon, // デフォルト武器種を保存
                    selectedWeapon: '',
                    selectedArtifacts: ['', '']
                });

                // パーティアイコンがクリックされたら削除
                img.addEventListener('click', () => {
                    removeCharacterFromParty(char.id);
                });

                saveParty();
            }
        } else if (currentParty.some(pChar => pChar.id === char.id)) {
            alert(`${char.name} はすでにパーティにいます。`);
        } else {
            alert('パーティは最大4人です。');
        }
    }

    function removeCharacterFromParty(charId) {
        const charIndex = currentParty.findIndex(pChar => pChar.id === charId);
        if (charIndex !== -1) {
            const partySlot = partySlots[charIndex];
            const characterDisplay = partySlot.querySelector('.character-display');
            const weaponSelect = partySlot.querySelector('.weapon-select');
            const artifactSetSelects = partySlot.querySelectorAll('.artifact-set-select');

            // 要素をクリア
            characterDisplay.innerHTML = '';
            weaponSelect.innerHTML = '<option value="">武器を選択</option>';
            artifactSetSelects[0].innerHTML = '<option value="">聖遺物セット1</option>';
            artifactSetSelects[1].innerHTML = '<option value="">聖遺物セット2</option>';

            // イベントリスナーを削除（クローンして再追加する方が確実だが、ここでは単純にクリア）
            weaponSelect.replaceWith(weaponSelect.cloneNode(true));
            artifactSetSelects[0].replaceWith(artifactSetSelects[0].cloneNode(true));
            artifactSetSelects[1].replaceWith(artifactSetSelects[1].cloneNode(true));

            // パーティデータから削除
            currentParty.splice(charIndex, 1);

            // 残りのキャラクターを再配置（これにより空いたスロットを詰める）
            repopulatePartySlots();
            saveParty();
        }
    }

    // パーティスロットを再配置する関数
    function repopulatePartySlots() {
        // 全てのスロットを一度クリア
        partySlots.forEach(slot => {
            slot.querySelector('.character-display').innerHTML = '';
            slot.querySelector('.weapon-select').innerHTML = '<option value="">武器を選択</option>';
            slot.querySelectorAll('.artifact-set-select')[0].innerHTML = '<option value="">聖遺物セット1</option>';
            slot.querySelectorAll('.artifact-set-select')[1].innerHTML = '<option value="">聖遺物セット2</option>';
            // イベントリスナーもクリアするために要素をクローン
            slot.querySelector('.weapon-select').replaceWith(slot.querySelector('.weapon-select').cloneNode(true));
            slot.querySelectorAll('.artifact-set-select')[0].replaceWith(slot.querySelectorAll('.artifact-set-select')[0].cloneNode(true));
            slot.querySelectorAll('.artifact-set-select')[1].replaceWith(slot.querySelectorAll('.artifact-set-select')[1].cloneNode(true));
        });

        // currentPartyのデータを基に再描画
        currentParty.forEach((pChar, index) => {
            const partySlot = partySlots[index];
            const characterDisplay = partySlot.querySelector('.character-display');
            const weaponSelect = partySlot.querySelector('.weapon-select');
            const artifactSetSelects = partySlot.querySelectorAll('.artifact-set-select');

            const charDetails = allCharacters.find(c => c.id === pChar.id);

            if (charDetails) {
                const img = document.createElement('img');
                img.src = charDetails.imageUrl;
                img.alt = charDetails.name;
                img.dataset.id = charDetails.id;
                img.classList.add('party-character-icon');
                characterDisplay.appendChild(img);

                populateWeaponSelect(weaponSelect, charDetails.weapon);
                populateArtifactSetSelects(artifactSetSelects);

                // 保存された選択値をセット
                weaponSelect.value = pChar.selectedWeapon;
                artifactSetSelects[0].value = pChar.selectedArtifacts[0];
                artifactSetSelects[1].value = pChar.selectedArtifacts[1];

                // 新しいイベントリスナーを追加
                weaponSelect.addEventListener('change', () => {
                    updateCharacterEquipment(pChar.id, 'weapon', weaponSelect.value);
                });
                artifactSetSelects[0].addEventListener('change', () => {
                    updateCharacterEquipment(pChar.id, 'artifact1', artifactSetSelects[0].value);
                });
                artifactSetSelects[1].addEventListener('change', () => {
                    updateCharacterEquipment(pChar.id, 'artifact2', artifactSetSelects[1].value);
                });

                img.addEventListener('click', () => {
                    removeCharacterFromParty(pChar.id);
                });
            }
        });
    }

    function populateWeaponSelect(selectElement, charWeaponType) {
        selectElement.innerHTML = '<option value="">武器を選択</option>';
        // キャラクターの得意武器種に合う武器を優先的に表示
        if (weapons[charWeaponType]) {
            weapons[charWeaponType].forEach(weapon => {
                const option = document.createElement('option');
                option.value = weapon;
                option.textContent = weapon;
                selectElement.appendChild(option);
            });
        }
        // その他の武器も追加する場合はここにロジックを追加
        // 現状では、charWeaponTypeに登録されている武器のみが表示されます。
        // 全ての武器を表示する場合は、weaponsオブジェクトをループする処理が必要です。
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
        const charIndex = currentParty.findIndex(pChar => pChar.id === charId);
        if (charIndex !== -1) {
            if (type === 'weapon') {
                currentParty[charIndex].selectedWeapon = value;
            } else if (type === 'artifact1') {
                currentParty[charIndex].selectedArtifacts[0] = value;
            } else if (type === 'artifact2') {
                currentParty[charIndex].selectedArtifacts[1] = value;
            }
            saveParty();
        }
    }

    clearPartyButton.addEventListener('click', () => {
        currentParty = [];
        repopulatePartySlots(); // 全てのスロットをクリアして再描画
        saveParty();
    });

    function saveParty() {
        localStorage.setItem('genshinParty', JSON.stringify(currentParty));
    }

    function loadParty() {
        const savedParty = localStorage.getItem('genshinParty');
        if (savedParty) {
            currentParty = JSON.parse(savedParty);
            repopulatePartySlots(); // 保存されたデータでパーティを再描画
        }
    }

    // フィルタリング機能
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

    // 初期表示
    renderCharacters();
    loadParty();
});