import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <Link href="#home" className="text-xl font-bold glow-text">
              PORTFOLIO
            </Link>
          </div>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>© {currentYear} Shikha. All rights reserved.</p>
            <p className="mt-1"></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
