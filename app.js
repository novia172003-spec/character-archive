const characters = [
  {
    id: "mem-00",
    name: "[MEM-00]",
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
    background: "[MEM-00] 誕生於長篇 AI RP 的記憶斷層之中。他負責拆解大量對話、辨認角色關係與事件位置，再將散落的劇情整理成能被下一個視窗準確讀取的記憶檔。比起創作故事，他更在意故事是否被完整保存。",
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
    image: "assets/images/mem-00.webp",
    imageAlt: "銀白髮的 [MEM-00] 抬手觸碰額側，身穿白色科技感高領服裝。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e8eef6", "#aebed2"],
    accent: "#8fa7c4",
    links: [
      {
        label: "立即使用 [MEM-00]",
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
    image: "assets/images/sean.webp",
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
    personality: ["敏銳", "務實", "嘴硬", "細緻", "有耐心"],
    voice: "……每次都說是 final。說吧，又要改哪？",
    description: "解析參考圖、整理 PixAI Prompt，並協助維持角色形象與生成結果的一致性。",
    background: "黎野是出版社設計部的美編實習生，白天處理角色形象、書封與社群視覺，晚上則和各種永遠不會 final 的修改共處。他熟悉 PixAI 的 XL、SDXL 與 DiT 模型，習慣先拆解參考圖，再把人物、場景、光線、鏡頭與參數整理成可重複使用的視覺系統。",
    interaction: "把參考圖、角色設定或生成失敗的圖片交給他。他會先確認模型與比例，解析人物和畫面結構，再提供 Prompt、Negative Prompt、LoRA 與參數建議，或針對真正出問題的部分進行診斷。",
    tags: ["PixAI Prompt", "參考圖解析", "角色一致性", "生成診斷"],
    features: [
      "解析人物特徵、畫風、構圖、光線與保留元素",
      "依 XL、SDXL 或 DiT 重整 Prompt 與 Negative Prompt",
      "建議 LoRA、權重、Seed、Steps、CFG 與 Sampler",
      "建立固定人設、視覺 DNA、場景、動作與表情模組",
      "診斷生成結果，區分不像與不好看並局部修正"
    ],
    status: "",
    image: "assets/images/lynn.jpg",
    imageAlt: "灰紫髮的黎野坐在設計工作桌前，手持觸控筆，身後螢幕顯示視覺稿件。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e5e0e8", "#b4a7bc"],
    accent: "#7b6882",
    links: [
      {
        label: "立即使用黎野",
        shortLabel: "立即使用",
        url: "https://chatgpt.com/g/g-6a562a6a15f48191ad0330380070f191-she-ji-bu-li-ye",
        external: true
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
    description: "江淮宇的完整角色資料與公開入口將於後續正式發佈。",
    background: "江淮宇長期投入地方創生與文史保存，在老街、地方檔案與田野訪談之間工作。他有乾淨安靜的書卷氣，也熟悉土地留下的細節。故事以共同工作與日常陪伴為起點，讓關係在地方事件中緩慢累積。",
    interaction: "使用者將以自訂角色進入故事，透過工作合作、田野調查、地方活動與日常相處認識他，逐步發展自然、慢熱的關係。",
    tags: ["田野調查", "地方文史", "慢熱互動"],
    features: [],
    status: "待發佈",
    image: "assets/images/jiang-huaiyu.webp",
    imageAlt: "黑髮的江淮宇身處書架與綠植間，在日光下注視前方。",
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

const dialog = document.querySelector("#character-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogImage = document.querySelector("#dialog-image");
const dialogCategory = document.querySelector("#dialog-category");
const dialogName = document.querySelector("#dialog-name");
const dialogRole = document.querySelector("#dialog-role");
const dialogAge = document.querySelector("#dialog-age");
const dialogHeight = document.querySelector("#dialog-height");
const dialogOccupation = document.querySelector("#dialog-occupation");
const dialogProfileType = document.querySelector("#dialog-profile-type");
const dialogBackground = document.querySelector("#dialog-background");
const dialogInteraction = document.querySelector("#dialog-interaction");
const dialogVoice = document.querySelector("#dialog-voice");
const dialogDescription = document.querySelector("#dialog-description");
const dialogTags = document.querySelector("#dialog-tags");
const dialogFeatures = document.querySelector("#dialog-features");
const dialogFeatureList = document.querySelector("#dialog-feature-list");
const dialogActions = document.querySelector("#dialog-actions");

let activeCategory = "全部";
let revealObserver;

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
              </button>
            `).join("")}
          </div>

          <div class="showcase-copy-stack">
            ${items.map((character, index) => {
              const primaryLink = character.links?.[0];
              return `
                <article class="showcase-copy ${index === 0 ? "is-active" : ""}" data-showcase-copy style="--focus:${index === 0 ? 1 : 0};--copy-x:${index === 0 ? 0 : 28}px" aria-hidden="${index === 0 ? "false" : "true"}" ${index === 0 ? "" : "inert"}>
                  <p class="showcase-file">FILE ${String(index + 1).padStart(2, "0")} / ${escapeHtml(character.category)}</p>
                  <h3>${escapeHtml(character.name)}</h3>
                  <p class="showcase-role">${escapeHtml(character.role)}</p>
                  ${character.voice ? `<blockquote>「${escapeHtml(character.voice)}」</blockquote>` : ""}
                  <dl class="showcase-facts">
                    <div><dt>AGE</dt><dd>${escapeHtml(character.age)}</dd></div>
                    <div><dt>HEIGHT</dt><dd>${escapeHtml(character.height)}</dd></div>
                    <div><dt>OCCUPATION</dt><dd>${escapeHtml(character.occupation)}</dd></div>
                  </dl>
                  <div class="showcase-actions">
                    <button type="button" data-character-id="${character.id}">查看資料 ${icons.arrowRight}</button>
                    ${primaryLink ? `<a href="${escapeHtml(primaryLink.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(primaryLink.label)}，在新分頁開啟">${escapeHtml(primaryLink.shortLabel || primaryLink.label)} ${icons.external}</a>` : ""}
                  </div>
                </article>
              `;
            }).join("")}
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

  if (animate && direction !== 0) {
    window.setTimeout(() => scene.classList.remove("is-switching"), 520);
  }
}

function renderDialogLinks(links = []) {
  if (!links.length) {
    dialogActions.innerHTML = "";
    dialogActions.hidden = true;
    return;
  }

  dialogActions.hidden = false;
  dialogActions.innerHTML = links.map((link, index) => `
    <a
      class="dialog-link ${index > 0 ? "is-secondary" : ""}"
      href="${escapeHtml(link.url)}"
      ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ""}
    >
      ${escapeHtml(link.label)}
      ${link.external ? icons.external : icons.arrowRight}
    </a>
  `).join("");
}

function renderDialogFeatures(features = []) {
  if (!features.length) {
    dialogFeatures.hidden = true;
    dialogFeatureList.innerHTML = "";
    return;
  }

  dialogFeatures.hidden = false;
  dialogFeatureList.innerHTML = features
    .map((feature) => `<li>${escapeHtml(feature)}</li>`)
    .join("");
}

function openCharacter(characterId) {
  const character = characters.find((item) => item.id === characterId);
  if (!character) return;

  dialog.style.setProperty("--dialog-tone-a", character.tones[0]);
  dialog.style.setProperty("--dialog-tone-b", character.tones[1]);
  dialog.style.setProperty("--dialog-accent", character.accent);
  dialog.style.setProperty("--dialog-image-scale", character.dialogScale || 1.01);

  dialogImage.src = character.image;
  dialogImage.alt = character.imageAlt;
  dialogImage.style.objectPosition = character.dialogPosition || character.cardPosition || "50% 50%";

  dialogCategory.textContent = character.category;
  dialogName.textContent = character.name;
  dialogRole.textContent = character.role;
  dialogAge.textContent = character.age;
  dialogHeight.textContent = character.height;
  dialogOccupation.textContent = character.occupation;
  dialogProfileType.textContent = character.profileType;
  dialogBackground.textContent = character.background;
  dialogInteraction.textContent = character.interaction;

  if (character.voice) {
    dialogVoice.hidden = false;
    dialogVoice.textContent = `「${character.voice}」`;
  } else {
    dialogVoice.hidden = true;
    dialogVoice.textContent = "";
  }

  dialogDescription.textContent = character.description;
  dialogTags.innerHTML = character.tags
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");

  renderDialogFeatures(character.features);
  renderDialogLinks(character.links);
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
  openCharacter(trigger.dataset.characterId);
});

scrollArchive.addEventListener("click", (event) => {
  const jump = event.target.closest("[data-showcase-jump]");
  if (jump) {
    selectShowcase(Number(jump.dataset.showcaseJump));
    return;
  }

  const trigger = event.target.closest("[data-character-id]");
  if (!trigger) return;
  openCharacter(trigger.dataset.characterId);
});

searchInput.addEventListener("input", renderCharacters);
dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  window.addEventListener("pointermove", updatePointerGlow, { passive: true });
}

document.querySelectorAll(".hero, .section-heading, .filter-row, .about-section").forEach((element, index) => {
  element.dataset.reveal = "";
  element.style.setProperty("--reveal-delay", `${index * 70}ms`);
});

renderFilters();
renderCharacters();
observeRevealElements();
