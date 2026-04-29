"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "./motion"

const findings = [
  "DET・L・E の全指標で FPS の影響が最大",
  "測定時間を短くしても品質はほぼ維持",
  "FPS を下げると指標値が急激に変化",
]

const background = [
  "iPPG はスマートフォンのカメラに指先を当てるだけで脈波を推定できる技術。",
  "測定時間やフレームレートがデータ特性にどう影響するかは十分に解明されていなかった。",
]

const experiment = [
  "20 代の健康な男女 20 名の指先を iPad mini（240 FPS）で約 5 分間撮影。",
  "各フレームの指先領域から赤色成分の平均値を抽出し、脈波データを作成。",
  "リカレンス定量化分析（DET / L / E）で複雑性と予測性を評価。",
]

const conclusions = [
  "FPS が iPPG の信頼性に圧倒的な影響を与えることを実証。",
  "短時間でも高 FPS を確保すれば安定した測定が可能。",
  "高 FPS を優先するという具体的な指針をモバイルアプリ設計に提供。",
]

export function Research() {
  return (
    <section id="research" className="py-32 scroll-mt-16 bg-accent/30">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Research
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-balance">
            FPS が iPPG 測定の信頼性を決める
          </h2>
          <p className="mb-16 max-w-3xl text-muted-foreground">
            iPPG（イメージング光電式容積脈波）のデータ品質を左右する要因に迫った研究です。
            スマートフォンなどのカメラで脈波を測定する iPPG では、
            撮影時間よりも動画の滑らかさ（フレームレート / FPS）がデータ品質を大きく左右することを明らかにしました。
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-16 rounded-2xl border border-border bg-card p-8">
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Key Findings
            </p>
            <StaggerContainer className="grid gap-4 md:grid-cols-3" staggerDelay={0.1}>
              {findings.map((finding, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-medium text-background">
                      {i + 1}
                    </span>
                    <p className="text-sm">{finding}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn delay={0.2}>
            <h3 className="mb-4 text-lg font-semibold">背景</h3>
            <ul className="space-y-3">
              {background.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h3 className="mb-4 text-lg font-semibold">実験と分析</h3>
            <ul className="space-y-3">
              {experiment.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-12">
          <h3 className="mb-4 text-lg font-semibold">結論と意義</h3>
          <ul className="space-y-3">
            {conclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
