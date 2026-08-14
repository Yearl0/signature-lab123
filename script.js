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
  INFP: ["浪漫", "敏感", "理想主义", "想象力"],
  INFJ: ["深度", "共情", "神秘", "温柔边界"],
  INTJ: ["冷静", "理性", "目标感", "独立"],
  INTP: ["思辨", "抽离", "好奇", "清醒"],
  ENFP: ["热烈", "自由", "明亮", "冒险"],
  ENTJ: ["锋利", "野心", "掌控感", "笃定"],
  ISFP: ["审美", "感受", "松弛", "当下"],
  ISTP: ["独立", "冷感", "行动派", "克制"],
  未知: ["个人气质", "自然", "留白", "真实"],
};

const wordBank = {
  中文: ["我不急着被理解，风会替我解释。", "温柔不是退让，是我选择不锋利。", "把答案留给时间，把光留给自己。", "我在沉默里生长，也在清醒里自由。"],
  English: ["Not distant, just selective.", "Quietly becoming what I once needed.", "Soft heart, sharp boundaries.", "I bloom where silence understands me."],
  中英混合: ["半分清醒，half romantic.", "Born quiet, living loud.", "人间很吵，我自成宇宙。", "Stay soft, 但别失去边界。"],
  日文氛围: ["月が静かな夜、わたしは少し自由になる。", "やさしさを残して、遠くへ行く。", "風の中で、まだ自分を探している。", "静けさの奥に、光を隠している。"],
  古风中文: ["不问归期，且听风起。", "心有明月，不染尘声。", "山河不语，我自成章。", "一身清醒，半袖月光。"],
};

const tonePhrases = {
  温柔清醒: ["温柔有边界", "清醒不冷漠", "把光留给自己"],
  高冷神秘: ["不解释", "深渊与月", "靠近之前先懂沉默"],
  浪漫自由: ["风、月亮和远方", "热烈地逃向自己", "自由比答案重要"],
  理性锋利: ["边界清楚", "选择比讨好重要", "冷静地成为"],
  古典诗意: ["山河、明月、故梦", "不问归期", "心事落在风里"],
  可爱松弛: ["今天也慢慢发光", "不赶路也会抵达", "把烦恼放进云里"],
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

function buildHiddenLine(name, method, tone, index) {
  if (!name) return null;
  const chars = [...name.replace(/\s+/g, "")];
  const isEnglish = /^[a-z]+$/i.test(name);

  if (method === "藏头" && !isEnglish) {
    const endings = ["把月光收进口袋", "在沉默里慢慢发亮", "替风写下答案", "不必被所有人读懂"];
    return chars.map((char, charIndex) => `${char}${pick(endings, index + charIndex)}`).join("，");
  }

  if (method === "首字母" || isEnglish) {
    const words = { L: "Lost", U: "Under", N: "Never", A: "Always", M: "Moonlit", Y: "Young", E: "Echoes", R: "Rising" };
    return chars.map((char) => words[char.toUpperCase()] || `${char.toUpperCase()}-lit`).join(" · ");
  }

  if (method === "谐音") return `把“${name}”藏进风声里，只让懂的人听见。`;
  return `以${pick(tonePhrases[tone] || tonePhrases.温柔清醒, index)}暗示“${name}”。`;
}

function adaptSignature(base, data, philosophy, index) {
  const mbtiTraits = mbtiProfiles[data.mbti] || mbtiProfiles.未知;
  const trait = pick(mbtiTraits, index);
  const tonePhrase = pick(tonePhrases[data.tone] || tonePhrases.温柔清醒, index);
  const keyword = pick(data.keywords.length ? data.keywords : ["自己", "月亮", "自由"], index);

  if (data.philosophyLevel === "明显引用") {
    return `${base} ${data.language === "English" ? "—" : "｜"} ${philosophy.quote}`;
  }

  if (data.philosophyLevel === "改写成个签") {
    if (data.language === "English") return `Becoming myself, with ${keyword} as proof.`;
    if (data.language === "中英混合") return `我正在成为自己，with ${keyword} as proof.`;
    return `我把${keyword}写进日常，也把自己活成答案。`;
  }

  if (data.purpose === "隐藏一个名字" && data.hiddenName) {
    return buildHiddenLine(data.hiddenName, data.hideMethod, data.tone, index) || base;
  }

  if (data.purpose === "展示个人性格") {
    if (data.language === "English") return `${base} ${trait} by nature.`;
    return `${base} ${trait}，也${tonePhrase}。`;
  }

  return base;
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
  meta.innerHTML = item.meta.map((line) => `<span>${line}</span>`).join("");

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
    const philosophyMeta = data.philosophyLevel === "不需要" ? "哲学灵感：未启用" : `哲学灵感：${philosophy.author}「${philosophy.quote}」`;

    return {
      text,
      tags: [data.language, data.mbti, data.tone],
      meta: [
        `用途：${data.purpose}`,
        `MBTI 气质：${(mbtiProfiles[data.mbti] || mbtiProfiles.未知).join(" / ")}`,
        philosophyMeta,
        data.philosophyLevel === "不需要" ? "出处：—" : `出处：${philosophy.source}`,
        hiddenMeta,
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
  form.tone.value = "高冷神秘";
  form.hiddenName.value = "林月";
  form.hideMethod.value = "藏头";
  form.philosophyLevel.value = "轻微参考";
  form.keywords.value = "月亮, 自知, 孤独";
  form.requestSubmit();
});

renderEmptyState();

