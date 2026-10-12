(function () {
  const CAT = { eat: "🍜 食べる", dinner: "🍲 鍋・夕食", cafe: "☕ カフェ", see: "📍 観る", shop: "🛍 買い物", souvenir: "🎁 お土産", hotel: "🏨 ホテル", venue: "💒 式場", bus: "🚌 バス" };
  const CAT_ORDER = Object.keys(CAT);
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const mapUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

  // ---------- tabs ----------
  const tabs = $("#tabs");
  const tabItems = [["schedule", "日程"], ["address", "住所"], ["tips", "ヒント"], ...window.CITIES.map((c) => [c.id, c.name]), ["access", "行き方"]];
  tabs.innerHTML = tabItems.map(([id, label]) => `<a href="#${id}" data-id="${id}">${label}</a>`).join("");

  // ---------- cities ----------
  const cardHTML = (s, extra = "") => {
    const q = s.q || [s.vi, s.addr].filter(Boolean).join(" ");
    return `<article class="card" data-cat="${s.cat || ""}">
      <div class="card-top"><span class="cat">${CAT[s.cat] || ""}</span>${s.tag ? `<span class="tag">${esc(s.tag)}</span>` : ""}</div>
      <h3>${esc(s.name)}</h3>
      ${s.vi ? `<p class="vi" lang="vi">${esc(s.vi)}</p>` : ""}
      ${s.photos ? `<div class="photos">${s.photos.map((src) => `<img src="${esc(src)}" alt="${esc(s.name)}" loading="lazy">`).join("")}</div>` : ""}
      ${extra}
      <p class="desc">${esc(s.desc)}</p>
      ${s.addr ? `<p class="addr" lang="vi">${esc(s.addr)}</p>` : ""}
      <div class="card-actions">
        <a class="link-btn" href="${s.map || mapUrl(q)}" target="_blank" rel="noopener">地図 ↗</a>
        ${s.vi ? `<button class="link-btn js-driver" type="button" data-name="${esc(s.vi)}" data-addr="${esc(s.addr || "")}" data-hint="${s.addr ? "go" : (s.cat === "eat" ? "eat" : "buy")}" data-q="${esc(q)}" data-map="${esc(s.map || "")}">${s.addr ? "運転手に見せる" : "お店の人に見せる"}</button>` : ""}
        ${s.vi ? `<button class="link-btn js-copy" type="button" data-copy="${esc([s.vi, s.addr].filter(Boolean).join(", "))}">コピー</button>` : ""}
      </div>
    </article>`;
  };

  $("#cities").innerHTML = window.CITIES.map((c) => {
    const cats = CAT_ORDER.filter((k) => c.spots.some((s) => s.cat === k));
    return `<section class="city" id="${c.id}">
      <div class="city-head"><h2>${c.name}</h2><span class="city-vi" lang="vi">${c.vi}</span></div>
      <p class="city-lead">${esc(c.lead)}</p>
      ${c.note ? `<p class="city-note">💡 ${esc(c.note)}</p>` : ""}
      <div class="chips" role="group" aria-label="${c.name}の絞り込み">
        <button class="chip on" data-f="all" type="button">すべて</button>
        ${cats.map((k) => `<button class="chip" data-f="${k}" type="button">${CAT[k]}</button>`).join("")}
      </div>
      <div class="cards">${c.spots.map((s) => cardHTML(s)).join("")}</div>
    </section>`;
  }).join("");

  document.querySelectorAll(".city .chips").forEach((group) => {
    group.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      group.querySelectorAll(".chip").forEach((x) => x.classList.toggle("on", x === b));
      const f = b.dataset.f;
      group.nextElementSibling.querySelectorAll(".card").forEach((card) => {
        card.hidden = f !== "all" && card.dataset.cat !== f;
      });
    });
  });

  // ---------- address ----------
  const V = window.VENUE || {};
  $("#venue").innerHTML = (V.addr || V.map)
    ? cardHTML({ cat: "venue", tag: "10/18", name: V.name, vi: V.vi, addr: V.addr, map: V.map, desc: V.desc, q: V.vi || V.addr })
    : `<article class="card"><div class="card-top"><span class="cat">${CAT.venue}</span><span class="tag">10/18</span></div><h3>${esc(V.name)}</h3><p class="desc">${esc(V.desc)}\n住所・地図は準備中です。</p></article>`;
  $("#hotels").innerHTML = (window.HOTELS || []).map((h) => cardHTML({ cat: "hotel", ...h })).join("");
  $("#bus").innerHTML = (window.BUS || []).map((h) => cardHTML({ cat: "bus", ...h })).join("");

  // ---------- routes / tips / phrases ----------
  $("#routes").innerHTML = window.ROUTES.map((r) => `<div class="route">
    <p class="route-path">${esc(r.from)}<b>→</b>${esc(r.to)}</p>
    <div class="route-meta">${[r.how, r.time, r.cost].filter(Boolean).map((x) => `<span>${esc(x)}</span>`).join("")}</div>
    <p>${esc(r.tip)}</p></div>`).join("");
  $("#schedList").innerHTML = window.SCHEDULE.map((r) => `<li class="${r.main ? "main" : ""}"><span class="s-d">${esc(r.d)}</span><span class="s-t">${esc(r.t)}</span><span class="s-w">${esc(r.what)}${r.where ? `<small>${esc(r.where)}</small>` : ""}</span></li>`).join("");
  $("#money").innerHTML = window.MONEY.map(([v, j]) => `<div><b lang="vi">${v}</b><span>約${j}</span></div>`).join("");
  $("#tipList").innerHTML = window.TIPS.map((t) => `<div class="tip"><b>${esc(t.t)}</b><p>${esc(t.d)}</p></div>`).join("");
  const groups = [...new Set(window.PHRASES.map((p) => p.g))];
  $("#phraseList").innerHTML = groups.map((g) => `<h4 class="p-group">${esc(g)}</h4><div class="phrases">${
    window.PHRASES.filter((p) => p.g === g).map((p) => `<div class="phrase"><div class="p-ja">${esc(p.ja)}</div><div class="p-vi" lang="vi">${esc(p.vi)}</div><div class="p-yomi">${esc(p.yomi)}</div></div>`).join("")
  }</div>`).join("");

  // ---------- driver modal / copy ----------
  const dlg = $("#driver");
  const HINT = {
    go: "Cho tôi đến địa chỉ này / ここへ行きたいです",
    eat: "Tôi muốn ăn món này / この料理が食べたいです",
    buy: "Tôi muốn mua cái này / これを買いたいです",
  };
  document.addEventListener("click", (e) => {
    const d = e.target.closest(".js-driver");
    if (d) {
      $("#driverName").textContent = d.dataset.name;
      $("#driverAddr").textContent = d.dataset.addr;
      $("#driverHint").textContent = HINT[d.dataset.hint] || HINT.go;
      $("#driverMap").href = d.dataset.map || mapUrl(d.dataset.q);
      dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", "");
    }
    const c = e.target.closest(".js-copy");
    if (c) {
      const text = c.dataset.copy;
      (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(
        () => toast("コピーしました：" + text),
        () => toast(text)
      );
    }
  });
  $("#driverClose").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  // ---------- active tab on scroll ----------
  const ids = tabItems.map(([id]) => id);
  let jumping = false;
  let jumpTimer = 0;
  function setActive(id) {
    tabs.querySelectorAll("a").forEach((a) => a.classList.toggle("on", a.dataset.id === id));
    const on = tabs.querySelector("a.on");
    if (on) tabs.scrollLeft = on.offsetLeft - (tabs.clientWidth - on.offsetWidth) / 2;
  }
  // タブを押したら、JSで確実にその位置までスクロール（スクロール中はタブの自動切替を止める）
  tabs.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    const el = document.getElementById(a.dataset.id);
    if (!el) return;
    e.preventDefault();
    setActive(a.dataset.id);
    jumping = true;
    clearTimeout(jumpTimer);
    jumpTimer = setTimeout(() => { jumping = false; }, 1200);
    const top = el.getBoundingClientRect().top + window.scrollY - tabs.offsetHeight - 8;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", "#" + a.dataset.id);
  });
  const io = new IntersectionObserver((entries) => {
    if (jumping) return;
    entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); });
  }, { rootMargin: "-40% 0px -55% 0px" });
  ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });

})();
