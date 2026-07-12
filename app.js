const characters = [
  {
    id: "mem-00",
    name: "MEM-00",
    initial: "M",
    category: "敘事系統",
    role: "長篇 AI RP 敘事記憶管理員",
    voice: "把長篇交給我，我會保存脈絡，讓下一幕無縫承接。",
    description: "整理、保存並交接長篇劇情，不負責代替角色續寫故事。",
    tags: ["快速換窗", "敘事記憶", "劇情檢索", "關係狀態"],
    features: [
      "整合角色、劇情、關係、物件與最新狀態",
      "提供可直接複製的續寫啟動稿",
      "建立頁碼、關鍵字、事件索引與原文檢索",
      "判讀附件，整理關係界線與待辦事件",
      "另製作大綱、摘要、關係演進與完整存檔"
    ],
    status: "持續更新",
    image: "assets/images/mem-00.webp",
    imageAlt: "白髮、銀灰眼的 MEM-00，身穿白色科技感服裝，周圍浮現半透明資料介面。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1.02,
    dialogScale: 1.01,
    tones: ["#e8eef6", "#aebed2"],
    accent: "#8fa7c4",
    links: [
      {
        label: "立即使用 MEM-00",
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
    category: "編輯部",
    role: "出版社文學線編輯",
    voice: "把對話交給我，我會整理成能續寫、也能保存的稿子。",
    description: "整理 AI／RP 對話、製作小說稿，並建立方便後續承接的檢索資料。",
    tags: ["續寫檢索", "正文整理", "多版輸出", "編輯檢查"],
    features: [
      "建立頁碼、關鍵字、事件索引與續寫快照",
      "移除 Prompt、狀態欄、時間與來源痕跡",
      "保留章節，整理段落、格式與閱讀節奏",
      "輸出檢索版、閱讀版與 Calibre Markdown",
      "檢查重複內容、殘留檔名與不自然 AI 用語"
    ],
    status: "測試中",
    image: "assets/images/sean.webp",
    imageAlt: "戴圓框眼鏡的思承坐在電腦前，以鋼筆校閱稿件。",
    cardPosition: "50% 24%",
    dialogPosition: "50% 24%",
    cardScale: 1.02,
    dialogScale: 1.01,
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
    id: "jiang-huaiyu",
    name: "江淮宇",
    initial: "江",
    category: "原創角色",
    role: "原創角色｜即將公開",
    voice: "",
    description: "江淮宇的完整角色資料與公開入口將於後續正式發佈。",
    tags: ["原創角色", "文藝氣質", "待發佈"],
    features: [],
    status: "待發佈",
    image: "assets/images/jiang-huaiyu.webp",
    imageAlt: "黑髮的江淮宇在日光與綠植間抱著阮，低頭凝視琴弦。",
    cardPosition: "58% 28%",
    dialogPosition: "56% 22%",
    cardScale: 1.30,
    dialogScale: 1.12,
    tones: ["#e7e0c8", "#b6aa7c"],
    accent: "#8f8158",
    links: []
  }
];

const grid = document.querySelector("#character-grid");
const filterRow = document.querySelector("#filter-row");
const searchInput = document.querySelector("#search-input");
const resultNote = document.querySelector("#result-note");
const characterCount = document.querySelector("#character-count");
const seriesCount = document.querySelector("#series-count");
const pageProgress = document.querySelector("#page-progress");
const siteHeader = document.querySelector(".site-header");

const dialog = document.querySelector("#character-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogImage = document.querySelector("#dialog-image");
const dialogCategory = document.querySelector("#dialog-category");
const dialogName = document.querySelector("#dialog-name");
const dialogRole = document.querySelector("#dialog-role");
const dialogVoice = document.querySelector("#dialog-voice");
const dialogDescription = document.querySelector("#dialog-description");
const dialogTags = document.querySelector("#dialog-tags");
const dialogFeatures = document.querySelector("#dialog-features");
const dialogFeatureList = document.querySelector("#dialog-feature-list");
const dialogActions = document.querySelector("#dialog-actions");

let activeCategory = "全部";
let revealObserver;

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
      character.voice,
      character.description,
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
          查看資料 <span aria-hidden="true">→</span>
        </button>
      </div>
    `;
  }

  return `
    <div class="card-actions">
      <button class="card-detail-action" type="button" data-character-id="${character.id}">
        功能簡介 <span aria-hidden="true">→</span>
      </button>
      <a
        class="card-external-link"
        href="${escapeHtml(primaryLink.url)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${escapeHtml(primaryLink.label)}，在新分頁開啟"
      >
        ${escapeHtml(primaryLink.shortLabel || primaryLink.label)}
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  `;
}

function renderCharacters() {
  const filtered = getFilteredCharacters();
  resultNote.textContent = `顯示 ${filtered.length} / ${characters.length} 筆角色檔案`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state" data-reveal>找不到符合條件的角色，請更換關鍵字或分類。</div>`;
    observeRevealElements();
    return;
  }

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
            <span>${escapeHtml(character.status)}</span>
            <span>${character.features.length ? `${character.features.length} 項功能` : "資料整理中"}</span>
          </div>
        </div>
      </button>
      ${renderCardActions(character)}
    </article>
  `).join("");

  bindCardInteractions();
  observeRevealElements();
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
      <span aria-hidden="true">${link.external ? "↗" : "→"}</span>
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

function updatePageProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  pageProgress.style.width = `${Math.min(progress, 1) * 100}%`;
  siteHeader.classList.toggle("is-compact", window.scrollY > 24);
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
  const trigger = event.target.closest("[data-character-id]");
  if (!trigger) return;
  openCharacter(trigger.dataset.characterId);
});

searchInput.addEventListener("input", renderCharacters);
dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

window.addEventListener("scroll", updatePageProgress, { passive: true });

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
updatePageProgress();
