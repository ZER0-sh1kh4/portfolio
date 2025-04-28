"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Briefcase, Lightbulb } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 mb-4" />,
      title: "CyberSecurity",
      description: "Proficient in networking concepts, operating systems, and cybersecurity tools like Burp Suite, Nmap, and Wireshark.",
    },
    {
      icon: <Briefcase className="h-8 w-8 mb-4" />,
      title: "Experience",
      description:
        "Completed multiple trainings and gained hands-on experience in cybersecurity, including Linux administration, operating system security, network protocols, and ethical hacking.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 mb-4" />,
      title: "Problem Solving",
      description: "Strong analytical skills with a passion for creating elegant solutions to complex problems.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/50 transition-colors duration-300">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg mb-6">
          I am a passionate cybersecurity student focused on network security, ethical hacking, and digital forensics.
I enjoy solving complex problems and staying ahead of evolving cyber threats.
My goal is to help build safer, stronger digital environments.
          </p>
          <p className="text-lg">
          I am a fresher currently studying in my 3rd year of college as a cybersecurity student. I am passionate about building hands-on experience with various tools, technologies, and frameworks to protect systems and data, and I am continuously learning to keep up with evolving cybersecurity threats and innovations.         </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full glow-effect">
                <CardContent className="pt-6 text-center">
                  {skill.icon}
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
