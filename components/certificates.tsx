"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "Ethical Hacking Essentials ( EHE)",
      issuer: "Coursera",
      date: "28-Apr-2024",
      image: "/ec.jpg",
      link: "https://docs.google.com/document/d/1yuECEqXdZP9qziVsW32HgC0_D4GRlL1-520qaFwWCfM/edit?tab=t.0",
    },
    {
      title: "Cyber Incident Pesponse",
      issuer: "Coursera",
      date: "10-May-2024",
      image: "/incident.jpg",
      link: "https://docs.google.com/document/d/1oQW6bjvGMj9DpKqSqJp9kRlitvIJNV7M_6-Ov5zkhXs/edit?tab=t.0",
    },
    {
      title: "Symposium 2.0",
      issuer: "Lovely Professional University",
      date: "03-Apr-2024",
      image: "/competion event.jpg",
      link: "https://docs.google.com/document/d/1T3o5v1NmKxYv2G5l4QzGuM1L0wMAejM6WHyWy5udZKQ/edit?tab=t.0",
    },
    {
      title: "Cyber Security and Ethical Hacking",
      issuer: "Board Infinity",
      date: "14-July-2024",
      image: "/board.png",
      link: "https://docs.google.com/document/d/1dXvCoy4Le56wUAMbNjJQjxkRsVE0UEzGM74TTdkNW_M/edit?tab=t.0",
    },
  ]

  return (
    <section id="certificates" className="py-20 bg-secondary/50 transition-colors duration-300">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden h-full glow-effect group">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      width={350}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background rounded-full"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
