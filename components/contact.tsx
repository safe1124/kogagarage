"use client"

import { useState } from "react"
import { Mail, Github, ArrowUpRight } from "lucide-react"
import { FadeIn } from "./motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:kkoga2013@gmail.com?subject=${encodeURIComponent(
      `お問い合わせ: ${formData.name}様より`
    )}&body=${encodeURIComponent(
      `お名前: ${formData.name}\nメールアドレス: ${formData.email}\n\nメッセージ:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-32 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            ご連絡をお待ちしています
          </h2>
          <p className="mb-16 max-w-lg text-muted-foreground">
            気になることがあれば、お気軽にメッセージをお送りください。
          </p>
        </FadeIn>

        <div className="grid gap-16 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  お名前
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-card"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  メールアドレス
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-card"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  メッセージ
                </label>
                <Textarea
                  id="message"
                  placeholder="お問い合わせ内容をご記入ください..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-card resize-none"
                />
              </div>

              <Button type="submit" className="w-full">
                送信する
              </Button>

              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3.5 w-3.5" />
                kkoga2013@gmail.com 宛にメールが送信されます
              </p>
            </form>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-lg font-semibold">直接連絡する</h3>
                <a
                  href="mailto:kkoga2013@gmail.com"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span>kkoga2013@gmail.com</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold">リンク</h3>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
