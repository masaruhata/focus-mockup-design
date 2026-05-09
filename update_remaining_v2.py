import re, os

base = '/home/ubuntu/focus_mockup_v2'

def update_tbody(filepath, new_tbody):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = re.sub(r'<tbody>.*?</tbody>', f'<tbody>{new_tbody}</tbody>', content, flags=re.DOTALL)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated: {os.path.basename(filepath)}")

# ===== 精液検査情報 (26_semen_analysis.html) =====
semen_tbody = """
<tr><td>2026/04/15</td><td><a href="#">100099</a></td><td>加藤　悠太</td><td>カトウ　ユウタ</td><td>3.2ml</td><td>4,200万/ml</td><td>42%</td><td>68%</td><td><span class="badge badge-warning">要再検</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/10</td><td><a href="#">100278</a></td><td>庄形　和也</td><td>ショウガタ　カズヤ</td><td>2.8ml</td><td>6,800万/ml</td><td>55%</td><td>74%</td><td><span class="badge badge-success">正常</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/08</td><td><a href="#">100137</a></td><td>イ　ウォンピョ</td><td>イ　ウォンピョ</td><td>1.9ml</td><td>1,200万/ml</td><td>28%</td><td>45%</td><td><span class="badge badge-danger">精子減少症</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/01</td><td><a href="#">100040</a></td><td>長崎　敦</td><td>ナガサキ　アツシ</td><td>3.5ml</td><td>5,500万/ml</td><td>48%</td><td>72%</td><td><span class="badge badge-success">正常</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/03/25</td><td><a href="#">100095</a></td><td>田中　慎平</td><td>タナカ　シンペイ</td><td>2.1ml</td><td>3,100万/ml</td><td>35%</td><td>58%</td><td><span class="badge badge-warning">要再検</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 人工授精 (27_artificial_insemination.html) =====
iui_tbody = """
<tr><td>2026/04/20</td><td><a href="#">100003</a></td><td>加藤　佳奈</td><td>カトウ　カナ</td><td>第3回</td><td>D14</td><td>2026/04/20 10:30</td><td>1,850万</td><td>68%</td><td><span class="badge badge-info">経過観察中</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/15</td><td><a href="#">100009</a></td><td>長崎　なつみ</td><td>ナガサキ　ナツミ</td><td>第2回</td><td>D13</td><td>2026/04/15 11:00</td><td>2,200万</td><td>72%</td><td><span class="badge badge-success">妊娠確認</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/10</td><td><a href="#">100012</a></td><td>田中　有希</td><td>タナカ　ユキ</td><td>第1回</td><td>D15</td><td>2026/04/10 09:45</td><td>980万</td><td>55%</td><td><span class="badge badge-secondary">陰性</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/03/28</td><td><a href="#">100016</a></td><td>丸岡　千尋</td><td>マルオカ　チヒロ</td><td>第4回</td><td>D14</td><td>2026/03/28 10:15</td><td>3,100万</td><td>78%</td><td><span class="badge badge-info">経過観察中</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== OPU（採卵）(28_opu_informations.html) =====
opu_tbody = """
<tr><td>2026/04/22</td><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>第2回</td><td>8個</td><td>6個</td><td>5個</td><td>4個</td><td><span class="badge badge-success">良好</span></td><td>秦勝</td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/18</td><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>第1回</td><td>12個</td><td>10個</td><td>8個</td><td>7個</td><td><span class="badge badge-success">良好</span></td><td>秦勝</td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/10</td><td><a href="#">100014</a></td><td>水田　淳子</td><td>ミズタ　ジュンコ</td><td>第3回</td><td>4個</td><td>3個</td><td>2個</td><td>2個</td><td><span class="badge badge-warning">少数</span></td><td>秦勝</td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/05</td><td><a href="#">100018</a></td><td>森　真理</td><td>モリ　マリ</td><td>第1回</td><td>6個</td><td>5個</td><td>4個</td><td>3個</td><td><span class="badge badge-success">良好</span></td><td>秦勝</td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 移植（ET）(29_transplantation.html) =====
et_tbody = """
<tr><td>2026/05/02</td><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>第2回</td><td>凍結融解胚移植</td><td>4BB</td><td>D5</td><td>2個</td><td><span class="badge badge-info">判定待ち</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/28</td><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>第1回</td><td>新鮮胚移植</td><td>3BB</td><td>D3</td><td>1個</td><td><span class="badge badge-success">妊娠確認</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/20</td><td><a href="#">100018</a></td><td>森　真理</td><td>モリ　マリ</td><td>第1回</td><td>凍結融解胚移植</td><td>5AA</td><td>D5</td><td>1個</td><td><span class="badge badge-secondary">陰性</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/15</td><td><a href="#">100014</a></td><td>水田　淳子</td><td>ミズタ　ジュンコ</td><td>第3回</td><td>凍結融解胚移植</td><td>4BC</td><td>D5</td><td>1個</td><td><span class="badge badge-info">判定待ち</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 凍結胚 (30_frozen_eggs.html) =====
frozen_embryo_tbody = """
<tr><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>2026/04/22</td><td>3個</td><td>4BB / 4BC / 3BB</td><td>2027/04/22</td><td><span class="badge badge-success">保管中</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>2026/04/18</td><td>6個</td><td>5AA / 5AB / 4BB / 4BC / 3BB / 3BC</td><td>2027/04/18</td><td><span class="badge badge-success">保管中</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100014</a></td><td>水田　淳子</td><td>ミズタ　ジュンコ</td><td>2026/04/10</td><td>1個</td><td>4BB</td><td>2027/04/10</td><td><span class="badge badge-success">保管中</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100018</a></td><td>森　真理</td><td>モリ　マリ</td><td>2026/04/05</td><td>2個</td><td>5AA / 4BB</td><td>2027/04/05</td><td><span class="badge badge-success">保管中</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100012</a></td><td>田中　有希</td><td>タナカ　ユキ</td><td>2026/03/15</td><td>2個</td><td>4BB / 3BB</td><td>2027/03/15</td><td><span class="badge badge-warning">更新期限近</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 凍結精子 (31_frozen_sperm.html) =====
frozen_sperm_tbody = """
<tr><td><a href="#">100099</a></td><td>加藤　悠太</td><td>カトウ　ユウタ</td><td>2026/03/20</td><td>3本</td><td>2027/03/20</td><td><span class="badge badge-success">保管中</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100137</a></td><td>イ　ウォンピョ</td><td>イ　ウォンピョ</td><td>2026/04/08</td><td>5本</td><td>2027/04/08</td><td><span class="badge badge-success">保管中</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100021</a></td><td>水田　裕樹</td><td>ミズタ　ヒロキ</td><td>2026/02/14</td><td>2本</td><td>2027/02/14</td><td><span class="badge badge-warning">更新期限近</span></td><td>前里智美</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 患者文書 (19_patient_documents.html) =====
doc_tbody = """
<tr><td>2026/05/01</td><td><a href="#">100001</a></td><td>吉野　瑞貴</td><td>ヨシノ　ミズキ</td><td>治療同意書</td><td>PDF</td><td>2026/05/01 10:30</td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">表示</a></td></tr>
<tr><td>2026/04/28</td><td><a href="#">100003</a></td><td>加藤　佳奈</td><td>カトウ　カナ</td><td>人工授精同意書</td><td>PDF</td><td>2026/04/28 14:15</td><td>恵島明日香</td><td><a href="#" class="btn btn-xs btn-outline">表示</a></td></tr>
<tr><td>2026/04/22</td><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>体外受精同意書</td><td>PDF</td><td>2026/04/22 09:00</td><td>恵島明日香</td><td><a href="#" class="btn btn-xs btn-outline">表示</a></td></tr>
<tr><td>2026/04/18</td><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>採卵同意書</td><td>PDF</td><td>2026/04/18 11:30</td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">表示</a></td></tr>
<tr><td>2026/04/10</td><td><a href="#">100009</a></td><td>長崎　なつみ</td><td>ナガサキ　ナツミ</td><td>凍結保存同意書</td><td>PDF</td><td>2026/04/10 15:45</td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">表示</a></td></tr>
"""

# ===== 住民票 (20_resident_registries.html) =====
residence_tbody = """
<tr><td>2026/04/15</td><td><a href="#">100001</a></td><td>吉野　瑞貴</td><td>ヨシノ　ミズキ</td><td>住民票</td><td>2026/04/15</td><td><span class="badge badge-success">確認済</span></td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/10</td><td><a href="#">100003</a></td><td>加藤　佳奈</td><td>カトウ　カナ</td><td>戸籍謄本</td><td>2026/04/10</td><td><span class="badge badge-success">確認済</span></td><td>恵島明日香</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/05</td><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>住民票</td><td>2026/04/05</td><td><span class="badge badge-warning">期限切れ</span></td><td>恵島明日香</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/03/28</td><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>住民票</td><td>2026/03/28</td><td><span class="badge badge-success">確認済</span></td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 電子同意書 (21_consent_letters.html) =====
consent_tbody = """
<tr><td>2026/05/02</td><td><a href="#">100001</a></td><td>吉野　瑞貴</td><td>ヨシノ　ミズキ</td><td>不妊治療同意書</td><td><span class="badge badge-success">署名済</span></td><td>2026/05/02 10:15</td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/28</td><td><a href="#">100003</a></td><td>加藤　佳奈</td><td>カトウ　カナ</td><td>人工授精同意書</td><td><span class="badge badge-success">署名済</span></td><td>2026/04/28 14:30</td><td>恵島明日香</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/22</td><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>体外受精・胚移植同意書</td><td><span class="badge badge-success">署名済</span></td><td>2026/04/22 09:30</td><td>恵島明日香</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/18</td><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>採卵・凍結保存同意書</td><td><span class="badge badge-warning">未署名</span></td><td>—</td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/10</td><td><a href="#">100009</a></td><td>長崎　なつみ</td><td>ナガサキ　ナツミ</td><td>凍結胚保存同意書</td><td><span class="badge badge-success">署名済</span></td><td>2026/04/10 16:00</td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== レセプト (22_receipts.html) =====
receipt_tbody = """
<tr><td>2026/04</td><td><a href="#">100001</a></td><td>吉野　瑞貴</td><td>ヨシノ　ミズキ</td><td>協会けんぽ</td><td>不妊外来</td><td>35,600円</td><td><span class="badge badge-success">請求済</span></td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04</td><td><a href="#">100002</a></td><td>若松　美保</td><td>ワカマツ　ミホ</td><td>国民健康保険</td><td>不妊外来</td><td>28,400円</td><td><span class="badge badge-success">請求済</span></td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04</td><td><a href="#">100003</a></td><td>加藤　佳奈</td><td>カトウ　カナ</td><td>組合健保</td><td>不妊外来</td><td>42,100円</td><td><span class="badge badge-warning">確認中</span></td><td>田村麻由子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04</td><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>協会けんぽ</td><td>不妊外来</td><td>68,900円</td><td><span class="badge badge-success">請求済</span></td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04</td><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>国民健康保険</td><td>不妊外来</td><td>55,200円</td><td><span class="badge badge-danger">返戻</span></td><td>田村麻由子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 紹介状 (24_referral_informations.html) =====
referral_tbody = """
<tr><td>2026/05/01</td><td><a href="#">100001</a></td><td>吉野　瑞貴</td><td>ヨシノ　ミズキ</td><td>東京大学医学部附属病院</td><td>産婦人科</td><td>紹介状（発行）</td><td><span class="badge badge-success">発行済</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/25</td><td><a href="#">100002</a></td><td>若松　美保</td><td>ワカマツ　ミホ</td><td>慶應義塾大学病院</td><td>不妊外来</td><td>紹介状（受取）</td><td><span class="badge badge-info">受取済</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/20</td><td><a href="#">100006</a></td><td>長　美波</td><td>チョウ　ミナミ</td><td>順天堂大学医学部附属病院</td><td>産婦人科</td><td>紹介状（発行）</td><td><span class="badge badge-success">発行済</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td>2026/04/15</td><td><a href="#">100008</a></td><td>本間　美穂</td><td>ホンマ　ミホ</td><td>日本医科大学附属病院</td><td>不妊外来</td><td>紹介状（発行）</td><td><span class="badge badge-warning">作成中</span></td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 助成金 (25_subsidies.html) =====
subsidy_tbody = """
<tr><td><a href="#">100003</a></td><td>加藤　佳奈</td><td>カトウ　カナ</td><td>東京都特定不妊治療費助成</td><td>2026/04/01</td><td>2026/09/30</td><td>30万円</td><td><span class="badge badge-info">申請中</span></td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>東京都特定不妊治療費助成</td><td>2026/01/15</td><td>2026/07/14</td><td>30万円</td><td><span class="badge badge-success">承認済</span></td><td>赤川真智子</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>渋谷区不妊治療費助成</td><td>2026/03/01</td><td>2026/08/31</td><td>10万円</td><td><span class="badge badge-success">承認済</span></td><td>恵島明日香</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100009</a></td><td>長崎　なつみ</td><td>ナガサキ　ナツミ</td><td>東京都特定不妊治療費助成</td><td>2026/02/10</td><td>2026/08/09</td><td>30万円</td><td><span class="badge badge-warning">書類不備</span></td><td>恵島明日香</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== お知らせ (35_notifications.html) =====
notice_tbody = """
<tr><td>2025/03/31</td><td>★院内の問い合わせ先</td><td>【労務・人事関係】jinjiromu@ebisu-womens.jp　【システム関係】support@ebisu-womens.jp　【Asana】https://app.asana.com/　※秦への連絡はmasaru.hata@ebisu-womens.jpまで</td><td>秦勝</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== 患者アカウント (18_list_accounts.html) =====
patient_account_tbody = """
<tr><td><a href="#">100001</a></td><td>吉野　瑞貴</td><td>ヨシノ　ミズキ</td><td>yoshino.mizuki@example.com</td><td><span class="badge badge-success">有効</span></td><td>2026/05/01 09:15</td><td>2024/03/15</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100002</a></td><td>若松　美保</td><td>ワカマツ　ミホ</td><td>wakamatsu.miho@example.com</td><td><span class="badge badge-success">有効</span></td><td>2026/04/28 14:30</td><td>2024/05/20</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100003</a></td><td>加藤　佳奈</td><td>カトウ　カナ</td><td>kato.kana@example.com</td><td><span class="badge badge-success">有効</span></td><td>2026/05/02 11:00</td><td>2024/07/10</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100004</a></td><td>庄形　恵美</td><td>ショウガタ　メグミ</td><td>shogata.megumi@example.com</td><td><span class="badge badge-success">有効</span></td><td>2026/04/22 09:00</td><td>2024/01/08</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100005</a></td><td>瀬戸口　ユリア</td><td>セトグチ　ユリア</td><td>setoguchi.yuria@example.com</td><td><span class="badge badge-warning">仮登録</span></td><td>2026/04/18 10:45</td><td>2025/02/14</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100006</a></td><td>長　美波</td><td>チョウ　ミナミ</td><td>cho.minami@example.com</td><td><span class="badge badge-success">有効</span></td><td>2026/04/30 16:20</td><td>2024/09/03</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100007</a></td><td>王　麗花</td><td>ワン　レイカ</td><td>wang.reika@example.com</td><td><span class="badge badge-danger">無効</span></td><td>2026/03/10 08:30</td><td>2023/11/22</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
<tr><td><a href="#">100008</a></td><td>本間　美穂</td><td>ホンマ　ミホ</td><td>honma.miho@example.com</td><td><span class="badge badge-success">有効</span></td><td>2026/05/03 13:00</td><td>2024/06/17</td><td><a href="#" class="btn btn-xs btn-outline">詳細</a></td></tr>
"""

# ===== アカウント管理 (36_admin_accounts.html) =====
admin_account_tbody = """
<tr><td>秦勝</td><td>masaru.hata@ebisu-womens.jp</td><td><span class="badge badge-danger">管理者</span></td><td><span class="badge badge-success">有効</span></td><td>2026/05/09 09:00</td><td><a href="#" class="btn btn-xs btn-outline">編集</a></td></tr>
<tr><td>前里智美</td><td>tomomi.maezato@ebisu-womens.jp</td><td><span class="badge badge-info">スタッフ</span></td><td><span class="badge badge-success">有効</span></td><td>2026/05/09 08:45</td><td><a href="#" class="btn btn-xs btn-outline">編集</a></td></tr>
<tr><td>赤川真智子</td><td>machiko.akagawa@ebisu-womens.jp</td><td><span class="badge badge-info">スタッフ</span></td><td><span class="badge badge-success">有効</span></td><td>2026/05/08 17:30</td><td><a href="#" class="btn btn-xs btn-outline">編集</a></td></tr>
<tr><td>恵島明日香</td><td>asuka.eshima@ebisu-womens.jp</td><td><span class="badge badge-info">スタッフ</span></td><td><span class="badge badge-success">有効</span></td><td>2026/05/09 08:50</td><td><a href="#" class="btn btn-xs btn-outline">編集</a></td></tr>
<tr><td>田村麻由子</td><td>mayuko.tamura@ebisu-womens.jp</td><td><span class="badge badge-info">スタッフ</span></td><td><span class="badge badge-success">有効</span></td><td>2026/05/07 16:00</td><td><a href="#" class="btn btn-xs btn-outline">編集</a></td></tr>
"""

# 更新実行
files_to_update = {
    f'{base}/26_semen_analysis.html': semen_tbody,
    f'{base}/27_artificial_insemination.html': iui_tbody,
    f'{base}/28_opu_informations.html': opu_tbody,
    f'{base}/29_transplantation.html': et_tbody,
    f'{base}/30_frozen_eggs.html': frozen_embryo_tbody,
    f'{base}/31_frozen_sperm.html': frozen_sperm_tbody,
    f'{base}/19_patient_documents.html': doc_tbody,
    f'{base}/20_resident_registries.html': residence_tbody,
    f'{base}/21_consent_letters.html': consent_tbody,
    f'{base}/22_receipts.html': receipt_tbody,
    f'{base}/24_referral_informations.html': referral_tbody,
    f'{base}/25_subsidies.html': subsidy_tbody,
    f'{base}/35_notifications.html': notice_tbody,
    f'{base}/18_list_accounts.html': patient_account_tbody,
    f'{base}/36_admin_accounts.html': admin_account_tbody,
}

for filepath, tbody in files_to_update.items():
    if os.path.exists(filepath):
        update_tbody(filepath, tbody)
    else:
        print(f"SKIP (not found): {os.path.basename(filepath)}")

print("\nAll done!")
