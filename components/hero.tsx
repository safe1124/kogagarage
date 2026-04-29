"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground md:text-base"
        >
          iOS Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.75 }}
          className="mx-auto max-w-4xl text-center text-balance text-5xl font-bold leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          こんにちは
          <br />
          iOS開発者
          <br />
          <span className="text-blue-600">古賀滉大</span>です
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl"
        >
          日常に便利さと楽しさを届けるアプリを開発しています。
          <br />
          SwiftUI と UIKit を用いて、9本のアプリをリリースしました。
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="h-10 w-px bg-border" />
        </motion.div>
      </motion.div>
    </section>
  )
}
