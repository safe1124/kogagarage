"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "./motion"

const strengths = [
  "企画・設計・実装・申請までを 1 人で完遂する実行力",
  "SwiftUI と UIKit を併用し、デザインの再現度と開発速度を両立",
  "リリース後のデータ分析とユーザーインタビューで改善サイクルを構築",
]

export function About() {
  return (
    <section id="about" className="py-32 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About
          </p>
          <h2 className="mb-16 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-balance">
            アプリの力で、
            <br />
            日常をもっと便利に、もっと楽しく。
          </h2>
        </FadeIn>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="mb-4 text-lg font-semibold">ミッション</h3>
              <p className="leading-relaxed text-muted-foreground">
                複雑さを取り除き、直感だけを残す。
                声なき声に耳を傾け、心地よい体験を設計する。
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="mb-4 text-lg font-semibold">現在の関心</h3>
              <p className="leading-relaxed text-muted-foreground">
                ソフトウェアの品質担保に関心があります。
                単に機能を実装するだけでなく、テストコードを書くことでその動作を保証し、
                将来の変更や機能追加にも耐えうる、保守性の高いコードを目指しています。
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-16">
          <h3 className="mb-6 text-lg font-semibold">強み</h3>
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {strengths.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:bg-accent/50">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-medium text-background">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  )
}
