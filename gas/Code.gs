/**
 * 結婚式サイト 掲示板 — Google Apps Script（ウェブアプリ）
 *
 * 使い方
 * 1. script.new でプロジェクトを作り、このコードを貼り付けて保存
 * 2. 関数「setup」を一度実行（権限を許可）→ 保存用スプレッドシートが作られる
 * 3. デプロイ →「新しいデプロイ」→ 種類：ウェブアプリ
 *    実行ユーザー：自分 ／ アクセスできるユーザー：全員
 * 4. 表示された「ウェブアプリのURL」を board.js の BOARD_URL に貼る
 *
 * 投稿の削除：スプレッドシートの行を消すだけ（質問を消すとその回答も表示されなくなる）
 */

const SHEET_NAME = 'board';

function ss_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('SHEET_ID');
  if (!id) {
    const ss = SpreadsheetApp.create('結婚式サイト 掲示板');
    id = ss.getId();
    props.setProperty('SHEET_ID', id);
  }
  return SpreadsheetApp.openById(id);
}

function sheet_() {
  const ss = ss_();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['id', 'parent', 'name', 'text', 'time']);
    sh.setFrozenRows(1);
    const first = ss.getSheets()[0];
    if (first.getName() !== SHEET_NAME && first.getLastRow() === 0) ss.deleteSheet(first);
  }
  return sh;
}

function setup() {
  const sh = sheet_();
  Logger.log('保存先: ' + sh.getParent().getUrl());
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  const values = sheet_().getDataRange().getValues();
  values.shift();
  const rows = values
    .filter((r) => r[0] && r[3])
    .map((r) => ({
      id: String(r[0]),
      parent: String(r[1] || ''),
      name: String(r[2] || 'ゲスト'),
      text: String(r[3]),
      time: r[4] instanceof Date ? r[4].toISOString() : String(r[4] || ''),
    }));
  return out_({ ok: true, rows: rows });
}

function doPost(e) {
  let d = {};
  try { d = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (err) { return out_({ ok: false, error: 'bad json' }); }
  if (d.website) return out_({ ok: true }); // スパム対策（見えない欄に入力があれば無視）
  const text = String(d.text || '').trim().slice(0, 1000);
  const name = String(d.name || '').trim().slice(0, 30) || 'ゲスト';
  const parent = String(d.parent || '').slice(0, 20);
  if (!text) return out_({ ok: false, error: 'empty' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sh = sheet_();
    if (parent) {
      const ids = sh.getRange(2, 1, Math.max(sh.getLastRow() - 1, 1), 1).getValues().map((r) => String(r[0]));
      if (ids.indexOf(parent) < 0) return out_({ ok: false, error: 'no parent' });
    }
    const id = Utilities.getUuid().replace(/-/g, '').slice(0, 10);
    // 先頭が = + - @ の入力は数式扱いされないように ' を付ける
    const safe = (s) => (/^[=+\-@]/.test(s) ? "'" + s : s);
    sh.appendRow([id, parent, safe(name), safe(text), new Date()]);
    return out_({ ok: true, id: id });
  } finally {
    lock.releaseLock();
  }
}
