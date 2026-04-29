"use client"

import { motion, type Variants } from "framer-motion"

const letterEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
const floatEase = "easeInOut" as const

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.8,
      ease: letterEase,
    },
  }),
}

const floatVariants: Variants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: 2.5 + i * 0.2,
      repeat: Infinity,
      ease: floatEase,
      delay: i * 0.15,
    },
  }),
}

export function Hero() {
  const name = "KOGA"

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8 flex justify-center gap-1 md:gap-2 perspective-1000">
          {name.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="inline-block text-7xl font-bold tracking-tighter md:text-9xl lg:text-[12rem]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.span
                custom={i}
                animate="animate"
                variants={floatVariants}
                whileHover={{
                  scale: 1.05,
                  color: "#555",
                  transition: { duration: 0.2 },
                }}
                className="inline-block cursor-default"
              >
                {letter}
              </motion.span>
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-4 text-xl font-medium md:text-2xl"
        >
          古賀滉大
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mx-auto max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          iOS Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground"
        >
          日常に便利さと楽しさを届けるアプリを開発しています。
          <br />
          SwiftUI と UIKit を用いて、8本のアプリをリリースしました。
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
