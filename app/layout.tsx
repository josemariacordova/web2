import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Movimiento RAF - República Federal de Antioquia",
  description: "Antioquia Libre, Soberana y Federal. Reivindicando nuestra historia, defendiendo nuestra identidad.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/gnu1xpt.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
