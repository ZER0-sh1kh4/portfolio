"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "OWASP Juice shop pentesting",
      description:
        "Conducted penetration testing on the OWASP Juice Shop, successfully identifying 49 vulnerabilities, including XSS, SQL injection, and authentication flaws.Documented findings with PoC exploits and recommended security fixes, enhancing knowledge in web application security and ethical hacking.",
      image: "/owasp.png",
      tags: ["KALI LINUX", "BurpSuite", "FoxyProxy", "Nmap","Dirb"],
      demoLink: "#",
      githubLink: "https://docs.google.com/document/d/14xRkpksMCx1ZlnGGpJtRHebuWMfSrooOGifb2-xzGTM/edit?tab=t.0#heading=h.7dygja1cgvx7",
    },
    {
      title: "AI-Honeypot",
      description:
        "Developed a honeypot system using Cowrie to simulate vulnerable SSH environments, capturing attacker activities such as login attempts, command executions, and file manipulations.",
      image: "/honey.png",
      tags: ["KALI LINUX", "Cowrie Honeypot", "Putty", "Flask","HTML", "CSS", "Python", "JSON"],
      demoLink: "#",
      githubLink: "https://github.com/ZER0-sh1kh4/AI-HoneyPot",
    },
    {
      title: "Keylogger",
      description:
        "Focus on logging the keys pressed and saving themm to a file. Note: Ethical considerations and permissions are crucial for projects involving keyloggers.",
      image: "/keylogger.webp",
      tags: ["Python", "Cybersecurity", "Keylogging"],
      demoLink: "#",
      githubLink: "https://github.com/ZER0-sh1kh4/PRODIGY_CS_04",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full flex flex-col overflow-hidden glow-effect">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow pt-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="glow-effect" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="glow-effect" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
