// ===========================================================
//  おすすめ情報データ
//  追加するときは同じ形で { } を1つ増やすだけ。
//  vi: ベトナム語の店名（運転手に見せる用）、addr: 住所、q: Googleマップ検索語（省略時は vi + addr）
// ===========================================================
window.CITIES = [
  {
    id: "longxuyen",
    name: "ロンスエン",
    vi: "Long Xuyên",
    lead: "おすすめのお店です。",
    note: "",
    spots: [
      {
        cat: "eat", name: "コムタム・バイティン", vi: "Cơm Tấm 7 Tình", addr: "Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/yhBCwCJc9VKd3zj57", tag: "15:00〜23:00",
        desc: "歩道に机を並べたローカルなコムタム屋台。写真は焼いた豚肉と煮卵のせ。Googleマップに店の情報はないので、「地図」の位置を目印に。\n\nメニュー：Cơm tấm 25K／Cơm sườn 30K／Tấm sườn 30K／Ba rọi（豚バラ）35K／Sườn cọng（骨付きスペアリブ）45K／Cơm gà（鶏）40K\n電話：0948 893 400",
        photos: ["img/7tinh-1.jpg", "img/7tinh-2.jpg", "img/7tinh-3.jpg"],
      },
      {
        cat: "eat", name: "コムニウ・タムニエン", vi: "Nhà Hàng Cơm Niêu Tâm Nhiên", addr: "110 Đ. Tôn Đức Thắng, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/FcK9V8FXobMe1Yx48", tag: "〜19:30",
        desc: "土鍋ご飯（コムニウ）と南部の家庭料理のレストラン。おこげが香ばしい土鍋ご飯に、魚の土鍋煮や甘酸っぱいスープを合わせるのが定番。2階に大人数向けの席があり、グループでも入りやすいです。閉店が19:30と早めなので注意。\n\nおすすめ：Canh Chua Cá Hú（魚の甘酸っぱいスープ）／Cá kho tộ（魚の土鍋煮）／Chả Nem\n予算：1人 10万〜20万ドン\n電話：0972 776 474",
      },
      {
        cat: "cafe", name: "カラ・ド・カフェ", vi: "CARA De CAFÉ", addr: "39 - 41 Nguyễn Trãi, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/991NxnSBKVnrog2a7", tag: "〜22:30",
        desc: "上品で居心地のいい、市の中心部のカフェ。メニューが豊富で、定番のベトナムコーヒー「Cà phê sữa đá」やパンナコッタが人気。",
      },
      {
        cat: "cafe", name: "ミア・マイア", vi: "Mia Maia café & savoury", addr: "3 Lý Thái Tổ, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/tVR8gaH46ddrhKYH8", tag: "〜21:45",
        desc: "ロンスエンでもセンスのいい、写真映えするおしゃれカフェ。中庭の奥にも席があります。ケーキや、ロンガン入りのパイナップルティー「Trà Nhãn Dứa」がおすすめ。",
      },
      {
        cat: "cafe", name: "メルシー・コーヒー", vi: "Merci Coffee", addr: "C13-03 đường số 12, KĐT Tây Sông Hậu, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/kwXS4JMgHpkZ36tS6", tag: "川の眺め",
        desc: "ハウ川沿いの新しい住宅エリアにある、広々として開放的なカフェ。涼しくなる夕方は川の景色がきれい。ミルクコーヒーが好評。",
      },
      {
        cat: "cafe", name: "エス・メコン・カフェ", vi: "S’Mekon caffé", addr: "455/6 Thoại Ngọc Hầu, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/tjmnHPnzHfJ29yD2A", tag: "〜23:00",
        desc: "ヨーロッパとアジアが混ざったような内装のアートカフェで、どこを撮っても絵になります。夜は23時まで。イチゴのモクテル「Mocktail Dâu」が人気。",
      },
      {
        cat: "cafe", name: "スターバックス", vi: "Starbucks Ngô Gia Tự Long Xuyên", addr: "1 Ngô Gia Tự, P. Mỹ Long, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/ukPsk7Ph66PQ6DbXA", tag: "〜22:00",
        desc: "旧市街の中心にあるスターバックス。窓からロンスエン大聖堂が見えます。コープマートやヴィンコムにも近く、買い物の合間のひと休みに。",
      },
      {
        cat: "shop", name: "コープマート", vi: "Co.opmart Long Xuyên", addr: "Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/nJpL57w9DDupxDVX6", tag: "スーパー",
        desc: "広くて綺麗なスーパーマーケット。飲み物やお菓子、ばらまき用のお土産をまとめて買うのに便利。",
      },
      {
        cat: "shop", name: "ヴィンコム・プラザ", vi: "Vincom Plaza Long Xuyên", addr: "1242 Trần Hưng Đạo, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/FZYv3tcC6v9oQvCD6", tag: "〜22:00",
        desc: "冷房の効いたショッピングモール。服やコスメ、スーパー（WinMart）、カフェ、映画館（LOTTE Cinema）が入っていて、上の階には韓国料理やジョリビーなどの飲食店も。暑い日の避難場所にも。",
      },
    ],
  },
  {
    id: "cantho",
    name: "カントー",
    vi: "Cần Thơ",
    lead: "おすすめのお店です。",
    note: "",
    spots: [
      {
        cat: "eat", name: "ルアネップ", vi: "Nhà Hàng Lúa Nếp", addr: "Sông Hậu, Cái Khế, Cần Thơ",
        map: "https://maps.app.goo.gl/5PdQM7JDkrcMXKqVA", tag: "〜22:30",
        desc: "ハウ川沿いにあるメコン料理の人気レストラン。川を眺めながら南部の郷土料理が楽しめ、「カントーNo.1」との声も。いつも混んでいるので、大人数なら早めの時間がおすすめ。\n\n人気：Bánh Xèo Tây Nam Bộ（南部風バインセオ）／Ốc Bu Nướng Tiêu（巻貝の胡椒焼き）\n予算：1人 10万〜50万ドン\n電話：0973 606 979",
      },
    ],
  },
  {
    id: "hcmc",
    name: "ホーチミン",
    vi: "TP. Hồ Chí Minh",
    lead: "おすすめのお店です。",
    note: "",
    spots: [
      {
        cat: "eat", name: "フーティウ・ナムヴァン・コーバック", vi: "Hủ Tiếu Nam Vang Đệ Nhất Cô Bắc", addr: "31A Cô Bắc, Cầu Ông Lãnh, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/92pDNjzMyuYn4Z5u8", tag: "24時間営業",
        desc: "ローカルに大人気のフーティウ・ナムヴァン（プノンペン風の米麺）の店。1区のベンタイン市場から歩ける距離で、24時間営業なので夜行バスの前後にも。人気はスープありの「Hủ Tiếu Nam Vang」と、汁なしの「Hủ Tiếu Khô」。1人 10万ドン（約600円）以内で食べられます。",
      },
    ],
  },
];

// ===========================================================
//  住所（式場・ホテル）
//  map: Googleマップの共有リンク（なければ vi + addr で検索）
// ===========================================================
window.VENUE = {
  name: "結婚式会場（チャムの家）",
  vi: "",     // ← ベトナム語の住所表記（運転手に見せる用）を入れる
  addr: "",   // ← 住所を入れる
  map: "https://maps.app.goo.gl/DV5xuP3xNnB84bFt8",
  desc: "ロンスエン市街から車で約40分。式は10/18(日) 早朝から始まります。",
};

window.HOTELS = [
  { name: "マリーナプラザ・ホテル", vi: "Marina Plaza Hotel Long Xuyên", addr: "Long Xuyên, An Giang", map: "", desc: "ロンスエン市内" },
  { name: "ドンスエン・ホテル", vi: "Đông Xuyên Hotel", addr: "9A Lương Văn Cự, P. Mỹ Long, Long Xuyên, An Giang", map: "https://maps.app.goo.gl/7QnnNLstMvTimxia9", desc: "市中心部の老舗ホテル" },
  { name: "ララ・ホテル", vi: "Lara Hotel Long Xuyên", addr: "46-48 Hùng Vương, P. Mỹ Phước, Long Xuyên, An Giang", map: "https://maps.app.goo.gl/GUpozvdLLK3ySD5N6", desc: "中心部の目抜き通り沿い" },
  { name: "チャウクオン・ホテル", vi: "Châu Khương Hotel", addr: "Số 2 Hà Hoàng Hổ, P. Mỹ Xuyên, Long Xuyên, An Giang", map: "https://maps.app.goo.gl/5DKSn6KsuLFsbszk6", desc: "レストラン・カフェ併設" },
];

window.BUS = [
  { name: "FUTA（フォンチャン）ファングーラオ営業所", vi: "FUTA Bus Lines – Văn phòng Phạm Ngũ Lão", addr: "205 Phạm Ngũ Lão, Q.1 (cũ), TP. Hồ Chí Minh", map: "https://maps.app.goo.gl/L7cwWJW3WPkuJad38", tag: "まずはここへ", desc: "1区の旅行者街にあるFUTAの営業所。ここで「ミエンタイ・バスターミナル発 → ロンスエン行き」のチケットが買えます。ここからミエンタイ・バスターミナルまでは無料の送迎バスがあります。ホットライン 1900 6067。" },
  { name: "ミエンタイ・バスターミナル", vi: "Bến xe Miền Tây", addr: "395 Kinh Dương Vương, An Lạc, Bình Tân, TP. Hồ Chí Minh", map: "", tag: "ここでバスに乗車", desc: "ロンスエン行きのバスが出るターミナル。FUTAバスの乗り場は、ターミナルに入って一番左奥です。乗車後に行き先を聞かれるので、泊まるホテルの名前を伝えてください（上のホテル欄の「運転手に見せる」でホテル名を表示できます）。ロンスエンに着いたら、ホテルまで無料で送ってもらえます。" },
];

// ===========================================================
//  全体の流れ（名前は載せない）
// ===========================================================
window.SCHEDULE = [
  { d: "10/17(土)", t: "夜", what: "宿泊：会場近くのホテル、またはロンスエン市内のホテル", where: "会場近く／ロンスエン" },
  { d: "10/18(日)", t: "早朝〜昼過ぎ", what: "結婚式", where: "会場", main: true },
  { d: "10/18(日)", t: "式のあと", what: "カントー／ホーチミン／チャウドックへ移動する方も", where: "各方面" },
  { d: "10/19(月)", t: "終日", what: "移動日（おすすめ）：ロンスエン → 各方面へ", where: "ロンスエン発" },
];

// ===========================================================
//  移動ガイド（所要時間は行程案内に合わせた目安）
// ===========================================================
window.ROUTES = [
  { from: "カントー", to: "会場（新婦の実家）", how: "タクシー", time: "約2時間", cost: "", tip: "17日午前に移動。人数がまとまるなら7人乗りを1台で。" },
  { from: "会場", to: "ロンスエン市街", how: "タクシー／車", time: "約40分", cost: "", tip: "ロンスエンのホテルに泊まる方の目安。ホテル名は「運転手に見せる」で表示できます。" },
  { from: "ロンスエン", to: "カントー", how: "タクシー／配車アプリ", time: "約2時間", cost: "", tip: "ホテルのフロントに頼めば車を呼んでもらえます。乗る前に料金を確定させておくと安心。" },
  { from: "ホーチミン", to: "ロンスエン", how: "長距離バス（Phương Trang など）／車", time: "約5〜6時間", cost: "バス1人 約20〜30万ドン", tip: "① 1区のFUTAファングーラオ営業所でチケットを買う → ② 無料送迎バスでミエンタイ・バスターミナルへ → ③ バスに乗ったら行き先を聞かれるのでホテル名を伝える → ④ ロンスエン到着後、ホテルまで無料送迎。寝台バスなので横になって移動できます。" },
  { from: "ロンスエン", to: "チャウドック", how: "タクシー／バス", time: "約1.5時間", cost: "", tip: "日帰りなら車をチャーターすると楽。" },
  { from: "ホーチミン空港", to: "市内中心部", how: "Grab／109番バス", time: "車で約30〜40分", cost: "", tip: "空港タクシーより配車アプリが明朗会計。109番バスはベンタイン方面へ。国内線は新しいT3ターミナル発着の便が多いので要確認。" },
];

// ===========================================================
//  旅のヒント・料理早見表・ひとことベトナム語
// ===========================================================
window.TIPS = [
  { t: "お金のかんたん換算", d: "1万ドン ≒ 約60円。ドンの金額から「0を3つ取って×6」＝円。例）50,000ドン → 50×6 ＝ 約300円。" },
  { t: "現金を多めに", d: "屋台・ローカル食堂は現金のみの店が多いです。1万〜5万ドンの小額紙幣を多めに持っておくと便利。" },
  { t: "配車アプリを入れておく", d: "「Grab」か「Xanh SM」があれば、言葉が通じなくても目的地を指定して乗れます。ホテルでタクシーを呼んでもらうのも手。" },
  { t: "10月の天気", d: "雨季の終わり。日中は30℃前後で、夕方にスコールが来ることも。折りたたみ傘と虫よけを。" },
];

window.MONEY = [
  ["10,000₫", "60円"], ["20,000₫", "120円"], ["50,000₫", "300円"],
  ["100,000₫", "600円"], ["200,000₫", "1,200円"], ["500,000₫", "3,000円"],
];

window.PHRASES = [
  { g: "あいさつ", ja: "こんにちは", vi: "Xin chào", yomi: "シン チャオ" },
  { g: "あいさつ", ja: "ありがとう", vi: "Cảm ơn", yomi: "カム オン" },
  { g: "あいさつ", ja: "ごめんなさい／すみません", vi: "Xin lỗi", yomi: "シン ローイ" },
  { g: "あいさつ", ja: "大丈夫です", vi: "Không sao", yomi: "コン サオ" },
  { g: "あいさつ", ja: "はじめまして（会えてうれしい）", vi: "Rất vui được gặp bạn", yomi: "ザッ ヴイ ドゥオック ガップ バン" },
  { g: "あいさつ", ja: "私は日本人です", vi: "Tôi là người Nhật", yomi: "トイ ラー グオイ ニャット" },
  { g: "あいさつ", ja: "さようなら", vi: "Tạm biệt", yomi: "タム ビエット" },

  { g: "結婚式で", ja: "結婚おめでとう！", vi: "Chúc mừng đám cưới!", yomi: "チュック ムン ダム クオイ！" },
  { g: "結婚式で", ja: "末永くお幸せに", vi: "Chúc hai bạn trăm năm hạnh phúc", yomi: "チュック ハイ バン チャム ナム ハン フック" },
  { g: "結婚式で", ja: "乾杯！（いっせーの！）", vi: "Một, hai, ba, dô!", yomi: "モッ、ハイ、バー、ヨー！" },
  { g: "結婚式で", ja: "一気に飲もう！", vi: "Trăm phần trăm!", yomi: "チャム ファン チャム！" },
  { g: "結婚式で", ja: "もう飲めません…", vi: "Tôi uống không nổi nữa", yomi: "トイ ウオン コン ノイ ヌア" },
  { g: "結婚式で", ja: "きれい！", vi: "Đẹp quá!", yomi: "デップ クア！" },

  { g: "食事", ja: "おいしい！", vi: "Ngon quá!", yomi: "ゴン クア！" },
  { g: "食事", ja: "メニューを見せてください", vi: "Cho tôi xem thực đơn", yomi: "チョー トイ セム トゥック ドン" },
  { g: "食事", ja: "これをください", vi: "Cho tôi cái này", yomi: "チョー トイ カイ ナイ" },
  { g: "食事", ja: "辛くしないで", vi: "Không cay", yomi: "コン カイ" },
  { g: "食事", ja: "パクチー抜きで", vi: "Không ngò", yomi: "コン ゴー" },
  { g: "食事", ja: "氷なしで", vi: "Không đá", yomi: "コン ダー" },
  { g: "食事", ja: "甘さ控えめで", vi: "Ít đường", yomi: "イッ ドゥオン" },
  { g: "食事", ja: "ビール1本ください", vi: "Cho tôi một chai bia", yomi: "チョー トイ モッ チャイ ビア" },
  { g: "食事", ja: "お会計お願いします", vi: "Tính tiền", yomi: "ティン ティエン" },

  { g: "買い物", ja: "いくらですか？", vi: "Bao nhiêu tiền?", yomi: "バオ ニュー ティエン？" },
  { g: "買い物", ja: "高すぎる！", vi: "Đắt quá!", yomi: "ダッ クア！" },
  { g: "買い物", ja: "安くしてくれますか？", vi: "Bớt được không?", yomi: "ボッ ドゥオック コン？" },
  { g: "買い物", ja: "見ているだけです", vi: "Tôi chỉ xem thôi", yomi: "トイ チー セム トイ" },

  { g: "バスのチケット", ja: "ロンスエン行きのチケットを1枚ください", vi: "Cho tôi một vé đi Long Xuyên", yomi: "チョー トイ モッ ヴェー ディー ロン スエン" },
  { g: "バスのチケット", ja: "2枚ください", vi: "Cho tôi hai vé", yomi: "チョー トイ ハイ ヴェー" },
  { g: "バスのチケット", ja: "何時発ですか？", vi: "Mấy giờ xe chạy?", yomi: "マイ ゾー セー チャイ？" },
  { g: "バスのチケット", ja: "明日の朝のバスはありますか？", vi: "Có xe sáng mai không?", yomi: "コー セー サン マイ コン？" },
  { g: "バスのチケット", ja: "下の段のベッドがいいです", vi: "Cho tôi giường tầng dưới", yomi: "チョー トイ ズオン タン ズオイ" },
  { g: "バスのチケット", ja: "送迎バスはありますか？", vi: "Có xe trung chuyển không?", yomi: "コー セー チュン チュエン コン？" },
  { g: "バスのチケット", ja: "乗り場はどこですか？", vi: "Lên xe ở đâu?", yomi: "レン セー オー ダウ？" },
  { g: "バスのチケット", ja: "（ホテル名）で降ります", vi: "Tôi xuống ở khách sạn …", yomi: "トイ スオン オー カック サン …" },

  { g: "移動・困ったとき", ja: "ここへ行きたいです", vi: "Cho tôi đến đây", yomi: "チョー トイ デン ダイ" },
  { g: "移動・困ったとき", ja: "ここで止めてください", vi: "Dừng ở đây", yomi: "ズン オー ダイ" },
  { g: "移動・困ったとき", ja: "まっすぐ／右／左", vi: "Đi thẳng / Rẽ phải / Rẽ trái", yomi: "ディー タン／ゼー ファイ／ゼー チャイ" },
  { g: "移動・困ったとき", ja: "トイレはどこですか？", vi: "Nhà vệ sinh ở đâu?", yomi: "ニャー ヴェー シン オー ダウ？" },
  { g: "移動・困ったとき", ja: "わかりません", vi: "Tôi không hiểu", yomi: "トイ コン ヒエウ" },
  { g: "移動・困ったとき", ja: "助けてください", vi: "Giúp tôi với", yomi: "ズップ トイ ヴォイ" },
];
