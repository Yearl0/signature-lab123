const philosophyLibrary = [
  { author: "苏格拉底", quote: "未经审视的人生不值得过。", source: "柏拉图《申辩篇》", themes: ["清醒", "自知", "理性"] },
  { author: "尼采", quote: "成为你自己。", source: "尼采相关思想，常见于《快乐的科学》等文本传统", themes: ["成为", "独立", "锋利"] },
  { author: "尼采", quote: "当你凝视深渊时，深渊也在凝视你。", source: "《善恶的彼岸》", themes: ["神秘", "孤独", "边界"] },
  { author: "加缪", quote: "在隆冬，我终于知道，我身上有一个不可战胜的夏天。", source: "《夏天集》", themes: ["热爱", "重生", "自由"] },
  { author: "萨特", quote: "存在先于本质。", source: "《存在主义是一种人道主义》", themes: ["选择", "自由", "成为"] },
  { author: "维特根斯坦", quote: "凡是能够说的，都能够说清楚；凡是不能谈论的，就应该保持沉默。", source: "《逻辑哲学论》", themes: ["沉默", "清醒", "语言"] },
  { author: "老子", quote: "知人者智，自知者明。", source: "《道德经》第三十三章", themes: ["自知", "松弛", "温柔"] },
  { author: "庄子", quote: "天地与我并生，而万物与我为一。", source: "《庄子·齐物论》", themes: ["自由", "自然", "宇宙"] },
];

const mbtiProfiles = {
  ISTJ: ["可靠", "克制", "秩序感", "长期主义"],
  ISFJ: ["温厚", "守护感", "细腻", "安稳"],
  INFJ: ["深度", "共情", "神秘", "温柔边界"],
  INTJ: ["冷静", "理性", "目标感", "独立"],
  ISTP: ["独立", "冷感", "行动派", "克制"],
  ISFP: ["审美", "感受", "松弛", "当下"],
  INFP: ["浪漫", "敏感", "理想主义", "想象力"],
  INTP: ["思辨", "抽离", "好奇", "清醒"],
  ESTP: ["直接", "冒险", "行动力", "不设限"],
  ESFP: ["明亮", "热情", "松弛", "感染力"],
  ENFP: ["热烈", "自由", "明亮", "冒险"],
  ENTP: ["灵感", "反叛", "机智", "探索欲"],
  ESTJ: ["笃定", "执行力", "清晰", "掌控感"],
  ESFJ: ["亲和", "真诚", "连接感", "热心"],
  ENFJ: ["理想", "鼓舞", "共情", "光感"],
  ENTJ: ["锋利", "野心", "掌控感", "笃定"],
  未知: ["个人气质", "自然", "留白", "真实"],
};

const mbtiStyleProfiles = {
  INFP: {
    motifs: ["月亮", "未命名", "温柔裂缝"],
    chinese: ["月亮不属于夜晚，也不必属于答案。", "梦被折进缝隙，仍有微光。", "未命名的温柔，适合留在暗处。"],
    english: ["Some moons refuse to belong.", "A soft fracture keeps the dream unnamed.", "The answer stays gentle, and slightly hidden."],
    mixed: ["月亮不归夜晚，dream stays unnamed.", "温柔有裂缝，but still glowing.", "答案不必命名，softly unresolved."],
    japanese: ["月は夜だけのものじゃない。", "名づけない夢にも、光が残る。", "やさしいひび割れに、月が沈む。"],
    old: ["月不归夜，梦未成名。", "旧梦有痕，明月无声。", "温柔藏隙，照见微光。"],
    mood: ["有些梦，不必醒得太彻底。", "月光落下时，答案仍然留白。", "温柔不说破，反而更像谜。"],
    philosophy: ["存在不是答案，是仍愿意替梦保留余地。", "沉默不是空白，是月光尚未命名。", "审视之后，热爱仍可以轻轻留下。"],
  },
  INFJ: {
    motifs: ["雾", "深处", "预感"],
    chinese: ["雾深处，总有未说完的预感。", "沉默不是距离，是更深的回声。", "靠近之前，先让月色替答案停一停。"],
    english: ["The fog keeps what the heart already knows.", "Silence returns from somewhere deeper.", "Some answers arrive as a quiet omen."],
    mixed: ["雾深处，meaning arrives softly.", "沉默有回声，but never explains itself.", "预感未落地，moonlight knows."],
    japanese: ["霧の奥で、予感だけが残る。", "沈黙は距離じゃなく、深さに似ている。", "答えはまだ、月の向こう側。"],
    old: ["雾锁深林，月知归处。", "不语成谶，灯影微明。", "深处有声，风不肯言。"],
    mood: ["雾还没散，预感已经先到。", "有些安静，像从很深处回来。", "答案停在半路，反而更接近真相。"],
    philosophy: ["存在不是答案，是雾深处仍愿回应的预感。", "不能说尽的地方，恰好有回声。", "审视之后，沉默也有方向。"],
  },
  INTJ: {
    motifs: ["星图", "秩序", "冷光"],
    chinese: ["星图未亮，方向已经归位。", "冷光落下，秩序自会显形。", "答案不喧哗，只在结构里发亮。"],
    english: ["The map stays dark; the direction remains exact.", "Cold light knows where order begins.", "The answer glows quietly inside the structure."],
    mixed: ["星图未亮，direction stays exact.", "冷光落下，order becomes visible.", "答案不喧哗，structure speaks."],
    japanese: ["星図は暗くても、方角は揺れない。", "冷たい光が、秩序を照らす。", "答えは構造の中で静かに光る。"],
    old: ["星图未启，归处已明。", "冷月照局，万象成序。", "不动声色，自有章法。"],
    mood: ["冷光比热闹更接近答案。", "方向不必解释，秩序会替它显形。", "越安静，越能看清结构。"],
    philosophy: ["存在不是答案，是一次次被确认的方向。", "沉默不是空白，是结构尚未展开。", "审视之后，秩序仍在冷光里成立。"],
  },
  INTP: {
    motifs: ["悖论", "空白", "语言边界"],
    chinese: ["问题尚未闭合，空白仍有回声。", "语言停下的地方，悖论开始发亮。", "答案未必缺席，只是还没被定义。"],
    english: ["The question remains open; the blank still echoes.", "Where language stops, the paradox glows.", "The answer is not absent, only undefined."],
    mixed: ["问题尚未闭合，blank still echoes.", "语言到边界，paradox begins.", "答案未定义，not absent."],
    japanese: ["問いはまだ閉じていない。", "言葉の端で、逆説が光る。", "答えは不在じゃなく、未定義なだけ。"],
    old: ["问未成局，空白有声。", "言尽处，悖论生光。", "无答非空，未名而已。"],
    mood: ["有些空白，不是缺口，是入口。", "问题不闭合，才有余地。", "说不清的地方，反而最清醒。"],
    philosophy: ["存在不是答案，是问题尚未闭合。", "不能谈论的地方，空白也在表达。", "审视之后，悖论仍保留光。"],
  },
  ENFP: {
    motifs: ["风", "远方", "火光"],
    chinese: ["风经过暗处，远方忽然有火光。", "答案还没落地，路已经先亮起来。", "自由不必说明，风会替它转身。"],
    english: ["The wind turns first; the horizon catches fire.", "The answer has not landed, but the road is lit.", "Freedom needs no explanation when the wind moves."],
    mixed: ["风先转身，horizon catches fire.", "答案未落地，the road is lit.", "自由不解释，wind knows."],
    japanese: ["風が先に向きを変える。", "答えより先に、道が明るくなる。", "自由は説明しない。"],
    old: ["风起远山，火色微明。", "路未成名，光已先至。", "远意不语，自有风来。"],
    mood: ["风一经过，远方就有了形状。", "不必急着落地，火光会先认路。", "答案还远，热意已经醒了。"],
    philosophy: ["存在不是答案，是风里仍有可去的远方。", "荒诞未必沉重，火光也能穿过冬天。", "审视之后，热爱仍向远处生长。"],
  },
  ENTP: {
    motifs: ["反问", "裂缝", "锋利灵感"],
    chinese: ["裂缝不是破绽，是光换了入口。", "答案太整齐时，反问会先醒。", "锋利不必出鞘，也能让沉默改道。"],
    english: ["A crack is not a flaw; it is another entrance for light.", "When answers get too neat, the question wakes first.", "A blade can stay sheathed and still redirect silence."],
    mixed: ["裂缝不是破绽，light finds another way.", "答案太整齐，question wakes first.", "锋利不出鞘，silence changes route."],
    japanese: ["ひびは欠点じゃなく、光の入口。", "答えが整いすぎると、問いが目を覚ます。", "刃は抜かなくても、沈黙を変える。"],
    old: ["裂隙生光，问比答醒。", "锋未出鞘，风已改道。", "局中有戏，言外有锋。"],
    mood: ["反问比答案更早醒来。", "裂缝里有光，也有新的路。", "有些锋利，藏着才更像谜。"],
    philosophy: ["存在不是答案，是反问尚未熄灭。", "审视之后，裂缝反而更像入口。", "不能说尽的地方，问题仍在发亮。"],
  },
  ENTJ: {
    motifs: ["山巅", "方向", "锋芒"],
    chinese: ["山巅不必喧哗，方向自会显形。", "锋芒收在暗处，也能划开长夜。", "答案不必讨好，只需抵达。"],
    english: ["The summit stays quiet; the direction becomes clear.", "A hidden edge can still open the night.", "The answer does not please; it arrives."],
    mixed: ["山巅不喧哗，direction becomes clear.", "锋芒藏暗处，night still opens.", "答案不讨好，it arrives."],
    japanese: ["頂は静かに、方角を示す。", "隠した刃でも、夜は開く。", "答えは媚びずに、ただ届く。"],
    old: ["山巅无声，锋芒自明。", "长夜可破，方向不移。", "不问众声，只向高处。"],
    mood: ["方向比掌声更可靠。", "锋芒不外露，也能划开夜色。", "抵达之前，不必解释。"],
    philosophy: ["存在不是答案，是方向被一次次推进。", "审视之后，锋芒仍选择抵达。", "自由不是散漫，是有能力走向高处。"],
  },
  ENFJ: {
    motifs: ["光", "回声", "理想"],
    chinese: ["光不必很响，也能把回声带远。", "理想藏在温柔里，仍有牵引。", "夜色很深，仍有人替黎明留灯。"],
    english: ["Light need not be loud to carry an echo.", "An ideal can stay gentle and still pull the tide.", "Even deep night keeps a lamp for morning."],
    mixed: ["光不必很响，echo travels far.", "理想藏在温柔里，still pulling the tide.", "夜色很深，morning keeps a lamp."],
    japanese: ["光は静かでも、遠くまで届く。", "理想はやさしさの中で揺れない。", "深い夜にも、朝の灯がある。"],
    old: ["微光引路，回声向远。", "理想藏灯，夜亦可渡。", "温柔不弱，照见来处。"],
    mood: ["微光也能牵引很远的路。", "理想不必高声，温柔也有方向。", "回声还在，夜就不算太深。"],
    philosophy: ["存在不是答案，是仍愿替光保留方向。", "审视之后，理想仍有回声。", "不能说尽的地方，温柔仍能抵达。"],
  },
  ISFP: {
    motifs: ["色彩", "雨", "花影"],
    chinese: ["雨停以后，花影把颜色留给沉默。", "光落下时，答案有了很轻的颜色。", "不必说明，晚风已经替花开过。"],
    english: ["After rain, color stays quietly in the petals.", "When light falls, the answer takes on a softer shade.", "No need to explain; the wind has already bloomed."],
    mixed: ["雨停以后，color stays quiet.", "光落下时，answer takes a softer shade.", "花影不解释，wind already knows."],
    japanese: ["雨のあと、色だけが静かに残る。", "光が落ちると、答えは少し淡くなる。", "花影は説明しない。"],
    old: ["雨过花影，色入无声。", "光落成色，风不多言。", "花开半隐，月照微痕。"],
    mood: ["光落下时，沉默也有颜色。", "雨后的花影，比答案更轻。", "不解释的美，反而更接近真实。"],
    philosophy: ["存在不是答案，是光落下时的颜色。", "审视之后，花影仍愿安静开放。", "不能说尽的地方，色彩会替它留下。"],
  },
  ISTP: {
    motifs: ["金属", "夜路", "刃"],
    chinese: ["夜路很冷，刃口仍然清醒。", "金属不解释，只在暗处反光。", "沉默收紧，方向就变得锋利。"],
    english: ["The night road is cold; the edge stays awake.", "Metal does not explain; it reflects in the dark.", "Silence tightens, and direction turns sharp."],
    mixed: ["夜路很冷，the edge stays awake.", "金属不解释，darkness reflects.", "沉默收紧，direction turns sharp."],
    japanese: ["夜道は冷たく、刃だけが目を覚ます。", "金属は説明せず、暗闇で光る。", "沈黙が締まると、方角は鋭くなる。"],
    old: ["夜路冷，刃未眠。", "金石无言，暗里生光。", "风紧无声，锋自成路。"],
    mood: ["夜路越冷，判断越清楚。", "金属不解释，反光就够了。", "有些沉默，像收好的刃。"],
    philosophy: ["存在不是答案，是夜路上仍清醒的刃。", "审视之后，行动比解释更安静。", "不能说尽的地方，金属仍有冷光。"],
  },
  ISFJ: {
    motifs: ["灯", "旧信", "窗"],
    chinese: ["窗边的灯很旧，仍替夜色留暖。", "旧信不再展开，也有未散的余温。", "安静不是退后，是把光守住。"],
    english: ["The old lamp by the window still keeps night warm.", "An unopened letter can still hold its warmth.", "Quiet is not retreat; it is keeping the light."],
    mixed: ["窗边旧灯，night stays warm.", "旧信不展开，warmth remains.", "安静不是退后，light is kept."],
    japanese: ["窓辺の古い灯が、夜を温める。", "開かない手紙にも、まだ温度がある。", "静けさは退くことじゃない。"],
    old: ["旧灯守夜，窗影微温。", "信未展开，余温尚在。", "不言守光，夜亦安然。"],
    mood: ["旧灯还亮着，夜就不算太冷。", "温柔不必外露，守住就好。", "有些安静，是把光留给后来。"],
    philosophy: ["存在不是答案，是旧灯仍替夜色留暖。", "审视之后，守护也能很安静。", "不能说尽的地方，余温会留下。"],
  },
  ISTJ: {
    motifs: ["钟", "旧书", "秩序"],
    chinese: ["旧书合上，秩序仍在页边发光。", "钟声不急，时间自会归档。", "稳定不是无趣，是把风雨收进章法。"],
    english: ["The old book closes; order still glows at the margin.", "The clock does not hurry; time files itself away.", "Stability is not dull; it gives weather a form."],
    mixed: ["旧书合上，order still glows.", "钟声不急，time files itself away.", "稳定不无趣，weather gets a form."],
    japanese: ["古い本を閉じても、秩序は余白に残る。", "時計は急がず、時間をしまっていく。", "安定は退屈じゃない。"],
    old: ["旧书合卷，钟声归序。", "风雨入章，灯火如常。", "不急不乱，自有分寸。"],
    mood: ["钟声不急，答案也会归位。", "旧书合上后，余白仍有秩序。", "风雨不乱，才更显分寸。"],
    philosophy: ["存在不是答案，是时间被安静归档。", "审视之后，秩序仍有余温。", "不能说尽的地方，旧书替它留页。"],
  },
  ESFP: {
    motifs: ["霓虹", "夏夜", "心跳"],
    chinese: ["霓虹落进夏夜，心跳替答案发光。", "热闹不必解释，光会自己靠近。", "夜色未深，明亮已经先到。"],
    english: ["Neon falls into summer night; the pulse lights the answer.", "Joy needs no explanation; light comes closer.", "Before night gets deep, brightness arrives first."],
    mixed: ["霓虹落进夏夜，pulse lights the answer.", "热闹不解释，light comes closer.", "夜色未深，brightness arrives first."],
    japanese: ["ネオンが夏の夜に落ちる。", "楽しさは説明しない、光が近づく。", "夜が深くなる前に、明るさが来る。"],
    old: ["霓虹入夜，心声微亮。", "夏色未央，光已近身。", "明处有梦，风也轻盈。"],
    mood: ["霓虹一亮，沉默也有心跳。", "夏夜不解释，明亮会靠近。", "轻盈不是浅，是光还没熄。"],
    philosophy: ["存在不是答案，是夏夜里仍跳动的光。", "审视之后，明亮也可以成立。", "荒诞未必灰暗，霓虹也能作证。"],
  },
  ESTP: {
    motifs: ["旷野", "速度", "风口"],
    chinese: ["风口一开，旷野自有方向。", "速度不替谁解释，抵达就是答案。", "当下很亮，足够穿过犹豫。"],
    english: ["When the wind opens, the field finds direction.", "Speed explains nothing; arrival is enough.", "The present is bright enough to cut through doubt."],
    mixed: ["风口一开，the field finds direction.", "速度不解释，arrival is enough.", "当下很亮，doubt gets cut through."],
    japanese: ["風口が開けば、野原に方角が生まれる。", "速さは説明しない、到着すればいい。", "今が明るければ、迷いは抜けられる。"],
    old: ["风口开阔，旷野成路。", "疾行无言，抵达即答。", "当下有光，犹疑可破。"],
    mood: ["风口打开时，答案就不用站太久。", "当下够亮，犹豫自然让路。", "速度不解释，抵达会说话。"],
    philosophy: ["存在不是答案，是风口打开后的行动。", "审视之后，当下仍然发亮。", "自由不是遥远，是此刻已经动身。"],
  },
  ESFJ: {
    motifs: ["暖灯", "花束", "人群边缘"],
    chinese: ["暖灯在，人群边缘也有归处。", "花束不必盛大，真诚已经足够明亮。", "热闹之外，仍有一盏灯等着。"],
    english: ["With a warm lamp, even the edge of the crowd feels like home.", "A bouquet need not be grand when sincerity is bright.", "Beyond the noise, one lamp still waits."],
    mixed: ["暖灯还在，the crowd has an edge of home.", "花束不盛大，sincerity is bright enough.", "热闹之外，one lamp waits."],
    japanese: ["暖かい灯があれば、人混みの端にも帰る場所がある。", "花束は大きくなくても、誠実さは明るい。", "賑わいの外で、一つの灯が待つ。"],
    old: ["暖灯照席，花意微明。", "人声之外，仍有归处。", "真意不喧，照见来人。"],
    mood: ["人群边缘，也可以有一盏暖灯。", "花束不必盛大，真诚会亮。", "热闹之外，仍有人把光留着。"],
    philosophy: ["存在不是答案，是暖灯仍愿等在边缘。", "审视之后，真诚也有光。", "不能说尽的地方，花束会替它轻轻留下。"],
  },
  ESTJ: {
    motifs: ["路线", "规则", "界线"],
    chinese: ["路线清楚时，风雨也会让路。", "规则不是枷锁，是把混乱折成形状。", "界线立住，答案才有位置。"],
    english: ["When the route is clear, even weather makes room.", "Rules are not chains; they fold chaos into shape.", "Once the line stands, the answer has a place."],
    mixed: ["路线清楚，weather makes room.", "规则不是枷锁，chaos gets a shape.", "界线立住，answer has a place."],
    japanese: ["道筋が見えれば、雨風も道を空ける。", "規則は鎖じゃなく、混乱に形を与える。", "境界が立つと、答えに場所ができる。"],
    old: ["路线分明，风雨让道。", "规矩成形，乱意可收。", "界定之后，答案有位。"],
    mood: ["界线清楚时，心事也会归位。", "规则不冷，它只是替混乱收边。", "路线在，风雨就不算失控。"],
    philosophy: ["存在不是答案，是界线立住后的选择。", "审视之后，规则也能保存自由。", "混乱被折成形状时，答案才有位置。"],
  },
};

mbtiStyleProfiles.未知 = {
  motifs: ["留白", "自然", "真实"],
  chinese: ["有些留白，不必急着填满。", "风经过时，答案自然会轻一点。", "真实不喧哗，也会发光。"],
  english: ["Some blanks do not need filling.", "When the wind passes, the answer grows lighter.", "Truth can glow without noise."],
  mixed: ["留白不必填满，truth stays quiet.", "风经过时，answer grows lighter.", "真实不喧哗，still glowing."],
  japanese: ["余白は、急いで埋めなくていい。", "風が通ると、答えは少し軽くなる。", "本当のものは静かに光る。"],
  old: ["留白未满，风声自明。", "不言真实，亦有微光。", "自然成句，夜色成章。"],
  mood: ["留白还在，答案就不必太满。", "风经过，很多事会自然变轻。", "真实不说话，也会发光。"],
  philosophy: ["存在不是答案，是留白仍然成立。", "审视之后，真实也可以安静。", "不能说尽的地方，自然会留下。"],
};

const wordBank = {
  中文: ["温柔不是没有棱角，只是不把锋利给所有人看。", "不讨好热闹，也不辜负安静。", "把情绪交给夜晚，把清醒留给明天。", "月亮不属于夜晚。", "深渊不一定黑，也可能藏着星光。", "未经审视的热爱，也值得重新选择。", "存在不是答案，是每天做出的选择。", "有些沉默不是空白，是语言抵达不了的地方。"],
  English: ["Soft edges, quiet boundaries.", "Not every silence is empty.", "Some moons refuse to belong.", "The answer stays unnamed.", "A little distant, never absent.", "Meaning arrives without announcement."],
  中英混合: ["温柔有棱角，silence has meaning.", "月亮不归夜晚，answer unnamed.", "不讨好热闹，still softly awake.", "深渊未必黑，stars remain quiet."],
  日文氛围: ["沈黙にも、まだ余白がある。", "月は夜だけのものじゃない。", "やさしさの奥に、少しだけ棘。", "答えはまだ、名前を持たない。"],
  古风中文: ["不问归期，且听风起。", "心有明月，不染尘声。", "山河不语，夜色自明。", "一半清醒，一半月光。", "风过无痕，灯下有谜。"],
};

const tonePhrases = {
  含蓄留白: ["不说尽", "半明半暗", "让答案停在雾里"],
  温柔清醒: ["温柔有棱角", "清醒有余温", "把锋利收进袖口"],
  高冷神秘: ["深渊与星光", "沉默有回声", "靠近也隔着月色"],
  浪漫自由: ["月亮不归夜晚", "风经过时不解释", "远方留着空白"],
  理性锋利: ["边界清楚", "判断安静", "锋利不外露"],
  古典诗意: ["山河、明月、故梦", "不问归期", "心事落在风里"],
  可爱松弛: ["慢慢发光", "不赶路也会抵达", "把烦恼放进云里"],
};

const form = document.querySelector("#signatureForm");
const results = document.querySelector("#results");
const template = document.querySelector("#resultTemplate");
const fillDemo = document.querySelector("#fillDemo");

function pick(items, index = 0) {
  return items[index % items.length];
}

function tokenizeKeywords(value) {
  return value.split(/[，,、\s]+/).map((item) => item.trim()).filter(Boolean);
}

function choosePhilosophy(keywords, tone, index) {
  const candidates = philosophyLibrary.filter((item) => {
    const haystack = [...item.themes, tone].join(" ");
    return keywords.some((keyword) => haystack.includes(keyword));
  });
  return pick(candidates.length ? candidates : philosophyLibrary, index);
}

function getMbtiStyle(mbti) {
  return mbtiStyleProfiles[mbti] || mbtiStyleProfiles.未知;
}

function cleanHiddenName(name) {
  return name.replace(/\s+/g, "");
}

function isLatinName(name) {
  return /^[a-z]+$/i.test(cleanHiddenName(name));
}

function isChineseSignatureLanguage(language) {
  return ["中文", "古风中文", "中英混合"].includes(language);
}

function isAcrosticMethod(method) {
  return String(method).includes("藏头");
}

function shouldUseChineseInitialAcrostic(name, method, language) {
  return isLatinName(name) && isChineseSignatureLanguage(language) && isAcrosticMethod(method);
}

function chineseLineForInitial(char, mbtiStyle, index) {
  const initial = char.toUpperCase();
  const motif = pick(mbtiStyle.motifs, index);
  const firstCharMap = {
    A: "安", B: "不", C: "藏", D: "灯", E: "而", F: "风", G: "光", H: "花", I: "一", J: "旧", K: "空", L: "林", M: "明", N: "南", O: "偶", P: "偏", Q: "清", R: "若", S: "深", T: "停", U: "雾", V: "微", W: "晚", X: "星", Y: "月", Z: "在",
  };
  const starters = {
    A: ["安静处仍有回声", `暗处也留着${motif}`],
    B: ["不必把答案说尽", `半醒之间藏着${motif}`],
    C: [`藏起${motif}，也藏起月光`, "春色未深，心事已远"],
    D: [`灯影落下，${motif}自明`, "等风经过，不问归处"],
    E: [`而${motif}自有重量`, "而月色仍旧偏冷"],
    F: ["风经过时不解释", `浮光停在${motif}旁`],
    G: [`光落下来，${motif}不作声`, "孤星不问人间"],
    H: [`花影不语，${motif}自明`, `海雾深处，${motif}有微光`],
    I: [`一念未明，${motif}正深`, "一场静默，抵过千言"],
    J: [`旧梦不醒，${motif}很轻`, "镜中月色，仍有余温"],
    K: [`空山无答，${motif}有声`, "看见月光，也看见沉默"],
    L: [`林深处，${motif}仍未命名`, `落月无声，照见${motif}`],
    M: [`明月不问${motif}`, "梦醒时分，风仍很轻"],
    N: [`南风不语，${motif}成谜`, "念起无声，月色微凉"],
    O: [`偶有${motif}，落在暗处`, "偶然沉默，也像回答"],
    P: [`偏有${motif}，不肯落俗`, "旁人不解，风自分明"],
    Q: [`清醒藏在${motif}之后`, "青山不语，远意自来"],
    R: [`若有回声，必在${motif}深处`, "人间很静，暗处有光"],
    S: [`深处未必黑，${motif}仍亮`, "山色不言，心事自远"],
    T: [`停在${motif}里，也算自由`, "天光未亮，答案未醒"],
    U: [`雾里有${motif}，未必需名`, "无声处，自有回响"],
    V: [`微光不语，仍照${motif}`, "微雨过后，夜色更深"],
    W: [`晚风无意，却懂${motif}`, "雾散之前，不必说明"],
    X: [`星河低垂，${motif}不醒`, "心事无声，月色有痕"],
    Y: [`月亮不属于${motif}`, "远山不语，答案未明"],
    Z: [`在${motif}里，答案不必说尽`, "坠入月光，也坠入沉默"],
  };
  return pick(starters[initial] || [`${firstCharMap[initial] || initial}藏在未说尽的地方`], index);
}

function buildChineseInitialAcrostic(chars, index, mbtiStyle) {
  return chars.map((char, charIndex) => chineseLineForInitial(char, mbtiStyle, index + charIndex)).join("；");
}

function buildHiddenLine(name, method, tone, index, language, mbtiStyle) {
  if (!name) return null;
  const chars = [...cleanHiddenName(name)];
  const latin = isLatinName(name);

  if (shouldUseChineseInitialAcrostic(name, method, language)) {
    return buildChineseInitialAcrostic(chars, index, mbtiStyle);
  }

  if (isAcrosticMethod(method) && !latin) {
    const suffixes = mbtiStyle.chinese.map((line) => line.replace(/^[^，。；]+[，。；]?/, "")).filter(Boolean);
    return chars.map((char, charIndex) => `${char}${pick(suffixes.length ? suffixes : tonePhrases[tone] || tonePhrases.含蓄留白, index + charIndex)}`).join("，");
  }

  if (method === "首字母" || latin) {
    const words = {
      A: "Always", B: "Bravely", C: "Chasing", D: "Distant", E: "Echoes", F: "Finding", G: "Gentle", H: "Horizons",
      I: "Inside", J: "Journey", K: "Keeping", L: "Light", M: "Moonlit", N: "Nights", O: "Open", P: "Paths",
      Q: "Quiet", R: "Rising", S: "Softly", T: "Toward", U: "Unknown", V: "Velvet", W: "Wild", X: "Xanadu",
      Y: "Young", Z: "Zephyrs",
    };
    return chars.map((char) => words[char.toUpperCase()] || char).join(" · ") + ".";
  }

  if (method === "谐音") return `把“${name}”藏进${pick(mbtiStyle.motifs, index)}里，只让懂的人听见。`;
  return `以${pick(mbtiStyle.motifs, index)}暗示“${name}”。`;
}

function buildHiddenExplanation(data, text) {
  if (!data.hiddenName) return "签名解释：没有设置隐藏名字。";
  const chars = [...cleanHiddenName(data.hiddenName)];
  const latin = isLatinName(data.hiddenName);

  if (shouldUseChineseInitialAcrostic(data.hiddenName, data.hideMethod, data.language)) {
    const firstChars = text.split("；").map((part) => part.trim().charAt(0)).filter(Boolean);
    return `签名解释：这是中文藏头。每个分句开头汉字为${firstChars.map((char) => `「${char}」`).join("、")}，它们的拼音首字母依次是 ${chars.map((char) => char.toUpperCase()).join("-")}，对应隐藏名字「${data.hiddenName}」。`;
  }

  if (isAcrosticMethod(data.hideMethod) && !latin) {
    return `签名解释：每个分句开头依次是${chars.map((char) => `「${char}」`).join("、")}，连起来就是「${data.hiddenName}」。`;
  }

  if (data.hideMethod === "首字母" || latin) {
    return `签名解释：英文词首字母依次是 ${chars.map((char) => char.toUpperCase()).join("-")}，对应隐藏名字「${data.hiddenName}」。`;
  }

  if (data.hideMethod === "谐音") {
    return `签名解释：没有直接写出「${data.hiddenName}」，而是把名字伪装进意象线索。`;
  }

  return `签名解释：用「${text}」里的气质和意象暗示「${data.hiddenName}」，适合更隐晦的隐藏方式。`;
}

function polishSignature(text) {
  return text
    .replace(/我把/g, "把")
    .replace(/我在/g, "在")
    .replace(/我不/g, "不")
    .replace(/我也/g, "也")
    .replace(/我/g, "")
    .replace(/，，/g, "，")
    .replace(/^，/, "")
    .trim();
}

function linesForLanguage(style, language) {
  if (language === "English") return style.english;
  if (language === "中英混合") return style.mixed;
  if (language === "日文氛围") return style.japanese;
  if (language === "古风中文") return style.old;
  return style.chinese;
}

function appendChineseTone(line, tonePhrase) {
  return `${line.replace(/[。！？.!?]$/, "")}，${tonePhrase}。`;
}

function composePhilosophySignature({ language, philosophy, mbtiStyle, index, quoteDirectly }) {
  const line = pick(mbtiStyle.philosophy, index);
  if (quoteDirectly) {
    const separator = language === "English" ? " — " : "｜";
    return polishSignature(`${line}${separator}${philosophy.quote}`);
  }
  if (language === "English") return pick(mbtiStyle.english, index);
  if (language === "中英混合") return pick(mbtiStyle.mixed, index);
  if (language === "日文氛围") return pick(mbtiStyle.japanese, index);
  if (language === "古风中文") return pick(mbtiStyle.old, index);
  return polishSignature(line);
}

function composeSignature({ language, purpose, tone, mbti, keyword, philosophy, hiddenName, hideMethod, philosophyLevel, index, base }) {
  const mbtiStyle = getMbtiStyle(mbti);
  const tonePhrase = pick(tonePhrases[tone] || tonePhrases.含蓄留白, index);

  if (philosophyLevel === "明显引用") {
    return composePhilosophySignature({ language, philosophy, mbtiStyle, index, quoteDirectly: true });
  }

  if (philosophyLevel === "改写成个签") {
    return composePhilosophySignature({ language, philosophy, mbtiStyle, index, quoteDirectly: false });
  }

  if (purpose === "隐藏一个名字" && hiddenName) {
    return polishSignature(buildHiddenLine(hiddenName, hideMethod, tone, index, language, mbtiStyle) || base);
  }

  if (purpose === "表达当下心情") {
    const moodLine = pick(mbtiStyle.mood, index);
    if (language === "English") return pick(mbtiStyle.english, index);
    if (language === "中英混合") return pick(mbtiStyle.mixed, index);
    if (language === "日文氛围") return pick(mbtiStyle.japanese, index);
    if (language === "古风中文") return pick(mbtiStyle.old, index);
    return polishSignature(moodLine);
  }

  if (purpose === "展示个人性格") {
    const line = pick(linesForLanguage(mbtiStyle, language), index);
    if (language === "English") return `${line} ${pick(["Quietly.", "Unannounced.", "With distance."], index)}`;
    return polishSignature(appendChineseTone(line, tonePhrase));
  }

  const line = pick(linesForLanguage(mbtiStyle, language), index);
  if (language === "English") return line;
  return polishSignature(`${line} ${keyword ? `${keyword}也留一点余地。` : ""}`);
}

function adaptSignature(base, data, philosophy, index) {
  const keyword = pick(data.keywords.length ? data.keywords : ["月亮", "沉默", "答案"], index);
  return composeSignature({
    language: data.language,
    purpose: data.purpose,
    tone: data.tone,
    mbti: data.mbti,
    keyword,
    philosophy,
    hiddenName: data.hiddenName,
    hideMethod: data.hideMethod,
    philosophyLevel: data.philosophyLevel,
    index,
    base,
  });
}

function createResultCard(item) {
  const node = template.content.cloneNode(true);
  const card = node.querySelector(".result-card");
  const tags = node.querySelector(".tags");
  const signature = node.querySelector(".signature");
  const meta = node.querySelector(".meta");
  const copyButton = node.querySelector(".copy-button");

  item.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tags.append(span);
  });

  signature.textContent = item.text;
  meta.innerHTML = "";
  item.meta.forEach((line) => {
    const span = document.createElement("span");
    span.className = line.startsWith("签名解释") ? "meta-line explanation-line" : "meta-line";
    span.textContent = line;
    meta.append(span);
  });

  copyButton.addEventListener("click", async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(item.text);
      } else {
        throw new Error("Clipboard API unavailable");
      }
      copyButton.textContent = "已复制";
    } catch (error) {
      copyButton.textContent = "手动复制";
      window.prompt("复制这条签名：", item.text);
    }
    setTimeout(() => { copyButton.textContent = "复制"; }, 1300);
  });

  return card;
}

function generateSignatures(data) {
  const bases = wordBank[data.language] || wordBank.中文;
  return Array.from({ length: 6 }, (_, index) => {
    const philosophy = choosePhilosophy(data.keywords, data.tone, index);
    const base = pick(bases, index);
    const mbtiStyle = getMbtiStyle(data.mbti);
    const text = adaptSignature(base, data, philosophy, index);
    const hiddenMeta = data.hiddenName ? `隐藏说明：${data.hideMethod}隐藏“${data.hiddenName}”` : "隐藏说明：未设置隐藏名字";
    const hiddenExplanation = buildHiddenExplanation(data, text);
    const philosophyMeta = data.philosophyLevel === "不需要" ? "哲学灵感：未启用" : `哲学灵感：${philosophy.author}「${philosophy.quote}」`;
    const mbtiInfluence = `MBTI 影响：本次使用了「${mbtiStyle.motifs.join(" / ")}」这类 ${data.mbti} 意象。`;

    return {
      text,
      tags: [`签名：${data.language}`, data.mbti, data.tone],
      meta: [
        `生成方向：${data.purpose}`,
        `MBTI 气质：${(mbtiProfiles[data.mbti] || mbtiProfiles.未知).join(" / ")}`,
        mbtiInfluence,
        philosophyMeta,
        data.philosophyLevel === "不需要" ? "出处：—" : `出处：${philosophy.source}`,
        hiddenMeta,
        hiddenExplanation,
      ],
    };
  });
}

function renderEmptyState() {
  results.innerHTML = `<div class="empty-state">填写问题后，生成的签名会出现在这里。</div>`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {
    language: formData.get("language"),
    mbti: formData.get("mbti"),
    purpose: formData.get("purpose"),
    tone: formData.get("tone"),
    hiddenName: formData.get("hiddenName").trim(),
    hideMethod: formData.get("hideMethod"),
    philosophyLevel: formData.get("philosophyLevel"),
    keywords: tokenizeKeywords(formData.get("keywords")),
  };

  const signatures = generateSignatures(data);
  results.innerHTML = "";
  signatures.forEach((item) => results.append(createResultCard(item)));
  document.querySelector(".result-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});

form.addEventListener("reset", () => {
  setTimeout(renderEmptyState, 0);
});

fillDemo.addEventListener("click", () => {
  form.language.value = "中文";
  form.mbti.value = "INFJ";
  form.purpose.value = "隐藏一个名字";
  form.tone.value = "含蓄留白";
  form.hiddenName.value = "林月";
  form.hideMethod.value = "藏头";
  form.philosophyLevel.value = "轻微参考";
  form.keywords.value = "月亮, 自知, 孤独";
  form.requestSubmit();
});

renderEmptyState();


