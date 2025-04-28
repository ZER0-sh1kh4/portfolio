"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Hello, I'm</span>
            <span className="block mt-2 text-5xl sm:text-6xl md:text-7xl glow-text">Shikha Gangwar</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 text-muted-foreground">CyberSecurity Engineer</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              size="lg"
              className="glow-effect text-lg"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore My Work
            </Button>

            {/* Download CV Button */}
            <a href="/Shikha_resume.pdf" download className="group">
              <Button variant="outline" size="lg" className="glow-effect text-lg">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-foreground to-transparent opacity-20"></div>
          <div className="mt-8 text-muted-foreground">Scroll down to learn more</div>
        </motion.div>
      </div>
    </section>
  )
}
