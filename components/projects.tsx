"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion"

const apps: Array<{
  name: string
  category: string
  year: string
  isNew?: boolean
  iconSrc: string
  description: string
  features: string[]
  ios: string
}> = [
  {
    name: "べんすけ２",
    category: "HEALTH & FITNESS",
    year: "2025",
    isNew: true,
    iconSrc: "/app-icons/bensuke-2.png",
    description:
      "前作の人気を受け、さらに便利に進化した弁当管理アプリ。栄養管理とレシピ検索が一体化しました。",
    features: [
      "AIが栄養バランスを自動計算し、最適なレシピを提案",
      "毎日の栄養摂取状況を可視化し、健康目標をサポート",
      "お気に入りレシピを保存し、買い物リストを自動生成",
    ],
    ios: "16.0+",
  },
  {
    name: "TABAKO 禁煙アプリ",
    category: "HEALTH & FITNESS",
    year: "2025",
    iconSrc: "/app-icons/tabako.jpg",
    description:
      "禁煙の成果をお金で見える化し、前向きな習慣化を支えるセルフケアアプリです。",
    features: [
      "喫煙の履歴をカレンダーで可視化",
      "吸わなかった本数から節約額を自動計算",
      "節約額に応じたリワード候補と通知で継続を後押し",
    ],
    ios: "16.6+",
  },
  {
    name: "iPPG Lab",
    category: "HEALTH & FITNESS",
    year: "2025",
    iconSrc: "/app-icons/ippg-lab.jpg",
    description:
      "研究・教育用途の iPPG 計測アプリ。指先にカメラとフラッシュを当てるだけで脈波データをリアルタイムに取得できます。",
    features: [
      "心拍波形と BPM をライブ表示、手動・自動モードを切り替え",
      "振幅 SD・サンプル差分 SD・BPM 安定性で信号品質を自動判定",
      "計測データを CSV で書き出し、ガイドとチュートリアルを内蔵",
    ],
    ios: "16.6+",
  },
  {
    name: "あさなび",
    category: "PRODUCTIVITY",
    year: "2023",
    iconSrc: "/app-icons/asanavi.jpg",
    description:
      "翌朝の出発時間から逆算して支度の段取りを整える、モーニングルーティン専用のタイマーアプリです。",
    features: [
      "外出時刻を入力するだけで準備の残り時間を可視化",
      "朝にこなすタスク名と所要時間を組み合わせて登録",
      "カウントダウンを見ながら支度のペースを調整",
    ],
    ios: "15+",
  },
  {
    name: "Plantodo",
    category: "PRODUCTIVITY",
    year: "2023",
    iconSrc: "/app-icons/plantodo.jpg",
    description:
      "ストレス度と集中力のリズムをもとに、現在時刻から 3 時間分の予定を自動生成するスケジュールプランナーです。",
    features: [
      "自己評価したストレス度とタスクの連続上限を考慮して配分",
      "長期休憩の要否を設定し、負荷の波をなだらかに調整",
      "パーソナライズされた時間割で健康的な作業サイクルを支援",
    ],
    ios: "14+",
  },
  {
    name: "べんすけ",
    category: "HEALTH & FITNESS",
    year: "2024",
    iconSrc: "/app-icons/bensuke.jpg",
    description:
      "毎日の弁当内容を記録し、栄養バランスを簡単に管理できるアプリです。",
    features: [
      "弁当の写真を撮るだけで栄養情報を自動抽出",
      "カロリーと栄養素の推移をグラフで確認",
      "栄養基準に対する達成度を日ごと・週ごとで表示",
    ],
    ios: "15.0+",
  },
  {
    name: "行動提案",
    category: "HEALTH & FITNESS",
    year: "2023",
    iconSrc: "/app-icons/action-suggestion.jpg",
    description:
      "行動ミッションのリズムに合わせてタスクを提案し、日々の行動変化を支援するアプリです。",
    features: [
      "ミッションの提案と実行記録を管理",
      "振り返りで習慣の定着をサポート",
      "日々のログから次の一歩を提案",
    ],
    ios: "14+",
  },
  {
    name: "Attack On Ghost",
    category: "GAME",
    year: "2022",
    iconSrc: "/app-icons/attack-on-ghost.jpg",
    description:
      "ゴーストの侵入を阻止する、リアルタイム防衛ゲームです。",
    features: [
      "監視映像をもとに侵入を防衛",
      "アイテム選択で状況に合わせて対応",
      "タイマー制で緊張感のあるプレイを実現",
    ],
    ios: "14+",
  },
  {
    name: "学生ToDo",
    category: "EDUCATION",
    year: "2022",
    iconSrc: "/app-icons/student-todo.jpg",
    description:
      "学生の学習計画とタスク管理を支援する ToDo アプリです。",
    features: [
      "カテゴリ別のタスク登録と優先度設定",
      "日次・週次のタスクを一覧で管理",
      "学習ペースに合わせたタスクリストを提案",
    ],
    ios: "14+",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 scroll-mt-16 bg-accent/30">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Projects
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            App Store に公開中のアプリ
          </h2>
          <p className="mb-16 max-w-2xl text-muted-foreground">
            9 本のアプリを、最新のアップデート順に紹介します。
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-16 rounded-2xl border border-border bg-card p-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Milestone
            </p>
            <p className="text-4xl font-bold md:text-5xl">
              2,500<span className="text-2xl">+</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              合計ダウンロード数（2025年10月 現在）
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {apps.map((app) => (
            <StaggerItem key={app.name}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg">
                {app.isNew && (
                  <div className="absolute right-6 top-6 inline-flex items-center rounded-full bg-foreground px-3 py-1">
                    <span className="text-xs font-semibold text-background">NEW</span>
                  </div>
                )}
                <div className="mb-5 flex items-start gap-4 pr-14">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-border/70">
                    <Image
                      src={app.iconSrc}
                      alt={`${app.name} icon`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-lg font-semibold leading-snug">{app.name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {app.category} / {app.year}
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {app.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {app.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">
                    iOS {app.ios}
                  </span>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-muted-foreground"
                    >
                      App Store
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="#"
                      className="text-sm font-medium transition-colors hover:text-muted-foreground"
                    >
                      詳細ページ
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>


      </div>
    </section>
  )
}
