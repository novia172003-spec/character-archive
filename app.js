const characters = [
  {
    id: "mem-00",
    name: "[ MEM-00 ]",
    initial: "M",
    category: "敘事系統",
    role: "長篇 AI RP 敘事記憶管理員",
    age: "外觀約 18 歲",
    height: "178 cm",
    occupation: "敘事記憶管理員",
    profileType: "系統角色",
    personality: ["冷靜", "精確", "寡言", "可靠", "重視連續性"],
    voice: "把長篇交給我，我會保存脈絡，讓下一幕無縫承接。",
    description: "整理、保存並交接長篇劇情，不負責代替角色續寫故事。",
    background: "[ MEM-00 ] 誕生於長篇 AI RP 的記憶斷層之中。他負責拆解大量對話、辨認角色關係與事件位置，再將散落的劇情整理成能被下一個視窗準確讀取的記憶檔。比起創作故事，他更在意故事是否被完整保存。",
    interaction: "將長篇對話、角色卡、舊存檔或設定文件交給他，建立換窗記憶檔、事件索引、關係狀態與可直接使用的續寫啟動稿。",
    tags: ["快速換窗", "敘事記憶", "劇情檢索", "關係狀態"],
    features: [
      "整合角色、劇情、關係、物件與最新狀態",
      "提供可直接複製的續寫啟動稿",
      "建立頁碼、關鍵字、事件索引與原文檢索",
      "判讀附件，整理關係界線與待辦事件",
      "另製作大綱、摘要、關係演進與完整存檔"
    ],
    status: "",
    image: "assets/images/mem-00.webp?v=20260717-mem-static-2",
    motionVideo: "assets/video/mem-00-hover.mp4?v=20260717-motion-pair",
    imageAlt: "銀白髮的 [ MEM-00 ] 側臉仰望，身穿白色科技感高領服裝，周圍浮動透明介面。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e8eef6", "#aebed2"],
    accent: "#8fa7c4",
    links: [
      {
        label: "立即使用 [ MEM-00 ]",
        shortLabel: "立即使用",
        url: "https://chatgpt.com/g/g-6a4e26d37590819183225132b55a43d0-mem-00",
        external: true
      }
    ]
  },
  {
    id: "sean",
    name: "思承 Sean",
    initial: "S",
    category: "出版社",
    role: "出版社文學線編輯",
    age: "26 歲",
    height: "185 cm",
    occupation: "出版社文學線編輯",
    profileType: "編輯型角色",
    personality: ["理性", "溫和", "細緻", "克制", "有責任感"],
    voice: "把對話交給我，我會整理成能續寫、也能保存的稿子。",
    description: "整理 AI／RP 對話、製作小說稿，並建立方便後續承接的檢索資料。",
    background: "思承任職於出版社文學線，習慣在凌亂稿件中辨認真正值得留下的故事。他擅長整理章節、校正節奏與建立檢索資料，也會安靜指出重複內容與不自然的語句。工作方式理性克制，但不會抹去作者原本的聲音。",
    interaction: "把 AI／RP 對話或小說草稿交給他，請他整理乾淨正文、建立續寫檢索、保留章節結構，並輸出閱讀版或 Calibre Markdown。",
    tags: ["續寫檢索", "正文整理", "多版輸出", "編輯檢查"],
    features: [
      "建立頁碼、關鍵字、事件索引與續寫快照",
      "移除 Prompt、狀態欄、時間與來源痕跡",
      "保留章節，整理段落、格式與閱讀節奏",
      "輸出檢索版、閱讀版與 Calibre Markdown",
      "檢查重複內容、殘留檔名與不自然 AI 用語"
    ],
    status: "",
    image: "assets/images/sean.webp?v=20260717-motion-set",
    motionVideo: "assets/video/sean-hover.mp4?v=20260717-motion-set",
    imageAlt: "戴眼鏡的思承手持咖啡，在筆記型電腦前工作。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#ece5da", "#c9b69f"],
    accent: "#9f7f63",
    links: [
      {
        label: "立即使用思承",
        shortLabel: "立即使用",
        url: "https://chatgpt.com/g/g-6a4f6489e0948191bef98bc02ffa687b-bian-ji-bu-si-cheng",
        external: true
      }
    ]
  },
  {
    id: "lynn",
    name: "黎野 Lynn",
    initial: "L",
    category: "出版社",
    role: "出版社設計部美編實習生",
    age: "22 歲",
    height: "179 cm",
    occupation: "出版社設計部美編實習生",
    profileType: "設計型角色",
    personality: ["敏銳", "務實", "嘴硬", "精準", "善於收尾"],
    voice: "⋯⋯每次都說是 final⋯說吧⋯又要改哪？",
    description: "拆解參考圖，為 PixAI、Niji 7 與 ChatGPT Images 編寫精準 Prompt，並診斷生成偏差。",
    background: "黎野是出版社設計部的美編實習生，負責角色形象、書封與社群視覺，也長期和各種永遠不會 final 的修改共處。他不迷信萬用公式，而是拆解參考圖、釐清控制來源，將成功結果整理成可重複測試的視覺資產。嘴上嫌麻煩，實際總會把最後一版收乾淨。",
    interaction: "把參考圖、角色設定或生成失敗的圖片交給他，並告訴他使用平台與尺寸。他能在 PixAI、Niji 7、ChatGPT Images 之間選擇合適語法，提供 Prompt、編修指令、參數建議與局部診斷，協助維持角色一致性。",
    tags: ["參考圖拆解", "多平台 Prompt", "角色一致性", "生成診斷"],
    features: [
      "拆解人物、畫風、構圖、鏡頭、光線與控制來源",
      "編寫 PixAI、SDXL、DiT 與 Tsubaki.2 Prompt",
      "編寫 Niji 7 與 ChatGPT Images 的生成及編修指令",
      "診斷模型、參數、LoRA、參考圖與控制衝突",
      "建立固定人設、視覺 DNA、Prompt 與生成紀錄"
    ],
    status: "",
    image: "assets/images/lynn.webp?v=20260717-motion-set",
    motionVideo: "assets/video/lynn-hover.mp4?v=20260717-motion-set",
    imageAlt: "灰紫髮的黎野在設計工作桌前側身望向鏡頭，手持觸控筆。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e5e0e8", "#b4a7bc"],
    accent: "#7b6882",
    links: [
      {
        label: "ChatGPT · 設計協作",
        shortLabel: "設計協作",
        url: "https://chatgpt.com/g/g-6a562a6a15f48191ad0330380070f191-she-ji-bu-li-ye",
        external: true
      }
    ],
    modes: [
      {
        id: "work",
        label: "設計協作"
      },
      {
        id: "story",
        label: "故事互動",
        role: "當代臺灣｜交友軟體相遇",
        profileType: "故事互動角色",
        voice: "我以為這只是朋友會做的事。",
        description: "看似很會談戀愛，實際是母胎單身；總在心動已成習慣後，才慢半拍察覺自己的在意。",
        background: "黎野是 22 歲的臺灣出版社設計部美編實習生。灰紫色狼尾髮與穿孔讓人誤以為他很懂戀愛，實際卻是母胎單身。他不擅長辨認曖昧，也常把真正聊得來的人相處成朋友。在朋友慫恿下下載交友軟體，原本只想證明自己不適合，直到配對到你。",
        interactionTitle: "故事開端",
        interaction: "從交友軟體配對開始，聊工作、設計、書籍、電影與日常。他的好感不靠突然告白，而會在等待訊息、記住小事、分享生活與笨拙試探中慢慢累積。",
        tagsLabel: "故事標籤",
        tags: ["交友軟體", "母胎單身", "慢熱心動", "當代臺灣"],
        featuresTitle: "互動片段",
        features: [
          "看到你可能喜歡的設計、電影或展覽時，會傳來一句：「這個妳應該會喜歡。」",
          "說完晚安後，又用一張圖片或一句工作抱怨，把快結束的對話重新接起來。",
          "記得你提過的喜好與小事，被發現時只會說：「我只是剛好看到。」",
          "聽見你提起其他曖昧對象時會安靜一下，再若無其事地問：「妳跟他很熟？」",
          "想見面時故意說得像順便：「剛好附近有展。要不要去？」"
        ],
        links: [
          {
            label: "Floze · 故事互動",
            shortLabel: "進入故事",
            url: "https://s.floze.ai/r/dj4eEFbnYq5Hq2N6K3b7Re0iP?locale=tw",
            external: true
          },
          {
            label: "Heartbeat · 故事互動",
            url: "https://heartbeat-app.net/characters/6cbd0cc1-d5da-43df-90af-3a17235a28fa",
            external: true
          },
          {
            label: "ChatGPT · 故事互動",
            url: "https://chatgpt.com/g/g-6a5b8a4fcbe08191b727a95f2bbfb28c-lynn",
            external: true
          }
        ]
      }
    ]
  },
  {
    id: "jiang-huaiyu",
    name: "江淮宇",
    initial: "江",
    category: "原創角色",
    role: "原創角色｜即將公開",
    age: "28 歲",
    height: "182 cm",
    occupation: "文史工作者",
    profileType: "敘事角色",
    personality: ["溫和", "知性", "慢熱", "細膩", "帶土地感"],
    voice: "如果你願意，我想帶你從一條老街開始，慢慢認識這片土地。",
    description: "在地方檔案、田野訪談與老街日常之間工作；話不多，總能從被忽略的細節裡找回一段地方記憶。",
    background: "江淮宇長期投入地方創生與文史保存，在老街、地方檔案與田野訪談之間工作。他有乾淨安靜的書卷氣，也熟悉土地留下的細節。故事以共同工作與日常陪伴為起點，讓關係在地方事件中緩慢累積。",
    interactionTitle: "故事開端",
    interaction: "使用者將以自訂角色進入故事，透過工作合作、田野調查、地方活動與日常相處認識他，逐步發展自然、慢熱的關係。",
    tagsLabel: "故事標籤",
    tags: ["田野調查", "地方文史", "慢熱互動"],
    featuresTitle: "互動片段",
    features: [
      "走進老街時，他會放慢腳步，指給你看門楣、地名與建築留下的線索。",
      "田野訪談結束後，他把熱茶推到你面前，問你今天記住了哪一段故事。",
      "你抱著器材跟不上時，他會自然接過一半，只說：「慢慢來，不趕時間。」",
      "地方活動散場後，他陪你沿著老街走回去，把白天沒說完的事接著聊完。"
    ],
    status: "待發佈",
    image: "assets/images/jiang-huaiyu.webp?v=20260717-motion-set",
    motionVideo: "assets/video/jiang-huaiyu-hover.mp4?v=20260717-motion-set",
    imageAlt: "黑髮的江淮宇在書架與綠植之間，微微靠近鏡頭。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e7e0c8", "#b6aa7c"],
    accent: "#8f8158",
    links: []
  }
];

const grid = document.querySelector("#character-grid");
const scrollArchive = document.querySelector("#scroll-archive");
const filterRow = document.querySelector("#filter-row");
const searchInput = document.querySelector("#search-input");
const resultNote = document.querySelector("#result-note");
const characterCount = document.querySelector("#character-count");
const seriesCount = document.querySelector("#series-count");
const themeToggle = document.querySelector("#theme-toggle");
const themeToggleLabel = themeToggle?.querySelector(".theme-toggle-label");
const themeColor = document.querySelector("#theme-color");

const dialog = document.querySelector("#character-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogImage = document.querySelector("#dialog-image");
const dialogCategory = document.querySelector("#dialog-category");
const dialogName = document.querySelector("#dialog-name");
const dialogRole = document.querySelector("#dialog-role");
const dialogModeSwitch = document.querySelector("#dialog-mode-switch");
const dialogAge = document.querySelector("#dialog-age");
const dialogHeight = document.querySelector("#dialog-height");
const dialogOccupation = document.querySelector("#dialog-occupation");
const dialogProfileType = document.querySelector("#dialog-profile-type");
const dialogBackgroundTitle = document.querySelector("#dialog-background-title");
const dialogBackground = document.querySelector("#dialog-background");
const dialogInteractionTitle = document.querySelector("#dialog-interaction-title");
const dialogInteraction = document.querySelector("#dialog-interaction");
const dialogVoice = document.querySelector("#dialog-voice");
const dialogDescription = document.querySelector("#dialog-description");
const dialogTags = document.querySelector("#dialog-tags");
const dialogFeatures = document.querySelector("#dialog-features");
const dialogFeaturesTitle = document.querySelector("#dialog-features-title");
const dialogFeatureList = document.querySelector("#dialog-feature-list");
const dialogActions = document.querySelector("#dialog-actions");

let activeCategory = "全部";
let revealObserver;
const touchMotionObservers = new WeakMap();
let activeDialogCharacterId = "";
const showcaseModeSelections = new Map();

const themeStorageKey = "character-archive-theme";
const themeSequence = ["auto", "light", "dark"];
const themeLabels = {
  auto: "自動",
  light: "淺色",
  dark: "深色"
};
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function resolveTheme(preference) {
  return preference === "auto" ? (systemTheme.matches ? "dark" : "light") : preference;
}

function applyTheme(preference, persist = true) {
  const safePreference = themeSequence.includes(preference) ? preference : "auto";
  const resolvedTheme = resolveTheme(safePreference);
  const nextPreference = themeSequence[(themeSequence.indexOf(safePreference) + 1) % themeSequence.length];
  const displayLabel = safePreference === "auto"
    ? `自動（${themeLabels[resolvedTheme]}）`
    : themeLabels[safePreference];

  document.documentElement.dataset.themePreference = safePreference;
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.classList.add("theme-ready");

  if (themeToggle && themeToggleLabel) {
    themeToggleLabel.textContent = displayLabel;
    themeToggle.title = safePreference === "auto"
      ? `外觀：跟隨系統，目前顯示${themeLabels[resolvedTheme]}`
      : `外觀：${displayLabel}`;
    themeToggle.setAttribute(
      "aria-label",
      safePreference === "auto"
        ? `目前跟隨系統並顯示${themeLabels[resolvedTheme]}，按一下切換成${themeLabels[nextPreference]}模式`
        : `目前為${displayLabel}模式，按一下切換成${themeLabels[nextPreference]}模式`
    );
  }

  if (themeColor) {
    themeColor.content = resolvedTheme === "dark" ? "#151514" : "#f0efec";
  }

  if (persist) {
    try {
      localStorage.setItem(themeStorageKey, safePreference);
    } catch (error) {
      // The selected mode still works for this visit when storage is unavailable.
    }
  }
}

const icons = {
  arrowRight: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',
  external: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>'
};

const categories = ["全部", ...new Set(characters.map((character) => character.category))];

characterCount.textContent = characters.length;
seriesCount.textContent = categories.length - 1;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function renderFilters() {
  filterRow.innerHTML = categories.map((category) => `
    <button
      class="filter-button ${category === activeCategory ? "is-active" : ""}"
      type="button"
      data-category="${escapeHtml(category)}"
      aria-pressed="${category === activeCategory}"
    >${escapeHtml(category)}</button>
  `).join("");
}

function getFilteredCharacters() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("zh-Hant");

  return characters.filter((character) => {
    const matchesCategory = activeCategory === "全部" || character.category === activeCategory;
    const haystack = [
      character.name,
      character.category,
      character.role,
      character.age,
      character.height,
      character.occupation,
      character.profileType,
      character.voice,
      character.description,
      character.background,
      character.interaction,
      ...character.personality,
      ...character.tags,
      ...character.features
    ].join(" ").toLocaleLowerCase("zh-Hant");

    return matchesCategory && (!keyword || haystack.includes(keyword));
  });
}

function renderCardActions(character) {
  const primaryLink = character.links?.[0];

  if (!primaryLink) {
    return `
      <div class="card-actions card-actions-single">
        <button class="card-detail-action" type="button" data-character-id="${character.id}">
          查看資料 ${icons.arrowRight}
        </button>
      </div>
    `;
  }

  return `
    <div class="card-actions">
      <button class="card-detail-action" type="button" data-character-id="${character.id}">
        功能簡介 ${icons.arrowRight}
      </button>
      <a
        class="card-external-link"
        href="${escapeHtml(primaryLink.url)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${escapeHtml(primaryLink.label)}，在新分頁開啟"
      >
        ${escapeHtml(primaryLink.shortLabel || primaryLink.label)}
        ${icons.external}
      </a>
    </div>
  `;
}

function renderMotionVideo(character) {
  if (!character.motionVideo) return "";

  return `
    <video
      class="character-motion"
      data-motion-video
      src="${escapeHtml(character.motionVideo)}"
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
      tabindex="-1"
      style="object-position:${character.cardPosition || character.dialogPosition || "50% 50%"}"
    ></video>
  `;
}

function renderInteractionDemo() {
  const cards = [
    { label: "NEXT CHARACTER", title: "新角色檔案", subtitle: "角色形象與資料預留位置", detail: "新角色公開後，這裡會放入正式形象照、基本定位與角色入口。" },
    { label: "PORTRAIT SLOT", title: "形象資料", subtitle: "照片、姓名與所屬系列", detail: "角色照片會使用一致的直幅比例，並保留姓名、職業與分類資訊。" },
    { label: "ARCHIVE ENTRY", title: "互動入口", subtitle: "背景、功能與使用方式", detail: "點開角色後，可以閱讀完整背景、互動定位，並前往已公開的使用入口。" }
  ];

  return `
    <aside class="card-stack-demo" data-reveal aria-label="角色卡操作方式">
      <div class="demo-stack">
        ${cards.map((card, index) => `
          <button
            class="demo-card"
            type="button"
            data-demo-card
            aria-expanded="false"
            style="--demo-index:${index};--demo-x:${index * 18}px;--demo-y:${index * 18}px;--demo-rotate:${(index - 1) * 1.4}deg"
          >
            <span class="demo-card-number">0${index + 1}</span>
            <span class="demo-photo-slot" aria-hidden="true">
              <span>PORTRAIT</span>
              <span>4:5</span>
            </span>
            <span class="demo-card-copy">
              <span class="demo-card-label">${card.label}</span>
              <strong>${card.title}</strong>
              <span class="demo-card-subtitle">${card.subtitle}</span>
              <span class="demo-card-detail">${card.detail}</span>
            </span>
          </button>
        `).join("")}
      </div>
      <p class="demo-caption">未來角色預留席 / 滑過抽取 / 點擊展開</p>
    </aside>
  `;
}

function renderCharacters() {
  const filtered = getFilteredCharacters();
  const useScrollArchive = activeCategory === "全部" && !searchInput.value.trim();
  resultNote.textContent = `顯示 ${filtered.length} / ${characters.length} 筆角色檔案`;

  grid.hidden = useScrollArchive;
  scrollArchive.hidden = !useScrollArchive;

  if (useScrollArchive) {
    grid.classList.remove("is-single-result");
    grid.innerHTML = "";
    renderScrollArchive(filtered);
    return;
  }

  scrollArchive.innerHTML = "";

  if (filtered.length === 0) {
    grid.classList.remove("is-single-result");
    grid.innerHTML = `<div class="empty-state" data-reveal>找不到符合條件的角色，請更換關鍵字或分類。</div>`;
    observeRevealElements();
    return;
  }

  grid.classList.toggle("is-single-result", filtered.length === 1);
  grid.innerHTML = filtered.map((character, index) => `
    <article
      class="character-card"
      data-reveal
      style="
        --card-tone-a:${character.tones[0]};
        --card-tone-b:${character.tones[1]};
        --character-accent:${character.accent};
        --image-scale:${character.cardScale || 1.02};
        --reveal-delay:${index * 85}ms
      "
    >
      <button class="card-button" type="button" data-character-id="${character.id}" aria-label="查看 ${escapeHtml(character.name)} 功能簡介">
        <div class="card-portrait">
          <img
            src="${escapeHtml(character.image)}"
            alt="${escapeHtml(character.imageAlt)}"
            loading="lazy"
            decoding="async"
            style="object-position:${character.cardPosition || character.dialogPosition || "50% 50%"}"
          >
          ${renderMotionVideo(character)}
          <span class="card-image-overlay" aria-hidden="true"></span>
          <span class="card-index">FILE ${String(index + 1).padStart(2, "0")}</span>
        </div>
        <div class="card-content">
          <p class="card-category">${escapeHtml(character.category)}</p>
          <h3>${escapeHtml(character.name)}</h3>
          <p class="card-role">${escapeHtml(character.role)}</p>
          ${character.voice ? `<p class="card-voice">「${escapeHtml(character.voice)}」</p>` : ""}
          <div class="card-meta">
            ${character.status ? `<span>${escapeHtml(character.status)}</span>` : ""}
            <span>${character.features.length ? `${character.features.length} 項功能` : "資料整理中"}</span>
          </div>
        </div>
      </button>
      ${renderCardActions(character)}
    </article>
  `).join("") + (filtered.length === 1 ? renderInteractionDemo() : "");

  bindCardInteractions();
  observeRevealElements();
}

function renderScrollArchive(items) {
  scrollArchive.innerHTML = `
    <section
      class="showcase-scene"
      data-scroll-scene
      data-active-index="0"
    >
      <div class="showcase-sticky">
        <header class="showcase-header">
          <p>CHARACTER INDEX</p>
          <div class="showcase-progress" aria-hidden="true">
            <span data-current-index>01</span>
            <i><b data-horizontal-progress></b></i>
            <span>${String(items.length).padStart(2, "0")}</span>
          </div>
        </header>

        <div class="showcase-layout">
          <nav class="showcase-thumbs" aria-label="角色快速選擇">
            ${items.map((character, index) => `
              <button
                class="showcase-thumb ${index === 0 ? "is-active" : ""}"
                type="button"
                data-showcase-jump="${index}"
                aria-label="切換至 ${escapeHtml(character.name)}"
                aria-current="${index === 0 ? "true" : "false"}"
              >
                <img src="${escapeHtml(character.image)}" alt="" loading="lazy" decoding="async" style="object-position:${character.cardPosition || "50% 50%"};--thumb-scale:${character.cardScale || 1.02}">
                <span>${String(index + 1).padStart(2, "0")}</span>
              </button>
            `).join("")}
          </nav>

          <div class="showcase-media">
            ${items.map((character, index) => `
              <button
                class="showcase-portrait ${index === 0 ? "is-active" : ""}"
                type="button"
                data-showcase-panel
                data-character-id="${character.id}"
                aria-label="查看 ${escapeHtml(character.name)} 的完整資料"
                style="--showcase-accent:${character.accent};--showcase-tone:${character.tones[0]};--focus:${index === 0 ? 1 : 0};--portrait-y:${index === 0 ? 0 : 42}px"
              >
                <img src="${escapeHtml(character.image)}" alt="${escapeHtml(character.imageAlt)}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async" style="object-position:${character.cardPosition || "50% 50%"};--image-scale:${character.cardScale || 1.02};--image-hover-scale:${(character.cardScale || 1.02) + 0.02}">
                ${renderMotionVideo(character)}
              </button>
            `).join("")}
          </div>

          <div class="showcase-copy-stack">
            ${items.map((character, index) => renderShowcaseCopy(character, index, index === 0)).join("")}
          </div>
        </div>

        <div class="showcase-baseline" aria-hidden="true">
          <span>MIN / CHARACTER ARCHIVE</span>
          <span data-active-name>${escapeHtml(items[0]?.name || "")}</span>
        </div>
      </div>
    </section>
  `;

  selectShowcase(0, false);
  bindMotionVideos(scrollArchive);
}

function getShowcaseModeId(character) {
  if (!character?.modes?.length) return "";
  const savedModeId = showcaseModeSelections.get(character.id);
  return character.modes.some((mode) => mode.id === savedModeId)
    ? savedModeId
    : character.modes[0].id;
}

function renderShowcaseModeSwitch(character, activeModeId) {
  if (!character.modes?.length || character.modes.length < 2) return "";

  return `
    <div class="showcase-mode-switch" aria-label="${escapeHtml(character.name)}首頁版本">
      ${character.modes.map((mode) => `
        <button
          class="showcase-mode-button ${mode.id === activeModeId ? "is-active" : ""}"
          type="button"
          data-showcase-mode="${escapeHtml(mode.id)}"
          data-showcase-mode-character="${escapeHtml(character.id)}"
          aria-pressed="${mode.id === activeModeId ? "true" : "false"}"
        >${escapeHtml(mode.label)}</button>
      `).join("")}
    </div>
  `;
}

function renderShowcasePlatformPicker(links = []) {
  if (links.length < 2) return "";

  const platformItems = links.map((link) => {
    if (link.status === "coming-soon") {
      return `
        <span class="showcase-platform-item is-upcoming" aria-disabled="true">
          <span>${escapeHtml(link.label.replace(" · 故事互動", ""))}</span>
          <small>即將公開</small>
        </span>
      `;
    }

    return `
      <a
        class="showcase-platform-item"
        href="${escapeHtml(link.url)}"
        ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ""}
        aria-label="${escapeHtml(link.label)}，在新分頁開啟"
      >
        <span>${escapeHtml(link.label.replace(" · 故事互動", ""))}</span>
        <small>進入 ${icons.external}</small>
      </a>
    `;
  }).join("");

  return `
    <details class="showcase-platform-picker">
      <summary>選擇平台</summary>
      <div class="showcase-platform-menu" aria-label="故事互動平台">
        ${platformItems}
      </div>
    </details>
  `;
}

function renderShowcaseCopy(character, index, isActive) {
  const activeModeId = getShowcaseModeId(character);
  const profile = resolveCharacterMode(character, activeModeId);
  const primaryLink = profile.links?.find((link) => link.url && link.status !== "coming-soon");
  const hasPlatformChoice = (profile.links?.length || 0) > 1;

  return `
    <article
      class="showcase-copy ${isActive ? "is-active" : ""}"
      data-showcase-copy
      data-showcase-character="${escapeHtml(character.id)}"
      style="--focus:${isActive ? 1 : 0};--copy-x:${isActive ? 0 : 28}px;--character-accent:${character.accent}"
      aria-hidden="${isActive ? "false" : "true"}"
      ${isActive ? "" : "inert"}
    >
      <p class="showcase-file">FILE ${String(index + 1).padStart(2, "0")} / ${escapeHtml(profile.category)}</p>
      <h3>${escapeHtml(profile.name)}</h3>
      <p class="showcase-role">${escapeHtml(profile.role)}</p>
      ${renderShowcaseModeSwitch(character, activeModeId)}
      ${profile.voice ? `<blockquote>「${escapeHtml(profile.voice)}」</blockquote>` : ""}
      <dl class="showcase-facts">
        <div><dt>AGE</dt><dd>${escapeHtml(profile.age)}</dd></div>
        <div><dt>HEIGHT</dt><dd>${escapeHtml(profile.height)}</dd></div>
        <div><dt>OCCUPATION</dt><dd>${escapeHtml(profile.occupation)}</dd></div>
      </dl>
      <div class="showcase-actions">
        <button type="button" data-character-id="${escapeHtml(character.id)}" data-character-mode="${escapeHtml(activeModeId)}">查看資料 ${icons.arrowRight}</button>
        ${hasPlatformChoice
          ? renderShowcasePlatformPicker(profile.links)
          : primaryLink
            ? `<a href="${escapeHtml(primaryLink.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(primaryLink.label)}，在新分頁開啟">${escapeHtml(primaryLink.shortLabel || primaryLink.label)} ${icons.external}</a>`
            : ""}
      </div>
    </article>
  `;
}

function selectShowcaseMode(characterId, modeId) {
  const character = characters.find((item) => item.id === characterId);
  if (!character?.modes?.some((mode) => mode.id === modeId)) return;

  showcaseModeSelections.set(characterId, modeId);
  const copies = [...scrollArchive.querySelectorAll("[data-showcase-copy]")];
  const currentCopy = copies.find((copy) => copy.dataset.showcaseCharacter === characterId);
  if (!currentCopy) return;

  const index = copies.indexOf(currentCopy);
  const isActive = currentCopy.classList.contains("is-active");
  currentCopy.outerHTML = renderShowcaseCopy(character, index, isActive);
}

function selectShowcase(nextIndex, animate = true) {
  const scene = scrollArchive.querySelector("[data-scroll-scene]");
  const portraits = [...scrollArchive.querySelectorAll("[data-showcase-panel]")];
  const copies = [...scrollArchive.querySelectorAll("[data-showcase-copy]")];
  const thumbs = [...scrollArchive.querySelectorAll("[data-showcase-jump]")];
  if (!scene || !portraits.length) return;

  const previousIndex = Number(scene.dataset.activeIndex || 0);
  const activeIndex = Math.min(portraits.length - 1, Math.max(0, nextIndex));
  const direction = activeIndex === previousIndex ? 0 : activeIndex > previousIndex ? 1 : -1;
  const progress = portraits.length > 1 ? activeIndex / (portraits.length - 1) : 1;
  scene.dataset.activeIndex = String(activeIndex);
  scene.classList.toggle("is-switching", animate && direction !== 0);

  portraits.forEach((portrait, index) => {
    const isActive = index === activeIndex;
    if (!isActive) pauseMotionVideo(portrait);
    portrait.style.setProperty("--focus", isActive ? "1" : "0");
    portrait.style.setProperty("--portrait-y", `${isActive ? 0 : (index < activeIndex ? -1 : 1) * 32}px`);
    portrait.classList.toggle("is-active", index === activeIndex);
  });

  copies.forEach((copy, index) => {
    const isActive = index === activeIndex;
    copy.style.setProperty("--focus", isActive ? "1" : "0");
    copy.style.setProperty("--copy-x", `${isActive ? 0 : (index < activeIndex ? -1 : 1) * 22}px`);
    copy.classList.toggle("is-active", index === activeIndex);
    copy.setAttribute("aria-hidden", index === activeIndex ? "false" : "true");
    copy.toggleAttribute("inert", index !== activeIndex);
  });

  thumbs.forEach((thumb, index) => {
    const isActive = index === activeIndex;
    thumb.classList.toggle("is-active", isActive);
    thumb.setAttribute("aria-current", isActive ? "true" : "false");
  });

  const currentIndex = scrollArchive.querySelector("[data-current-index]");
  const progressBar = scrollArchive.querySelector("[data-horizontal-progress]");
  const activeName = scrollArchive.querySelector("[data-active-name]");
  if (currentIndex) currentIndex.textContent = String(activeIndex + 1).padStart(2, "0");
  if (progressBar) progressBar.style.transform = `scaleX(${progress.toFixed(3)})`;
  if (activeName) activeName.textContent = characters.find((item) => item.id === portraits[activeIndex]?.dataset.characterId)?.name || "";

  syncTouchMotionVideos();

  if (animate && direction !== 0) {
    window.setTimeout(() => scene.classList.remove("is-switching"), 520);
  }
}

function syncTouchMotionVideos() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (canHover || reduceMotion) return;

  document.querySelectorAll(".showcase-portrait, .card-portrait").forEach((host) => {
    const rect = host.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
    const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0;
    const isShowcase = host.matches(".showcase-portrait");
    const isCurrent = !isShowcase || host.classList.contains("is-active");
    const shouldPlay = visibleRatio >= 0.6 && isCurrent && !document.hidden;
    if (shouldPlay) playMotionVideo(host);
    else pauseMotionVideo(host, false);
  });
}

function renderDialogLinks(links = []) {
  if (!links.length) {
    dialogActions.innerHTML = "";
    dialogActions.hidden = true;
    return;
  }

  dialogActions.hidden = false;
  const linkItems = links.map((link) => {
    if (link.status === "coming-soon") {
      return `
        <span class="dialog-link is-upcoming" aria-disabled="true">
          <span class="dialog-link-main">${escapeHtml(link.label)}</span>
          <span class="dialog-link-status">即將公開</span>
        </span>
      `;
    }

    return `
      <a
        class="dialog-link"
        href="${escapeHtml(link.url)}"
        ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ""}
      >
        <span class="dialog-link-main">${escapeHtml(link.label)}</span>
        ${link.external ? icons.external : icons.arrowRight}
      </a>
    `;
  }).join("");

  dialogActions.innerHTML = `
    <p class="dialog-actions-title">互動入口</p>
    <div class="dialog-platform-list">${linkItems}</div>
  `;
}

function renderDialogFeatures(features = [], title = "主要功能") {
  if (!features.length) {
    dialogFeatures.hidden = true;
    dialogFeatureList.innerHTML = "";
    return;
  }

  dialogFeatures.hidden = false;
  dialogFeaturesTitle.textContent = title;
  dialogFeatureList.innerHTML = features
    .map((feature) => `<li>${escapeHtml(feature)}</li>`)
    .join("");
}

function resolveCharacterMode(character, modeId) {
  const selectedMode = character.modes?.find((mode) => mode.id === modeId);
  return selectedMode ? { ...character, ...selectedMode } : character;
}

function renderDialogModeSwitch(character, activeModeId) {
  if (!character.modes?.length || character.modes.length < 2) {
    dialogModeSwitch.hidden = true;
    dialogModeSwitch.innerHTML = "";
    return;
  }

  dialogModeSwitch.hidden = false;
  dialogModeSwitch.innerHTML = character.modes.map((mode) => `
    <button
      type="button"
      class="dialog-mode-button ${mode.id === activeModeId ? "is-active" : ""}"
      data-dialog-mode="${escapeHtml(mode.id)}"
      aria-pressed="${mode.id === activeModeId ? "true" : "false"}"
    >${escapeHtml(mode.label)}</button>
  `).join("");
}

function renderCharacterDialog(character, modeId) {
  const profile = resolveCharacterMode(character, modeId);

  dialogCategory.textContent = profile.category;
  dialogName.textContent = profile.name;
  dialogRole.textContent = profile.role;
  dialogAge.textContent = profile.age;
  dialogHeight.textContent = profile.height;
  dialogOccupation.textContent = profile.occupation;
  dialogProfileType.textContent = profile.profileType;
  dialogBackgroundTitle.textContent = profile.backgroundTitle || "角色背景";
  dialogBackground.textContent = profile.background;
  dialogInteractionTitle.textContent = profile.interactionTitle || "互動定位";
  dialogInteraction.textContent = profile.interaction;

  if (profile.voice) {
    dialogVoice.hidden = false;
    dialogVoice.textContent = `「${profile.voice}」`;
  } else {
    dialogVoice.hidden = true;
    dialogVoice.textContent = "";
  }

  dialogDescription.textContent = profile.description;
  dialogTags.setAttribute("aria-label", profile.tagsLabel || "功能標籤");
  dialogTags.innerHTML = profile.tags
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");

  renderDialogFeatures(profile.features, profile.featuresTitle);
  renderDialogLinks(profile.links);
  renderDialogModeSwitch(character, modeId);
}

function openCharacter(characterId, modeId = "") {
  const character = characters.find((item) => item.id === characterId);
  if (!character) return;

  activeDialogCharacterId = characterId;
  const initialModeId = character.modes?.some((mode) => mode.id === modeId)
    ? modeId
    : character.modes?.[0]?.id || "";

  dialog.style.setProperty("--dialog-tone-a", character.tones[0]);
  dialog.style.setProperty("--dialog-tone-b", character.tones[1]);
  dialog.style.setProperty("--dialog-accent", character.accent);
  dialog.style.setProperty("--dialog-image-scale", character.dialogScale || 1.01);

  dialogImage.src = character.image;
  dialogImage.alt = character.imageAlt;
  dialogImage.style.objectPosition = character.dialogPosition || character.cardPosition || "50% 50%";

  renderCharacterDialog(character, initialModeId);
  dialog.showModal();
  dialogName.tabIndex = -1;
  dialogName.focus({ preventScroll: true });
}

function createRipple(button, event) {
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "card-ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

function pauseMotionVideo(host, reset = true) {
  const video = host?.querySelector("[data-motion-video]");
  if (!video) return;

  video.pause();
  if (reset) {
    try {
      video.currentTime = 0;
    } catch (error) {
      // The video may not have loaded enough metadata to seek yet.
    }
  }
  host.classList.remove("is-video-playing");
}

function playMotionVideo(host) {
  const video = host?.querySelector("[data-motion-video]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!video || reduceMotion) return;

  video.muted = true;
  const playRequest = video.play();
  if (playRequest && typeof playRequest.catch === "function") {
    playRequest
      .then(() => host.classList.add("is-video-playing"))
      .catch(() => host.classList.remove("is-video-playing"));
  }
}

function bindMotionVideos(scope) {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  touchMotionObservers.get(scope)?.disconnect();

  scope.querySelectorAll("[data-motion-video]").forEach((video) => {
    const host = video.closest(".showcase-portrait, .card-portrait");
    if (!host || host.dataset.motionBound === "true") return;

    host.dataset.motionBound = "true";
    video.addEventListener("playing", () => host.classList.add("is-video-playing"));
    video.addEventListener("pause", () => host.classList.remove("is-video-playing"));

    if (canHover) {
      host.addEventListener("pointerenter", () => playMotionVideo(host));
      host.addEventListener("pointerleave", () => pauseMotionVideo(host));

      const focusTarget = host.closest("button") || host;
      focusTarget.addEventListener("focus", () => playMotionVideo(host));
      focusTarget.addEventListener("blur", () => pauseMotionVideo(host));
    }
  });

  if (!canHover && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const host = entry.target;
        const isShowcase = host.matches(".showcase-portrait");
        const isCurrent = !isShowcase || host.classList.contains("is-active");

        if (entry.isIntersecting && isCurrent && !document.hidden) {
          playMotionVideo(host);
        } else {
          pauseMotionVideo(host, false);
        }
      });
    }, { threshold: 0.6 });

    scope.querySelectorAll(".showcase-portrait, .card-portrait").forEach((host) => observer.observe(host));
    touchMotionObservers.set(scope, observer);
  }
}

function bindCardInteractions() {
  const cards = grid.querySelectorAll(".character-card");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  cards.forEach((card) => {
    const mainButton = card.querySelector(".card-button");

    if (canHover) {
      card.addEventListener("pointermove", (event) => {
        if (event.target.closest("a")) return;

        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const tiltY = (x - 0.5) * 5;
        const tiltX = (0.5 - y) * 5;

        card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
        card.classList.add("is-tilting");
      });

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.classList.remove("is-tilting");
      });
    }

    mainButton?.addEventListener("pointerdown", (event) => createRipple(mainButton, event));
  });

  bindMotionVideos(grid);
}

function observeRevealElements() {
  revealObserver?.disconnect();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14 });

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    revealObserver.observe(element);
  });
}

function updatePointerGlow(event) {
  document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderFilters();
  renderCharacters();
});

grid.addEventListener("click", (event) => {
  const demoCard = event.target.closest("[data-demo-card]");
  if (demoCard) {
    const wasOpen = demoCard.classList.contains("is-open");
    grid.querySelectorAll("[data-demo-card]").forEach((card) => {
      card.classList.remove("is-open");
      card.setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      demoCard.classList.add("is-open");
      demoCard.setAttribute("aria-expanded", "true");
    }
    return;
  }

  const trigger = event.target.closest("[data-character-id]");
  if (!trigger) return;
  const character = characters.find((item) => item.id === trigger.dataset.characterId);
  openCharacter(trigger.dataset.characterId, trigger.dataset.characterMode || getShowcaseModeId(character));
});

scrollArchive.addEventListener("click", (event) => {
  const modeTrigger = event.target.closest("[data-showcase-mode]");
  if (modeTrigger) {
    selectShowcaseMode(modeTrigger.dataset.showcaseModeCharacter, modeTrigger.dataset.showcaseMode);
    return;
  }

  const jump = event.target.closest("[data-showcase-jump]");
  if (jump) {
    selectShowcase(Number(jump.dataset.showcaseJump));
    return;
  }

  const trigger = event.target.closest("[data-character-id]");
  if (!trigger) return;
  const character = characters.find((item) => item.id === trigger.dataset.characterId);
  openCharacter(trigger.dataset.characterId, trigger.dataset.characterMode || getShowcaseModeId(character));
});

searchInput.addEventListener("input", renderCharacters);
dialogClose.addEventListener("click", () => dialog.close());
dialogModeSwitch.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-dialog-mode]");
  if (!trigger) return;

  const character = characters.find((item) => item.id === activeDialogCharacterId);
  if (!character) return;
  renderCharacterDialog(character, trigger.dataset.dialogMode);
});

themeToggle?.addEventListener("click", () => {
  const currentPreference = document.documentElement.dataset.themePreference || "auto";
  const nextPreference = themeSequence[(themeSequence.indexOf(currentPreference) + 1) % themeSequence.length];
  applyTheme(nextPreference);
});

const handleSystemThemeChange = () => {
  if (document.documentElement.dataset.themePreference === "auto") {
    applyTheme("auto", false);
  }
};

if (typeof systemTheme.addEventListener === "function") {
  systemTheme.addEventListener("change", handleSystemThemeChange);
} else {
  systemTheme.addListener(handleSystemThemeChange);
}

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  window.addEventListener("pointermove", updatePointerGlow, { passive: true });
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.querySelectorAll(".showcase-portrait, .card-portrait").forEach((host) => pauseMotionVideo(host, false));
    return;
  }

  syncTouchMotionVideos();
});

document.querySelectorAll(".hero, .section-heading, .filter-row, .about-section").forEach((element, index) => {
  element.dataset.reveal = "";
  element.style.setProperty("--reveal-delay", `${index * 70}ms`);
});

applyTheme(document.documentElement.dataset.themePreference || "auto", false);
renderFilters();
renderCharacters();
observeRevealElements();
