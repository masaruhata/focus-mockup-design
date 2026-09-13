/* ==========================================================
   Nulab-like PM — データストア
   サンプルデータ + localStorage による永続化
   （モックアップ用のクライアントサイド簡易DB）
   ========================================================== */

const PM_STORAGE_KEY = 'pm_mock_db_v1';
const PM_TODAY = '2026-09-12';

/* ── マスタ ── */
const PM_STATUSES = [
  { id: 1, name: '未対応',   cls: 'open',     color: '#ed8077' },
  { id: 2, name: '処理中',   cls: 'progress', color: '#4488ce' },
  { id: 3, name: '処理済み', cls: 'resolved', color: '#5eb5a6' },
  { id: 4, name: '完了',     cls: 'closed',   color: '#b0be3c' }
];

const PM_PRIORITIES = [
  { id: 2, name: '高', cls: 'high'   },
  { id: 3, name: '中', cls: 'normal' },
  { id: 4, name: '低', cls: 'low'    }
];

const PM_TYPES = [
  { id: 1, name: 'タスク', color: '#7ea800' },
  { id: 2, name: 'バグ',   color: '#990000' },
  { id: 3, name: '要望',   color: '#ff9200' },
  { id: 4, name: 'その他', color: '#2779ca' }
];

const PM_USERS = [
  { id: 1, name: '秦 勝',     initial: '秦', role: '管理者',     mail: 'masaru.hata@phmsolution.com', c: '' },
  { id: 2, name: '佐藤 美咲', initial: '佐', role: '一般ユーザー', mail: 'sato@example.com',  c: 'pm-avatar-c1' },
  { id: 3, name: '田中 健一', initial: '田', role: '一般ユーザー', mail: 'tanaka@example.com', c: 'pm-avatar-c2' },
  { id: 4, name: '鈴木 陽子', initial: '鈴', role: '一般ユーザー', mail: 'suzuki@example.com', c: 'pm-avatar-c3' },
  { id: 5, name: '山本 大輔', initial: '山', role: 'ゲスト',      mail: 'yamamoto@example.com', c: 'pm-avatar-c4' },
  { id: 6, name: '中村 亜季', initial: '中', role: '一般ユーザー', mail: 'nakamura@example.com', c: 'pm-avatar-c5' },
  { id: 7, name: '小林 亮',   initial: '小', role: '一般ユーザー', mail: 'kobayashi@example.com', c: 'pm-avatar-c6' }
];

const PM_PROJECTS = [
  { key: 'FOCUS', name: 'Focus 患者管理システム',   color: '#42bc72', archived: false, members: [1,2,3,4,6,7] },
  { key: 'SITE',  name: 'コーポレートサイト刷新',   color: '#4488ce', archived: false, members: [1,4,5]     },
  { key: 'OPS',   name: '社内運用・情報システム',   color: '#e8a33d', archived: false, members: [1,3,6]     }
];

const PM_CATEGORIES = ['フロントエンド', 'バックエンド', 'インフラ', 'デザイン', 'ドキュメント', '調査'];

const PM_MILESTONES = [
  { id: 1, name: 'v1.0 リリース',    start: '2026-07-01', due: '2026-09-30', desc: '初期リリース。患者管理・予約・カルテの基本機能。' },
  { id: 2, name: 'v1.1 機能改善',    start: '2026-10-01', due: '2026-11-20', desc: 'ユーザーフィードバック対応と操作性改善。' },
  { id: 3, name: 'v2.0 不妊治療領域', start: '2026-11-21', due: '2027-02-27', desc: 'ART（生殖補助医療）機能の本格対応。' }
];

/* ── 課題サンプル ──
   [key番号, 種別Id, 件名, 状態Id, 優先度Id, 担当者Id, 作成者Id, 開始日, 期限日, 予定h, 実績h, カテゴリ, マイルストーンId] */
const PM_ISSUE_SEED = [
  [ 1, 2, 'カルテ情報一覧で検索条件をクリアすると500エラーが発生する', 2, 2, 3, 2, '2026-09-08', '2026-09-14',  8,  5, 'バックエンド', 1],
  [ 2, 1, '患者情報一覧のCSVエクスポート機能を実装する',               2, 3, 2, 1, '2026-09-01', '2026-09-18', 16,  9, 'バックエンド', 1],
  [ 3, 3, '予約カレンダーに担当医フィルタを追加してほしい',             1, 3, 4, 6, '2026-09-10', '2026-09-25', 12,  0, 'フロントエンド', 1],
  [ 4, 2, 'メール受信箱のスレッド表示で添付ファイルが欠落する',         1, 2, 7, 4, '2026-09-11', '2026-09-16',  6,  0, 'フロントエンド', 1],
  [ 5, 1, '保険証OCR取り込みのバッチ処理を作成する',                   3, 3, 3, 1, '2026-08-20', '2026-09-10', 24, 26, 'バックエンド', 1],
  [ 6, 1, 'ダッシュボードのKPIウィジェットを再設計する',                4, 4, 4, 1, '2026-08-05', '2026-08-28', 20, 18, 'デザイン', 1],
  [ 7, 2, '妊娠患者一覧で週数の計算が1日ずれる',                       3, 2, 3, 6, '2026-09-02', '2026-09-09',  4,  3, 'バックエンド', 1],
  [ 8, 1, '診療費請求の締め処理をジョブ化する',                        2, 2, 7, 1, '2026-09-04', '2026-09-22', 18, 10, 'バックエンド', 1],
  [ 9, 4, '本番環境のDBバックアップ方式を見直す',                      1, 3, 3, 1, '2026-09-14', '2026-10-02', 10,  0, 'インフラ', 2],
  [10, 1, '問診フォームのバリデーションを共通化する',                  2, 3, 2, 4, '2026-09-07', '2026-09-19', 14,  6, 'フロントエンド', 1],
  [11, 3, '在庫一覧に発注点アラートを表示したい',                      1, 4, 6, 3, '2026-09-16', '2026-10-08', 12,  0, 'フロントエンド', 2],
  [12, 2, 'ログイン後にセッションが30分で切れてしまう',                2, 2, 3, 5, '2026-09-09', '2026-09-13',  6,  4, 'バックエンド', 1],
  [13, 1, '患者アカウントの一括招待メール送信を実装する',              1, 3, 2, 1, '2026-09-15', '2026-10-05', 16,  0, 'バックエンド', 2],
  [14, 1, 'レセプト出力のレイアウトを最新様式に更新する',              3, 2, 7, 6, '2026-08-24', '2026-09-08', 20, 22, 'バックエンド', 1],
  [15, 4, 'アクセスログの保管期間ポリシーを決める',                    1, 4, 1, 1, '2026-09-18', '2026-10-16',  4,  0, 'ドキュメント', 2],
  [16, 1, '検査情報の取込インターフェース仕様書を作成する',            2, 3, 6, 1, '2026-09-03', '2026-09-20', 12,  7, 'ドキュメント', 1],
  [17, 2, '凍結胚一覧のソートが更新日で効かない',                      1, 3, 4, 2, '2026-09-12', '2026-09-24',  3,  0, 'フロントエンド', 2],
  [18, 3, '一斉配信メールに配信予約機能がほしい',                      1, 3, 2, 3, '2026-09-20', '2026-10-14', 20,  0, 'バックエンド', 2],
  [19, 1, 'OPU（採卵）記録画面のUI実装',                              2, 2, 4, 1, '2026-09-05', '2026-09-26', 28, 12, 'フロントエンド', 1],
  [20, 1, '移植（ET）記録と凍結胚の紐付けロジックを実装する',          1, 2, 7, 1, '2026-09-22', '2026-10-20', 24,  0, 'バックエンド', 3],
  [21, 2, 'PDF出力で日本語フォントが埋め込まれない',                   3, 2, 3, 4, '2026-08-28', '2026-09-05',  6,  8, 'インフラ', 1],
  [22, 1, 'ステージング環境のCI/CDパイプラインを整備する',            4, 3, 3, 1, '2026-08-01', '2026-08-22', 16, 15, 'インフラ', 1],
  [23, 3, '患者メモにテンプレート挿入機能を追加してほしい',            1, 4, 6, 5, '2026-09-25', '2026-10-23', 10,  0, 'フロントエンド', 2],
  [24, 1, '権限管理（ロール別メニュー制御）の実装',                    2, 2, 2, 1, '2026-09-02', '2026-09-30', 32, 18, 'バックエンド', 1],
  [25, 2, 'スマートフォン表示でサイドバーが閉じられない',              1, 3, 4, 6, '2026-09-11', '2026-09-17',  5,  0, 'フロントエンド', 1],
  [26, 4, '個人情報の取扱いに関する運用手順を整理する',                2, 3, 1, 1, '2026-09-01', '2026-09-29',  8,  4, 'ドキュメント', 1],
  [27, 1, '紹介元情報のマスタメンテ画面を作成する',                    1, 4, 7, 3, '2026-10-01', '2026-10-28', 18,  0, 'フロントエンド', 2],
  [28, 1, '受付端末向けの再来受付フローを設計する',                    1, 3, 6, 1, '2026-10-05', '2026-11-06', 22,  0, '調査', 2],
  [29, 2, '同姓同名患者の重複登録チェックが機能していない',            2, 2, 3, 2, '2026-09-10', '2026-09-15',  8,  3, 'バックエンド', 1],
  [30, 1, '助成金申請書の自動出力に対応する',                          1, 3, 2, 6, '2026-10-12', '2026-11-13', 20,  0, 'バックエンド', 2],
  [31, 3, '検査結果グラフの表示期間を選択できるようにしたい',          1, 4, 4, 5, '2026-11-02', '2026-11-27', 14,  0, 'フロントエンド', 3],
  [32, 1, '負荷試験を実施して同時接続数の上限を確認する',              1, 3, 3, 1, '2026-11-24', '2026-12-18', 24,  0, 'インフラ', 3],
  [33, 1, 'オンライン診療の決済連携を実装する',                        1, 2, 7, 1, '2026-12-01', '2027-01-15', 40,  0, 'バックエンド', 3],
  [34, 4, 'v1.0 リリース手順書のレビューを行う',                       2, 2, 1, 1, '2026-09-12', '2026-09-26',  6,  2, 'ドキュメント', 1]
];

const PM_DESCRIPTIONS = {
  1: '## 事象\nカルテ情報一覧の検索フォームで「クリア」を押すと 500 エラーになる。\n\n## 再現手順\n1. カルテ情報一覧を開く\n2. 患者番号に任意の値を入力して検索\n3. 「クリア」ボタンを押下\n\n## 期待動作\n検索条件が初期化され、一覧が全件表示されること。\n\n## 補足\nログに `NullPointerException at KarteSearchForm#reset` が出力されている。',
  2: '患者情報一覧の検索結果を CSV でダウンロードできるようにする。\n\n- 文字コード: UTF-8 (BOM付き)\n- 出力項目: 患者番号 / 氏名 / カナ / 生年月日 / 性別 / 電話番号 / 最終来院日\n- 最大 10,000 件。超過時はエラーメッセージを表示する\n- 出力操作は監査ログに記録すること',
  3: '予約カレンダー画面で担当医ごとの絞り込みができないため、外来担当が自分の予約だけを確認できない。\n\nヘッダー部にセレクトボックスを追加し、選択内容を localStorage に保持したい。',
  19: '## 目的\nOPU（採卵）記録を画面から登録・参照できるようにする。\n\n## 実装範囲\n- 採卵日 / 採卵数 / 成熟卵数 / 実施医師\n- 患者詳細からのタブ遷移\n- 一覧のページング・並び替え\n\n## 対象外\n- 培養記録との連携（v2.0 で対応）',
  24: '## 概要\nロール（管理者 / 医師 / 看護師 / 受付 / 事務）ごとにメニューと操作権限を制御する。\n\n## 方針\n- 権限マスタをDB管理し、画面側はサーバから受け取った権限マップで描画を制御\n- API 側でも必ず権限チェックを行う（画面制御のみに依存しない）'
};

const PM_COMMENT_SEED = {
  1: [
    [3, '2026-09-08 10:24', '再現しました。検索条件のリセット時に session の検索フォームが null になっているようです。', null],
    [3, '2026-09-09 09:05', '', ['状態', '未対応', '処理中']],
    [2, '2026-09-10 14:12', '影響範囲は一覧系すべてに及ぶ可能性があるので、共通処理として直したほうがよさそうです。', null],
    [3, '2026-09-11 18:40', '共通の SearchFormBase#reset を修正して対応します。テストコードも追加予定。', null]
  ],
  2: [
    [2, '2026-09-03 11:30', '出力項目の確認をお願いします。個人情報を含むため、ダウンロード操作は監査ログに残します。', null],
    [1, '2026-09-04 09:15', '項目はこれでOKです。件数上限は 10,000 件で問題ありません。', null],
    [2, '2026-09-08 16:02', '', ['担当者', '未設定', '佐藤 美咲']]
  ],
  5: [
    [3, '2026-09-05 13:20', 'OCR の精度が想定より低かったため、前処理（傾き補正・二値化）を追加しました。', null],
    [3, '2026-09-10 17:45', '', ['状態', '処理中', '処理済み']],
    [1, '2026-09-11 09:00', 'ありがとうございます。受け入れ確認を進めます。', null]
  ],
  12: [
    [3, '2026-09-09 15:10', 'セッションタイムアウトが 30 分固定になっています。設定値化して 8 時間に変更します。', null]
  ],
  19: [
    [4, '2026-09-06 10:00', 'デザイン確定分をもとに実装を開始しました。', null],
    [1, '2026-09-09 11:20', '入力項目に「実施医師」を追加してください。', null],
    [4, '2026-09-10 19:30', '', ['期限日', '2026-09-19', '2026-09-26']]
  ],
  24: [
    [2, '2026-09-05 14:45', '権限マスタのテーブル設計をWikiにまとめました。レビューお願いします。', null],
    [1, '2026-09-06 08:50', 'API 側のチェックも必須でお願いします。画面制御だけだと抜けます。', null]
  ]
};

const PM_WIKI_SEED = [
  { id: 1, title: 'ホーム', updatedBy: 1, updated: '2026-09-11 18:20', tags: ['入門'],
    body: '# Focus 患者管理システム 開発Wiki\n\nこのプロジェクトの共有情報をまとめています。\n\n## はじめに読むページ\n\n- [開発環境セットアップ手順](#)\n- [コーディング規約](#)\n- [リリースフロー](#)\n\n## 定例\n\n| 会議 | 曜日 | 時間 |\n| --- | --- | --- |\n| 朝会 | 毎日 | 09:30 - 09:45 |\n| スプリントレビュー | 金 | 16:00 - 17:00 |\n| 振り返り | 金 | 17:00 - 17:30 |\n\n> 議事録は「議事録」配下に日付ごとのページを作成してください。' },
  { id: 2, title: '開発環境セットアップ手順', updatedBy: 3, updated: '2026-09-09 13:05', tags: ['開発', '入門'],
    body: '# 開発環境セットアップ手順\n\n## 必要なもの\n\n- Docker Desktop 4.30 以上\n- Node.js 22.x\n- Git\n\n## 手順\n\n```bash\ngit clone git@example.com:phm/focus.git\ncd focus\ncp .env.example .env\ndocker compose up -d\nnpm ci\nnpm run dev\n```\n\n起動後 `http://localhost:3000` にアクセスします。\n\n## よくあるトラブル\n\n1. ポート競合 — `docker compose down` 後に再実行\n2. DB マイグレーション失敗 — `npm run db:reset` を実行' },
  { id: 3, title: 'コーディング規約', updatedBy: 2, updated: '2026-09-07 10:41', tags: ['開発'],
    body: '# コーディング規約\n\n## 命名\n\n- 変数・関数: `camelCase`\n- クラス・型: `PascalCase`\n- 定数: `UPPER_SNAKE_CASE`\n\n## レビュー観点\n\n- 個人情報を含むログ出力をしていないか\n- N+1 クエリになっていないか\n- 権限チェックが API 側にもあるか\n\n> 例外的な実装を行う場合は、必ずコメントで理由を残すこと。' },
  { id: 4, title: 'リリースフロー', updatedBy: 1, updated: '2026-09-04 16:12', tags: ['運用'],
    body: '# リリースフロー\n\n1. `develop` から `release/x.y.z` を作成\n2. ステージングへデプロイし受け入れテスト\n3. リリース判定会（毎週木曜 15:00）\n4. `main` へマージしタグを打つ\n5. 本番デプロイ（原則 火・木 の 20:00 以降）\n\n## ロールバック\n\n直前のタグを再デプロイする。DB マイグレーションを伴う場合は事前にバックアップを取得すること。' },
  { id: 5, title: '権限マスタ設計メモ', updatedBy: 2, updated: '2026-09-05 14:30', tags: ['設計'],
    body: '# 権限マスタ設計メモ\n\n## テーブル\n\n| テーブル | 用途 |\n| --- | --- |\n| roles | ロール定義 |\n| permissions | 機能単位の権限 |\n| role_permissions | 中間テーブル |\n| user_roles | ユーザーとロールの紐付け |\n\n## ロール\n\n- 管理者 / 医師 / 看護師 / 受付 / 事務\n\n関連課題: FOCUS-24' },
  { id: 6, title: '議事録 / 2026-09-11 スプリントレビュー', updatedBy: 6, updated: '2026-09-11 17:40', tags: ['議事録'],
    body: '# スプリントレビュー 2026-09-11\n\n参加者: 秦、佐藤、田中、鈴木、中村\n\n## 完了した課題\n\n- FOCUS-5 保険証OCR取り込みバッチ\n- FOCUS-7 妊娠週数の計算ずれ\n- FOCUS-14 レセプト出力レイアウト更新\n\n## 次スプリントの重点\n\n- 権限管理（FOCUS-24）を最優先\n- v1.0 リリース手順書のレビュー（FOCUS-34）\n\n## 課題\n\n- 検証環境のデータ量が本番と乖離しており、性能問題を検知できていない' }
];

const PM_FILE_SEED = [
  { name: '仕様書', type: 'dir', size: 0, updated: '2026-09-10 11:20', by: 1, count: 12 },
  { name: 'デザイン', type: 'dir', size: 0, updated: '2026-09-08 18:02', by: 4, count: 34 },
  { name: '議事録', type: 'dir', size: 0, updated: '2026-09-11 17:45', by: 6, count: 21 },
  { name: 'Focus_要件定義書_v1.4.pdf', type: 'pdf', size: 2411724, updated: '2026-09-09 09:40', by: 1 },
  { name: '画面遷移図_v1.0.pdf', type: 'pdf', size: 1180420, updated: '2026-09-05 14:22', by: 4 },
  { name: 'DB論理設計_20260902.xlsx', type: 'xlsx', size: 386112, updated: '2026-09-02 16:10', by: 2 },
  { name: 'リリース判定チェックリスト.xlsx', type: 'xlsx', size: 74240, updated: '2026-09-11 10:05', by: 1 },
  { name: 'ダッシュボード改修案.png', type: 'img', size: 942310, updated: '2026-08-27 13:33', by: 4 },
  { name: 'API仕様_v0.9.md', type: 'md', size: 41230, updated: '2026-09-06 19:14', by: 3 },
  { name: '負荷試験計画書_draft.docx', type: 'doc', size: 128944, updated: '2026-09-03 11:48', by: 3 }
];

const PM_COMMIT_SEED = [
  { hash: '8f3c1ad', msg: 'FOCUS-1 検索フォームのリセット処理を共通化', by: 3, at: '2026-09-11 18:42', add: 86, del: 24, branch: 'feature/FOCUS-1' },
  { hash: '2b91e07', msg: 'FOCUS-24 権限マップをAPIレスポンスに追加', by: 2, at: '2026-09-11 15:10', add: 214, del: 12, branch: 'feature/FOCUS-24' },
  { hash: 'c47d5b2', msg: 'FOCUS-19 OPU記録フォームのバリデーション追加', by: 4, at: '2026-09-11 11:26', add: 132, del: 8, branch: 'feature/FOCUS-19' },
  { hash: 'a10f9c8', msg: 'FOCUS-14 レセプト様式を2026年度版に更新', by: 7, at: '2026-09-10 20:03', add: 340, del: 288, branch: 'develop' },
  { hash: '5de20b4', msg: 'FOCUS-5 OCR前処理（傾き補正）を追加', by: 3, at: '2026-09-10 17:32', add: 96, del: 4, branch: 'develop' },
  { hash: '77ac311', msg: 'chore: 依存ライブラリを更新', by: 3, at: '2026-09-09 09:58', add: 18, del: 18, branch: 'develop' },
  { hash: 'e93b6f0', msg: 'FOCUS-7 妊娠週数の計算ロジックを修正', by: 3, at: '2026-09-08 16:44', add: 27, del: 19, branch: 'develop' },
  { hash: '1c0aa5d', msg: 'FOCUS-10 フォームバリデーションを共通コンポーネント化', by: 2, at: '2026-09-08 10:12', add: 178, del: 96, branch: 'feature/FOCUS-10' }
];

const PM_PR_SEED = [
  { id: 42, title: 'FOCUS-24 ロール別権限制御の実装', by: 2, at: '2026-09-11 15:20', from: 'feature/FOCUS-24', to: 'develop', status: 'open',    reviewers: [1,3], comments: 6, add: 512, del: 88 },
  { id: 41, title: 'FOCUS-1 検索フォームのリセットで500エラーになる不具合の修正', by: 3, at: '2026-09-11 18:50', from: 'feature/FOCUS-1', to: 'develop', status: 'open', reviewers: [2], comments: 2, add: 86, del: 24 },
  { id: 40, title: 'FOCUS-19 OPU記録画面のUI実装', by: 4, at: '2026-09-11 11:40', from: 'feature/FOCUS-19', to: 'develop', status: 'open', reviewers: [1,2], comments: 9, add: 640, del: 12 },
  { id: 39, title: 'FOCUS-14 レセプト出力レイアウト更新', by: 7, at: '2026-09-10 20:10', from: 'feature/FOCUS-14', to: 'develop', status: 'merged', reviewers: [1], comments: 4, add: 340, del: 288 },
  { id: 38, title: 'FOCUS-7 妊娠週数の計算ずれを修正', by: 3, at: '2026-09-08 16:50', from: 'bugfix/FOCUS-7', to: 'develop', status: 'merged', reviewers: [6], comments: 3, add: 27, del: 19 },
  { id: 37, title: '検証用のダミーデータ生成スクリプト（暫定）', by: 5, at: '2026-09-02 13:05', from: 'spike/dummy-data', to: 'develop', status: 'closed', reviewers: [3], comments: 1, add: 210, del: 0 }
];

const PM_NOTICE_SEED = [
  { id: 1, type: 'assign',  issue: 'FOCUS-4',  by: 4, at: '2026-09-12 09:12', text: 'あなたが担当者に設定されました', read: false },
  { id: 2, type: 'comment', issue: 'FOCUS-24', by: 2, at: '2026-09-12 08:40', text: '権限マスタのテーブル設計をWikiにまとめました。レビューお願いします。', read: false },
  { id: 3, type: 'status',  issue: 'FOCUS-5',  by: 3, at: '2026-09-11 17:45', text: '状態が「処理中」から「処理済み」に変更されました', read: false },
  { id: 4, type: 'mention', issue: 'FOCUS-34', by: 6, at: '2026-09-11 16:05', text: '@秦 勝 リリース手順書のレビュー期限を確認させてください', read: true },
  { id: 5, type: 'comment', issue: 'FOCUS-1',  by: 3, at: '2026-09-11 18:40', text: '共通の SearchFormBase#reset を修正して対応します。', read: true },
  { id: 6, type: 'pr',      issue: 'PR #42',   by: 2, at: '2026-09-11 15:20', text: 'プルリクエストのレビュー依頼が届きました', read: true },
  { id: 7, type: 'due',     issue: 'FOCUS-12', by: 0, at: '2026-09-11 09:00', text: '期限日が近づいています（2026-09-13）', read: true },
  { id: 8, type: 'status',  issue: 'FOCUS-21', by: 3, at: '2026-09-05 11:20', text: '状態が「処理中」から「処理済み」に変更されました', read: true }
];

/* ── ストア本体 ── */
const PM = (function () {

  function buildIssues() {
    return PM_ISSUE_SEED.map(function (r) {
      var num = r[0];
      var comments = (PM_COMMENT_SEED[num] || []).map(function (c, i) {
        return { id: i + 1, userId: c[0], at: c[1], body: c[2], change: c[3] };
      });
      return {
        id: num,
        key: 'FOCUS-' + num,
        projectKey: 'FOCUS',
        typeId: r[1],
        summary: r[2],
        statusId: r[3],
        priorityId: r[4],
        assigneeId: r[5],
        createdById: r[6],
        start: r[7],
        due: r[8],
        estimated: r[9],
        actual: r[10],
        category: r[11],
        milestoneId: r[12],
        description: PM_DESCRIPTIONS[num] || '（説明は未入力です）',
        created: r[7] + ' 09:00',
        updated: comments.length ? comments[comments.length - 1].at : r[7] + ' 09:00',
        comments: comments,
        attachments: num === 1 ? [{ name: 'error_stacktrace.txt', size: 8421 }] : []
      };
    });
  }

  function defaults() {
    return {
      currentUserId: 1,
      currentProjectKey: 'FOCUS',
      nextIssueNumber: PM_ISSUE_SEED.length + 1,
      issues: buildIssues(),
      wiki: JSON.parse(JSON.stringify(PM_WIKI_SEED)),
      notices: JSON.parse(JSON.stringify(PM_NOTICE_SEED))
    };
  }

  var db;
  try {
    var raw = localStorage.getItem(PM_STORAGE_KEY);
    db = raw ? JSON.parse(raw) : defaults();
    if (!db.issues || !db.issues.length) db = defaults();
  } catch (e) {
    db = defaults();
  }

  function save() {
    try { localStorage.setItem(PM_STORAGE_KEY, JSON.stringify(db)); } catch (e) { /* 保存不可でも動作は継続 */ }
  }

  function reset() {
    db = defaults();
    save();
  }

  /* ── 参照系 ── */
  function issues() { return db.issues; }
  function issue(key) { return db.issues.filter(function (i) { return i.key === key; })[0] || null; }
  function user(id) { return PM_USERS.filter(function (u) { return u.id === id; })[0] || null; }
  function status(id) { return PM_STATUSES.filter(function (s) { return s.id === id; })[0]; }
  function priority(id) { return PM_PRIORITIES.filter(function (p) { return p.id === id; })[0]; }
  function type(id) { return PM_TYPES.filter(function (t) { return t.id === id; })[0]; }
  function milestone(id) { return PM_MILESTONES.filter(function (m) { return m.id === id; })[0] || null; }
  function project(key) { return PM_PROJECTS.filter(function (p) { return p.key === key; })[0]; }
  function currentUser() { return user(db.currentUserId); }
  function currentProject() { return project(db.currentProjectKey); }

  /* ── 更新系 ── */
  function addIssue(data) {
    var num = db.nextIssueNumber++;
    var now = nowString();
    var it = {
      id: num,
      key: 'FOCUS-' + num,
      projectKey: 'FOCUS',
      typeId: Number(data.typeId) || 1,
      summary: data.summary,
      statusId: 1,
      priorityId: Number(data.priorityId) || 3,
      assigneeId: data.assigneeId ? Number(data.assigneeId) : null,
      createdById: db.currentUserId,
      start: data.start || '',
      due: data.due || '',
      estimated: data.estimated ? Number(data.estimated) : 0,
      actual: 0,
      category: data.category || '',
      milestoneId: data.milestoneId ? Number(data.milestoneId) : null,
      description: data.description || '',
      created: now,
      updated: now,
      comments: [],
      attachments: []
    };
    db.issues.unshift(it);
    save();
    return it;
  }

  function updateIssue(key, patch, commentBody) {
    var it = issue(key);
    if (!it) return null;
    var labels = { statusId: '状態', priorityId: '優先度', assigneeId: '担当者', due: '期限日', start: '開始日', milestoneId: 'マイルストーン', category: 'カテゴリー', summary: '件名', estimated: '予定時間', actual: '実績時間' };
    var changes = [];
    Object.keys(patch).forEach(function (k) {
      var before = it[k], after = patch[k];
      if (String(before) === String(after)) return;
      it[k] = after;
      if (labels[k]) changes.push([labels[k], displayValue(k, before), displayValue(k, after)]);
    });
    var now = nowString();
    if (changes.length || (commentBody && commentBody.trim())) {
      it.comments.push({
        id: it.comments.length + 1,
        userId: db.currentUserId,
        at: now,
        body: commentBody ? commentBody.trim() : '',
        change: changes.length ? changes[0] : null,
        changes: changes
      });
      it.updated = now;
    }
    save();
    return it;
  }

  function displayValue(field, v) {
    if (v === null || v === undefined || v === '') return '未設定';
    if (field === 'statusId') return status(Number(v)).name;
    if (field === 'priorityId') return priority(Number(v)).name;
    if (field === 'assigneeId') { var u = user(Number(v)); return u ? u.name : '未設定'; }
    if (field === 'milestoneId') { var m = milestone(Number(v)); return m ? m.name : '未設定'; }
    return String(v);
  }

  function addComment(key, body) { return updateIssue(key, {}, body); }

  function markNoticesRead() {
    db.notices.forEach(function (n) { n.read = true; });
    save();
  }
  function unreadCount() { return db.notices.filter(function (n) { return !n.read; }).length; }

  function saveWiki(id, title, body) {
    var p = db.wiki.filter(function (w) { return w.id === id; })[0];
    if (p) { p.title = title; p.body = body; p.updated = nowString(); p.updatedBy = db.currentUserId; }
    else {
      id = Math.max.apply(null, db.wiki.map(function (w) { return w.id; })) + 1;
      db.wiki.push({ id: id, title: title, body: body, updated: nowString(), updatedBy: db.currentUserId, tags: [] });
    }
    save();
    return id;
  }

  function nowString() {
    var d = new Date();
    function p(n) { return String(n).padStart(2, '0'); }
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
  }

  return {
    TODAY: PM_TODAY,
    statuses: PM_STATUSES, priorities: PM_PRIORITIES, types: PM_TYPES,
    users: PM_USERS, projects: PM_PROJECTS, categories: PM_CATEGORIES, milestones: PM_MILESTONES,
    commits: PM_COMMIT_SEED, prs: PM_PR_SEED, files: PM_FILE_SEED,
    db: db, save: save, reset: reset,
    issues: issues, issue: issue, user: user, status: status, priority: priority,
    type: type, milestone: milestone, project: project,
    currentUser: currentUser, currentProject: currentProject,
    addIssue: addIssue, updateIssue: updateIssue, addComment: addComment,
    markNoticesRead: markNoticesRead, unreadCount: unreadCount,
    saveWiki: saveWiki, nowString: nowString, displayValue: displayValue,
    wiki: function () { return db.wiki; },
    notices: function () { return db.notices; }
  };
})();
