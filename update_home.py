content = open('/home/ubuntu/focus_mockup_v2/02_home.html').read()

# お知らせを実データに置き換え
old_notice = """    <!-- お知らせ -->
    <div class="notice-card mb-lg">
      <div class="notice-date">2026/04/02 18:18</div>
      <div class="notice-title">Test rich text 1</div>
      <div class="notice-body">母は一番強い女の人だと思います。母はいつも家族を愛していて、毎日わたしたちのために頑張っています。私にいいマナー老人を尊敬することや子供たちに譲ることなどを教えてくれています。<br><span style="color:var(--color-text-muted);font-size:12px;">母はいつも新設に他の人を扱うので、尊敬される。2...</span></div>
    </div>"""

new_notice = """    <!-- お知らせ -->
    <div class="notice-card mb-lg">
      <div class="notice-date">2025/03/31 12:16</div>
      <div class="notice-title">★院内の問い合わせ先</div>
      <div class="notice-body">
        【労務・人事関係の問い合わせ先】　専用アドレス：<a href="mailto:jinjiromu@ebisu-womens.jp">jinjiromu@ebisu-womens.jp</a> までメールをしてください。<br>
        【システム関係の問い合わせ先】　専用アドレス：<a href="mailto:support@ebisu-womens.jp">support@ebisu-womens.jp</a> までメールをしてください。<br>
        【タスク管理ツール「Asana」】 <a href="https://app.asana.com/" target="_blank">https://app.asana.com/</a><br>
        <strong>※秦への連絡は、<a href="mailto:masaru.hata@ebisu-womens.jp">masaru.hata@ebisu-womens.jp</a> にお願いします。</strong>
      </div>
    </div>"""

content = content.replace(old_notice, new_notice)

# タスクデータをstgのリアルデータに置き換え
old_tbody = """          <tbody>
            <tr>
              <td>1</td>
              <td><span class="badge badge-info">患者対応</span></td>
              <td><a href="#">吉野様 問診結果確認</a></td>
              <td class="text-sm">吉野　瑞貴 (100001)</td>
              <td><span class="badge badge-danger">高</span></td>
              <td><span class="badge badge-warning">未対応</span></td>
              <td>三栖有津紗</td>
              <td>2026/05/08</td>
              <td>2026/05/09</td>
            </tr>
            <tr>
              <td>2</td>
              <td><span class="badge badge-info">患者対応</span></td>
              <td><a href="#">加藤様 AIH後の経過確認連絡</a></td>
              <td class="text-sm">加藤　佳奈 (100003)</td>
              <td><span class="badge badge-danger">高</span></td>
              <td><span class="badge badge-warning">未対応</span></td>
              <td>三栖有津紗</td>
              <td>2026/05/08</td>
              <td>2026/05/09</td>
            </tr>
            <tr>
              <td>3</td>
              <td><span class="badge badge-muted">事務</span></td>
              <td><a href="#">在庫発注点確認（HMG製剤）</a></td>
              <td class="text-sm">—</td>
              <td><span class="badge badge-danger">高</span></td>
              <td><span class="badge badge-warning">未対応</span></td>
              <td>鶴田有希</td>
              <td>2026/05/08</td>
              <td>2026/05/09</td>
            </tr>
          </tbody>"""

new_tbody = """          <tbody>
            <tr>
              <td><a href="03_tasks.html" class="text-link">T00607</a></td>
              <td><span class="badge badge-info">事務長対応</span></td>
              <td><a href="03_tasks.html">【患者様対応詳細】鈴木　ほのか（119417）</a></td>
              <td class="text-sm">患者様対応詳細</td>
              <td><span class="badge badge-danger">高</span></td>
              <td><span class="badge badge-warning">対応中</span></td>
              <td>堤麻衣 秦勝</td>
              <td>2026/02/13</td>
              <td>2026/02/16</td>
            </tr>
            <tr>
              <td><a href="03_tasks.html" class="text-link">T00341</a></td>
              <td><span class="badge badge-info">受付対応</span></td>
              <td><a href="03_tasks.html">【事後会計】 山口　真生様　116834</a></td>
              <td class="text-sm">請求情報詳細</td>
              <td><span class="badge" style="background:#f59e0b;color:#fff;">中</span></td>
              <td><span class="badge badge-warning">対応中</span></td>
              <td>赤川真智子 田村麻由子 堤麻衣 秦勝</td>
              <td>2026/01/01</td>
              <td>2026/02/28</td>
            </tr>
            <tr>
              <td><a href="03_tasks.html" class="text-link">T00837</a></td>
              <td><span class="badge badge-info">受付対応</span></td>
              <td><a href="03_tasks.html">【事後会計】楠瀬　健太（109961）</a></td>
              <td class="text-sm">請求情報詳細</td>
              <td><span class="badge badge-danger">高</span></td>
              <td><span class="badge badge-warning">対応中</span></td>
              <td>赤川真智子 内野唯香 恵島明日香 大嶋華子 秦勝</td>
              <td>2026/04/25</td>
              <td>2026/05/02</td>
            </tr>
            <tr>
              <td><a href="03_tasks.html" class="text-link">T00848</a></td>
              <td><span class="badge badge-muted">その他対応</span></td>
              <td><a href="03_tasks.html">問診修正確認</a></td>
              <td class="text-sm">—</td>
              <td><span class="badge" style="background:#f59e0b;color:#fff;">中</span></td>
              <td><span class="badge badge-warning">対応中</span></td>
              <td>恵島明日香 堤麻衣 秦勝</td>
              <td>2026/04/28</td>
              <td>2026/05/16</td>
            </tr>
          </tbody>"""

content = content.replace(old_tbody, new_tbody)

open('/home/ubuntu/focus_mockup_v2/02_home.html', 'w').write(content)
print("Done - replaced:", content.count("T00607"), "occurrences of T00607")
