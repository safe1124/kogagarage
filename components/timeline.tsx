"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "./motion"

const timelineEvents = [
  {
    year: "2019",
    title: "高校2年",
    heading: "週末にこつこつ Swift を習得",
    description:
      "塾のアプリ制作のイベントを機に Swift を独学。友達やユーザからのレビューを受け、使いやすさにこだわる姿勢が芽生えました。",
  },
  {
    year: "2020",
    title: "高校3年",
    heading: "「勉強スケジュール べんすけ」で初リリース",
    description:
      "受験期の課題だった学習計画づくりをアプリで解決。リジェクト対応を繰り返し、UI/UX と審査観点の両方で学びを得ました。アプリ甲子園ファイナリスト選出。",
  },
  {
    year: "2022",
    title: "",
    heading: "ライフログとゲームの両軸で挑戦",
    description:
      "「学生ToDo」「Attack On Ghost」などジャンルの異なる 2 本を公開。日常の課題とエンタメの表現の幅を広げ、UI パターンの知見を蓄積しました。",
  },
  {
    year: "2023",
    title: "",
    heading: "生活リズムに寄り添うプロダクトへ",
    description:
      "「Plantodo」「あさなび」「行動提案」で生活習慣データと連動した体験を設計。ユーザーインタビューを継続し、リテンション改善の指標づくりを進めました。",
  },
  {
    year: "2025",
    title: "現在",
    heading: "ヘルスケア × 研究領域をアプリで加速",
    description:
      "研究室向けの「iPPG Lab」とセルフケア支援の「TABAKO 禁煙アプリ」を公開。データ基盤と継続的なアップデート体制を整え、次のプロダクトの構想を練っています。",
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-32 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Timeline
          </p>
          <h2 className="mb-16 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            アプリづくりを続けてきた足跡。
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15}>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-32" />

            {timelineEvents.map((event, index) => (
              <StaggerItem key={index}>
                <div className="relative mb-12 flex flex-col gap-4 pl-8 md:flex-row md:gap-8 md:pl-0 last:mb-0">
                  <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-foreground md:left-32 md:-translate-x-1/2" />

                  <div className="shrink-0 md:w-28 md:text-right">
                    <span className="text-sm font-medium">{event.year}</span>
                    {event.title && (
                      <p className="text-xs text-muted-foreground">{event.title}</p>
                    )}
                  </div>

                  <div className="flex-1 md:pl-8">
                    <h3 className="mb-2 text-lg font-semibold">{event.heading}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
