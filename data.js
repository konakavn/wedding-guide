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
        cat: "cafe", name: "ハイランズコーヒー", vi: "Highlands Coffee 316 Trần Hưng Đạo", addr: "316 Trần Hưng Đạo, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/2FqLxAjqPY3J45xY7", tag: "〜23:00",
        desc: "ベトナムでいちばん有名なカフェチェーン。迷ったらここ。定番は練乳入りのアイスコーヒー「Phin Sữa Đá」と、お茶の上にクリームとゼリーがのった「Trà Sen Vàng」。冷房が効いていて、ひと休みにぴったり。",
      },
      {
        cat: "cafe", name: "アルマ（フルーツジュース）", vi: "Nước ép trái cây nhiệt đới ALMA - Long Xuyên", addr: "775 Đ. Hà Hoàng Hổ, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/fmWf5wSqJcXaiXqy8", tag: "〜23:30",
        desc: "フルーツ好きにおすすめ。南国フルーツを使ったフレッシュジュースの店で、果物の味がしっかりしていて手頃な値段。持ち帰りが中心なので、買ってホテルで飲んだり、散歩しながら飲んだりするのにちょうどいいです。\n\n予算：1杯 10万ドン以内\n電話：0932 932 982",
      },
      {
        cat: "see", name: "ロンスエン市場", vi: "Chợ Long Xuyên", addr: "Số 02 Nguyễn Trãi, P. Long Xuyên, An Giang",
        map: "", tag: "地元の市場", photos: ["img/cho-longxuyen-1.jpg"],
        desc: "街の中心にある、地元の人の台所の大きな市場。赤い「CHỢ LONG XUYÊN」の看板が目印です。中には食料品や日用品、布、雑貨などのお店がぎっしり。まわりの通りにも露店が並び、ローカルの雰囲気を味わえます。川沿いの水上マーケットもすぐ近くです。",
      },
      {
        cat: "see", name: "ロンスエン水上マーケット", vi: "Chợ Nổi Long Xuyên", addr: "22 Ngô Thời Nhậm, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/LAHFMucbpv8eztPE9", tag: "注意",
        desc: "ハウ川に浮かぶロンスエンの水上マーケット。\n\n⚠️ 注意：朝の水上マーケットは現在ほぼやっていません。売り物の船を期待して早起きして行くと、がっかりするかもしれません。川沿いの景色や地元の雰囲気を楽しむつもりで。",
      },
      {
        cat: "souvenir", name: "バインチャン・ザーフン", vi: "Bánh tráng Gia Hưng", addr: "582 Đường 12, Long Xuyên, An Giang",
        map: "https://maps.app.goo.gl/CZZ7H98a1yXzb4KV6", tag: "うまい！",
        desc: "ライスペーパー（バインチャン）のお菓子の専門店。味つけや形の違うバインチャンがずらりと並んでいて、どれもおいしいです。おやつにも、ばらまき用のお土産にも。",
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
      {
        cat: "eat", name: "ホアスー", vi: "Nhà hàng Hoa Sứ", addr: "KDL Cồn, Cái Khế, Cần Thơ",
        map: "https://maps.app.goo.gl/bHXJuRqj1ixB6BL49", tag: "〜22:00",
        desc: "川の中洲にある庭園風の大きなレストラン。池のまわりに東屋の席があり、ニンキウ埠頭の対岸の景色も楽しめます。メコンの郷土料理や海鮮、鍋が豊富で、大人数でもOK。\n\n人気：Ốc Bu Nướng Tiêu（巻貝の胡椒焼き）／Gỏi Bông So Đũa（ソーダーの花のサラダ）\n予算：1人 10万〜60万ドン\n電話：0292 3820 717",
      },
      {
        cat: "eat", name: "コムニウ・クエゴアイ", vi: "Cơm Niêu Quê Ngoại Cần Thơ", addr: "62 Lê Lợi, Cái Khế, Cần Thơ",
        map: "https://maps.app.goo.gl/AjDcs2mFWWhQv33J8", tag: "〜20:30",
        desc: "ベトナムの家庭料理が食べられるお店。名物は土鍋ご飯（コムニウ）と魚の土鍋煮。地元の人にも人気で、昼どきは混みます。\n\nおすすめ：Cơm Niêu（土鍋ご飯）／Cá Kho Tộ（魚の土鍋煮）／Canh Chua Cá Hú（魚の甘酸っぱいスープ）\n予算：1人 〜20万ドン\n電話：0919 655 564",
      },
      {
        cat: "eat", name: "バインセオ・バイトイ", vi: "Quán Bánh xèo 7 Tới", addr: "45 Đ. Hoàng Quốc Việt, An Bình, Cần Thơ",
        map: "https://maps.app.goo.gl/9Nt5FiYKha7kx73L9", tag: "〜22:00",
        desc: "カントーで有名なバインセオ（ベトナム風お好み焼き）の店。パリパリの生地を野菜で包んで、タレにつけて食べます。アヒル料理も名物。中心部からは少し離れているのでGrabで。\n\n人気：Bánh Xèo（バインセオ）／Vịt Xiêm（アヒル）\n予算：1人 〜10万ドン\n電話：0947 699 743",
      },
      {
        cat: "eat", name: "フーティウ・ナムヴァン・アーダイ", vi: "Hủ tiếu Nam Vang A Đại", addr: "10 Đ. Nguyễn Khuyến, Ninh Kiều, Cần Thơ",
        map: "https://maps.app.goo.gl/YVBCH9TFc8byTpop8", tag: "16:00〜",
        desc: "フーティウ・ナムヴァン（プノンペン風の米麺）の専門店。スープが主役で、モツやイカ、エビ、さつま揚げなど具だくさん。夕方16時からの営業です。\n\nおすすめ：Hủ tiếu Nam Vang（大で 6万5千ドンほど）\n予算：1人 〜10万ドン\n電話：0777 702 797",
      },
      {
        cat: "dinner", name: "ビア＆ワイン（フランス料理）", vi: "Beer & Wine Restaurant", addr: "34-36 Đường A4, KDC Hưng Phú, Cần Thơ",
        map: "https://maps.app.goo.gl/yUcifHs5dCbEHFUz9", tag: "15:00〜",
        desc: "評価の高いフランス料理のレストラン。ワインが豊富で、ステーキや子羊の赤ワイン煮込みなど本格的な洋食が楽しめます。ちょっと特別な夜のディナーに。予約がおすすめ。\n\n人気：Steak Tenderloin／Bắp Cừu Hầm Rượu Vang（子羊すね肉の赤ワイン煮）\n電話：0907 459 459",
      },
      {
        cat: "see", name: "ニンキウ広場（水上マーケットのボート）", vi: "Quảng trường đi bộ Ninh Kiều", addr: "Đ. Hai Bà Trưng, Ninh Kiều, Cần Thơ",
        map: "https://maps.app.goo.gl/e5z9xi1PyfEdM2VS9", tag: "ボート受付",
        desc: "川沿いの広場・散策スポット。カイラン水上マーケット行きのボートは、このあたりで客引きに声をかけられるので、ここでチケットを買えます。料金と出発時間はその場で確認・交渉を。水上マーケットは早朝なので、前日に予約しておくと安心です。\n\n土日の夜（18:30〜22:00ごろ）は歩行者天国になり、屋台やお土産で賑わいます。",
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
      {
        cat: "eat", name: "フォー・ベトナム（石焼きフォー）", vi: "Phở Việt Nam", addr: "14 Phạm Hồng Thái, Bến Thành, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/r2abxehT4QVuZnV88", tag: "めちゃうまい！", photos: ["img/phovietnam-1.jpg"],
        desc: "めちゃめちゃうまいフォー屋。ぐつぐつ煮えたスープが熱々の石鍋で出てきて、別皿の麺と生の牛肉を自分で入れて食べる「石焼きフォー」が名物です。メニューの C1〜C5（石焼きフォー）は絶対に食べたほうがいいです！ ベンタイン市場のすぐ近くで、深夜3時まで営業。\n\n予算：1人 10万〜20万ドン",
      },
      {
        cat: "eat", name: "バインカインクア・ヒエン", vi: "Bánh Canh Cua Hiền", addr: "395 Bùi Đình Túy, Bình Thạnh, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/ByXVEK69qVrwMYCGA", tag: "めちゃうま！", photos: ["img/banhcanhcua-1.jpg"],
        desc: "めちゃうまのバインカイン・クア（カニ入りのもちもち太麺スープ）の店。カニのうまみが溶けたとろみのあるスープに、豚肉やチャー（ベトナムのかまぼこ）がのっています。揚げパン（クアイ）をスープにひたして食べるのもおすすめ。地元の人が通うローカル店です。ビンタン区にあるので、1区からはGrabで。\n\n人気：Bánh Canh Cua Đặc Biệt（スペシャル）\n予算：1人 10万ドン以内\n電話：0908 248 366",
      },
      {
        cat: "eat", name: "バインミー・フインホア", vi: "Bánh Mì Huynh Hoa", addr: "26 Lê Thị Riêng, Bến Thành, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/9f2brb3Lv9B9qaGM8", tag: "〜22:00",
        desc: "ホーチミンでいちばん有名なバインミー屋。パテ、ハム、チャールア（ベトナムハム）などがぎっしり詰まった、ずっしり重いバインミーが名物。1区のベンタイン市場の近くで、いつも行列ができていますが回転は早いです。持ち帰りして、ホテルやバスの中で食べるのもおすすめ。\n\n予算：1個 10万ドン以内",
      },
      {
        cat: "eat", name: "はま寿司（イオンモール・タンフー）", vi: "Hama Sushi Aeon Mall Tân Phú Celadon", addr: "AEON MALL Tân Phú Celadon, 30 Tân Thắng, Tân Sơn Nhì, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/JCtEF6BUZ2RKjzT48", tag: "10:00〜21:30",
        desc: "日本でおなじみの回転寿司チェーン「はま寿司」。イオンモール・タンフーの中にあり、味は日本とほぼ同じとの声も。ベトナム料理が続いて和食が恋しくなったときに。ラーメンやデザートもあります。中心部（1区）からは車で30〜40分ほど離れているので、Grabで。\n\n予算：1人 20万〜30万ドン",
      },
      {
        cat: "cafe", name: "サイゴン・コーヒー・ロースタリー", vi: "Saigon Coffee Roastery", addr: "232/13 Võ Thị Sáu, Xuân Hòa, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/QSKMSWSnRt7Pn1YS8", tag: "7:00〜",
        desc: "いい豆を使っている自家焙煎のコーヒー屋。ベトナム産やエチオピアなどの豆が選べ、バリスタが丁寧に淹れてくれます。コーヒー好きなら一度は行ってほしいお店。路地の奥にある隠れ家のような雰囲気です。\n\n人気：カプチーノ／フラットホワイト／ココナッツコーヒー\n予算：1人 10万ドン以内",
      },
      {
        cat: "cafe", name: "シン・ヘリテージ", vi: "SHIN Heritage", addr: "27 Lưu Văn Lang, Bến Thành, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/rYEPKABPEPWf1rft8", tag: "7:30〜",
        desc: "ベトナム産の上質な豆にこだわったスペシャルティコーヒーの店。ベンタイン市場から歩ける1区の中心にあります。ハンドドリップ（V60）のほか、卵を泡立ててのせたベトナム名物「エッグコーヒー」も人気。\n\n人気：Egg Coffee（エッグコーヒー）／Cà Phê（ベトナムコーヒー）\n予算：1人 10万〜20万ドン",
      },
      {
        cat: "souvenir", name: "バインチャン・ミーハン", vi: "Bánh Tráng Mỹ Hạnh", addr: "6a Ngô Tất Tố, Thạnh Mỹ Tây, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/nUog72QUsmtHuvrv6", tag: "うまい！",
        desc: "ライスペーパー（バインチャン）のお菓子の店。甘いのもしょっぱいのも種類が豊富で、どれもおいしくて安い。地元の人がまとめ買いしていく人気店です。おやつにも、ばらまき用のお土産にも。〜22:15。\n\n電話：0933 155 755",
      },
      {
        cat: "souvenir", name: "高島屋（ホーチミン）", vi: "Takashimaya", addr: "92-94 Nam Kỳ Khởi Nghĩa, Sài Gòn, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/7cD346CvvJ18WJoi8", tag: "〜21:30",
        desc: "お土産を買うならここ。1区の中心にある日系デパートで、地下の食品売り場にはベトナムコーヒーやお菓子、ドライフルーツなど、きれいに包装されたお土産がそろっています。値段が表示されていて交渉いらず、カードも使えるので安心。冷房が効いていて、お手洗いも清潔です。",
      },
      {
        cat: "souvenir", name: "メゾン・マルゥ（チョコレート）", vi: "Maison Marou", addr: "167-169 Đ. Calmette, Bến Thành, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/RRusK8TJKnAspcC59", tag: "〜22:00",
        desc: "ベトナム産カカオを使ったチョコレートブランド「マルゥ」の本店。カラフルなパッケージの板チョコはお土産に人気です。併設のカフェではケーキやホットチョコレートも。ホーチミン市内に支店がたくさんあり、高島屋地下のスーパーでも買えます。",
      },
      {
        cat: "souvenir", name: "アルヴィア（チョコレート）", vi: "Alluvia Chocolate", addr: "15-17 Phan Chu Trinh, Bến Thành, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/rF3fZimfsi8tm3nX8", tag: "〜22:00",
        desc: "ベトナム産カカオのチョコレートブランド。ベトナムらしいイラストのパッケージで、配りやすいお土産にぴったり。ジェラートやココアも楽しめます。ベンタイン市場のすぐ近く。ホーチミン市内に支店がたくさんあり、高島屋地下のスーパーでも買えます。",
      },
      {
        cat: "shop", name: "イオンモール・ビンタン", vi: "AEON Mall Bình Tân", addr: "1 Đường Số 17A, An Lạc, Bình Tân, TP. Hồ Chí Minh",
        map: "https://maps.app.goo.gl/mxvzgeQ8KgmJzuEh9", tag: "バス待ちに", photos: ["img/aeon-binhtan-1.jpg", "img/aeon-binhtan-2.jpg", "img/aeon-binhtan-3.jpg"],
        desc: "ミエンタイ・バスターミナルから車で5分ほどの大きなショッピングモール。バスの前後の時間つぶしにちょうどいいです。サイゼリヤ（写真）をはじめ、韓国料理やタイ料理などレストランがたくさんあり、映画館（CGV）も。冷房が効いていて、トイレもきれいです。",
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
  desc: "ロンスエン市街から車で約40分。式は10/18(日) 午前から始まります。移動方法や時間など、詳細は追って連絡します。",
};

window.HOTELS = [
  { name: "マリーナプラザ・ホテル", vi: "Marina Plaza Hotel Long Xuyên", addr: "Long Xuyên, An Giang", map: "", desc: "ロンスエン市内" },
  { name: "ドンスエン・ホテル", vi: "Đông Xuyên Hotel", addr: "9A Lương Văn Cự, P. Mỹ Long, Long Xuyên, An Giang", map: "https://maps.app.goo.gl/7QnnNLstMvTimxia9", desc: "市中心部の老舗ホテル" },
  { name: "ララ・ホテル", vi: "Lara Hotel Long Xuyên", addr: "46-48 Hùng Vương, P. Mỹ Phước, Long Xuyên, An Giang", map: "https://maps.app.goo.gl/GUpozvdLLK3ySD5N6", desc: "中心部の目抜き通り沿い" },
  { name: "チャウクオン・ホテル", vi: "Châu Khương Hotel", addr: "Số 2 Hà Hoàng Hổ, P. Mỹ Xuyên, Long Xuyên, An Giang", map: "https://maps.app.goo.gl/5DKSn6KsuLFsbszk6", desc: "レストラン・カフェ併設" },
];

window.BUS = [
  { name: "FUTA（フォンチャン）ファングーラオ営業所", vi: "FUTA Bus Lines – Văn phòng Phạm Ngũ Lão", addr: "205 Phạm Ngũ Lão, Q.1 (cũ), TP. Hồ Chí Minh", map: "https://maps.app.goo.gl/L7cwWJW3WPkuJad38", tag: "まずはここへ", desc: "1区の旅行者街にあるFUTAの営業所。ここで「ミエンタイ・バスターミナル発 → ロンスエン行き」のチケットが買えます。ここからミエンタイ・バスターミナルまでは無料の送迎バスがあります。ホットライン 1900 6067。\n\n写真はフォンチャン（FUTA）の寝台バスの車内。縦はゆったり足を伸ばせますが、横幅はせまめです。\n\n⚠️ 車内は冷房が効いていて寒いので、長袖・長ズボンがおすすめ。\n⚠️ 休憩は途中で1回だけで、トイレに行けるのはそのときだけです。乗る前に必ずトイレを済ませておいてください。", photos: ["img/futa-bus-1.jpg"] },
  { name: "ミエンタイ・バスターミナル", vi: "Bến xe Miền Tây", addr: "395 Kinh Dương Vương, An Lạc, Bình Tân, TP. Hồ Chí Minh", map: "", tag: "ここでバスに乗車", desc: "ロンスエン行きのバスが出るターミナル。FUTAバスの乗り場は、ターミナルに入って一番左奥です。乗車後に行き先を聞かれるので、泊まるホテルの名前を伝えてください（上のホテル欄の「運転手に見せる」でホテル名を表示できます）。ロンスエンに着いたら、ホテルまで無料で送ってもらえます。\n\n【ここで降りたとき】ターミナルにはタクシーの客引きが多いですが、配車アプリ（Grabなど）がおすすめ。路線バスもありますが、アプリが楽です。入口付近で呼べます。ドライバーと会えないときは、近くのベトナム人に画面を見せて手伝ってもらうとスムーズ。\n\nバスの待ち時間があるときは、車で5分ほどのイオンモール・ビンタン（ホーチミンの「買い物」欄）で時間をつぶせます。" },
  { name: "メコ・リムジン（ホーチミン営業所）", vi: "MEKO LIMOUSINE VIETNAM", addr: "189 Đ. Đào Duy Từ, Diên Hồng, Hồ Chí Minh", map: "https://maps.app.goo.gl/QqWnumDXzR4ozK9M8", tag: "ホーチミン → カントー", desc: "カントー行きのリムジンバス（座席がゆったりした小型バス）の会社。ホーチミンからカントーまで約3時間。予約は電話 1900 2030 か mekolimo.com で。" },
  { name: "メコ・リムジン（カントー営業所）", vi: "MEKO LIMOUSINE CẦN THƠ", addr: "1-3 Đ. B18, KDC Hưng Phú, Cần Thơ", map: "https://maps.app.goo.gl/ewvpZFEdeo3qKu4z6", tag: "カントー → ホーチミン", desc: "カントーからホーチミンへ戻るときに。カントー市内なら無料でホテルまで迎えに来てくれます（予約時にホテル名を伝える）。予約は電話 1900 2036 か mekolimo.com で。" },
];

// ===========================================================
//  全体の流れ（名前は載せない）
// ===========================================================
window.SCHEDULE = [
  { d: "10/17(土)", t: "夜", what: "宿泊：会場近くのホテル、またはロンスエン市内のホテル", where: "会場近く／ロンスエン" },
  { d: "10/18(日)", t: "午前〜昼過ぎ", what: "結婚式", where: "会場", main: true },
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
  { from: "ホーチミン", to: "ロンスエン", how: "長距離バス（Phương Trang など）／車", time: "約5〜6時間", cost: "バス1人 約20〜30万ドン", tip: "① 1区のFUTAファングーラオ営業所でチケットを買う → ② 無料送迎バスでミエンタイ・バスターミナルへ → ③ バスに乗ったら行き先を聞かれるのでホテル名を伝える → ④ ロンスエン到着後、ホテルまで無料送迎。寝台バスなので横になって移動できます（縦はゆったり、横幅はせまめ）。車内は寒いので長袖・長ズボンを。休憩（トイレ）は途中1回だけなので、乗る前にトイレを。" },
  { from: "ロンスエン", to: "チャウドック", how: "タクシー／バス", time: "約1.5時間", cost: "", tip: "日帰りなら車をチャーターすると楽。" },
  { from: "ホーチミン空港", to: "市内中心部", how: "Grab／109番バス", time: "車で約30〜40分", cost: "", tip: "空港タクシーより配車アプリが明朗会計。109番バスはベンタイン方面へ。国内線は新しいT3ターミナル発着の便が多いので要確認。" },
  { from: "ホーチミン", to: "カントー", how: "リムジンバス（MEKO LIMOUSINE）", time: "約3時間", cost: "", tip: "ホーチミン営業所（189 Đào Duy Từ）から出発。予約は電話か mekolimo.com で。下の「バス乗り場」に場所があります。" },
  { from: "カントー", to: "ホーチミン", how: "リムジンバス（MEKO LIMOUSINE）", time: "約3時間", cost: "", tip: "カントー市内のホテルまで無料で迎えに来てくれます。予約のときにホテル名を伝えてください。" },
];

// ===========================================================
//  旅のヒント・料理早見表・ひとことベトナム語
// ===========================================================
window.TIPS = [
  { t: "お金のかんたん換算", d: "1万ドン ≒ 約60円。ドンの金額から「0を3つ取って×6」＝円。例）50,000ドン → 50×6 ＝ 約300円。" },
  { t: "現金を多めに", d: "屋台・ローカル食堂は現金のみの店が多いです。1万〜5万ドンの小額紙幣を多めに持っておくと便利。" },
  { t: "配車アプリを入れておく", d: "「Grab」か「Xanh SM」があれば、言葉が通じなくても目的地を指定して乗れます。ホテルでタクシーを呼んでもらうのも手。" },
  { t: "10月の天気", d: "雨季の終わり。日中は30℃前後で、夕方にスコールが来ることも。折りたたみ傘と虫よけを。" },
  { t: "メコンデルタっぽいお土産", d: "ココナッツキャンディ（Kẹo dừa）：メコンデルタの定番土産。\nバインピア（Bánh pía）：ドリアンや緑豆のあんが入ったメコンの焼き菓子。\nバインチャン（ライスペーパー）のお菓子：ロンスエンとホーチミンのおすすめ店を各ページの「お土産」に載せています。" },
  { t: "ベトナム定番のお土産", d: "コーヒー：ホーチミンのページにおすすめのコーヒー屋を載せています。\nチョコレート：ベトナム産カカオの「マルゥ（Marou）」と「アルヴィア（Alluvia）」が人気。どちらもホーチミンに支店がたくさんあり、高島屋地下のスーパーでも買えます。" },
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
