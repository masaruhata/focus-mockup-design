import re

# ===== 婚姻情報一覧 =====
marriage_tbody = """
<tr><td><a href="#">100003</a> / <a href="#">100099</a></td><td>加藤　佳奈 / 加藤　悠太</td><td>カトウ　カナ / カトウ　ユウタ</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100004</a> / <a href="#">100278</a></td><td>庄形　恵美 / 庄形　和也</td><td>ショウガタ　メグミ / ショウガタ　カズヤ</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100005</a> / <a href="#">100137</a></td><td>瀬戸口　ユリア / イ　ウォンピョ</td><td>セトグチ　ユリア / イ　ウォンピョ</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100009</a> / <a href="#">100040</a></td><td>長崎　なつみ / 長崎　敦</td><td>ナガサキ　ナツミ / ナガサキ　アツシ</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100011</a> / <a href="#">100606</a></td><td>衞藤　萌 / 衛藤　仁</td><td>エトウ　モエ / エトウ　ヒトシ</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100012</a> / <a href="#">100095</a></td><td>田中　有希 / 田中　慎平</td><td>タナカ　ユキ / タナカ　シンペイ</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100013</a> / <a href="#">101201</a></td><td>鎮西　詩乃 / 鎮西　猛</td><td>チンゼイ　シノ / チンゼイ　タケル</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100014</a> / <a href="#">100021</a></td><td>水田　淳子 / 水田　裕樹</td><td>ミズタ　ジュンコ / ミズタ　ヒロキ</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100016</a> / <a href="#">100023</a></td><td>丸岡　千尋 / 丸岡　智幸</td><td>マルオカ　チヒロ / マルオカ　トモユキ</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100018</a> / <a href="#">100036</a></td><td>森　真理 / 森　博史</td><td>モリ　マリ / モリ　ヒロシ</td><td>—</td><td>—</td><td>—</td><td>2024/03/14 04:13</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 保険証一覧 =====
insurance_tbody = """
<tr><td><a href="#">100001</a></td><td>吉野　瑞貴</td><td>ヨシノ　ミズキ</td><td>協会けんぽ</td><td>12345678</td><td>2026/03/31</td><td><span class="badge badge-success">有効</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100002</a></td><td>若松　美保</td><td>ワカマツ　ミホ</td><td>国民健康保険</td><td>87654321</td><td>2026/03/31</td><td><span class="badge badge-success">有効</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100003</a></td><td>加藤　佳奈</td><td>カトウ　カナ</td><td>組合健保</td><td>11223344</td><td>2026/03/31</td><td><span class="badge badge-success">有効</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>協会けんぽ</td><td>55667788</td><td>2025/09/30</td><td><span class="badge badge-danger">期限切れ</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>国民健康保険</td><td>99001122</td><td>2026/03/31</td><td><span class="badge badge-success">有効</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100006</a></td><td>長　美波</td><td>チョウ　ミナミ</td><td>組合健保</td><td>33445566</td><td>2026/03/31</td><td><span class="badge badge-success">有効</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100007</a></td><td>王　芳</td><td>オウ　ホウ</td><td>自費</td><td>—</td><td>—</td><td><span class="badge badge-secondary">自費</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100008</a></td><td>本間　美穂</td><td>ホンマ　ミホ</td><td>協会けんぽ</td><td>77889900</td><td>2026/03/31</td><td><span class="badge badge-success">有効</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100009</a></td><td>長崎　なつみ</td><td>ナガサキ　ナツミ</td><td>国民健康保険</td><td>44556677</td><td>2026/03/31</td><td><span class="badge badge-success">有効</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100010</a></td><td>長林　美咲</td><td>ナガバヤシ　ミサキ</td><td>組合健保</td><td>22334455</td><td>2026/03/31</td><td><span class="badge badge-success">有効</span></td><td>2024/03/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 妊娠患者一覧 =====
pregnant_tbody = """
<tr><td><a href="#">103246</a></td><td>西岡　はるか</td><td>ニシオカ　ハルカ</td><td>2026/03/15</td><td>12週</td><td>2026/10/05</td><td><span class="badge badge-info">経過観察</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">108777</a></td><td>森田　要</td><td>モリタ　カナメ</td><td>2026/02/20</td><td>16週</td><td>2026/09/10</td><td><span class="badge badge-success">順調</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">111923</a></td><td>鈴木　有貴</td><td>スズキ　ユキ</td><td>2026/01/10</td><td>20週</td><td>2026/08/01</td><td><span class="badge badge-success">順調</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">112182</a></td><td>沢井　彩</td><td>サワイ　アヤ</td><td>2026/04/01</td><td>6週</td><td>2026/12/20</td><td><span class="badge badge-warning">要注意</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">113185</a></td><td>伊佐　あかね</td><td>イサ　アカネ</td><td>2026/03/01</td><td>10週</td><td>2026/11/15</td><td><span class="badge badge-success">順調</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">113948</a></td><td>笹岡　香</td><td>ササオカ　カオリ</td><td>2026/02/05</td><td>18週</td><td>2026/09/25</td><td><span class="badge badge-success">順調</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 検査情報一覧 =====
inspection_tbody = """
<tr><td>2026/05/01</td><td><a href="#">101726</a></td><td>加藤　みゆき</td><td>カトウ　ミユキ</td><td>白血球数(7300), 赤血球数(397), ヘモグロビン(8.0), ヘマトクリット(29.5), 血小板数(45.7)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/01</td><td><a href="#">103944</a></td><td>屋比久　希</td><td>ヤビク　ノゾミ</td><td>白血球数(5400), 赤血球数(423), ヘモグロビン(13.4), ヘマトクリット(41.6), 血小板数(25.6)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/01</td><td><a href="#">107550</a></td><td>カークウッド　由里子</td><td>カークウッド　ユリコ</td><td>白血球数(7500), 赤血球数(405), ヘモグロビン(11.3), ヘマトクリット(37.1), 血小板数(37.2)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/01</td><td><a href="#">113185</a></td><td>伊佐　あかね</td><td>イサ　アカネ</td><td>白血球数(4000), 赤血球数(449), ヘモグロビン(12.4), ヘマトクリット(40.3), 血小板数(22.7), OHビタミンD:CLIA(16.4), プロラクチン(11.01)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/01</td><td><a href="#">113948</a></td><td>笹岡　香</td><td>ササオカ　カオリ</td><td>白血球数(5100), 赤血球数(431), ヘモグロビン(13.7), ヘマトクリット(43.3), 血小板数(26.4)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/01</td><td><a href="#">115981</a></td><td>亀井　夏美</td><td>カメイ　ナツミ</td><td>白血球数(6000), 赤血球数(455), ヘモグロビン(13.9), AST(19), ALT(15), LD_IFCC(160), ALP_IFCC(70), γ-GT(14), TG(95), 総コレステロール(206)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/01</td><td><a href="#">116895</a></td><td>山下　思穂</td><td>ヤマシタ　シホ</td><td>白血球数(4100), 赤血球数(430), ヘモグロビン(12.5), ヘマトクリット(39.4), 血小板数(30.8)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/01</td><td><a href="#">119640</a></td><td>時吉　李奈</td><td>トキヨシ　リナ</td><td>白血球数(6000), 赤血球数(430), ヘモグロビン(13.6), AST(21), ALT(8), LD_IFCC(200), ALP_IFCC(37), Dダイマー(0.30)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/01</td><td><a href="#">119642</a></td><td>藤田　栞菜</td><td>フジタ　シオナ</td><td>白血球数(6000), 赤血球数(431), ヘモグロビン(13.7), ヘマトクリット(43.3), 血小板数(26.4)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/01</td><td><a href="#">119653</a></td><td>石郷岡　彩乃</td><td>イシゴウオカ　アヤノ</td><td>白血球数(8000), 赤血球数(418), ヘモグロビン(12.6), ヘマトクリット(39.1), 血小板数(36.2)</td><td>2026/05/01</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 問診一覧 =====
interview_tbody = """
<tr><td>2026/05/09</td><td><a href="#">119640</a></td><td>時吉　李奈</td><td>トキヨシ　リナ</td><td>初診問診票</td><td><span class="badge badge-success">回答済</span></td><td>2026/05/09 09:15</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/09</td><td><a href="#">116895</a></td><td>山下　思穂</td><td>ヤマシタ　シホ</td><td>再診問診票</td><td><span class="badge badge-success">回答済</span></td><td>2026/05/09 09:30</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/09</td><td><a href="#">113948</a></td><td>笹岡　香</td><td>ササオカ　カオリ</td><td>初診問診票</td><td><span class="badge badge-warning">未回答</span></td><td>—</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/08</td><td><a href="#">107550</a></td><td>カークウッド　由里子</td><td>カークウッド　ユリコ</td><td>再診問診票</td><td><span class="badge badge-success">回答済</span></td><td>2026/05/08 14:20</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/08</td><td><a href="#">103944</a></td><td>屋比久　希</td><td>ヤビク　ノゾミ</td><td>初診問診票</td><td><span class="badge badge-success">回答済</span></td><td>2026/05/08 10:05</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/07</td><td><a href="#">101726</a></td><td>加藤　みゆき</td><td>カトウ　ミユキ</td><td>再診問診票</td><td><span class="badge badge-success">回答済</span></td><td>2026/05/07 11:45</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 来院情報一覧 =====
visit_tbody = """
<tr><td>2026/05/09</td><td><a href="#">119640</a></td><td>時吉　李奈</td><td>トキヨシ　リナ</td><td>09:00</td><td>09:45</td><td>初診</td><td>不妊外来</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/09</td><td><a href="#">116895</a></td><td>山下　思穂</td><td>ヤマシタ　シホ</td><td>09:30</td><td>10:10</td><td>再診</td><td>不妊外来</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/09</td><td><a href="#">113948</a></td><td>笹岡　香</td><td>ササオカ　カオリ</td><td>10:00</td><td>10:30</td><td>初診</td><td>婦人科</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/09</td><td><a href="#">107550</a></td><td>カークウッド　由里子</td><td>カークウッド　ユリコ</td><td>10:30</td><td>11:00</td><td>再診</td><td>不妊外来</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/09</td><td><a href="#">103944</a></td><td>屋比久　希</td><td>ヤビク　ノゾミ</td><td>11:00</td><td>11:40</td><td>再診</td><td>不妊外来</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/08</td><td><a href="#">101726</a></td><td>加藤　みゆき</td><td>カトウ　ミユキ</td><td>14:00</td><td>14:45</td><td>再診</td><td>不妊外来</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/05/08</td><td><a href="#">113185</a></td><td>伊佐　あかね</td><td>イサ　アカネ</td><td>15:00</td><td>15:30</td><td>初診</td><td>婦人科</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ファイルを更新する関数
def update_tbody(filepath, new_tbody):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # tbodyタグ内のコンテンツを置換
    new_content = re.sub(r'<tbody>.*?</tbody>', f'<tbody>{new_tbody}</tbody>', content, flags=re.DOTALL)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated: {filepath}")

import os
base = '/home/ubuntu/focus_mockup_v2'

# 婚姻情報
update_tbody(f'{base}/07_marriage_informations.html', marriage_tbody)

# 保険証
update_tbody(f'{base}/08_insurance_cards.html', insurance_tbody)

# 妊娠患者
update_tbody(f'{base}/09_pregnant_patients.html', pregnant_tbody)

# 検査情報
update_tbody(f'{base}/15_inspections.html', inspection_tbody)

# 問診
update_tbody(f'{base}/13_medical_interviews.html', interview_tbody)

# 来院情報
update_tbody(f'{base}/12_visit_info.html', visit_tbody)

print("All files updated successfully!")
