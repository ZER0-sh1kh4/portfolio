"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Cyber Security and Ethical Hacking Intern",
      company: "Edureka",
      period: "Aug 2024 - Feb 2025",
      description:
        "Conducted penetration testing on the OWASP Juice Shop, successfully identifying 49 vulnerabilities, including XSS, SQL injection, and authentication flaws.",
      skills: ["PenTesting", "Networking protocols", "Operating System security", "Linux system administration", "cybersecurity fundamentals"],
      certificateUrl: "/edureka certi.pdf",
    },
    {
      title: "Cyber Security & Digital Forensics Intern",
      company: "Cyber Secured India",
      period: "Sept 2024 - Nov 2024",
      description:
        "Tackled 10+ TryHackMe simulations to learn and apply cybersecurity fundamentals in real-world scenarios. Analyzed forensic case studies to understand the practical application of cyber forensics in security investigations.",
      skills: ["digital forensics", "cloud fundamentals", "privilege escalation", "Linux security tools"],
      certificateUrl: "/csi cefi.pdf",
    },
    {
      title: "Cyber Security Intern",
      company: "Prodigy Infotech",
      period: "Aug 2024",
      description:
        "Designed and implemented 4 cybersecurity tools, including the implementation of Caesar Cipher, pixel manipulation techniques, a password strength checker, and a simple keylogger.",
      skills: ["cryptography principles", "security tools development", "Caesar Cipher", "pixel manipulation", "keylogger"],
      certificateUrl: "/prodigy.pdf",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer">
                <Card className="glow-effect cursor-pointer hover:scale-[1.02] transition-transform">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle>{exp.title}</CardTitle>
                      <Badge variant="outline" className="md:ml-2 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
