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

const wordBank = {
  中文: [
    "温柔不是没有棱角，只是不把锋利给所有人看。",
    "不讨好热闹，也不辜负安静。",
    "把情绪交给夜晚，把清醒留给明天。",
    "月亮不属于夜晚。",
    "深渊不一定黑，也可能藏着星光。",
    "未经审视的热爱，也值得重新选择。",
    "存在不是答案，是每天做出的选择。",
    "有些沉默不是空白，是语言抵达不了的地方。",
  ],
  English: [
    "Soft edges, quiet boundaries.",
    "Not every silence is empty.",
    "Some moons refuse to belong.",
    "The answer stays unnamed.",
    "A little distant, never absent.",
    "Meaning arrives without announcement.",
  ],
  中英混合: [
    "温柔有棱角，silence has meaning.",
    "月亮不归夜晚，answer unnamed.",
    "不讨好热闹，still softly awake.",
    "深渊未必黑，stars remain quiet.",
  ],
  日文氛围: [
    "沈黙にも、まだ余白がある。",
    "月は夜だけのものじゃない。",
    "やさしさの奥に、少しだけ棘。",
    "答えはまだ、名前を持たない。",
  ],
  古风中文: [
    "不问归期，且听风起。",
    "心有明月，不染尘声。",
    "山河不语，夜色自明。",
    "一半清醒，一半月光。",
    "风过无痕，灯下有谜。",
  ],
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

function cleanHiddenName(name) {
  return name.replace(/\s+/g, "");
}

function isLatinName(name) {
  return /^[a-z]+$/i.test(cleanHiddenName(name));
}

function isChineseSignatureLanguage(language) {
  return ["中文", "古风中文", "中英混合"].includes(language);
}

function buildChineseInitialAcrostic(chars, index) {
  const initialLines = {
    A: ["安静处仍有回声", "暗处也留着一点光"],
    B: ["不必把答案说尽", "半醒之间风声正好"],
    C: ["春色未深，心事已远", "藏起锋芒，也藏起月光"],
    D: ["灯影落下，夜色自明", "等风经过，不问归处"],
    E: ["而沉默自有重量", "而月色仍旧偏冷"],
    F: ["风经过时不解释", "浮光停在无人处"],
    G: ["孤星不问人间", "光落下来，也不作声"],
    H: ["海雾深处，有星微亮", "花影不语，月色自明"],
    I: ["一念未明，雾色正深", "一场静默，抵过千言"],
    J: ["旧梦不醒，风声很轻", "镜中月色，仍有余温"],
    K: ["空山无答，夜色有声", "看见月光，也看见沉默"],
    L: ["林深处，答案仍未命名", "落月无声，照见旧梦"],
    M: ["明月不问归期", "梦醒时分，风仍很轻"],
    N: ["南风不语，旧事成谜", "念起无声，月色微凉"],
    O: ["偶有星光，落在暗处", "偶然沉默，也像回答"],
    P: ["偏有月色，不肯落俗", "旁人不解，风自分明"],
    Q: ["清醒藏在温柔之后", "青山不语，远意自来"],
    R: ["人间很静，暗处有光", "若有回声，必在深处"],
    S: ["深渊未必黑", "山色不言，心事自远"],
    T: ["天光未亮，答案未醒", "停在雾里，也算自由"],
    U: ["雾里有光，未必需名", "无声处，自有回响"],
    V: ["微光不语，仍照暗处", "微雨过后，夜色更深"],
    W: ["雾散之前，不必说明", "晚风无意，却懂沉默"],
    X: ["星河低垂，旧梦不醒", "心事无声，月色有痕"],
    Y: ["月亮不属于夜晚", "远山不语，答案未明"],
    Z: ["在雾色里，答案不必说尽", "坠入月光，也坠入沉默"],
  };

  return chars
    .map((char, charIndex) => pick(initialLines[char.toUpperCase()] || [`${char}藏在未说尽的地方`], index + charIndex))
    .join("；");
}

function buildHiddenLine(name, method, tone, index, language) {
  if (!name) return null;
  const chars = [...cleanHiddenName(name)];
  const latin = isLatinName(name);

  if (method === "藏头" && latin && isChineseSignatureLanguage(language)) {
    return buildChineseInitialAcrostic(chars, index);
  }

  if (method === "藏头" && !latin) {
    const endings = ["把月光收进口袋", "在沉默里慢慢发亮", "替风写下答案", "不必被所有人读懂"];
    return chars.map((char, charIndex) => `${char}${pick(endings, index + charIndex)}`).join("，");
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

  if (method === "谐音") return `把“${name}”藏进风声里，只让懂的人听见。`;
  return `以${pick(tonePhrases[tone] || tonePhrases.含蓄留白, index)}暗示“${name}”。`;
}

function buildHiddenExplanation(data, text) {
  if (!data.hiddenName) return "签名解释：没有设置隐藏名字。";
  const chars = [...cleanHiddenName(data.hiddenName)];
  const latin = isLatinName(data.hiddenName);

  if (data.hideMethod === "藏头" && latin && isChineseSignatureLanguage(data.language)) {
    const firstChars = text.split("；").map((part) => part.trim().charAt(0)).filter(Boolean);
    return `签名解释：这是中文藏头。每个分句开头汉字为${firstChars.map((char) => `「${char}」`).join("、")}，它们的拼音首字母依次是 ${chars.map((char) => char.toUpperCase()).join("-")}，对应隐藏名字「${data.hiddenName}」。`;
  }

  if (data.hideMethod === "藏头" && !latin) {
    return `签名解释：每个分句开头依次是${chars.map((char) => `「${char}」`).join("、")}，连起来就是「${data.hiddenName}」。`;
  }

  if (data.hideMethod === "首字母" || latin) {
    return `签名解释：英文词首字母依次是 ${chars.map((char) => char.toUpperCase()).join("-")}，对应隐藏名字「${data.hiddenName}」。`;
  }

  if (data.hideMethod === "谐音") {
    return `签名解释：没有直接写出「${data.hiddenName}」，而是把名字伪装成“风声里能听见”的谐音线索。`;
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

function adaptSignature(base, data, philosophy, index) {
  const mbtiTraits = mbtiProfiles[data.mbti] || mbtiProfiles.未知;
  const trait = pick(mbtiTraits, index);
  const tonePhrase = pick(tonePhrases[data.tone] || tonePhrases.含蓄留白, index);
  const keyword = pick(data.keywords.length ? data.keywords : ["月亮", "沉默", "答案"], index);

  if (data.philosophyLevel === "明显引用") {
    return polishSignature(`${base} ${data.language === "English" ? "—" : "｜"} ${philosophy.quote}`);
  }

  if (data.philosophyLevel === "改写成个签") {
    if (data.language === "English") return `A quiet choice, with ${keyword} left unnamed.`;
    if (data.language === "中英混合") return `${keyword}不必命名，meaning stays quiet.`;
    return polishSignature(`${keyword}不必命名，答案也不必说尽。`);
  }

  if (data.purpose === "隐藏一个名字" && data.hiddenName) {
    return polishSignature(buildHiddenLine(data.hiddenName, data.hideMethod, data.tone, index, data.language) || base);
  }

  if (data.purpose === "展示个人性格") {
    if (data.language === "English") return `${base} ${trait}, quietly.`;
    return polishSignature(`${base} ${trait}，${tonePhrase}。`);
  }

  if (data.purpose === "表达当下心情") {
    if (data.language === "English") return pick(["The weather inside remains unnamed.", "A quiet tide, not yet explained.", "Something soft survives the dark."], index);
    return pick(["情绪交给夜晚，清醒留给明天。", "有些雾，不必急着散。", "今晚的月色，只适合沉默。"], index);
  }

  return polishSignature(base);
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
    const text = adaptSignature(base, data, philosophy, index);
    const hiddenMeta = data.hiddenName ? `隐藏说明：${data.hideMethod}隐藏“${data.hiddenName}”` : "隐藏说明：未设置隐藏名字";
    const hiddenExplanation = buildHiddenExplanation(data, text);
    const philosophyMeta = data.philosophyLevel === "不需要" ? "哲学灵感：未启用" : `哲学灵感：${philosophy.author}「${philosophy.quote}」`;

    return {
      text,
      tags: [`签名：${data.language}`, data.mbti, data.tone],
      meta: [
        `生成方向：${data.purpose}`,
        `MBTI 气质：${(mbtiProfiles[data.mbti] || mbtiProfiles.未知).join(" / ")}`,
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










