// ===========================================================
//  掲示板（誰でも質問・誰でも回答）
//  保存先：Google Apps Script ウェブアプリ（gas/Code.gs）
// ===========================================================
(function () {
  const BOARD_URL = "https://script.google.com/macros/s/AKfycbzVQRfQYV_mmZPmL2y0lr6M6mvgX_IvQr2m8xk9RGP970qiYXbiSbukpUwuUUasktzt/exec";

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const list = $("#boardList");
  const form = $("#askForm");
  const NAME_KEY = "board-name";

  const fmt = (iso) => {
    const d = new Date(iso);
    if (isNaN(d)) return "";
    return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };
  const savedName = () => { try { return localStorage.getItem(NAME_KEY) || ""; } catch (e) { return ""; } };
  const saveName = (n) => { try { localStorage.setItem(NAME_KEY, n); } catch (e) {} };

  if (!BOARD_URL) {
    form.querySelector("button").disabled = true;
    list.innerHTML = `<p class="empty">掲示板はまもなく使えるようになります。</p>`;
    return;
  }

  form.elements.nick.value = savedName();

  async function load() {
    try {
      const res = await fetch(BOARD_URL + "?t=" + Date.now());
      const data = await res.json();
      render(data.rows || []);
    } catch (e) {
      list.innerHTML = `<p class="empty">読み込めませんでした。少し時間をおいて再読み込みしてください。</p>`;
    }
  }

  function render(rows) {
    const qs = rows.filter((r) => !r.parent).reverse(); // 新しい質問が上
    const answers = (id) => rows.filter((r) => r.parent === id); // 回答は古い順
    if (!qs.length) {
      list.innerHTML = `<p class="empty">まだ質問はありません。気軽にどうぞ！</p>`;
      return;
    }
    list.innerHTML = qs.map((q) => {
      const as = answers(q.id);
      return `<article class="q" data-id="${esc(q.id)}">
        <div class="q-head"><span class="q-badge">Q</span><span class="q-name">${esc(q.name)}</span><span class="q-time">${fmt(q.time)}</span></div>
        <p class="q-text">${esc(q.text)}</p>
        <div class="answers">${as.map((a) => `<div class="a">
          <div class="q-head"><span class="a-badge">A</span><span class="q-name">${esc(a.name)}</span><span class="q-time">${fmt(a.time)}</span></div>
          <p class="q-text">${esc(a.text)}</p></div>`).join("")}</div>
        <details class="reply">
          <summary>回答する${as.length ? `（${as.length}件の回答）` : ""}</summary>
          <form class="reply-form">
            <input name="nick" maxlength="30" placeholder="お名前（ニックネーム可）" value="${esc(savedName())}">
            <textarea name="text" maxlength="1000" rows="3" placeholder="回答を書く" required></textarea>
            <input name="website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
            <button class="btn btn-primary" type="submit">回答を送る</button>
          </form>
        </details>
      </article>`;
    }).join("");
  }

  async function post(payload, btn) {
    btn.disabled = true;
    const label = btn.textContent;
    btn.textContent = "送信中…";
    try {
      const res = await fetch(BOARD_URL, { method: "POST", body: JSON.stringify(payload) });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "error");
      saveName(payload.name || "");
      await load();
      return true;
    } catch (e) {
      alertBox("送信できませんでした。電波の良いところでもう一度お試しください。");
      return false;
    } finally {
      btn.disabled = false;
      btn.textContent = label;
    }
  }

  function alertBox(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = form.elements.text.value.trim();
    if (!text) return;
    const ok = await post({ name: form.elements.nick.value.trim(), text, website: form.elements.website.value }, form.querySelector("button"));
    if (ok) form.elements.text.value = "";
  });

  list.addEventListener("submit", async (e) => {
    const f = e.target.closest(".reply-form");
    if (!f) return;
    e.preventDefault();
    const text = f.elements.text.value.trim();
    if (!text) return;
    const parent = f.closest(".q").dataset.id;
    await post({ parent, name: f.elements.nick.value.trim(), text, website: f.elements.website.value }, f.querySelector("button"));
  });

  $("#boardReload").addEventListener("click", load);
  load();
})();
