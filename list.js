const singableList = [
  ['ボーカロイド', '1925', '166-1862-9', 'https://www.nicovideo.jp/watch/sm8446036'],
  ['ボーカロイド', '39', '', 'https://www.nicovideo.jp/watch/sm18856244'],
  ['ボーカロイド', '7150日', '', 'https://www.nicovideo.jp/watch/sm31370195'],
  ['ボーカロイド', 'Alice in Musicland', '701-4572-5', 'https://www.nicovideo.jp/watch/sm15128476'],
  ['ボーカロイド', 'Bad ∞ End ∞ Night', '', 'https://www.nicovideo.jp/watch/sm16730340'],
  ['ボーカロイド', 'Blessing', '', 'https://www.nicovideo.jp/watch/sm23368230'],
  ['ボーカロイド', 'Booo!', '241-4610-2', 'https://youtu.be/hbclualhtQI'],
  ['ボーカロイド', 'Crazy ∞ nighT', '', 'https://www.nicovideo.jp/watch/sm18397641'],
  ['ボーカロイド', 'ECHO', '', 'https://www.nicovideo.jp/watch/sm24682610'],
  ['ボーカロイド', 'EveR ∞ LastinG ∞ NighT', '', 'https://www.nicovideo.jp/watch/sm24449943'],
  ['ボーカロイド', 'Forward', '741-5517-2', 'https://nico.ms/sm37957286'],
  ['ボーカロイド', 'Good Morning, Polar Night', '709-8488-3', 'https://www.nicovideo.jp/watch/sm23069605'],
  ['ボーカロイド', 'Happy Halloween', '', 'https://www.nicovideo.jp/watch/sm26909754'],
  ['ボーカロイド', 'Initial Song', '718-1309-8', 'https://www.nicovideo.jp/watch/sm31575244'],
  ['ボーカロイド', 'KING', '738-0307-3', 'https://youtu.be/WbuROXgJusE'],
  ['ボーカロイド', 'MIRA', '', 'https://youtu.be/BjIembzFJZ0'],
  ['ボーカロイド', 'Music Wizard of OZ', '709-9580-0', 'https://youtu.be/t3bWF70ncO8'],
  ['ボーカロイド', 'ODDS＆ENDS', '500-8096-2', 'https://www.nicovideo.jp/watch/sm18801736'],
  ['ボーカロイド', 'ReadySteady', '257-0672-1', 'https://www.nicovideo.jp/watch/sm37604675'],
  ['ボーカロイド', 'Snow Fairy Story', '711-9465-7', 'https://www.nicovideo.jp/watch/sm25466801'],
  ['ボーカロイド', 'Twilight ∞ nighT', '', 'https://www.nicovideo.jp/watch/sm20088983'],
  ['ボーカロイド', 'alive', '', 'https://www.nicovideo.jp/watch/sm37603035'],
  ['ボーカロイド', 'daze', '', 'https://youtu.be/HGfAuwfJEvc'],
  ['ボーカロイド', 'fromYtoY', '160-2622-5', 'https://youtu.be/tgUdenH2IIw'],
  ['ボーカロイド', 'magnet', '162-2436-1', 'https://youtu.be/foH4kE1pV7M'],
  ['ボーカロイド', 'needLe', '738-3550-1', 'https://youtu.be/nxMdvGS6j0g'],
  ['ボーカロイド', 'いかないで', '708-7591-0', 'https://youtu.be/oPhNFeIyOVA'],
  ['ボーカロイド', 'いーあるふぁんくらぶ', '188-5831-7', 'https://www.nicovideo.jp/watch/sm18657330'],
  ['ボーカロイド', 'い～やい～やい～や', '719-7188-2', 'https://youtu.be/v95k7bXeEOs'],
  ['ボーカロイド', 'うみたがり', '211-2309-8', 'https://youtu.be/4hQQY_AjHYM'],
  ['ボーカロイド', 'おじゃま虫', '709-6494-7', 'https://nico.ms/sm28291987'],
  ['ボーカロイド', 'おちゃめ機能', '172-1271-5', 'https://www.nicovideo.jp/watch/sm12408913'],
  ['ボーカロイド', 'おねがいダーリン', '210-9969-3', 'https://youtu.be/40WytpxEiIA'],
  ['ボーカロイド', 'かいしんのいちげき！', '722-4198-5', 'https://www.nicovideo.jp/watch/sm33576096'],
  ['ボーカロイド', 'からくりピエロ', '702-8529-2', 'https://youtu.be/3C4ZzWKNTWo'],
  ['ボーカロイド', 'きみも悪い人でよかった', '716-2721-9', 'https://www.nicovideo.jp/watch/sm29536277'],
  ['ボーカロイド', 'こちら、幸福安心委員会です。', '705-2577-3', 'https://youtu.be/WqzKusmYlW8'],
  ['ボーカロイド', 'こっち向いて Baby', '', 'https://www.nicovideo.jp/watch/sm11423662'],
  ['ボーカロイド', 'さようなら、花泥棒さん', '', 'https://youtu.be/nH4OOLHLg6g'],
  ['ボーカロイド', 'だんだん早くなる', '712-1209-4', 'https://youtu.be/Gm0G2YzKslo'],
  ['ボーカロイド', 'とんとんまーえ！', '194-1223-1', 'https://www.nicovideo.jp/watch/sm20620734'],
  ['ボーカロイド', 'どうぶつ占い', '173-9879-7', 'https://www.nicovideo.jp/watch/sm11733985'],
  ['ボーカロイド', 'みくみくにしてあげる♪', '', 'https://www.nicovideo.jp/watch/sm1304665'],
  ['ボーカロイド', 'ゆめゆめ', '184-0707-2', 'https://www.nicovideo.jp/watch/sm17617606'],
  ['ボーカロイド', 'ようかい体操第一', '708-2760-5', 'https://www.nicovideo.jp/watch/sm24306258'],
  ['ボーカロイド', 'わたしのアール', '713-6344-1', 'https://youtu.be/qKEWQt1dSEw'],
  ['ボーカロイド', 'アイディスマイル', '744-5142-1', 'https://youtu.be/yu72RgEINiY'],
  ['ボーカロイド', 'アゲアゲアゲイン', '708-5713-0', 'https://www.nicovideo.jp/watch/sm21970600'],
  ['ボーカロイド', 'アスノヨゾラ哨戒班', '710-9123-8', 'https://youtu.be/iXxVzrtwA0I'],
  ['ボーカロイド', 'アヤノの幸福理論', '707-4780-6', 'https://www.nicovideo.jp/watch/sm20734901'],
  ['ボーカロイド', 'アンチジョーカー', '257-1344-2', 'https://www.nicovideo.jp/watch/sm37491323'],
  ['ボーカロイド', 'アンドロメダアンドロメダ', '713-1076-2', 'https://youtu.be/TM9iRrTk5mo'],
  ['ボーカロイド', 'アンヘル', '727-2198-7', 'https://nico.ms/sm34885467'],
  ['ボーカロイド', 'エイリアンエイリアン', '715-1026-5', 'https://youtu.be/XFM1qhs8zOM'],
  ['ボーカロイド', 'エンヴィーベイビー', '742-4791-3', 'https://youtu.be/TaWrny1yEfk'],
  ['ボーカロイド', 'オツキミリサイタル', '707-4997-3', 'https://www.nicovideo.jp/watch/sm21260540'],
  ['ボーカロイド', 'オレンジ', '706-6487-1', 'https://youtu.be/Xi50ceUbLe8'],
  ['ボーカロイド', 'カゲロウデイズ', '703-7151-2', 'https://youtu.be/i_sgLCLURtE'],
  ['ボーカロイド', 'カラフル×メロディ', '168-2772-4', 'https://www.nicovideo.jp/watch/sm14327494'],
  ['ボーカロイド', 'ガランド', '722-3159-9', 'https://www.nicovideo.jp/watch/sm33210081'],
  ['ボーカロイド', 'キャットフード', '701-6412-6', 'https://www.nicovideo.jp/watch/sm12787717'],
  ['ボーカロイド', 'キライ・キライ・ジガヒダイ！', '715-6579-5', 'https://nico.ms/sm29316808'],
  ['ボーカロイド', 'クローバー・クラブ', '500-5907-6', 'https://www.nicovideo.jp/watch/sm10423219'],
  ['ボーカロイド', 'ゴシップ', '703-5178-3', 'https://nico.ms/sm15777561'],
  ['ボーカロイド', 'ゴーストルール', '714-2089-4', 'https://youtu.be/zU3QozXLqLY'],
  ['ボーカロイド', 'サマーアイドル', '182-8107-9', 'https://www.nicovideo.jp/watch/sm18563708'],
  ['ボーカロイド', 'サマータイムレコード', '707-4998-1', 'https://youtu.be/kRS6EQe_d7E'],
  ['ボーカロイド', 'サンドリヨン', '158-7409-5', 'https://www.nicovideo.jp/watch/sm5115285'],
  ['ボーカロイド', 'シャルル', '716-2230-6', 'https://youtu.be/3tqikIDPGoM'],
  ['ボーカロイド', 'シュガーソングとビターステップ', '712-5439-1', 'https://www.nicovideo.jp/watch/sm26299419'],
  ['ボーカロイド', 'シル・ヴ・プレジデント', '742-5237-2', 'https://youtu.be/l2l8bVcCqA8'],
  ['ボーカロイド', 'スイートマジック', '180-7687-4', 'https://www.nicovideo.jp/watch/sm15043719'],
  ['ボーカロイド', 'スキキライ', '', 'https://www.nicovideo.jp/watch/sm13379098'],
  ['ボーカロイド', 'スーサイドパレヱド', '718-6537-3', 'https://nico.ms/sm31600923'],
  ['ボーカロイド', 'セカイ', '737-9048-6', 'https://youtu.be/ljTLxCWf0uQ'],
  ['ボーカロイド', 'セカイはまだ始まってすらいない', '258-2652-2', 'https://www.nicovideo.jp/watch/sm36700185'],
  ['ボーカロイド', 'ダンスロボットダンス', '224-3918-8', 'https://youtu.be/L-KC1l_ptfw'],
  ['ボーカロイド', 'ダーリンダンス', '257-0796-5', 'https://youtu.be/FnuqapCZoDo'],
  ['ボーカロイド', 'チュルリラ・チュルリラ・ダッダッダ！', '714-7115-4', 'https://nico.ms/sm29372731'],
  ['ボーカロイド', 'ツギハギスタッカート', '710-7745-6', 'https://youtu.be/O43m7A9Qi7Y'],
  ['ボーカロイド', 'テオ', '718-5238-7', 'https://www.nicovideo.jp/watch/sm31540102'],
  ['ボーカロイド', 'トリコロール・エア・ライン', '701-4565-2', 'https://www.nicovideo.jp/watch/sm10436419'],
  ['ボーカロイド', 'ドナーソング', '194-6635-8', 'https://youtu.be/j-FqKaLMk90'],
  ['ボーカロイド', 'ドレミファロンド', '184-4150-5', 'https://youtu.be/CmG6durR13c'],
  ['ボーカロイド', 'ナンセンス文学', '229-4202-5', 'https://www.nicovideo.jp/watch/sm31270692'],
  ['ボーカロイド', 'ニア', '227-5668-0', 'https://www.nicovideo.jp/watch/sm31492975'],
  ['ボーカロイド', 'ニジイロストーリーズ', '259-4519-0', 'https://www.nicovideo.jp/watch/sm39329679'],
  ['ボーカロイド', 'ニュース39', '', 'https://www.nicovideo.jp/watch/sm26173126'],
  ['ボーカロイド', 'ハイドアンド・シーク', '711-4249-5', 'https://www.nicovideo.jp/watch/sm33241386'],
  ['ボーカロイド', 'ハジメテノオト', '162-0026-8', 'https://www.nicovideo.jp/watch/sm6641206'],
  ['ボーカロイド', 'ハッピーシンセサイザ', '174-4391-1', 'https://youtu.be/5d0HA90cddc'],
  ['ボーカロイド', 'ハロ／ハワユ', '170-4120-1', 'https://www.nicovideo.jp/watch/sm11550418'],
  ['ボーカロイド', 'ヒバナ', '718-5173-9', 'https://youtu.be/zo2jfqk9eNg'],
  ['ボーカロイド', 'ヒビカセ', '202-8618-0', 'https://www.nicovideo.jp/watch/sm24544710'],
  ['ボーカロイド', 'ビバハピ', '708-3402-4', 'https://nico.ms/sm21444890'],
  ['ボーカロイド', 'ビースト・ダンス', '717-3514-3', 'https://youtu.be/lcYz_VZDGSU'],
  ['ボーカロイド', 'フラジール', '716-0370-1', 'https://youtu.be/p1pXB3CQ6qA'],
  ['ボーカロイド', 'ブラック★ロックシューター', '156-1823-4', 'https://www.nicovideo.jp/watch/sm3648447'],
  ['ボーカロイド', 'ベノム', '723-7346-6', 'https://youtu.be/duvJFyF3fGI'],
  ['ボーカロイド', 'ホップ！ステップ！即死！シアワセダンスデストラップ', '708-3453-9', 'https://www.nicovideo.jp/watch/sm21431829'],
  ['ボーカロイド', 'ボッカデラベリタ', '254-4441-7', 'https://youtu.be/_V3sb8tG3xI'],
  ['ボーカロイド', 'ポジティブパレード', '251-5065-1', 'https://youtu.be/1OsrCwfS8Mc'],
  ['ボーカロイド', 'マオ', '742-2518-9', 'https://youtu.be/HDOG8iaxf1s'],
  ['ボーカロイド', 'マトリョシカ', '173-9846-1', 'https://www.nicovideo.jp/watch/sm11832728'],
  ['ボーカロイド', 'マフィア', '739-5090-4', 'https://www.nicovideo.jp/watch/sm37343552'],
  ['ボーカロイド', 'ミラクルペイント', '156-1990-7', 'https://www.nicovideo.jp/watch/sm20248730'],
  ['ボーカロイド', 'メランコリック', '700-6784-8', 'https://www.nicovideo.jp/watch/sm28520150'],
  ['ボーカロイド', 'メリーバッドエンド', '234-9024-1', 'https://www.nicovideo.jp/watch/sm32688311'],
  ['ボーカロイド', 'メルト', '148-6177-1', 'https://youtu.be/ZeoUKP7s_30'],
  ['ボーカロイド', 'メンヘラじゃないもん！', '742-0638-9', 'https://youtu.be/gtZSWIrDJu4'],
  ['ボーカロイド', 'ユニバース', '716-9136-7', 'https://www.nicovideo.jp/watch/sm30244547'],
  ['ボーカロイド', 'ラブカ？', '740-6161-5', 'https://youtu.be/RPgo-JCHwQU'],
  ['ボーカロイド', 'ラヴィット', '740-0705-0', 'https://youtu.be/mzd6ESlIsoM'],
  ['ボーカロイド', 'ルカルカ☆ナイトフィーバー', '158-7393-5', 'https://www.nicovideo.jp/watch/sm6158433'],
  ['ボーカロイド', 'ルマ', '731-6983-8', 'https://youtu.be/vAdGhWQQsRA'],
  ['ボーカロイド', 'ロキ', '236-3372-7', 'https://youtu.be/93q625d_0lI'],
  ['ボーカロイド', 'ロミオとシンデレラ', '162-2447-7', 'https://youtu.be/o_cUpnkmhDs'],
  ['ボーカロイド', 'ワンスアポンアドリーム', '742-7078-8', 'https://www.nicovideo.jp/watch/sm38393395'],
  ['ボーカロイド', 'ワールドイズマイン', '', 'https://www.nicovideo.jp/watch/sm3521282'],
  ['ボーカロイド', 'ワーワーワールド', '257-0666-7', 'https://youtu.be/yRk6wu1rcro'],
  ['ボーカロイド', 'ヴァンパイア', '742-7007-9', 'https://youtu.be/DHFecoFk_CE'],
  ['ボーカロイド', '一途な片思い、実らせたい小さな幸せ。', '190-5545-5', 'https://www.nicovideo.jp/watch/sm19421068'],
  ['ボーカロイド', '七転び八起きない', '709-3357-0', 'https://www.nicovideo.jp/watch/sm23097512'],
  ['ボーカロイド', '世界の真ん中を歩く', '717-3511-9', 'https://www.nicovideo.jp/watch/sm30888413'],
  ['ボーカロイド', '乙女解剖', '726-3840-1', 'https://youtu.be/1oYQ2jq_XG4'],
  ['ボーカロイド', '何でも言うことを聞いてくれるアカネチャン', '', 'https://youtu.be/poVA6Tm8578'],
  ['ボーカロイド', '初めての恋が終わる時', '157-3180-4', 'https://www.nicovideo.jp/watch/sm5544524'],
  ['ボーカロイド', '劣等上等', '238-4531-7', 'https://youtu.be/vPeJ6lDBL-I'],
  ['ボーカロイド', '千本桜', '703-4546-5', 'https://www.nicovideo.jp/watch/sm15633620'],
  ['ボーカロイド', '吉原ラメント', '500-8376-7', 'https://youtu.be/1jXa7BO7D_4'],
  ['ボーカロイド', '君色に染まる', '215-3642-2', 'https://www.nicovideo.jp/watch/sm27539005'],
  ['ボーカロイド', '嗚呼、素晴らしきニャン生', '702-6665-4', 'https://www.nicovideo.jp/watch/sm14991096'],
  ['ボーカロイド', '回る空うさぎ', '716-7377-6', 'https://youtu.be/ypDwl9jXSNc'],
  ['ボーカロイド', '地球最後の告白を', '186-9875-1', 'https://www.nicovideo.jp/watch/sm18222339'],
  ['ボーカロイド', '夕景イエスタデイ', '707-5002-5', 'https://youtu.be/Tni5NCwVfCA'],
  ['ボーカロイド', '夜もすがら君想ふ', '709-8592-8', 'https://youtu.be/Ov6vs7dUebU'],
  ['ボーカロイド', '夜を飼う', '742-5216-0', 'https://www.nicovideo.jp/watch/sm36688736'],
  ['ボーカロイド', '夜咄ディセイブ', '706-9944-5', 'https://youtu.be/ocMNgg5_X6I'],
  ['ボーカロイド', '夜明けと蛍', '204-3340-9', 'https://youtu.be/wmh8bKL-rP8'],
  ['ボーカロイド', '太陽系デスコ', '717-1448-1', 'https://www.nicovideo.jp/watch/sm30778590'],
  ['ボーカロイド', '女の子になりたい', '730-1926-7', 'https://www.nicovideo.jp/watch/sm35870906'],
  ['ボーカロイド', '如月アテンション', '705-2082-8', 'https://www.nicovideo.jp/watch/sm17971263'],
  ['ボーカロイド', '妄想スケッチ', '175-5343-1', 'https://www.nicovideo.jp/watch/sm13270134'],
  ['ボーカロイド', '妄想感傷代償連盟', '715-8189-8', 'https://youtu.be/3imVqRE0XxI'],
  ['ボーカロイド', '妄想税', '708-4626-0', 'https://youtu.be/d5jUExRTttg'],
  ['ボーカロイド', '家に帰ると妻が必ず死んだふりをしています。', '172-6207-1', 'https://www.nicovideo.jp/watch/sm11576817'],
  ['ボーカロイド', '少女レイ', '722-9731-0', 'https://youtu.be/26NJTEaalqI'],
  ['ボーカロイド', '巨大少女', '168-4032-1', 'https://youtu.be/RVYcDTNgM-U'],
  ['ボーカロイド', '幸せになれる隠しコマンドがあるらしい', '192-8554-0', 'https://youtu.be/bvzC_mhONc8'],
  ['ボーカロイド', '彗星ハネムーン', '717-4715-0', 'https://youtu.be/GuCWnHuK3Ow'],
  ['ボーカロイド', '心做し', '709-6348-7', 'https://youtu.be/UCuHs-G31KE'],
  ['ボーカロイド', '心拍数#0822', '701-4166-5', 'https://youtu.be/uEo1qUvsKFQ'],
  ['ボーカロイド', '恋愛裁判', '202-0349-7', 'https://youtu.be/UiT7I0CY2yQ'],
  ['ボーカロイド', '悪ノ召使', '', 'https://www.nicovideo.jp/watch/sm4166578'],
  ['ボーカロイド', '悪ノ娘', '', 'https://www.nicovideo.jp/watch/sm3620425'],
  ['ボーカロイド', '惑星ループ', '222-4673-8', 'https://youtu.be/g6kaxb13nD8'],
  ['ボーカロイド', '想像フォレスト', '705-2081-0', 'https://www.nicovideo.jp/watch/sm16859863'],
  ['ボーカロイド', '愛して愛して愛して', '', 'https://youtu.be/1JBq-bXOPGs'],
  ['ボーカロイド', '愛言葉III', '724-6022-9', 'https://youtu.be/H0L6s3ZeaBo'],
  ['ボーカロイド', '愛言葉Ⅲ', '724-6022-9', 'https://youtu.be/l7qNAj7jTwA'],
  ['ボーカロイド', '携帯恋話', '255-2054-7', 'https://youtu.be/UFhNxcOKog8'],
  ['ボーカロイド', '星屑オーケストラ', '714-7298-3', 'https://www.nicovideo.jp/watch/sm28401434'],
  ['ボーカロイド', '東京レトロ', '194-1329-7', 'https://www.nicovideo.jp/watch/sm21122784'],
  ['ボーカロイド', '林檎売りの泡沫少女', '186-6652-3', 'https://www.nicovideo.jp/watch/sm19364650'],
  ['ボーカロイド', '桜ノ雨', '154-1919-3', 'https://youtu.be/HQQBSNsezxo'],
  ['ボーカロイド', '永遠に幸せになる方法、見つけました。', '188-5818-0', 'https://www.nicovideo.jp/watch/sm18727470'],
  ['ボーカロイド', '深海少女', '171-6649-7', 'https://youtu.be/gej8xAAOVII'],
  ['ボーカロイド', '独りんぼエンヴィー', '190-5265-1', 'https://youtu.be/9E_VW4khsBo'],
  ['ボーカロイド', '白い雪のプリンセスは', '166-9920-3', 'https://www.nicovideo.jp/watch/sm9843672'],
  ['ボーカロイド', '知りたい', '736-8899-1', 'https://www.nicovideo.jp/watch/sm37039653'],
  ['ボーカロイド', '神っぽいな', '266-5830-5', 'https://youtu.be/SkPD3TYDtuM'],
  ['ボーカロイド', '神のまにまに', '196-8542-4', 'https://youtu.be/bygCBBc8s1g'],
  ['ボーカロイド', '結ンデ開イテ羅刹ト骸', '162-4619-5', 'https://www.nicovideo.jp/watch/sm10463229'],
  ['ボーカロイド', '絵本『人柱アリス』', '', 'https://www.nicovideo.jp/watch/sm4825486'],
  ['ボーカロイド', '罪の名前', '216-9375-7', 'https://youtu.be/ANG4rlNepd4'],
  ['ボーカロイド', '翡翠のまち', '219-7960-0', 'https://www.nicovideo.jp/watch/sm28614117'],
  ['ボーカロイド', '脱法ロック', '715-3009-6', 'https://youtu.be/L0c-Y6LeIwU'],
  ['ボーカロイド', '自傷無色', '706-9945-3', 'https://www.nicovideo.jp/watch/sm19877037'],
  ['ボーカロイド', '誰も知らないハッピーエンド', '216-7590-2', 'https://www.nicovideo.jp/watch/sm28296724'],
  ['ボーカロイド', '赤い靴のパレード', '703-2499-9', 'https://www.nicovideo.jp/watch/sm13179186'],
  ['ボーカロイド', '踊れオーケストラ', '715-1658-1', 'https://www.nicovideo.jp/watch/sm28706429'],
  ['ボーカロイド', '銀河録', '714-5501-9', 'https://www.nicovideo.jp/watch/sm27956507'],
  ['ボーカロイド', '長音厨肺活量テスト', '202-0652-6', 'https://www.nicovideo.jp/watch/sm25743585'],
  ['ボーカロイド', '青く駆けろ！', '253-1467-0', 'https://www.nicovideo.jp/watch/sm37703302'],
  ['ボーカロイド', '骸骨楽団とリリア', '703-1212-5', 'https://www.nicovideo.jp/watch/sm14782770'],
  ['ボーカロイド', '高音厨音域テスト', '708-5744-0', 'https://www.nicovideo.jp/watch/sm21675144'],
  ['ボーカロイド', '黄燐の炎', '', 'https://www.nicovideo.jp/watch/sm12192739'],
  ['ボーカロイド', '＊ハロー、プラネット。', '156-4374-3', 'https://www.nicovideo.jp/watch/sm7261085'],
  ['HoneyWorks', '金曜日のおはよう', '202-2022-7', 'https://www.nicovideo.jp/watch/sm23912679'],
  ['HoneyWorks', '金曜日のおはよう-another story-', '202-2022-7', 'https://www.nicovideo.jp/watch/sm24556832'],
  ['HoneyWorks', '東京サマーセッション', '712-7480-4', 'https://youtu.be/tVpKtATndTg'],
  ['HoneyWorks', '今好きになる。', '205-3038-2', 'https://www.nicovideo.jp/watch/sm24991646'],
  ['HoneyWorks', '今好きになる。-triangle story-', '', 'https://www.nicovideo.jp/watch/sm25234053'],
  ['HoneyWorks', '可愛くなりたい', '715-8665-2', 'https://www.nicovideo.jp/watch/sm30464866'],
  ['HoneyWorks', 'あったかいんだからぁ♪', '207-4010-7', 'https://www.nicovideo.jp/watch/sm25346145'],
  ['HoneyWorks', 'ワタシノテンシ', '732-9677-5', 'https://www.nicovideo.jp/watch/sm36229034'],
  ['HoneyWorks', '私、アイドル宣言', '234-9094-2', 'https://www.nicovideo.jp/watch/sm32827109'],
  ['HoneyWorks', 'ファンサ', '732-7819-0', 'https://youtu.be/F0rTxW5K0dk'],
  ['HoneyWorks', 'ロメオ', '716-9149-9', 'https://youtu.be/qkOzAZF5wDY'],
  ['HoneyWorks', '大嫌いなはずだった', '224-4198-1', 'https://www.nicovideo.jp/watch/sm30698015'],
  ['HoneyWorks', '花に赤い糸', '223-0907-1', 'https://www.nicovideo.jp/watch/sm30643295'],
  ['HoneyWorks', '聞こえますか', '232-6523-0', 'https://www.nicovideo.jp/watch/sm32425034'],
  ['HoneyWorks', 'カヌレ', '221-0368-6', 'https://www.nicovideo.jp/watch/sm29560205'],
  ['HoneyWorks', '月曜日の憂鬱', '722-4200-1', 'https://youtu.be/NzgPNELn0Bo'],
  ['HoneyWorks', '誇り高きアイドル', '261-1775-4', 'https://youtu.be/pHxnSWaUq_M'],
  ['HoneyWorks', '小悪魔だってかまわない！', '744-0700-7', 'https://www.nicovideo.jp/watch/sm38912725'],
  ['HoneyWorks', 'ヒロインたるもの！', '255-6813-2', 'https://www.nicovideo.jp/watch/sm37314310'],
  ['HoneyWorks', 'ヒロイン育成計画', '732-9675-9', 'https://nico.ms/sm36228027'],
  ['HoneyWorks', '愛に出会い恋は続く', '218-2809-1', 'https://www.nicovideo.jp/watch/sm35735266'],
  ['HoneyWorks', '恋色に咲け', '217-8080-3', 'https://www.nicovideo.jp/watch/sm28496438'],
  ['HoneyWorks', '世界は恋に落ちている', '202-6018-1', 'https://www.nicovideo.jp/watch/sm24140358'],
  ['涼宮ハルヒの憂鬱', 'God knows...', '133-1209-0', 'https://www.nicovideo.jp/watch/sm31725142'],
  ['涼宮ハルヒの憂鬱', 'ハレ晴レユカイ', '132-2406-9', 'https://www.nicovideo.jp/watch/sm24779103'],
  ['涼宮ハルヒの憂鬱', '最強パレパレード', '', 'https://www.nicovideo.jp/watch/sm24642301'],
  ['涼宮ハルヒの憂鬱', '冒険でしょでしょ？', '130-9706-7', 'https://www.nicovideo.jp/watch/sm13375979'],
  ['とらドラ！', 'バニラソルト', '153-9048-9', 'https://www.nicovideo.jp/watch/sm5763956'],
  ['鬼滅の刃', '紅蓮華', '245-1154-4', 'https://www.nicovideo.jp/watch/sm35440774'],
  ['鬼滅の刃', '竃門炭次郎のうた', '', 'https://www.nicovideo.jp/watch/sm37620779'],
  ['鬼滅の刃', '炎', '256-1106-2', 'https://www.nicovideo.jp/watch/sm37666930'],
  ['マクロスF', 'ライオン', '152-0139-2', 'https://www.nicovideo.jp/watch/sm20692870'],
  ['マクロスF', '星間飛行', '150-6116-7', 'https://www.nicovideo.jp/watch/sm5955599'],
  ['ソード・アート・オンライン', 'ANIMA', '255-2806-8', 'https://www.nicovideo.jp/watch/sm37718566'],
  ['ソード・アート・オンライン', 'unlasting', '730-7006-8', 'https://www.nicovideo.jp/watch/sm36080298'],
  ['ウマ娘プリティーダービー', 'うまぴょい伝説', '221-9727-3', 'https://www.nicovideo.jp/watch/sm38724642'],
  ['エヴァンゲリオン', '残酷な天使のテーゼ', '035-4722-1', 'https://www.nicovideo.jp/watch/sm20538212'],
  ['ご注文はうさぎですか？', 'Daydream café', '709-9637-7', 'https://www.nicovideo.jp/watch/sm26985284'],
  ['ご注文はうさぎですか？', 'ノーポイッ!', '713-6325-4', 'https://www.nicovideo.jp/watch/sm27636978'],
  ['ご注文はうさぎですか？', 'ときめきポポロン♪', '713-7103-6', 'https://www.nicovideo.jp/watch/sm27933680'],
  ['とある科学の超電磁砲', 'only my railgun', '500-4801-5', 'https://www.nicovideo.jp/watch/sm12929761'],
  ['魔法少女まどか☆マギカ', 'コネクト', '701-7003-7', 'https://www.nicovideo.jp/watch/sm20546279'],
  ['カードキャプターさくら', 'CLEAR', '233-7046-7', 'https://www.nicovideo.jp/watch/sm32768257'],
  ['カードキャプターさくら', 'プラチナ', '070-3488-1', 'https://www.nicovideo.jp/watch/sm38312128'],
  ['カードキャプターさくら', 'Catch You Catch Me', '057-5607-3', 'https://www.nicovideo.jp/watch/sm12355880'],
  ['おジャ魔女どれみ', 'おジャ魔女カーニバル', '063-9280-6', 'https://www.nicovideo.jp/watch/sm29066066'],
  ['美少女戦士セーラームーン', 'ムーンライト伝説', '008-4925-1', 'https://www.nicovideo.jp/watch/sm16158457'],
  ['美少女戦士セーラームーン', '乙女のポリシー', '016-9631-9', 'https://www.nicovideo.jp/watch/sm16047212'],
  ['プリキュア', 'ＤＡＮＺＥＮ！ふたりはプリキュア', '113-5291-4', 'https://www.nicovideo.jp/watch/sm21695682'],
  ['プリキュア', 'ガンバランスdeダンス', '', 'https://www.nicovideo.jp/watch/sm18466835'],
  ['プリキュア', 'プリキュア５，スマイル　ｇｏ　ｇｏ！', '137-7551-1', 'https://www.nicovideo.jp/watch/sm10998843'],
  ['プリキュア', 'Alright!ハートキャッチプリキュア！', '165-1881-1', 'https://www.nicovideo.jp/watch/sm32201879'],
  ['プリキュア', 'ハートキャッチ☆パラダイス！', '165-1883-7', 'https://www.nicovideo.jp/watch/sm22470470'],
  ['プリキュア', 'ラ♪ラ♪ラ♪スイートプリキュア♪', '173-9133-4', 'https://www.nicovideo.jp/watch/sm21852885'],
  ['プリキュア', "Let's go! スマイルプリキュア!", '181-9386-2', 'https://www.nicovideo.jp/watch/sm27086935'],
  ['プリキュア', 'イェイ!イェイ!イェイ!', '181-9390-1', 'https://www.nicovideo.jp/watch/sm29331246'],
  ['ひぐらしのなく頃に', 'you', '', 'https://youtu.be/GlQvGnjM9H0'],
  ['School Days', '悲しみの向こうへ', '123-4683-7', 'https://www.nicovideo.jp/watch/sm20034302'],
  ['きらりん☆レボリューション', 'バラライカ', '135-2080-6', 'https://www.nicovideo.jp/watch/sm23516227'],
  ['きらりん☆レボリューション', 'アナタボシ', '148-9981-7', 'https://www.nicovideo.jp/watch/sm24719081'],
  ['おねがいマイメロディー', 'オトメロディー', '122-7318-0', 'https://www.nicovideo.jp/watch/sm16563156'],
  ['とっとこハム太郎', 'ハム太郎とっとこうた', '078-3922-7', 'https://www.nicovideo.jp/watch/sm35199668'],
  ['かぐや様は告らせたい', 'DADDY ! DADDY ! DO !', '253-8388-4', 'https://www.nicovideo.jp/watch/sm37099912'],
  ['ダンベル何キロ持てる？', 'お願いマッスル', '247-5619-9', 'https://www.nicovideo.jp/watch/sm35445222'],
  ['血界戦線', 'シュガーソングとビターステップ', '712-5439-1', 'https://www.nicovideo.jp/watch/sm26299419'],
  ['銀魂', '桃源郷エイリアン', '702-1282-1', 'https://www.nicovideo.jp/watch/sm32089731'],
  ['銀魂', '曇天', '149-2792-6', 'https://www.nicovideo.jp/watch/sm30871764'],
  ['偽物語', '白金ディスコ', '704-3912-5', 'https://www.nicovideo.jp/watch/sm33175309'],
  ['化物語', '君の知らない物語', '161-1598-8', 'https://www.nicovideo.jp/watch/sm15510002'],
  ['化物語', '恋愛サーキュレーション', '163-0013-1', 'https://www.nicovideo.jp/watch/sm9512470'],
  ['囮物語', 'もうそうえくすぷれす', '708-4398-8', 'https://www.nicovideo.jp/watch/sm26531725'],
  ['あの日見た花の名前を僕達はまだ知らない', 'secret base～君がくれたもの～', '089-8413-1', 'https://www.nicovideo.jp/watch/sm27251256'],
  ['らき☆すた', 'もってけ！セーラーふく', '141-2869-1', 'https://www.nicovideo.jp/watch/sm2594954'],
  ['小林さんちのメイドラゴン', '青空のラプソディ', '716-9346-7', 'https://www.nicovideo.jp/watch/sm30919671'],
  ['けいおん！', 'ふわふわ時間', '159-6996-7', 'https://www.nicovideo.jp/watch/sm9345729'],
  ['けいおん！', "Don't say lazy", '158-1750-4', 'https://www.nicovideo.jp/watch/sm24657075'],
  ['けいおん！', '天使にふれたよ！', '172-5738-7', 'https://www.nicovideo.jp/watch/sm13122999'],
  ['けものフレンズ', 'ようこそジャパリパークへ', '716-6571-4', 'https://www.nicovideo.jp/watch/sm30921647'],
  ['けものフレンズ', 'フレ！フレ！ベストフレンズ', '719-3290-9', 'https://youtu.be/SwW992oQNEs'],
  ['けものフレンズ', '乗ってけ！ジャパリビート', '243-1887-6', 'https://www.nicovideo.jp/watch/sm35177278'],
  ['這いよれニャル子さん', '恋は渾沌の隷也', '192-4538-6', 'https://www.nicovideo.jp/watch/sm20694290'],
  ['這いよれニャル子さん', '太陽曰く燃えよカオス', '704-6046-9', 'https://www.nicovideo.jp/watch/sm31634756'],
  ['打ち上げ花火、下から見るか？横から見るか？', '打上花火', '229-7721-0', 'https://www.nicovideo.jp/watch/sm31968095'],
  ['ドラえもん', '夢をかなえてドラえもん', '139-6922-6', 'https://www.nicovideo.jp/watch/sm17305916'],
  ['ドラえもん', 'ひまわりの約束', '202-0671-2', 'https://www.nicovideo.jp/watch/sm27589205'],
  ['ドラえもん', 'ドラえもん', '235-0870-1', 'https://www.nicovideo.jp/watch/sm35221759'],
  ['一週間フレンズ', '奏', '114-2974-7', 'https://www.nicovideo.jp/watch/sm17563600'],
  ['君の名は。', '前前前世', '', 'https://www.nicovideo.jp/watch/sm29573446'],
  ['君の名は。', 'スパークル', '221-0514-0', 'https://youtu.be/wCfMzRSlOs4'],
  ['君の名は。', '夢灯籠', '221-0516-6', 'https://www.nicovideo.jp/watch/sm30132900'],
  ['君の名は。', 'なんでもないや', '221-0518-2', 'https://www.nicovideo.jp/watch/sm29831161'],
  ['干物妹！うまるちゃん', 'かくしん的☆めたまるふぉ～ぜっ!', '210-8240-5', 'https://www.nicovideo.jp/watch/sm27076845'],
  ['心が叫びたがってるんだ', '今、話したい誰かがいる', '213-5381-6', 'https://www.nicovideo.jp/watch/sm29073768'],
  ['心が叫びたがってるんだ', 'わたしの声', '213-0726-1', 'https://www.nicovideo.jp/watch/sm31761778'],
  ['心が叫びたがってるんだ', 'あこがれの舞踏会', '213-0719-9', 'https://youtu.be/FIdDnAiSDEc'],
  ['心が叫びたがってるんだ', '光のない部屋', '213-0722-9', 'https://youtu.be/nn5xhAyYQmc'],
  ['心が叫びたがってるんだ', 'word word word', '213-0725-3', 'https://youtu.be/FoQD9Sm_8FI'],
  ['心が叫びたがってるんだ', '玉子の中にはなにがある', '213-0727-0', 'https://youtu.be/_DOFsmYMpdM'],
  ['それいけ！アンパンマン', 'アンパンマンのマーチ', '003-2549-0', 'https://www.nicovideo.jp/watch/sm20976812'],
  ['それいけ！アンパンマン', '勇気りんりん', '090-9176-9', 'https://youtu.be/AVycKpP7xwU'],
  ['それいけ！アンパンマン', 'アンパンマンたいそう', '004-6327-2', 'https://youtu.be/WTQKPjdx70w'],
  ['しまじろう', 'ハッピー・ジャムジャム', '052-6574-6', 'https://youtu.be/xdJcw0P-5sY'],
  ['がっこうぐらし！', 'ふ・れ・ん・ど・し・た・い', '	713-0209-3', 'https://www.nicovideo.jp/watch/sm32126476'],
  ['ひなこのーと', 'あ・え・い・う・え・お・あお！！', '226-9026-3', 'https://www.nicovideo.jp/watch/sm31217077'],
  ['ガウリールドロップアウト', 'ガヴリールドロップキック', '224-3456-9', 'https://www.nicovideo.jp/watch/sm30990724'],
  ['ブレンド・S', 'ぼなぺてぃーと♡S', '231-5002-5', 'https://www.nicovideo.jp/watch/sm32313780'],
  ['ハナヤマタ', '花ハ踊レヤいろはにほ', '710-3373-4', 'https://www.nicovideo.jp/watch/sm24331168'],
  ['NEW GAME‼', 'SAKURAスキップ', '220-7190-3', 'https://youtu.be/UL31L02-DUY'],
  ['東京喰種', '季節は次々死んでいく', '711-6725-1', 'https://youtu.be/rVde-76_9Ts'],
  ['Re:ゼロから始める異世界生活', 'REDO', '217-7744-6', 'https://www.nicovideo.jp/watch/sm29033933'],
  ['Re:ゼロから始める異世界生活', 'WISHING', '220-7749-9', 'https://www.nicovideo.jp/watch/sm31446334'],
  ['ポケモン', '１・２・３／After the Rain（そらる×まふまふ）', '', 'https://youtu.be/gQEQJ_uJICE'],
  ['ポケモン', 'もう一度子供に戻ってみたい', '', ''],
  ['天空の城ラピュタ', '君をのせて', '020-7862-7', 'https://www.nicovideo.jp/watch/sm21771214'],
  ['猫の恩返し', '風になる', '101-9889-0', 'https://www.nicovideo.jp/watch/sm32196926'],
  ['となりのトトロ', '風の通り道', '020-8751-1', 'https://www.nicovideo.jp/watch/sm18670261'],
  ['となりのトトロ', 'さんぽ', '037-2273-2', 'https://www.nicovideo.jp/watch/sm17724037'],
  ['となりのトトロ', 'となりのトトロ', '056-2246-8', 'https://www.nicovideo.jp/watch/sm17704060'],
  ['魔女の宅急便', 'やさしさに包まれたなら', '088-2702-8', 'https://www.nicovideo.jp/watch/sm32275377'],
  ['魔女の宅急便', 'ルージュの伝言', '094-4809-8', 'https://www.nicovideo.jp/watch/sm20739882'],
  ['もののけ姫', 'もののけ姫', '042-7563-2', 'https://www.nicovideo.jp/watch/sm19818160'],
  ['千と千尋の神隠し', 'いのちの名前', '088-9252-1', 'https://www.nicovideo.jp/watch/sm32279956'],
  ['千と千尋の神隠し', 'いつも何度でも', '088-9253-9', 'https://www.nicovideo.jp/watch/sm18963273'],
  ['耳をすませば', 'カントリーロード', '', 'https://www.nicovideo.jp/watch/sm18586428'],
  ['崖の上のポニョ', '崖の上のポニョ', '146-0874-0', 'https://www.nicovideo.jp/watch/sm21636485'],
  ['ゲド戦記', 'テルーの唄', '', 'https://youtu.be/WdufK9D0zx4'],
  ['恋と嘘', 'かなしいうれしい', '718-0767-5', 'https://www.nicovideo.jp/watch/sm31730787'],
  ['CLANNAD', 'だんご大家族', '', 'https://www.nicovideo.jp/watch/sm13697302'],
  ['おそ松さん', '全力バタンキュー', '714-0885-1', 'https://www.nicovideo.jp/watch/sm27965826'],
  ['おそ松さん', 'はなまるぴっぴはよいこだけ', '213-6468-1', 'https://www.nicovideo.jp/watch/sm27676319'],
  ['徒然チルドレン', 'アイマイモコ', '718-1131-1', 'https://www.nicovideo.jp/watch/sm31860104'],
  ['ノーゲーム・ノーライフ', 'This game', '710-0805-5', 'https://www.nicovideo.jp/watch/sm24115143'],
  ['エロマンガ先生', 'ヒトリゴト', '227-4586-6', 'https://www.nicovideo.jp/watch/sm35688414'],
  ['泣きたい私は猫をかぶる', '花に亡霊', '253-0507-7', 'https://youtu.be/-UvbDzt_PCg'],
  ['未確認で進行形', 'とまどい→レシピ', '198-7517-7', 'https://www.nicovideo.jp/watch/sm22933795'],
  ['機巧少女は傷つかない', '回レ! 雪月花', '196-6518-1', 'https://www.nicovideo.jp/watch/sm22340530'],
  ['クレヨンしんちゃん', '月灯りふんわり落ちてくる夜', '053-1845-9', 'https://youtu.be/iqzKOhqnWBo'],
  ['グレンラガン', '空色デイズ', '139-4705-2', 'https://www.nicovideo.jp/watch/sm9060157'],
  ['ケロロ軍曹', 'くるっと・まわって・いっかいてん', '140-5098-6', 'https://youtu.be/gRaL3rwkZZE'],
  ['うる星やつら', 'ラムのラブソング', '010-6587-4', 'https://www.nicovideo.jp/watch/sm16160442'],
  ['東方風神録', '色は匂へど 散りぬるを', '703-4584-8', 'https://www.nicovideo.jp/watch/sm27723784'],
  ['ラブライブ！', 'START:DASH!!', '706-7185-1', 'https://www.nicovideo.jp/watch/sm20138830'],
  ['ラブライブ！', 'Snow halation', '174-0780-0', 'https://www.nicovideo.jp/watch/sm23867557'],
  ['ラブライブ！', '愛してるばんざーい!', '704-3410-7', 'https://www.nicovideo.jp/watch/sm25262759'],
  ['ラブライブ！', '僕らは今のなかで', '706-6271-1', 'https://www.nicovideo.jp/watch/sm20561590'],
  ['IDOLM@STER', 'GO MY WAY!!', '500-1140-5', 'https://www.nicovideo.jp/watch/sm6663611'],
  ['IDOLM@STER', 'READY!!', '702-8299-4', 'https://www.nicovideo.jp/watch/sm25330939'],
  ['IDOLM@STER', 'キラメキラリ', '142-9330-7', 'https://www.nicovideo.jp/watch/sm2190177'],
  ['IDOLM@STER', 'きゅんっ！ヴァンパイアガール', '182-5521-3', 'https://www.nicovideo.jp/watch/sm18629828'],
  ['THEIDOLM@STERシンデレラガールズ', 'お願い！シンデレラ', '707-2854-2', 'https://www.nicovideo.jp/watch/sm31242163'],
  ['THEIDOLM@STERシンデレラガールズ', 'in fact', '215-1778-9', 'https://www.nicovideo.jp/watch/sm29352376'],
  ['THEIDOLM@STERシンデレラガールズ', 'キラッ！満開スマイル', '501-3140-1', 'https://www.nicovideo.jp/watch/sm31284419'],
  ['THEIDOLM@STERシンデレラガールズ', 'おねだりShall We ～？', '705-5135-9', 'https://www.nicovideo.jp/watch/sm33911769'],
  ['THEIDOLM@STERシンデレラガールズ', 'S(MILE)ING!', '705-5140-5', 'https://www.nicovideo.jp/watch/sm31969813'],
  ['THEIDOLM@STERシンデレラガールズ', 'Yes! Party Time!!', '716-8619-3', 'https://www.nicovideo.jp/watch/sm30834068'],
  ['THEIDOLM@STERシンデレラガールズ', 'あんきら！？狂騒曲', '717-1499-5', 'https://www.nicovideo.jp/watch/sm32076138'],
  ['THEIDOLM@STERシンデレラガールズ', 'メルヘンデビュー！', '193-6351-6', 'https://www.nicovideo.jp/watch/sm33210219'],
  ['THEIDOLM@STERシンデレラガールズ', 'あんずのうた', '704-7334-0', 'https://www.nicovideo.jp/watch/sm24490071'],
  ['時をかける少女', '変わらないもの', '133-0837-8', 'https://www.nicovideo.jp/watch/sm33943885'],
  ['グリムノーツ', '忘れじの言の葉', '', 'https://youtu.be/YpmpalOXYrs'],
  ['リルぷりっ', 'リトル・ぷりんせす☆ぷりっ', '169-9565-1', 'https://www.nicovideo.jp/watch/sm13267847'],
  ['リルぷりっ', 'アイドルール', '172-1416-5', ''],
  ['しゅごキャラ！', 'こころのたまご', '144-2698-6', 'https://www.nicovideo.jp/watch/sm31620172'],
  ['しゅごキャラ！', 'みんなのたまご', '154-7205-1', ''],
  ['しゅごキャラ！', 'しゅごしゅご！', '157-2968-1', ''],
  ['しゅごキャラ！', 'おまかせ♪ガーディアン', '159-5503-6', ''],
  ['中島みゆき', '糸', '009-2825-9', 'https://www.nicovideo.jp/watch/sm36271619'],
  ['松田聖子', '青い珊瑚礁', '002-1667-4', 'https://www.nicovideo.jp/watch/sm27947714'],
  ['Superfly', '愛をこめて花束を', '139-0767-1', 'https://www.nicovideo.jp/watch/sm21631161'],
  ['滝口 順平', 'ゲゲゲの鬼太郎', '', 'https://www.nicovideo.jp/watch/sm21991404'],
  ['コレサワ', 'たばこ', '191-9817-5', 'https://www.nicovideo.jp/watch/sm31618223'],
  ['コレサワ', '恋人失格', '726-8807-6', 'https://www.nicovideo.jp/watch/sm35318087'],
  [' Mrs. GREEN APPLE', '点描の唄', '722-6681-3', 'https://youtu.be/gVQTTrR1ZK0'],
  ['ヨルシカ', 'ただ君に晴れ', '721-5844-1', 'https://www.nicovideo.jp/watch/sm34258911'],
  ['ヨルシカ', '言って。', '229-3071-0', 'https://www.nicovideo.jp/watch/sm35810869'],
  ['Eve', 'お気に召すまま', '719-2392-6', 'https://youtu.be/luL9n-PKM4Y'],
  ['Ado', 'うっせぇわ', '740-0513-8', 'https://youtu.be/rlcNOYcQqZU'],
  ['Ado', '踊', '743-3659-2', 'https://youtu.be/BW00rnc7HlQ'],
  ['Whiteberry', '夏祭り', '', 'https://www.nicovideo.jp/watch/sm14662916'],
  ['米津玄師', 'Lemon', '720-5540-5', 'https://www.nicovideo.jp/watch/sm33403117'],
  ['米津玄師', 'メトロノーム', '713-4107-2', 'https://www.nicovideo.jp/watch/sm32341381'],
  ['Official髭男dism', 'Pretender', '245-4943-6', 'https://www.nicovideo.jp/watch/sm35378301'],
  ['MONGOL800', '小さな恋のうた', '091-9706-1', 'https://www.nicovideo.jp/watch/sm35327857'],
  ['イルカ', 'なごり雪', '', 'https://www.nicovideo.jp/watch/sm20296971'],
  ['アンジェラ・アキ', '手紙～拝啓　十五の君へ～', '147-7523-9', 'https://youtu.be/RDmqyVnDsv0'],
  ['星野源', '恋', '221-9754-1', 'https://www.nicovideo.jp/watch/sm30189521'],
  ['YOASOBI', '夜に駆ける', '732-3245-9', 'https://youtu.be/mm09YNiU9x4'],
  ['YOASOBI', '怪物', '740-9268-5', 'https://youtu.be/zH4xwMldUIg'],
  ['ナナヲアカリ', 'ダダダダ天使', '719-9973-6', 'https://www.nicovideo.jp/watch/sm33495730'],
  ['水瀬いのり', 'Catch the Rainbow！', '727-1623-1', 'https://www.nicovideo.jp/watch/sm12034096'],
  ['水瀬いのり', 'Wonder Caravan！', '725-9064-5', 'https://youtu.be/vZ7RbR5vLU4'],
  ['水瀬いのり', '夢のつぼみ', '713-7820-1', 'https://youtu.be/3m_u-OVWb3g'],
  ['水瀬いのり', 'Starry Wish', '223-6762-4', 'https://www.nicovideo.jp/watch/sm30190862'],
  ['水瀬いのり', 'Ready Steady Go!', '719-3562-2', 'https://www.nicovideo.jp/watch/sm17949487'],
  ['水瀬いのり', 'まっすぐに、トウメイに。', '', 'https://youtu.be/2oVlDEndvWg'],
  ['いきものがかり', '気まぐれロマンティック', '153-7757-1', 'https://www.nicovideo.jp/watch/sm21660680'],
  ['いきものがかり', 'じょいふる', '162-2952-5', 'https://www.nicovideo.jp/watch/sm20331568'],
  ['いきものがかり', 'YELL', '156-7553-0', 'https://www.nicovideo.jp/watch/sm22011392'],
  ['伊藤万理華', 'まりっか’17', '', 'https://www.nicovideo.jp/watch/sm34123060'],
  ['伊藤万理華', 'はじまりか、', '', ''],
  ['乃木坂46', 'インフルエンサー', '226-5006-7', 'https://youtu.be/CHA6fEv1BB8'],
  ['櫻坂46', 'サイレントマジョリティー', '714-6459-0', 'https://www.nicovideo.jp/watch/sm30328335'],
  ['櫻坂46', '不協和音', '226-7735-6', 'https://youtu.be/r6VuwhK9y-w'],
  ['櫻坂46', '二人セゾン', '223-5673-8', 'https://youtu.be/ntYtwJLEMIQ'],
  ['AKB48', '恋するフォーチュンクッキー', '195-0140-4', 'https://youtu.be/IqYKkpqVOjI'],
  ['AKB48', 'ヘビーローテーション', '700-8887-0', 'https://www.nicovideo.jp/watch/sm20334192'],
  ['AKB48', 'ポニーテールとシュシュ', '168-6390-9', 'https://www.nicovideo.jp/watch/sm20319008'],
  ['AKB48', 'Everyday、カチューシャ', '177-0525-8', 'https://youtu.be/uFk7gZxVdco'],
  ['AKB48', 'フライングゲット', '702-9436-4', 'https://www.nicovideo.jp/watch/sm24020119'],
  ['AKB48', '心のプラカード', '201-7997-9', 'https://youtu.be/t5kJGbqfsrQ'],
  ['スマイレージ', 'ドットビキニ', '704-7260-2', ''],
  ['＝LOVE', '＝LOVE', '230-5728-9', 'https://youtu.be/BrxZgngUnD4'],
  ['＝LOVE', '僕らの制服クリスマス', '501-4007-8', ''],
  ['ずっと真夜中でいいのに。', '秒針を噛む', '23-1881-3', 'https://www.nicovideo.jp/watch/sm33738973'],
  ['SMAP', '世界に一つだけの花', '103-1720-1', 'https://www.nicovideo.jp/watch/sm30571036'],
  ['嵐', 'Happiness', '142-5050-1', 'https://www.nicovideo.jp/watch/sm21737745'],
  ['宝鐘マリン', 'Ahoy!! 我ら宝鐘海賊団☆', '257-1614-0', 'https://www.nicovideo.jp/watch/sm38175594'],
  ['アーティスト', '旅立ちの日に', '', 'https://www.nicovideo.jp/watch/sm17435307'],
  ['アーティスト', '走る川', '017-7069-1', ''],
  ['アーティスト', '大地讃頌', '046-0431-8', 'https://youtu.be/Z7hLJIeDV7g'],
  ['アーティスト', '大切なもの', '', 'https://youtu.be/_iyWMWIBWec'],
  ['アーティスト', '心の瞳', '', 'https://youtu.be/q2h4nHB1i1s'],
  ['アーティスト', '翼をください', '', 'https://youtu.be/eEmGvin3GRg'],
  ['アーティスト', 'きらきら星', '', 'https://youtu.be/sjnSKbrQzMY'],
  ['HIMEHINA', 'ヒトガタ', '726-2996-7', 'https://www.nicovideo.jp/watch/sm34831385'],
  ['HIMEHINA', 'うたかたよいかないで', '248-7396-9', 'https://youtu.be/m69SLI-Xolg'],
];
